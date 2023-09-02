import React, { useRef, useState } from "react"
import { motion } from "framer-motion";
import Logo from "../../img/logo.png";
import bgolg from "../../img/bagrondlog.png"
import { Link , useNavigate } from "react-router-dom"
import { Alert } from "react-bootstrap"
import { useUserAuth } from "../../context/AuthContext"
import ReCAPTCHA from "react-google-recaptcha";
import book from "../../img/CookBook.png"

const Sinup = () => {
    const [loading, setLoading] = useState(false);
    const [verfied, setVerifed] =useState (false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [PasswordConf, setPasswordConf] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    let navigate = useNavigate();
    const [success, setSuccess] = useState( );
  
      
      function onChange(value) {
        console.log("Captcha value:", value);
        setVerifed(true);
      }

      const handleSubmit = async (e) => {
        e.preventDefault();

        if (PasswordConf !== password)  {
            return setError("كلمات المرور لا تتطابق")
          }

        setError("");
          await signUp(email, password);
          setSuccess(true)
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
            <h1 className="mt-10 select-none  text-3xl font-serif  text-gray-800 capitalize ">! تمت عملة إنشاء حساب بنجاح</h1>
            <Link to={"/Loogin"}>
              <p
                className="text-white  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200  shadow-lg shadow-red-500/50 rounded-lg text-center mr-2 mb-2  capitalize transition-colors duration-300 transform   hover:bg-blodlog   focus:ring-opacity-50  mt-10 static top-[65px]  font-medium  w-full px-6 py-3 text-lg  tracking-wide ">
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

            className="my-[-20px] p-6 bg-origin-content rounded-lg border border-gray-300  shadow-md mx-auto  bg-gray-40 absolute inset-y-[140px] right-40 w-full h-[640px] max-w-md">
                
                <img src={Logo}  className="relative my-[-20px] left-[160px]   h-[80px] " alt="logo" />
                <h1 className="select-none mt-4 text-3xl font-serif  text-gray-800 capitalize ">إنشاء حساب</h1>
                {error && <Alert className="text-lg my-3 text-red-500" variant="danger">{error}</Alert>}
                    <p className="select-none mt-5  text-center text-gray-500 ">  قم بإنشاء حساب باستخدام البريد الإلكتروني و كلمة المرور </p>
                
                <div className="relative flex items-center mt-8">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                    <input required type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    className="text-right block w-full py-3 text-gray-700 bg-white border rounded-md px-11  focus:border-blodlog focus:ring-blodlog focus:outline-none focus:ring focus:ring-opacity-40" placeholder="عنوان بريدك الإلكتروني" />
                </div>
                
                <div className="relative flex items-center mt-4">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>
                    <input required
                     type="password" 
                     onChange={(e) => setPassword(e.target.value)}
                    className="text-right block w-full px-10 py-3 text-gray-700 bg-white border rounded-md  focus:ring-blodlog focus:outline-none focus:ring focus:ring-opacity-40" placeholder="كلمة مرور"/>
                </div>

                <div className="relative flex items-center mt-4">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>    
                    <input required type="password"
                      onChange={(e) => setPasswordConf(e.target.value)}
                     className="text-right block w-full px-10 py-3 text-gray-700 bg-white border rounded-md  focus:ring-blodlog focus:outline-none focus:ring focus:ring-opacity-40" placeholder="تأكيد كلمة المرور"/>
                </div>

                <ReCAPTCHA
                    className="my-4 "
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                    />
                    
                <motion.button 
                type="submit"
                variant="primary"
                disabled={!verfied}                
                whileTap={{scale: 0.6}}
                className="mt-0  font-medium  w-full px-6 py-3 text-lg  tracking-wide text-white  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200  shadow-lg shadow-red-500/50 rounded-lg text-center mr-2 mb-2  capitalize transition-colors duration-300 transform   hover:bg-blodlog   focus:ring-opacity-50">
                   إنشاء حساب
                    </motion.button>

                    <div className="mt-6 ">
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

export default Sinup
