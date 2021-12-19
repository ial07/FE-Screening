import { UserContext } from '../context'
import React, { useState, useContext, useEffect } from 'react'
import Forms from '../component/Forms'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const login = () => {
    const [email, setEmail] = useState('raymond@luwjistik.com')
    const [password, setPassword] = useState('e2e0334ec93288bc039a2c2f614cb16a')
    const [loading, setLoading] = useState(false)

    const [state, setState] = useContext(UserContext)

    const router = useRouter()

    useEffect(() => {
        if (state !== null) router.push('/')
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/login`, {
                email,
                password
            })
            //update session
            setState({
                email: data.email,
                session: data.session
            })
            // save in local storage
            window.localStorage.setItem('session', JSON.stringify(data.data))

            router.push('/')
        } catch (err) {
            toast.error(err.response.data.message)
            setLoading(false)
        }
    }



    return (
        <div className='container-fluid'>
            <div className='row py-5 bg-default-image text-light'>
                <div className='col text-center'>
                    <h1 className='text-light'>Login</h1>
                </div>
            </div>

            <div className='row py-5'>
                <div className='col-md-6 offset-md-3'>
                    <Forms
                        handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        loading={loading}
                    />
                </div>
            </div>


        </div>
    )
}

export default login
