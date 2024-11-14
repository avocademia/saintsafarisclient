import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { storeToken, storeUser } from "../../Helpers"

const LogInForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 10px;
`
const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 10px;
`
const Label = styled.label`
  font-size: 11px;
  font-family: 'nunito', sans-serif;
`
const Input = styled.input`
  font-size: 14px;
  height: 25px;
  margin-top: 5px;
  width: 260px;
  background-color: #f0f0f0;
  color: #1b1b1b;
  border-radius: 5px;
  border: 1px #1b1b1b solid;
  padding: 3px;
`
const Button = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #00072d;
  transition: 0.3s ease;
  color: #f0f0f0;

  &:hover {
    background-color: #1b1b1b;
  }
`
const RememberMe = styled.a`
  cursor: pointer;
`

const initialUser = {identifier: "",password: "" }
const Login = () => {
  
  
  const [user, setUser] = useState(initialUser)
  const navigate = useNavigate()
  
  const handleChange = (event) => {
    const {name, value} = event.target
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }) )
  }

  const devUrl = import.meta.env.VITE_DEV_URL
  const prodUrl = import.meta.env.VITE_PROD_URL
  const environment = import.meta.env.NODE_ENV

  const handleLogIn = async (event) => {
    event.preventDefault(); 
    const url = `${environment === 'production'? prodUrl:devUrl}/api/auth/local`
    try {

      if (user.identifier && user.password) {
        
          const res = await axios.post(url, user, {withCredentials: true})
          const {data} = res
          if (data.jwt && data.user) {
            toast.success("logged In succesfully",{
              hideProgressBar: true,
            })
            setUser(initialUser)
            storeUser(data.user)
            storeToken(data.jwt)
            navigate("/")
          }
      }
    } catch (error) {
      console.log(error)
      toast("An error occured please try again later", {
        hideProgressBar: true,
      })
    }
  }
  return (
    <LogInForm method="POST">
        <FieldContainer>
            <Label htmlFor="email/username">username/email</Label>
            <Input 
              type="email" 
              name="identifier"
              id="email/username" 
              placeholder="email/username" 
              onChange={handleChange} 
              value={user.identifier}
            />
        </FieldContainer>
        <FieldContainer>
            <Label htmlFor="pswrd">password</Label>
            <Input
             id="pswrd"
             type="password" 
             name="password" 
             placeholder="password"
             onChange={handleChange}
             value={user.password}
             />
        </FieldContainer>
        <FieldContainer style={{marginTop: '20px'}}>
          <Button type="button" onClick={handleLogIn}>Log In</Button>
        </FieldContainer>
    </LogInForm>
  )
}


export default Login