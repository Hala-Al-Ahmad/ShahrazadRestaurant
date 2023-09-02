import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout,MdLogin,MdOutlineRestaurantMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import {AiFillMessage } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdFoodBank } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { FaGrinStars } from "react-icons/fa";
import Logo from "../img/logo.png";
import { FiMenu } from "react-icons/fi";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { MdTranslate } from "react-icons/md";
import { RiUserSettingsFill, RiDeleteBin5Fill } from "react-icons/ri";
import { useUserAuth } from '../context/AuthContext'
import userDeifn from './componentLog/Loogin'




const Header = () => {
  const firebaseAuth = getAuth(app);

  const provider = new GoogleAuthProvider();
  
  const [userDeifn, setuserDeifn] = useState(true);
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const { logOut } = useUserAuth();
  const [isMenu, setIsMenu] = useState(false);
  const [adMenu, setAdMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const fsMenu = () => {
    if(isMenu)
    setIsMenu(false)
    else
    setIsMenu(true)
  }


  

  const AedMenu = () => {
    if(adMenu)
    setAdMenu(false)
    else
    setAdMenu(true)
  }


  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    logOut();
    setuserDeifn(false)
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    }); 
  };

  const translat = () => {

    
  }

  const handleLogout = async () => {
      await logOut();

    }

  const scrollToTop = () =>{
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
  };

  return (
    <header className="select-none font-['DecoType_Naskh_Variants'] fixed z-50 w-screen p-3 px-2 md:p-4  md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">

        <motion.logodv 
         whileTap={{scale: 0.6}} 
         initial={{ opacity: 0, x: -50 }}
         transition={{ ease: "easeOut", duration: 1}}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 10 }}
        className=""
        >
        <Link to={"/"} className="flex items-center gap-2">
          <img 
          src={Logo} className=" h-[60px] object-cover" alt="logo"/>
          <p className="font-['DecoType_Naskh_Variants']  text-textColor text-3xl  italic ">مطعم شهرزاد</p>
        </Link>
        </motion.logodv>

        <motion.div 
           initial={{ opacity: 0, y: -40 }}
           transition={{ ease: "easeOut", duration: 1}}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: 10 }}
        
        className="flex items-center gap-8 ">
         

        {userDeifn &&
           <motion.div
           whileTap={{scale: 0.6}}
           className="relative flex items-center justify-center text-textColor text-2xl  cursor-pointer gap-1"
          onClick={logout}
          > تسجيل الخروج 
             <MdLogout />
          </motion.div>
          }




          <motion.dev 
          whileTap={{scale: 0.6}}
          className="relative flex items-center justify-center text-textColor text-2xl  cursor-pointer gap-1">
            <Link to ={"/Evaluation"}>
            <p> تقيم الطلب</p>
            </Link>
            <FaGrinStars/>
          </motion.dev>

       

          <motion.dev 
          whileTap={{scale: 0.6}}
          className="relative flex items-center justify-center text-textColor text-2xl  cursor-pointer gap-1">
            <Link to ={"/Suggestion"}>
            <p> أقتراح وجبة </p>
            </Link>
            <MdOutlineRestaurantMenu className="w-8 h-8" />
          </motion.dev>

          <Link to ={"/Menu"}>
          <motion.dev 
          whileTap={{scale: 0.6}}
          className="relative flex items-center justify-center text-textColor text-2xl  cursor-pointer gap-1">
            <p className=" flex">قائمة الطعام</p>
            <BiFoodMenu className="w-7 h-7"/>
          </motion.dev>
          </Link>

          <Link to={"/"}>
           <motion.div
           whileTap={{scale: 0.6}}
          className="relative flex items-center justify-center text-textColor text-2xl  cursor-pointer gap-1">
          <p>الرئيسية</p>
          <MdFoodBank className="w-8 h-8" />
          </motion.div>
          </Link>
          
          <motion.div
          whileTap={{scale: 0.6}}
            className="relative flex items-center justify-center  text-textColor text-2xl  cursor-pointer gap-1"
            onClick={showCart}>
            <p >سلة</p>
            <MdShoppingBasket className="w-8 h-8" />
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-mono">{cartItems.length}</p>
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cartNumBg opacity-75"></span>
              </div>
            )}
          </motion.div>

          
          { !user && 
          <Link to ={"/Loogin"}>
           <motion.div
           whileTap={{scale: 0.6}}
          className="relative flex items-center justify-center text-textColor text-2xl  cursor-pointer gap-2"
          onClick={()=>setuserDeifn(true)}
          >
          <p>تسجيل الدخول</p>
          <MdLogin className="w-8 h-8"
          />
          </motion.div>
          </Link>
           }
    

