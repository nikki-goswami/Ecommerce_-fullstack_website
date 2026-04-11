


// 'use client'

// import { axiosbaseURL, notify } from '@/helper/helper'
// import { useRouter } from 'next/navigation'
// import React, { useState } from 'react'

// export default function Auth() {
//   const router = useRouter()
//   const [isLogin, setIsLogin] = useState(true)

//   const cart= JSON.parse(localStorage.getItem("cart"))

//   const cartData = cart != null ? cart.data : null

//   // COMMON SUBMIT HANDLER
//   function authHandler(e) {
//     e.preventDefault()
//     if (isLogin) {
//       loginHandler(e)
//     } else {
//       registerHandler(e)
//     }
//   }

//   // 🔐 LOGIN HANDLER
//   async function loginHandler(e) {
//     const payload = {
//       email: e.target.email.value,
//       password: e.target.password.value
//     }

//     try {
//       const response = await axiosbaseURL.post("/userlogin/login", payload)
//       notify(response.data.message, response.data.success)

//       if (response.data.success) {
//         const cartResponse = await axiosbaseURL.post("/cart/sync", {
//           userId: response?.data?.deta?.userId,
//           Cart: cartData
//         })

//         const cartarry = cartResponse.data?.Cart || []

//         let original_total = 0
//         let final_total = 0

//         const dbData = cartarry.map((item) => {
//           const {
//             _id,
//             original_price,
//             final_price,
//             name,
//             thumbnail
//           } = item.productId

//           original_total += original_price * item.qty
//           final_total += final_price * item.qty

//           return {
//             id: _id,
//             name,
//             qty: item.qty,
//             final_price,
//             image: cartResponse.data.imagebaseUrl + thumbnail
//           }
//         })

//         localStorage.setItem(
//           "cart",
//           JSON.stringify({
//             original_total,
//             final_total,
//             data: dbData
//           })
//         )

//         router.push("/")
//       }
//     } catch (error) {
//       notify(error?.response?.data?.message, false)
//     }
//   }

//   // 📝 REGISTER HANDLER
//   async function registerHandler(e) {
//     const password = e.target.password.value
//     const confirmPassword = e.target.confirmPassword.value

//     if (password !== confirmPassword) {
//       notify("Password not matched", false)
//       return
//     }

//     const payload = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       password
//     }

//     try {
//       const response = await axiosbaseURL.post("/userlogin/register", payload)
//       notify(response.data.message, response.data.success)

//       if (response.data.success) {
//         setIsLogin(true) // register ke baad login dikhao
//       }
//     } catch (error) {
//       notify(error?.response?.data?.message, false)
//     }
//   }

//   return (
//     <div className="w-full">
//       <div className="max-w-7xl mx-auto p-4 bg-gray-50">
//         <div className="flex items-center justify-center bg-white p-6">
//           <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//             {/* LEFT IMAGE */}
//             <div className="flex justify-center">
//               <img src="/login.png" alt="auth" className="max-w-md w-full" />
//             </div>

//             {/* RIGHT FORM */}
//             <div className="w-full max-w-md mx-auto">
//               <h2 className="text-2xl font-semibold text-teal-600 text-center">
//                 {isLogin ? 'Welcome Back' : 'Register'}
//               </h2>

//               <p className="text-sm text-gray-400 text-center mt-1">
//                 {isLogin ? 'LOGIN TO CONTINUE' : 'JOIN TO US'}
//               </p>

//               <form onSubmit={authHandler} className="mt-8 space-y-5">

//                 {!isLogin && (
//                   <div>
//                     <label className="text-sm text-gray-600">Your Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       className="w-full mt-1 px-4 py-2 border rounded-md"
//                       required
//                     />
//                   </div>
//                 )}

//                 <div>
//                   <label className="text-sm text-gray-600">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="w-full mt-1 px-4 py-2 border rounded-md"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm text-gray-600">Password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     className="w-full mt-1 px-4 py-2 border rounded-md"
//                     required
//                   />
//                 </div>

//                 {!isLogin && (
//                   <div>
//                     <label className="text-sm text-gray-600">
//                       Confirm Password
//                     </label>
//                     <input
//                       type="password"
//                       name="confirmPassword"
//                       className="w-full mt-1 px-4 py-2 border rounded-md"
//                       required
//                     />
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   className="w-full bg-teal-600 text-white py-2 rounded-md"
//                 >
//                   {isLogin ? 'LOGIN' : 'REGISTER'}
//                 </button>

