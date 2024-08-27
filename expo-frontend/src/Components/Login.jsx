import { useNavigate } from "react-router-dom"
import "../../Public/Login.css"
function Login() {
  const navigate = useNavigate()
  return(
 <div>   
<div className="login-form">
  <form>
    <h1>Login</h1>
    <div className="content">
      <div className="input-field">
        <input type="Name" placeholder="Name" autoComplete="nope"/>
      </div>
      <div className="input-field">
        <input type="password" placeholder="Password" autoComplete="new-password"/>
      </div>
      <a href="#" className="link">Forgot Your Password?</a>
    </div>
    <div className="action">
          <button onClick={()=>{
        navigate("/register")
      }}>Register</button>
      <button>Sign in</button>
    </div>
  </form>
</div>


    </div>
    
    )
}
export default Login ;