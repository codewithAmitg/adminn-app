import React from 'react'
import { Link } from 'react-router-dom'
import CustomInput from '../components/CustomInput'

const Resetpassword = () => {
  return (
    <div className='py-5' style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-38 bg-white rounded-3 mx-auto p-4">
        <h3 className='text-center'>Reset Password</h3>
        <p className='text-center'>Please Enter your your reset password.</p>
        <form action="">
          <CustomInput type="password" label ="New password" id="pass" />
          <CustomInput 
          type="password" 
          label ="Confirm Password" 
          id="confirmpass" />
          <Link
          className='border-0 px-3 py-2 text-white fw-bold w-100 '
          style={{ background:"#ffd333" }}
          >
            Send Link
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Resetpassword
