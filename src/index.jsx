import React, { useState, useCallback, useRef, useLayoutEffect } from "react";
import { render } from "react-dom";

function App () {
  const [count, setCount] = useState(0)
  const button = useRef(null)

  const increment = useCallback(() => {
    setCount(c => c + 1)
  }, [])

  useLayoutEffect(() => {
   if (count % 2 === 0) {
   button.current.style.color = 'green'
   } else {
   button.current.style.color = 'red'
   }
  }, [count])

  return <>
  <button onClick={increment} ref={button}>Incrémenter : {count}</button>
  </>

}

render(
  <App />,
  document.getElementById('root')
)