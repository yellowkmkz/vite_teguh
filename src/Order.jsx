import { useState } from "react"

const Order = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>INI HALAMAN ORDER</h1>
      <button
      onClick={() =>
        setCount(count+1)}
      >
        Count: {count}
      </button>
    </>
  )
}

export default Order