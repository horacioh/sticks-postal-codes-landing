import { useMutation } from "react-query"
import { useState, useRef } from "react"

const fetcher = (url) => fetch(url).then((res) => res.json())

export function PostalCodeForm() {
  const [query, setQuery] = useState(null)
  const [step, setStep] = useState(1)
  const [canQuery, setCanQuery] = useState(true)
  const form = useRef(null)
  const [
    mutate,
    { isIdle, isLoading, isSuccess, isError, data, error, reset },
  ] = useMutation(async (query) => {
    const res = await fetcher(`/api/postalcodes/${query}`)
    if (res.input) {
      setStep(2)
    }

    return res
  })

  async function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(form.current)
    mutate(formData.get("postalcode"))
  }

  return (
    <div className="text-center">
      {step === 1 ? (
        <>
          <form ref={form}>
            <div>
              <label className="block" htmlFor="postalcode">
                Comprueba Tu Codigo postal
              </label>
              <input
                className="block px-4 py-2 border rounded w-full text-center"
                id="postalcode"
                name="postalcode"
                type="text"
                placeholder="08012"
              />
            </div>
            <button
              disabled={isLoading || isError}
              className="block my-6 mx-auto px-8 py-4 bg-blue-700 text-white font-bold rounded w-48 disabled:opacity-50"
              onClick={onSubmit}
            >
              Comprobar
            </button>
          </form>
          {isLoading && <p>Comprobando</p>}
        </>
      ) : step === 2 ? (
        <div>
          {data ? (
            data.input ? (
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a
                  className="px-4 py-2 border border-blue-700 text-blue-700 rounded"
                  href="https://calendly.com/hi-sticks/15min"
                  target="_blank"
                >
                  Reserva para 2
                </a>
                <a
                  className="px-4 py-2 border border-blue-700 text-blue-700 rounded"
                  href="https://calendly.com/hi-sticks/15min"
                  target="_blank"
                >
                  Reserva para 3
                </a>
                <a
                  className="px-4 py-2 border border-blue-700 text-blue-700 rounded"
                  href="https://calendly.com/hi-sticks/15min"
                  target="_blank"
                >
                  Reserva para 4
                </a>
              </div>
            ) : (
              "no esta permitido :("
            )
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
