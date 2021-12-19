import React from 'react'
import { SyncOutlined } from '@ant-design/icons'

const Forms = (
    {
        handleSubmit,
        password, setPassword,
        email, setEmail,
        loading
    }
) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group p-2'>
                <small><label className='text-muted'>Email</label></small>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' className='form-control' placeholder='Input Email' />
            </div>
            <div className='form-group p-2'>
                <small><label className='text-muted'>Password</label></small>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' className='form-control' placeholder='Input Password' />
            </div>

            <div className='from-group p-2'>
                <button disabled={!email || !password || loading}
                    className='btn btn-success col-12'
                >{loading ? <SyncOutlined spin className='py-1' /> : 'Login'}</button>
            </div>
        </form >
    )
}

export default Forms
