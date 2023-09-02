import React, { useRef, useState } from "react"
import { motion } from "framer-motion";
import { app } from "../../firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import Logo from "../../img/logo.png";
import bgolg from "../../img/bagrondlog.png"
import book from "../../img/CookBook.png"
import { Alert } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useUserAuth } from "../../context/AuthContext"





const Loogin = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{ user }, dispatch] = useStateValue();
    const [success, setSuccess] = useState(false);
    const { emailLog } = useUserAuth()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [userDeifn, setuserDeifn] = useState(false);

      const handleSubmit = async (e) => {
        e.preventDefault();
    setError("");
   
      await emailLog(email, password);
      setSuccess(true);
      setuserDeifn(true)
      };

    const loogin = async () => {
        if (!user) {
          const {
            user: { refreshToken, providerData },
          } = await signInWithPopup(firebaseAuth, provider);
          dispatch({
            type: actionType.SET_USER,
            user: providerData[0],
          });
          localStorage.setItem("user", JSON.stringify(providerData[0]));
          setSuccess(true);
          setuserDeifn(true)
        } 
        
      };
  
return (
    
<section className=" " style={{
    backgroundImage: `url(${bgolg})`
}}>
    
    
    {success ? (
        <div className='w-screen h-[700px]'>    
        <form 
          className="text-center  p-6 bg-origin-content rounded-lg border border-gray-300  shadow-md mx-auto  bg-gray-40 absolute inset-y-[140px] right-40 w-full h-[620px] max-w-md">
        <img src={Logo}  className="relative left-[160px]   h-[80px] " alt="logo" />
        <h1 className="mt-10 select-none  text-3xl font-serif  text-gray-800 capitalize ">! تمت عملة تسجيل الدخول بنجاح</h1>
        <Link to={"/"}>
          <p
            className=" mt-10 static top-[65px]  font-medium  w-full px-6 py-3 text-lg  tracking-wide text-white capitalize transition-colors duration-300 transform  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200  shadow-lg shadow-red-500/50 rounded-lg text-center mr-2 mb-2    hover:bg-blodlog   bg-icobg  focus:ring-opacity-50">
           الإنتقال للصفحة الرئيسية
         </p>
        </Link>
        </form>
        <img 
        src={book}
        className='relative top-[300px] left-[880px] w-[400px] h-[400px]'  />
                </div>
            ) : (

    <div 
    className="text-center container flex items-center justify-center  min-h-[700px] px-6 mx-auto">

        <motion.form 
          initial={{ opacity: 0, x: 100 }}
          transition={{ ease: "easeOut", delay: 0 ,duration: 1.5}}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          onSubmit={handleSubmit}
          className="p-6 bg-origin-content rounded-lg border border-gray-300  shadow-md mx-auto  bg-gray-40 absolute inset-y-[140px] right-40 w-full h-[640px] max-w-md">
  
            <img src={Logo}  className="relative left-[160px]   h-[80px] " alt="logo" />

            <h1 className="select-none mt-4 text-3xl font-serif  text-gray-800 capitalize ">! مرحبا بعودتك</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <motion.glog
                 whileTap={{scale: 0.6}}
                onClick={loogin} 
                className=" bg-white flex items-center justify-center px-6 py-3 mt-10 text-gray-600 transition-colors duration-300 transform border rounded-lg  hover:bg-gray-50 hover:border-blodlog">
                    
                    <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                    </svg>
                    
                    <span className="select-none font-serif  mx-2"> تسجيل الدخول بحساب جوجل </span>
                    
                </motion.glog>

                <p className="select-none mt-10  text-center text-gray-500 "> أو قم بتسجيل الدخول باستخدام البريد الإلكتروني </p>

            <div className="relative flex items-center mt-8">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input required 
                ype="email"
                onChange={(e) => setEmail(e.target.value)}
                className="text-right block w-full py-3 text-gray-700 bg-white border rounded-md px-11  focus:border-blodlog focus:ring-blodlog focus:outline-none focus:ring focus:ring-opacity-40" placeholder="عنوان بريدك الإلكتروني" />
            </div>
            
            <div className="relative flex items-center mt-4">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input 
                required 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                className="text-right block w-full px-10 py-3 text-gray-700 bg-white border rounded-md  focus:ring-blodlog focus:outline-none focus:ring focus:ring-opacity-40" placeholder="كلمة مرور"/>
            
            </div>

            <Link  to ={"/Forpass"} className=" relative top-3 text-md text-right text-gray-500  hover:underline">هل نسيت كلمة المرور؟ </Link>

            <motion.button 
                disabled={loading}
                type='submit'
                whileTap={{scale: 0.6}}
                className="mt-7  font-medium  w-full px-6 py-3 text-lg  tracking-wide text-white  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200  shadow-lg shadow-red-500/50 rounded-lg text-center mr-2 mb-2  capitalize transition-colors duration-300 transform   hover:bg-blodlog   focus:ring-opacity-50">
                سجل الدخول
                </motion.button>
                    

             <div className="my-[-10px]">
                    <div className="flex items-center justify-center mt-6 text-center gap-2 ">
                    <Link to ={"/Sinup"} className="text-sm text-blue-500 hover:underline">   قم بإنشاء حساب  </Link>  
                        <p  className="select-none text-sm text-textColor ">ليس لديك حساب بعد ؟</p>
                    </div>
                 </div>
        </motion.form>
    </div>
            )}
</section>
)
}

export default Loogin