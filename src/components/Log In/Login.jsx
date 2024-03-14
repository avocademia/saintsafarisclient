import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { storeUser } from "../../Helpers";

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

  const handleLogIn = async (event) => {
    event.preventDefault(); 
    const url = "http://localhost:1337/api/auth/local"
    try {

      if (user.identifier && user.password) {
          const res = await axios.post(url, user)

          const {data} = res

          if (data.jwt && data.user) {
            toast.success("logged In succesfully",{
              hideProgressBar: true,
            })
            setUser(initialUser)
            navigate("/")
            storeUser(data)
          }
      }
    } catch (error) {
      toast.error(error.message, {
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