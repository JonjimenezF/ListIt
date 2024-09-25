"use client"; 
import React from 'react';
import { useRouter } from 'next/navigation';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../Credenciales';

const Login = () => {
    const router = useRouter();
  
    const handleGoogleLogin = async () => {
      try {
        await signInWithPopup(auth, provider);
        router.push('/checklist'); // Redirige a la página de checklist después de iniciar sesión
      } catch (error) {
        console.error('Error durante el inicio de sesión:', error);
      }
    };
  
    return (
      <div>
        <h1>Iniciar sesiónn</h1>
        <button onClick={handleGoogleLogin}>Iniciar sesiónn con Google</button>
      </div>
    );
  };
  
  export default Login;