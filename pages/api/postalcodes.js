import { data } from "autoprefixer"

export default async function handler(req, res) {
  const query = await fetch(
    "https://serve.onegraph.com/graphql?app_id=a40d4864-02f1-4b13-ad59-9c6763dc3c7b",
    {
      body:
        '{"doc_id": "0f21d948-a231-479e-865f-2899eae28dcf", "variables": {"id": "1JWIQP_ZG-Thc81vCRGLXncqVJ5EmmAnp24kkGWzCv58", "ranges": "a1:a300"} }',

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  const json = await query.json()
  const codes = json?.data?.google?.sheets?.sheet?.sheets[0]?.data[0]?.rowData

  const list = codes
    .filter((code) => code.values[0].formattedValue !== null)
    .map((code) => {
      return code.values[0].formattedValue
    })

  const isAvailable = list.filter((code) => code === req.body.input)
  console.log(
    "🚀 ~ file: postalcodes.js ~ line 27 ~ handler ~ isAvailable",
    isAvailable
  )

  res.status(200).json({ input: isAvailable.length ? isAvailable[0] : null })
}
