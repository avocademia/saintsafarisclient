import { useState } from 'react'
import styled from 'styled-components'
import Signup from '../../components/Sign Up/Signup'
import signupjpg from '../../assets/signup.jpg'
import loginjpg from '../../assets/login.jpg'
import logo from '../../assets/logoWhite.png'
import Login from '../../components/Log In/Login'

const ThePage = styled.main`
  display: flex;
  justify-content: center;
`
const Container = styled.main`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  margin: 80px 0 0 0;

  @media (max-width: 768px) {
    flex-direction: column;   
  }
`
const Title = styled.h2`
  margin: 0 0 20px 0;
`
const MainPanel = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
const SignupPanel = styled.article`
  position: relative;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: #1b1b1b;

  @media (max-width: 1000px) {
    width: 100%;
  }
`
const LoginPanel = styled.article`
  position: absolute;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: #1b1b1b;

  @media (max-width: 1000px) {
    width: 100%;
  }
`
const TransformPanel = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  width: 400px;
  height: 600px;

  @media(max-width:768px) {
    height: 50px;
    z-index: 9;
    background-color: black;
  }
`
const Background = styled.img`
  position: relative;
  width: 400px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width:768px) {
    visibility: hidden;
  }
`
const Logo = styled.img`
position: relative;
  width: 110px;
  height: 80px;
  border-radius: 100%;
  position: absolute;
  margin: 0 0 300px 0;
  
  @media (max-width: 768px) {
    visibility: hidden;
    margin: 0;
  }
`
const LoginText = styled.h3`
  position: absolute;
  font-size: 20px;
  font-family: 'nunito', sans-serif;
  padding: 10px;
  opacity: ${props => props.visible ? "1" : "0"};
  transition: opacity 0.5s ease;
  background-color: rgba(27, 27, 27, 0.7);
  color: #f0f0f0;

  @media (max-width:768px) {
    visibility: hidden;
  }
`
const SignupText = styled.p`
  position: absolute;
  font-size: 12px;
  font-family: 'poppins', sans-serif;
  padding: 10px;
  opacity: ${props => props.visible ? "1" : "0"};
  transition: opacity 0.5s ease;
  line-height: 25px;
  color: #f0f0f0;

  @media(max-width:768px) {
    visibility: hidden;
  }
`
const FormContainer = styled.div`
  width: 100%;
  padding: 20px;
  height: 600px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${props => props.visible ? "1": "0"};
  transition: opacity 0.7s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Button = styled.button`
position: absolute;
  margin: 300px 0 0 0;
  padding: 10px 20px;
  background-color: rgba(27, 27, 27, 0.5);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    color: #1b1b1b;
  }

  @media (max-width: 768px) {margin: 0;}
`

const SignupSignin = () => {
    const [isSignUp, setIsSignUp] = useState(true)

    const handleToggleForm = () => {
      setIsSignUp(!isSignUp)
    }

    return (
      <ThePage>
        <Container >
          <MainPanel>
              <SignupPanel style={isSignUp ? {zIndex: '1'} : {zIndex: '0'}}>
                  <FormContainer visible={`${isSignUp}`}>
                      <Title style={{color: '#c95802'}}>Sign Up</Title>
                      <Signup/>
                  </FormContainer>
              </SignupPanel>
              <LoginPanel style={!isSignUp ? {zIndex: '1'} : {zIndex: '0'}}>
                  <FormContainer visible={`${!isSignUp}`}>
                      <h2 style={{color: '#233393'}}>Log In</h2>
                      <Login/>
                  </FormContainer>
              </LoginPanel>
          </MainPanel>     
          <TransformPanel>
              <Background src={isSignUp? loginjpg : signupjpg}></Background>
              <Logo src={logo}></Logo>
              <LoginText style={isSignUp ? {opacity: '1'} : {opacity: '0'}}>CONTINUE CURATING YOUR TRAVEL EXPERIENCE</LoginText> :
              <SignupText style={!isSignUp ? {opacity: '1'} : {opacity: '0'}}>
                    Unlock the world of personalized exploration. 
                    Craft the perfect travel experience for yourself by 
                    saving your favorite tour packages and dream 
                    destinations to your private bucket list. Explore 
                    featured destinations, engage with insightful blog 
                    posts, and connect with fellow travelers. Start 
                    your journey today and turn your travel dreams into 
                    reality. Let's embark on unforgettable adventures together!
              </SignupText>
              <Button onClick={handleToggleForm}>
                  {isSignUp ? "Log In" : "Create an account"}
              </Button>
            </TransformPanel>
        </Container>
      </ThePage>
      
    )
}

export default SignupSignin