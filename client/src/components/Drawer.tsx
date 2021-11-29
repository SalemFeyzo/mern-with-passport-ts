import { Link, useLocation } from "react-router-dom"

type props = {
  open: boolean
  setOpen: any
}
const Drawer: React.FC<props> = ({ open, setOpen }) => {
  const location = useLocation()

  return (
    <div className={!open ? "hidden" : ""}>
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content ">
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className={location.pathname === "/login" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Drawer
