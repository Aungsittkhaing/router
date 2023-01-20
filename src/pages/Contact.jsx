import { useParams } from "react-router-dom"
import "./page.css"

const Contact = () => {
  const {name} = useParams();

  return (
    <div className="container">{name}</div>
  )
}

export default Contact