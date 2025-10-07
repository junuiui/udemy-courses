import { Link } from "react-router-dom"

function HompePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">Page</Link>
      </p>
    </>
  )
}

export default HompePage