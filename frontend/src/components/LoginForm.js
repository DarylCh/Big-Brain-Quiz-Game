import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LRField, LRFieldBottom } from './LoginRegField.js';
import ErrorPopup from './ErrorPopup';
import styled from 'styled-components';
import FullButton from './FullButton.js';
import { navLinkStyle } from './AdminNavBar.js';

export const CentredTextDiv = styled.div`
  text-align: center;
  margin: 30px 0 10px 0;
`;

export const LoginRegBackgroundStyle = {
  backgroundColor: '#FF8E00',
  textAlign: 'left',
  lineHeight: '0px',
  width: '350px',
  margin: '50px auto',
  padding: '20px 20px 10px 20px',
  borderRadius: '8px',
}

export const TitleStyle = {
  textAlign: 'center',
  marginBottom: '30px',
}

// This component is the login form used by
// the login page
const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [popup, setPopup] = React.useState(false);
  const descTitle = 'Login Error!';
  const desc = 'Invalid login credentials.';
  const navigate = useNavigate();

  // This function activates the popup
  const activatePopup = () => {
    setPopup(!popup);
  }

  // This function attempts to log the user into the system
  // by calling the backend
  const logFetch = async () => {
    console.log(email, password);
    const req = await fetch('http://localhost:5005/admin/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    });
    if (req.ok) {
      const response = await req.json();
      localStorage.setItem('token', response.token);
      navigate('/home');
    } else {
      activatePopup();
    }
  }
  return (
    <div id="login-form" style={LoginRegBackgroundStyle}>
      {popup && <ErrorPopup title={descTitle} desc={desc} toggle={activatePopup} />}
      <h3 style={TitleStyle}>Account Login</h3>
      <form aria-label='login form'>
        <LRField id='email' text="Email" type="text" aria='email field' onChange={e => setEmail(e.target.value)}></LRField>
        <LRFieldBottom id='password' text="Password" aria='password field' type="password" onChange={e => setPassword(e.target.value)}></LRFieldBottom>
        <FullButton id='login-button' text="Log In" aria='login button' onClick={logFetch}></FullButton>
        <CentredTextDiv>
          <p>Don&apos;t have an account? <Link to="/register" style={navLinkStyle}>Sign Up</Link></p>
        </CentredTextDiv>
      </form>
    </div>
  )
}
export default LoginForm;
