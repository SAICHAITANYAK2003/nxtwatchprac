import styled from 'styled-components'

export const LoginContainer = styled.div`
   display:flex;
   
  justify-content:center;
  align-items:center;
  height:100vh;
`

export const FormPage = styled.form`
  
  padding:30px;
  width:450px;
  border:none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius:10px;
  @media screen and (max-width:576px){
    width:400px;

  }
`

export const FormLogo = styled.img`
  height:40px;
   
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
 margin-bottom:30px;
   
`
export const UserInputContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding-bottom:20px;
`

export const LabelBadge = styled.label`
  font-family:'Roboto';
  font-weight:bold;
  color: #7e858e;
  padding-bottom:10px;
`
export const UserInput = styled.input`
  height:45px;
  border:1px solid  #e2e8f0;
  font-size:17px;
  
`
export const UserPassword = styled.input`
  height:45px;
  border:1px solid  #e2e8f0;
   font-size:17px;
 
`
export const ShowPasswordContainer = styled.div`
  padding-bottom:20px;
`
export const CheckBox = styled.input``
export const CheckboxLabel = styled.label`
  font-family:'Roboto';
  
`
export const SubmitButton = styled.button`
  height:40px;
  width:100%;
  background-color:#3b82f6;
  border:none;
  border-radius:10px;
  color:#fff;
  font-size:15px;
  font-weight:bold;
  cursor:pointer;
`
export const ErrorMessage=styled.p`
  font-family:'Roboto';
  font-size:20px;
  color:#ff0000;
`