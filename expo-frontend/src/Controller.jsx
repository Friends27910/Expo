import { BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Login from "./Components/Login.jsx"
import Register from "./Components/Register.jsx"
function Controller(){
  return(
    <div>
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>

    </BrowserRouter>
    </div>
    )
}
export default Controller;