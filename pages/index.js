import { UserContext } from '../context'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Hero from '../component/Hero'
import Home from './partials/Home'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar';
import { useRouter } from 'next/router'
import UserRoute from '../routes/UserRoute'


const index = () => {
    const [state, setState] = useContext(UserContext)

    const [order, setOrder] = useState({
        order_id: '',
        user_id: '',
        consignee_name: "",
        consignee_number: "",
        consignee_address: "",
        consignee_postal: "",
        consignee_country: "",
        consignee_city: "",
        consignee_state: "",
        consignee_province: "",
        consignee_email: "",
        length: '',
        width: '',
        height: '',
        weight: '',
        payment_type: "",
        pickup_contact_name: "",
        pickup_contact_number: "",
        pickup_address: "",
        pickup_postal: "",
        pickup_country: "",
        pickup_city: "",
        pickup_state: "",
        pickup_province: ""

    })

    const router = useRouter()

    useEffect(() => {
        if (state !== null) {
            const header = {
                headers: {
                    Authorization: state.session
                }
            }

            axios.get(`${process.env.NEXT_PUBLIC_API}/order`, header)
                .then(res => {
                    // console.log(res.data)
                    setOrder(res.data)
                }).catch(err => console.log(err))
        }
    }, [state && state.session])

    // const getOrder = async () => {
    //     const { data } = axios.get(`${process.env.NEXT_PUBLIC_API}/order`, header)
    //         .then(res => {
    //             // console.log(res.data)
    //             setOrder(res.data)
    //         }).catch(err => console.log(err))
    // }

    if (state === null) { router.push('/login') }

    return (
        <>
            <Navbar />
            <Hero />
            <Home
                order={order.data}
            />

            <Footer />
        </>
    )
}

export default index
