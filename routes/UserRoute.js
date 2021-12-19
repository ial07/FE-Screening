import { UserContext } from '../context'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { SyncOutlined } from '@ant-design/icons'
import axios from 'axios'


const UserRoute = ({ children }) => {
    const [state, setState] = useContext(UserContext)
    const [ok, setOk] = useState(false)
    const router = useRouter()

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async (e) => {
        e.preventDefault();
        try {
            axios.get(`${process.env.NEXT_PUBLIC_API}/order`, {
                headers: {
                    'Authorization': state.session
                }
            })
            if (data.ok) setOk(false)
        } catch (error) {
            router.push('/login')
        }
    }

    process.browser && state === null && setTimeout(() => {
        getUser()
    }, 1000);

    return !ok ? (<SyncOutlined spin className='d-flex justify-content-center display-1 text-primary p-5' />) : ({ children })
}

export default UserRoute