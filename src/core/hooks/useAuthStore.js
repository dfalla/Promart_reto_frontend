// import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux"
import { onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import Http from "../libs";


export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const startLogin = async ({username, password}) => {
        dispatch(onChecking())

        try {
            const { data } = await Http.post('/auth/login', {username, password});
            localStorage.setItem('token', data.token);
            dispatch(onLogin({ name: data.nombre, uid: data.uid, token: data.token }));

        } catch (error) {
            console.log(error.response.data);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.response.data.msg}`,
              })
            dispatch(onLogout('Email o password incorrectos'))
        }
    }


    const checkAuthToken = async() => {

        const token = localStorage.getItem('token');

        if(!token)  return dispatch(onLogout());

        try {
            const { data } = await Http.get('/auth/renew');

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
        
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    };

    const startLogout = () => {
        Swal.fire({
            title: `¿Desea cerrar sesión?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Salir',
            cancelButtonText: 'Cancelar',
          }).then(( result )=>{
            if(result.isConfirmed) {
                localStorage.clear();
                dispatch( onLogout() );
            }
          });
    }


    return {
        status,
        user,
        errorMessage,
    
        startLogin,
        checkAuthToken,
        startLogout
    }
}