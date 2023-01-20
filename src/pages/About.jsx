import { useRef } from "react";
import { useSearchParams } from "react-router-dom"
import "./page.css"

const About = () => {
  const [query, setQuery] = useSearchParams();
  const formRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();

    setQuery({name: formRef.current[0].value, age: formRef.current[1].value});
  }
  return (
    <div className="container">
      About
      <form ref={formRef}>
        <input type="text" name="name"/>
        <input type="number" name="age" />
        <button onClick={handleClick}>Click</button>
      </form>
    </div>
  )
}

export default About