import React from 'react';
import RegisterForm from '../components/RegisterForm';
import NavBar from '../components/NavBar';

// This page allows a user to register an admin account as required by 2.1.2
function Register () {
  return (
    <div>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <RegisterForm/>
      </main>
    </div>
  );
}

export default Register;
