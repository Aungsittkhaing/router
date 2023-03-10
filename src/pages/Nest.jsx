import {Outlet} from "react-router-dom"
import {Link} from "react-router-dom"

const Nest = () => {
  return (
    <div style={{display : "flex"}} className="container">
        <div>
            <ul>
                <li>
                    <Link to="/nest/one">One</Link>
                </li>
                <li>
                    <Link to="/nest/two">Two</Link>
                </li>
                <li>
                    <Link to="/nest/three">Three</Link>
                </li>
            </ul>
        </div>
        <div>
        <Outlet/>
        </div>
    </div>

  )
}

export default Nest