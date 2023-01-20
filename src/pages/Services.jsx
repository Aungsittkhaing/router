import { useNavigate, useLocation } from "react-router-dom"
import "./page.css"
const Services = () => {
  const nav = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleClick = () =>{
    nav(-1);
  }
  return (
    <div className="container">
      <div>
        <h1>Services</h1>
        <p>{location.state ? location.state.text : null}</p>
        <button onClick={handleClick}>Back</button>
      </div>
    </div>
  )
}

export default Services