{user && user.email === "scheherazade371@gmail.com" && (

          <p
          onClick={AedMenu}
          whileTap={{scale: 0.6}}
          className="relative flex items-center justify-center text-textColor text-2xl  cursor-pointer "
          >
            إدارة<RiUserSettingsFill />
          </p>

                    )}
        </motion.div>

        
            <img
              src={user ? user.photoURL : Avatar}
              alt="صورة المستخدم"
              className="w-11 min-w-[40px] h-11 min-h-[40px] drop-shadow-xl rounded-full"
              />
             

      </div>

      {adMenu && (
            <motion.div
            initial={{ opacity: 0, x: 20 }}
           transition={{ ease: "easeOut", delay: 0 ,duration: 1}}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: 10 }}
              className=" w-25 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-[68px] right-[230px]"
              >
                <Link to = {"/CreateItem"}>
            
            <motion.div
           className="m-2 p-2  rounded-md flex items-center shadow-md justify-center gap-2 
            bg-gray-200  cursor-pointer
           hover:bg-gray-300 transition-all duration-100 ease-in-out
           text-textColor 
           text-xl">
            <p
            onClick={AedMenu}
          whileTap={{scale: 0.6}}
          className="relative flex items-center justify-center text-textColor text-2xl  cursor-pointer "
          >
             عنصر جديد <MdAdd />
          </p>
           </motion.div>
           </Link>

