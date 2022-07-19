import React from 'react'
import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar';

// This page is the login page as required by 2.1.1
const Login = () => {
  return (
    <>
      <header>
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>
      <main>
        <LoginForm />
      </main>
    </>
  )
}

export default Login;
