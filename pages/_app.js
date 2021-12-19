import { UserProvider } from '../context';
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css'


function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            
          
            <ToastContainer
                position="top-center"
            />
            <Component {...pageProps} />
        </UserProvider>
    )
}

export default MyApp