import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const SignUpForm = styled.form`
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

const ShortInput = styled.input`
  margin-top: 5px;
  width: 130px;
  font-size: 13px;
  height: 25px;
  font-family: 'poppins', sans-serif;
  background-color: #f0f0f0;
  color: #1b1b1b;
  border-radius: 5px;
  border: 1px #1b1b1b solid;
  padding: 3px;
`
const LongInput = styled.input`
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

const DpInput = styled.input`
  display: none;
`

const Label = styled.label`
  font-size: 11px;
  font-family: 'nunito', sans-serif;
`

const PhotoLabel = styled.label`
  font-size: 11px;
  font-family: 'nunito', sans-serif;
  text-align: center;
`

const ImageHolder = styled.div`
  margin-top: 10px; 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ProfilePictureButton = styled.label`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`

const PlusSign = styled.span`
  font-size: 32px;
`

const Button = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: none;
  transition: 0.3s ease;
  background-color: #ff6f00;

  &:hover {
    background-color: #944103;
  }
`

const initialUser = {
                      first_name: "",
                      middle_name: "",
                      surname: "",
                      username: "",
                      email: "",
                      password: "",
                      dob: "",
                      dp: null
                    }
const Signup = () => {

  const [profilePicture, setProfilePicture] = useState(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
  
    reader.onloadend = () => {
      setProfilePicture(reader.result)
    };

    if (file) {
      reader.readAsDataURL(file)
    }
  };

const [user, setUser] = useState(initialUser)

const handleChange = ({target}) => {
  const {name, value} = target
  setUser((currentUser) => ({
    ...currentUser,
    [name]: value,
  }) )
}

const devUrl = import.meta.env.VITE_DEV_URL
const prodUrl = import.meta.env.VITE_PROD_URL

  const handleSignUp = async (event) => {
    event.preventDefault()
    const url = `${devUrl}/api/auth/local/register`
    try {
      if (user.first_name && user.surname && user.username && user.email && user.password && user.dob) {

          const res = await axios.post(url, user)
          
          if (res) {
            setUser(initialUser)
            toast("A confirmation email has been sent! Confirm Email then Log In", {
              hideProgressBar: true,
            })
            return <p> Account succeefully created, Go back and <Link to="/userauth">Log In</Link></p>
          }


      }
    } catch (error) {
      toast(error.response.data.error.message, {
        hideProgressBar: true,
      }) 
      console.log(error) 
    }
  }
  return (
    <SignUpForm action="">

      <FieldContainer>
        <Label htmlFor="first_name">First Name</Label>
        <ShortInput 
          type='text' 
          name="first_name"
          placeholder="First Name" 
          required
          value={user.first_name}
          onChange={handleChange}
          />
      </FieldContainer>

      <FieldContainer>
        <Label htmlFor="middleName">Middle Name</Label>
        <ShortInput 
        type='text' 
        name="middle_name" 
        placeholder="Middle Name"
        value = {user.middle_name}
        onChange={handleChange}
        />
      </FieldContainer>

      <FieldContainer>
        <Label htmlFor="surname">Surname</Label>
        <ShortInput 
        type='text' 
        name="surname" 
        placeholder="surname" 
        required
        onChange={handleChange}
        value={user.surname}
        />
      </FieldContainer>

      <FieldContainer>
        <Label htmlFor="username">username</Label>
        <ShortInput 
        type='text' 
        name="username" 
        placeholder="username" 
        autoComplete="username" 
        required
        onChange={handleChange}
        value={user.username}
        />
      </FieldContainer>

      <FieldContainer>
        <Label htmlFor="email">email</Label>
        <LongInput 
        type='text' 
        name="email" 
        placeholder="email" 
        autoComplete="username" 
        required
        onChange={handleChange}
        value={user.email}
        />
      </FieldContainer>

      <FieldContainer>
        <Label htmlFor="password">password</Label>
        <LongInput 
        type='password' 
        name="password"
        placeholder="Password" 
        required
        onChange={handleChange}
        value={user.password}
        />
      </FieldContainer>
      <FieldContainer>
        <Label htmlFor="dob">Date Of Birth</Label>
        <LongInput 
        type='date' 
        name="dob" 
        placeholder="dob" 
        required
        onChange={handleChange}
        value={user.dob}
        />
      </FieldContainer>

      <FieldContainer style={{marginTop: '20px'}}>
        <Button type="button" onClick={handleSignUp}>Sign Up</Button>
      </FieldContainer>
      <ToastContainer/>
    </SignUpForm>
  )
 }
export default Signup