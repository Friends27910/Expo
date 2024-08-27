import "../../Public/Login.css"
import {useState} from "react"
import ApiRequest from '../API/SendApiRequest.jsx'
import storeData from "../API/StroageApi.js"
function Register() {
 const [Data,setData] = useState({
   Name:"",
   Password:""
    })
 const [err,seterr] = useState({
   Name:{
     required:false
   },
   Password:{
     required:false
   },
   customError:null,
 })
  function Submit(e){
    e.preventDefault();
    ApiRequest(Data)
    .then(res => {
      console.log(res)
      storeData(res.data.token)
      
    })
    .catch((err)=>console.log(err))
    
  }
  const handleInput = (event) =>{
    setData({...Data,[event.target.name]:event.target.value})
    
  }
  return(
 <div>   
<div className="login-form">
  <form onSubmit={Submit}>
    <h1>Register</h1>
  {err.customError?(<p className="Danger">{err.customError}</p>):null}
    <div className="content">
      <div className="input-field">
        {err.Name.required?( <span id="errmsg1">Name is required.....!</span> ):null} <input name="Name"type="Name" placeholder="Name" autoComplete="nope" onChange={handleInput}/>
      </div>
      <div className="input-field">
     { err.Password.required?(<span className="errmsg2">Password is required.....!</span>):null }
        <input name="Password"type="password" placeholder="Password"  autoComplete="new-password" onChange={handleInput}/>
        
      </div>
    </div>
    <div className="action">
      <button>Login</button>
      <button type="submit">Signup</button>
    </div>
  </form>
</div>


    </div>
    
    )
}
export default Register;