import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LRField, LRFieldBottom } from './LoginRegField';
import { LoginRegBackgroundStyle, TitleStyle, CentredTextDiv } from './LoginForm';
import FullButton from './FullButton';
import { navLinkStyle } from './AdminNavBar';

// This component is the register form that is used by the register page
const RegisterForm = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  // This function attempts to submit the user's registered
  // details to the backend
  const regFetch = async () => {
    console.log(email, name, password);
    const req = await fetch('http://localhost:5005/admin/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      })

    });
    if (req.ok) {
      const response = await req.json();
      localStorage.setItem('token', response.token);
      navigate('/home');
    }
  }
  return (
    <div id="register-form" style={LoginRegBackgroundStyle}>
      <h3 style={TitleStyle}>Admin Registration</h3>
      <form aria-label='Register form'>
        <LRField id="name" type="text" text="Name" onChange={e => setName(e.target.value)} aria='Name field'></LRField>
        <LRField id="email" type="text" text="Email" onChange={e => setEmail(e.target.value)} aria='Email field'></LRField>
        <LRFieldBottom id="password" type="password" text="Password" aria='Password field' onChange={e => setPassword(e.target.value)}></LRFieldBottom>
        <FullButton id='Submit' text="Submit" aria='Submit Button' onClick={regFetch}></FullButton>
        <CentredTextDiv>
          <p>Have an account already? <Link to="/login" style={navLinkStyle}>Log in</Link></p>
        </CentredTextDiv>
      </form>
    </div>
  );
}
export default RegisterForm;
