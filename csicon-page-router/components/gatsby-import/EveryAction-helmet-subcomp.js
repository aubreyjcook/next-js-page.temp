import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"

const EAHelmetSubcomp = ({ title, description }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadActionTagScript = () => {
      // Create a script element for ActionTag
      const script = document.createElement("script")
      script.src = "https://static.everyaction.com/ea-actiontag/at.js"
      script.async = true
      script.crossOrigin = "anonymous"

      // Append the script element to the document head
      document.head.appendChild(script)

      // Set loading state to false once script is loaded
      script.onload = () => {
        setIsLoading(false)
      }
    }

    // Wait for a delay of 2 seconds before loading the ActionTag script
    const delay = setTimeout(loadActionTagScript, 1500)

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(delay)
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="preload"
          href="https://static.everyaction.com/ea-actiontag/at.min.css"
          as="style"
        />
        <link
          rel="preload"
          href="https://nvlupin.blob.core.windows.net/designs/CustomStylesheet_7e07e727d6bcb12caab1b0a2d750f45854d023241d316e4730abd9d702bfcb48.css"
          as="style"
        />
      </Helmet>
      {isLoading && <div className="loader"></div>}
    </>
  )
}

export default EAHelmetSubcomp
