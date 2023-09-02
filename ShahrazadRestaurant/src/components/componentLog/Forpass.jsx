import React, { useRef, useState } from "react"
import { motion } from "framer-motion";
import Logo from "../../img/logo.png";
import bgolg from "../../img/bagrondlog.png"
import { Link } from "react-router-dom"
import { useUserAuth } from "../../context/AuthContext"
import {Alert } from "react-bootstrap"
import book from "../../img/CookBook.png"


const Forpass = () => {
  const [email, setEmail] = useState("");
  const { forgotPassword } = useUserAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault()
    try{
      await forgotPassword(email)
      setMessage("تحقق من بريدك الوارد للحصول على مزيد من التعليمات")
      setSuccess(true)
    } catch {
      setMessage("ألبريد الذي أدخلته غير مسجل")
    }
  }


  return (
    <section className=" " style={{
      backgroundImage: `url(${bgolg})`
  }}>
      {success ? ( 
           <div className='w-screen h-[700px]'>    
           <form 
             className="text-center  p-6 bg-origin-content rounded-lg border border-gray-300  shadow-md mx-auto  bg-gray-40 absolute inset-y-[140px] right-40 w-full h-[620px] max-w-md">
           <img src={Logo}  className="relative left-[160px]   h-[80px] " alt="logo" />
           <h1 className=" mt-10 select-none  text-3xl font-serif  text-gray-800 capitalize "> تم إرسال بريد  لإعادة ضبط كلمة المرور</h1>
           <Link to={"/Loogin"}>
             <p
               className=" bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200  shadow-lg shadow-red-500/50 rounded-lg text-center mr-2 mb-2  capitalize transition-colors duration-300 transform   hover:bg-blodlog   mt-10 static top-[65px]  font-medium  w-full px-6 py-3 text-lg  tracking-wide text-white   bg-icobg   focus:ring-opacity-50">
              الإنتقال للصفحة تسجيل الدخول
            </p>
           </Link>
           </form>
           <img 
           src={book}
           className='relative top-[300px] left-[880px] w-[400px] h-[400px]'  />
                   </div>



       ) : (
      <div className="text-center container flex items-center justify-center  min-h-[700px] px-6 mx-auto">
          <motion.form
            initial={{ opacity: 0, x: 100 }}
            transition={{ ease: "easeOut", delay: 0 ,duration: 1.5}}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}  
            onSubmit={handleSubmit}
          className="p-6 bg-origin-content rounded-lg border border-gray-300  shadow-md mx-auto  bg-gray-40 absolute inset-y-[140px] right-40 w-full h-[620px] max-w-md">
              
              <img src={Logo}  className="relative left-[160px]   h-[80px] " alt="logo" />
              <h1 className="select-none mt-4 text-3xl font-serif  text-gray-800 capitalize ">إنشاء حساب</h1>
              
              {message && <Alert className="text-2xl my-5 text-red-500" variant="success">{message}</Alert>}
                  <p className="select-none mt-10  text-center text-gray-500 ">  قم بإدخال البريد الإلكتروني لاسترداد كلمة المرور </p>
              
              <div className="relative flex items-center mt-8">
                  <span className="absolute">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                  </span>
                  <input 
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                   required
                  className="text-right block w-full py-3 text-gray-700 bg-white border rounded-md px-11  focus:border-blodlog focus:ring-blodlog focus:outline-none focus:ring focus:ring-opacity-40" placeholder="عنوان بريدك الإلكتروني" />
              </div>
              
      
              <motion.button 
               disabled={loading}
              type="submit"
              whileTap={{scale: 0.6}}
              className=" text-white  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200  shadow-lg shadow-red-500/50 rounded-lg text-center mr-2 mb-2  capitalize transition-colors duration-300 transform   hover:bg-blodlog   focus:ring-opacity-50 mt-7  font-medium  w-full px-6 py-3 text-lg  tracking-wide   bg-icobg ">
                 استرداد كلمة المرور
                  </motion.button>
                
                  <div className="mt-6">
                  <div className="flex items-center justify-center mt-6 text-center gap-2 ">
                  <Link to ={"/Loogin"} className="text-sm text-blue-500 hover:underline">   سجل الدخول</Link>  
                      <p  className="select-none text-sm text-textColor ">هل لديك حساب بالفعل ؟</p>
                  </div>
               </div>
          </motion.form>
      </div>
      )}
  </section>
  )
}

export default Forpass
