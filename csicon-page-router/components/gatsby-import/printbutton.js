import React from "react"

const PrintButton = () => {
  const handlePrint = () => {
    window.print() // Trigger the print dialog
  }

  return (
    <button className="print-button" onClick={handlePrint}>
      Print this page
    </button>
  )
}

export default PrintButton