//                 <p className="text-center text-sm text-gray-500">
//                   {isLogin ? 'NEW USER?' : 'ALREADY USER?'}{' '}
//                   <span
//                     onClick={() => setIsLogin(!isLogin)}
//                     className="text-teal-600 cursor-pointer"
//                   >
//                     {isLogin ? 'Register' : 'Login'}
//                   </span>
//                 </p>

//               </form>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




'use client'

import { axiosbaseURL, notify } from '@/helper/helper'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Auth() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)

  // ✅ FIX: localStorage SSR safe
  let cart = null;
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    cart = storedCart ? JSON.parse(storedCart) : null;
  }

  const cartData = cart != null ? cart.data : null

  // COMMON SUBMIT HANDLER
  function authHandler(e) {
    e.preventDefault()
    if (isLogin) {
      loginHandler(e)
    } else {
      registerHandler(e)
    }
  }

  // 🔐 LOGIN HANDLER
  async function loginHandler(e) {
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    try {
      const response = await axiosbaseURL.post("/userlogin/login", payload)
      notify(response.data.message, response.data.success)

      if (response.data.success) {
        const cartResponse = await axiosbaseURL.post("/cart/sync", {
          // ✅ FIX: deta → data
          userId: response?.data?.data?.userId,
          Cart: cartData
        })

        const cartarry = cartResponse.data?.Cart || []

        let original_total = 0
        let final_total = 0

        const dbData = cartarry.map((item) => {
          const {
            _id,
            original_price,
            final_price,
            name,
            thumbnail
          } = item.productId

          original_total += original_price * item.qty
          final_total += final_price * item.qty

          return {
            id: _id,
            name,
            qty: item.qty,
            final_price,
            image: cartResponse.data.imagebaseUrl + thumbnail
          }
        })

        localStorage.setItem(
          "cart",
          JSON.stringify({
            original_total,
            final_total,
            data: dbData
          })
        )

        router.push("/")
      }
    } catch (error) {
      notify(error?.response?.data?.message, false)
    }
  }

  // 📝 REGISTER HANDLER
  async function registerHandler(e) {
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value

    if (password !== confirmPassword) {
      notify("Password not matched", false)
      return
    }

    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      password
    }

    try {
      const response = await axiosbaseURL.post("/userlogin/register", payload)
      notify(response.data.message, response.data.success)

      if (response.data.success) {
        setIsLogin(true)
      }
    } catch (error) {
      notify(error?.response?.data?.message, false)
    }
  }

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto p-4 bg-gray-50">
        <div className="flex items-center justify-center bg-white p-6">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="flex justify-center">
              <img src="/login.png" alt="auth" className="max-w-md w-full" />
            </div>

            <div className="w-full max-w-md mx-auto">
              <h2 className="text-2xl font-semibold text-teal-600 text-center">
                {isLogin ? 'Welcome Back' : 'Register'}
              </h2>

              <p className="text-sm text-gray-400 text-center mt-1">
                {isLogin ? 'LOGIN TO CONTINUE' : 'JOIN TO US'}
              </p>

              <form onSubmit={authHandler} className="mt-8 space-y-5">

                {!isLogin && (
                  <div>
                    <label className="text-sm text-gray-600">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full mt-1 px-4 py-2 border rounded-md"
                      required
                    />
                  </div>
                )}

                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full mt-1 px-4 py-2 border rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="w-full mt-1 px-4 py-2 border rounded-md"
                    required
                  />
                </div>
                {
                  isLogin &&(
<Link href={"/userlogin/forgetpassword"}>
<div className='flex justify-end items-center mb-2.5'>Forget Password</div>
</Link>
                  )
                }



                {!isLogin && (
                  <div>
                    <label className="text-sm text-gray-600">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="w-full mt-1 px-4 py-2 border rounded-md"
                      required
                    />
                  </div>
                )}

                

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-2 rounded-md"
                >
                  {isLogin ? 'LOGIN' : 'REGISTER'}
                </button>

                <p className="text-center text-sm text-gray-500">
                  {isLogin ? 'NEW USER?' : 'ALREADY USER?'}{' '}
                  <span
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-teal-600 cursor-pointer"
                  >
                    {isLogin ? 'Register' : 'Login'}
                  </span>
                </p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}