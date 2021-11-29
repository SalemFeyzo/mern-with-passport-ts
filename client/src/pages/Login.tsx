import Google from "../assets/google.svg"
import Twitter from "../assets/twitter.svg"
import Github from "../assets/github.svg"

const Login = () => {
  return (
    <div className="card bordered max-w-screen-sm mr-auto ml-auto">
      <div className="card-body">
        <h2 className="card-title mr-auto ml-auto">Login or Register</h2>
        <div className="justify-end card-actions">
          <button className="btn btn-secondary w-full ">
            <img className="w-10 h-10 mr-2" src={Google} alt="google" />
            <span>with Google</span>
          </button>
          <button className="btn btn-secondary w-full">
            <img className="w-10 h-10 mr-2" src={Twitter} alt="twitter" />
            <span>with Twitter</span>
          </button>
          <button className="btn btn-secondary w-full">
            <img className="w-10 h-10 mr-2" src={Github} alt="github" />
            <span>with Github</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
