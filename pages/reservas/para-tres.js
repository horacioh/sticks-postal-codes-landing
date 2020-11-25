import Head from "next/head"
import { useEffect, useRef } from "react"
import { Layout } from "../../components/layout"
import { Section } from "../../components/section"

export default function Page() {
  const widget = useRef(null)
  useEffect(() => {
    Calendly?.initInlineWidget({
      url: "https://calendly.com/hi-sticks/para-dos",
      parentElement: widget.current,
      prefill: {},
      utm: {},
    })
  }, [])
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
        ref={widget}
      />
    </>
  )
}
