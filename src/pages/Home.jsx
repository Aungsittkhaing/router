import { useRef } from "react";
import { useNavigate } from "react-router-dom"
import "./page.css"
const Home = () => {
  const nav = useNavigate();
  const inputRef = useRef();
  const handleClick = () => {
    nav("./Services", {state: {text: inputRef.current.value}});
  }
  return (
    <div className="container">
      <div>
      <h1>Home</h1>
      <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Click</button>
      </div>
    </div>
  )
}

export default Home