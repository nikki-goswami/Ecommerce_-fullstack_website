'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import axios from 'axios'

export default function EmailForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        'http://localhost:5000/userlogin/send-otp',
        { email }
      )
     // console.log(res)

    
    
        router.push("/userlogin/resetpassword")
     

    } catch (error) {
      console.log(error)
      alert(error.response?.data?.message || "Server error")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        
        <h2 className="text-2xl font-semibold text-center mb-6">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            Send Reset Link
          </button>

        </form>

      </div>
    </div>
  )
}