{/*
           <Link to = {"/DeletItem"}>
            
            <motion.div
           className="m-2 p-2  rounded-md flex items-center shadow-md justify-center gap-2 
            bg-gray-200  cursor-pointer
           hover:bg-gray-300 transition-all duration-100 ease-in-out
           text-textColor 
           text-xl">
            <p
            onClick={AedMenu}
          whileTap={{scale: 0.6}}
          className="relative flex items-center justify-center text-textColor text-2xl  cursor-pointer "
          >
             حذف عنصر<RiDeleteBin5Fill />
          </p>
           </motion.div>
           </Link>
*/}
              </motion.div>
            

          )
          }

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="w-7 h-7 text-textColor text-2xl  cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-mono">{cartItems.length}</p>
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cartNumBg opacity-75"></span>
              </div>
          )}
        </div>
        
        <Link to={"/"} className="flex items-center justify-center gap-0  container relative">
          <img src={Logo} className="h-12 object-cover" alt="logo" />
          <p className="font-['DecoType_Naskh_Variants']  text-textColor text-3xl  italic ">مطعم شهرزاد</p>
        </Link>

        <motion.div className=""
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.6 }}
        >
          
          {isMenu && (
            <motion.div
            initial={{ opacity: 0, x: 40 }}
           transition={{ ease: "easeOut", delay: 0 ,duration: 1}}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: 10 }}
              className=" w-25 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-14 right-2"
            >
             
              {user && user.email === "scheherazade371@gmail.com" && (

<div>
                <Link to={"/createItem"}>
                 <p
                      className="m-2 p-2  rounded-md flex items-center shadow-md justify-center gap-2 
                      bg-gray-200  cursor-pointer
                     hover:bg-gray-300 transition-all duration-100 ease-in-out
                     text-textColor 
                     text-xl
                      "
                      onClick={() => setIsMenu(false)}
                    >
                       عنصر جديد <MdAdd />
                    </p>
                </Link>

<Link to = {"/DeletItem"}>
            
<motion.div
className="m-2 p-2  rounded-md flex items-center shadow-md justify-center gap-2 
bg-gray-200  cursor-pointer
hover:bg-gray-300 transition-all duration-100 ease-in-out
text-textColor 
text-xl">
<p
onClick={() => setIsMenu(false)}
whileTap={{scale: 0.6}}
className="relative flex items-center justify-center text-textColor text-2xl  cursor-pointer "
>
 حذف عنصر<RiDeleteBin5Fill />
</p>
</motion.div>
</Link>

</div>
                
              )}

           <Link to={"/"}>
            
           <motion.div
           onClick={() => setIsMenu(false)}
          className="m-2 p-2  rounded-md flex items-center shadow-md justify-center gap-2 
           bg-gray-200  cursor-pointer
          hover:bg-gray-300 transition-all duration-100 ease-in-out
          text-textColor 
          text-xl">
          <p>الرئيسية</p>
          <MdFoodBank className="w-7 h-7" />
          </motion.div>
          </Link>
          
          <motion.dev 
          onClick={() => setIsMenu(false)}
          className="m-2 p-2  rounded-md flex inline items-center shadow-md justify-center gap-2 
           bg-gray-200  cursor-pointer
          hover:bg-gray-300 transition-all duration-100 ease-in-out
          text-textColor 
          text-xl">
            <Link to ={"/Suggestion"}>
            <p> أقتراح وجبة </p>
            </Link>
            <MdOutlineRestaurantMenu className="w-8 h-8" />
          </motion.dev>

          <motion.dev 
          onClick={() => setIsMenu(false)}
          className="m-2 p-2  rounded-md flex items-center shadow-md justify-center gap-2 
           bg-gray-200  cursor-pointer
          hover:bg-gray-300 transition-all duration-100 ease-in-out
          text-textColor 
          text-xl">
            <Link to ={"/Menu"}>
            <p>قائمة الطعام</p>
            </Link>
            <BiFoodMenu/>
          </motion.dev>

          <motion.dev 
          onClick={() => setIsMenu(false)}
          className="m-2 p-2  rounded-md flex items-center shadow-md justify-center gap-2 
           bg-gray-200  cursor-pointer
          hover:bg-gray-300 transition-all duration-100 ease-in-out
          text-textColor 
          text-xl">
            <Link to ={"/Evaluation"}>
            <p> تقيم الطلب</p>
            </Link>
            <FaGrinStars/>
          </motion.dev>

          <motion.dev 
          onClick={() => setIsMenu(false)}
          className="m-2 p-2  rounded-md flex items-center shadow-md justify-center gap-2 
           bg-gray-200  cursor-pointer
          hover:bg-gray-300 transition-all duration-100 ease-in-out
          text-textColor 
          text-xl">
            <Link to ={"/Communicate"}>
            <p> تواصل معنا </p>
            </Link>
            <AiFillMessage/>
          </motion.dev>
          
          <motion.div 
          onClick={() => setIsMenu(false)}
          className="m-2 p-2  rounded-md flex items-center shadow-md justify-center gap-2 
           bg-gray-200  cursor-pointer
          hover:bg-gray-300 transition-all duration-100 ease-in-out
          text-textColor 
          text-xl">
            <Link to ={"/AboutUs"}>
          <p>حول التطبيق</p>
          </Link>
          <BsInfoCircleFill/>
          </motion.div>
          
          { user &&
          <p
          className="m-2 p-2  rounded-md flex items-center shadow-md justify-center gap-2 
           bg-gray-200  cursor-pointer
          hover:bg-gray-300 transition-all duration-100 ease-in-out
          text-textColor 
          text-xl"
          onClick={logout}
          
          >
           تسجيل الخروج <MdLogout />
          </p>
          }

          { !user && 
          <p
          className="m-2 p-2  rounded-md flex items-center shadow-md justify-center 
          bg-gray-200  cursor-pointer
         hover:bg-gray-300 transition-all duration-100 ease-in-out
         text-textColor 
         text-xl"
         onClick={login}
          >تسجيل الدخول
          <MdLogin className="w-8 h-8"
          />
          </p>
           }
          </motion.div>
          
          )}
        </motion.div>
        
        <FiMenu
          className="relative w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
          onClick={fsMenu}
          />
            
          
      </div>
    </header>
  );
};

export default Header;
