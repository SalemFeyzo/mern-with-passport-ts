import { useState } from "react"
import Drawer from "./Drawer"

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setOpen(!open)}
          >
            <HamIcon />
          </button>
        </div>
        <div className="flex-1 px-2 mx-2">
          <span className="text-3xl font-bold text-primary">Social</span>
          <span className="text-lg font-bold mt-2">Network</span>
        </div>
      </div>
      <Drawer open={open} setOpen={setOpen} />
    </>
  )
}

export default Navbar

export const HamIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="inline-block w-6 h-6 stroke-current"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  )
}
