import axios from "axios"
const ApiRequest =  async(Data) =>{
  const Data1 = {
    name:Data.Name,
    password:Data.Password
  }
  const url = "http://localhost:2009/Api/Register"
  return (axios.post(url,Data1))
}
export default ApiRequest;