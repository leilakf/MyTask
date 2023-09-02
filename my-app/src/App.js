import './App.css';
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { AdminLayout } from './layouts/admin-layout/AdminLayout';
import "./index.css"










function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">

       <AdminLayout />

    </div>
  );
}

export default App;
