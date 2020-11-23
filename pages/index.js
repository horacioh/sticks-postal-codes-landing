import Head from 'next/head'
import { Layout } from '../components/layout'
import { Section } from '../components/section'

export default function Home() {
  return (
    <Layout>
      <Section>
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Sticks LOGO          
        </h1>
      </Section>
      <Section>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GlrxcuEDyF8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <button>Reserva ya</button>
      </Section>

      <Section>
        <p>Algo de contenido de texto para que la gente entienda de que va esto</p>
      </Section>
      <Section><button>RESERVA YA</button></Section>
      <Section>
        <form>
        <label htmlFor="postalCodeInput">Introduce tu Código Postal</label>
          <input type="text" id="postalCodeInput" placeholder />
          <button type="submit">Comprobar</button>
        </form>
      </Section>
    </Layout>
  );
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
