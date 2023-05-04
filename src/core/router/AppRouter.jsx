import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore';
import { Login, Home, Car } from '../../pages';
import { Layout } from '../layout';

export const AppRouter = () => {
    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
      }, []);
    
      if(status === 'checking'){
        return(
          <h1>Verificando la información</h1>
        )
      }
  return (
    <Routes>

        {
            (status === 'not-authenticated')

            ? 
                (
                    <>
                        <Route path="/login" element={ <Login/> }/>
                        <Route path="/*" element={<Navigate to="/login"/>}/>
                    </>
                )
            : 
                (
                    <>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="/carrito" element={<Car/>}/>
                        </Route>

                        <Route path="/*" element={<Navigate to="/"/>}/>
                    </>
                )
        }


    </Routes>
  )
}
