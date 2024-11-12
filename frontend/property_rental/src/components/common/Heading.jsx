import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className="heading">
        <h1 className="font-bold text-black text-center text-2xl">{title}</h1>
        <p className="font-normal text-black text-center text-sm">{subtitle}</p>
      </div>
    </>
  )
}

export default Heading