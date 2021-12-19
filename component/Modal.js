import axios from 'axios';
import { useState, useContext } from 'react'
import { UserContext } from '../context'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify'

const Modal = () => {
    const [state, setState] = useContext(UserContext)
    const router = useRouter()

    const [order, setOrder] = useState({

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

    const postSubmit = (e) => {
        e.preventDefault();

        const header = {
            headers: {
                Authorization: state.session
            }
        }
        const { data } = axios.post(`${process.env.NEXT_PUBLIC_API}/order`, order, header)
            .then((res) => {
                console.log(res)
                window.location.reload()
            })
            .catch((err) => toast.error(err.response.data.message))
        // console.log('Post =>', order)


        // toast.error(err.response.data)

    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create Order</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <form onSubmit={postSubmit}>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Consignee Name" value={order.consignee_name} onChange={(e) => setOrder({ ...order, consignee_name: e.target.value })} />
                                <label htmlFor="floatingInput">Consignee Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" placeholder="Consignee Number" value={order.consignee_number} onChange={(e) => setOrder({ ...order, consignee_number: e.target.value })} />
                                <label htmlFor="floatingInput">Consignee Number</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Consignee Address" value={order.consignee_address} onChange={(e) => setOrder({ ...order, consignee_address: e.target.value })} />
                                <label htmlFor="floatingInput">Consignee Address</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" placeholder="Consignee Postal" value={order.consignee_postal} onChange={(e) => setOrder({ ...order, consignee_postal: e.target.value })} />
                                <label htmlFor="floatingInput">Consignee Postal</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Consignee Country" value={order.consignee_country} onChange={(e) => setOrder({ ...order, consignee_country: e.target.value })} />
                                <label htmlFor="floatingInput">Consignee Country</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Consignee City" value={order.consignee_city} onChange={(e) => setOrder({ ...order, consignee_city: e.target.value })} />
                                <label htmlFor="floatingInput">Consignee City</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Consignee State" value={order.consignee_state} onChange={(e) => setOrder({ ...order, consignee_state: e.target.value })} />
                                <label htmlFor="floatingInput">Consignee State</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Consignee Province" value={order.consignee_province} onChange={(e) => setOrder({ ...order, consignee_province: e.target.value })} />
                                <label htmlFor="floatingInput">Consignee Province</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" placeholder="Consignee Email" value={order.consignee_email} onChange={(e) => setOrder({ ...order, consignee_email: e.target.value })} />
                                <label htmlFor="floatingInput">Consignee Email</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" placeholder="Length" value={order.length} onChange={(e) => setOrder({ ...order, length: e.target.value })} />
                                <label htmlFor="floatingInput">Length</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" placeholder="Width" value={order.width} onChange={(e) => setOrder({ ...order, width: e.target.value })} />
                                <label htmlFor="floatingInput">Width</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" placeholder="Height" value={order.height} onChange={(e) => setOrder({ ...order, height: e.target.value })} />
                                <label htmlFor="floatingInput">Height</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" placeholder="Wight" value={order.weight} onChange={(e) => setOrder({ ...order, weight: e.target.value })} />
                                <label htmlFor="floatingInput">Weight</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Payment Type" value={order.payment_type} onChange={(e) => setOrder({ ...order, payment_type: e.target.value })} />
                                <label htmlFor="floatingInput">Payment Type</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Pickup Contact Name" value={order.pickup_contact_name} onChange={(e) => setOrder({ ...order, pickup_contact_name: e.target.value })} />
                                <label htmlFor="floatingInput">Pickup Contact Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" placeholder="Pickup Contact Number" value={order.pickup_contact_number} onChange={(e) => setOrder({ ...order, pickup_contact_number: e.target.value })} />
                                <label htmlFor="floatingInput">Pickup Contact Number</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Pickup Address" value={order.pickup_address} onChange={(e) => setOrder({ ...order, pickup_address: e.target.value })} />
                                <label htmlFor="floatingInput">Pickup Address</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" placeholder="Pickup Postal" value={order.pickup_postal} onChange={(e) => setOrder({ ...order, pickup_postal: e.target.value })} />
                                <label htmlFor="floatingInput">Pickup Postal</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Pickup Country" value={order.pickup_country} onChange={(e) => setOrder({ ...order, pickup_country: e.target.value })} />
                                <label htmlFor="floatingInput">Pickup Country</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Pickup City" value={order.pickup_city} onChange={(e) => setOrder({ ...order, pickup_city: e.target.value })} />
                                <label htmlFor="floatingInput">Pickup City</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Pickup State" value={order.pickup_state} onChange={(e) => setOrder({ ...order, pickup_state: e.target.value })} />
                                <label htmlFor="floatingInput">Pickup State</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Pickup Province" value={order.pickup_province} onChange={(e) => setOrder({ ...order, pickup_province: e.target.value })} />
                                <label htmlFor="floatingInput">Pickup Province</label>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Sumbit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
