"use client"; 
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../Credenciales'; // Ajusta la ruta según tu estructura

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Si el usuario está autenticado, redirige a la página de checklist
        router.push('/checklist');
      } else {
        // Si no hay usuario autenticado, redirige a la página de login
        router.push('/login');
      }
    });

    return () => unsubscribe(); // Limpia el suscriptor
  }, [router]);

  return (
    <div>
      <h1>Bienvenido a ListIt</h1>
      <p>Por favor inicia sesión para continuar.</p>
    </div>
  );
};

export default HomePage;
