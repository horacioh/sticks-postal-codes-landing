import { useEffect, useState, useRef } from "react"
import { Layout } from "../components/layout"
import { Section } from "../components/section"
import { useQuery } from "react-query"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const [query, setQuery] = useState(null)
  const [canQuery, setCanQuery] = useState(true)
  const form = useRef(null)
  const { data, isSuccess, isFetching } = useQuery(
    ["PostalCode", query],
    async (key, query) => {
      const res = await fetcher(`/api/postalcodes/${query}`)
      console.log("🚀 ~ file: index.js ~ line 14 ~ res", res)
      return res
    },
    {
      enabled: canQuery && query,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )

  async function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(form.current)
    setQuery(formData.get("postalcode"))
    if (isSuccess) {
      setQuery(null)
    }
  }
  return (
    <Layout>
      <Section>
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Sticks LOGO
        </h1>
      </Section>
      <Section>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/GlrxcuEDyF8"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="p-8 text-center">
          <form ref={form}>
            <div>
              <label className="block" htmlFor="postalcode">
                Tu Codigo postal
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
              className="block my-6 mx-auto px-8 py-4 bg-blue-700 text-white font-bold rounded w-48"
              onClick={onSubmit}
            >
              {isFetching ? "..." : "Reserva ya"}
            </button>
            {data
              ? data.input
                ? "si esta permitido!"
                : "no esta permitido :("
              : null}
          </form>
        </div>
      </Section>

      <Section>
        <p>
          Algo de contenido de texto para que la gente entienda de que va esto
        </p>
      </Section>
      <Section>
        <button
          className="block my-6 mx-auto px-8 py-4 bg-blue-700 text-white font-bold rounded w-48"
          onClick={onSubmit}
        >
          {isFetching ? "..." : "Reserva ya"}
        </button>
      </Section>
      <Section>
        <form>
          <label htmlFor="postalCodeInput">Introduce tu Código Postal</label>
          <input type="text" id="postalCodeInput" placeholder="08001" />
          <button type="submit">Comprobar</button>
        </form>
      </Section>
    </Layout>
  )
}

/**
 * fetch("https://serve.onegraph.com/graphql?app_id=a40d4864-02f1-4b13-ad59-9c6763dc3c7b", {
  body: "{\"doc_id\": \"0f21d948-a231-479e-865f-2899eae28dcf\", \"variables\": {\"id\": \"1JWIQP_ZG-Thc81vCRGLXncqVJ5EmmAnp24kkGWzCv58\", \"ranges\": \"a1:a300\"} }",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
})
 */
