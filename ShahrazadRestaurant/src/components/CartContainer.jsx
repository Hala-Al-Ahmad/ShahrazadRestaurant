import React, { useEffect, useState } from "react";
import styles from "../components/Styles/OrderDetail.module.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptyCart.svg";
import { Link , useNavigate } from "react-router-dom"
import CartItem from "./CartItem";
import { Alert } from "react-bootstrap"
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {send} from 'emailjs-com'


const CartContainer = () => {
  const [amount,setAmount] =useState(0);
  const currency = "USD";
  const style = {"layout":"vertical"};
  const [open , setOpen] = useState(false)
  const [done , setDone] = useState(false)
  const [PaymentMethod , setPaymentMethod] = useState("")
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [Phone, setPhone] = useState("+962 7956 756 32");
  const [msg, setMsg] = useState(null);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [fields, setFields] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const refresh = () => window.location.reload(true);
  let navigate = useNavigate();
  
  const chek = () =>{
    setAmount( tot + 2.5)
    setOpen(true)
    
  }

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: currency,
          },
      });
  }, [currency, showSpinner]);


  return (<>
          { (showSpinner && isPending) && <div className="spinner" /> }
          <PayPalButtons
          className="my-1 "
              style={style}
              disabled={false}
              forceReRender={[amount, currency, style]}
              fundingSource={undefined}
              createOrder={(data, actions) => {
                  return actions.order
                      .create({
                          purchase_units: [
                              {
                                  amount: {
                                      currency_code: currency,
                                      value: amount,
                                  },
                              },
                          ],
                      })
                      .then((orderId) => {
                          // Your code here after create the order
                          return orderId;
                      });
              }}
              onApprove={function (data, actions) {
                  return actions.order.capture().then(function () {
                      // Your code here after capture the order
                  });
              }}
              onClick={()=> setPaymentMethod("تمت عملية الدفع") && setDone(true)}/>
      </>
      
  );

}



  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  const cler =  () =>{

  }

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
    console.log(tot);
  }, [tot, flag]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  const sendMail = (e) => {
    e.preventDefault();
    send (
        'service_g54j7dm',
        'template_qsr3bvn',
        {customer,address,Phone,amount,PaymentMethod,},
        'eUo1lY2I_HUIlQMKS'
    )
    setIsLoading(false);
    setFields(true);
    setAlertStatus("success");
    setTimeout(() => {
        setFields(false);
      }, 4000);
      
      setPaymentMethod("تم استقبال طلبك بنجاح ")
      clearData();
      setTimeout(() => {
        navigate("/");
      }, 4000);
}

const clearData = () => 
setTimeout(() => {
  setCustomer("");    
  setAddress(""); 
}, 1000);{
  };



  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-[400px] h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className="select-none  w-full flex items-center justify-between p-4 cursor-pointer">
        <div >
          <MdOutlineKeyboardBackspace  onClick={showCart} className="absolute  left-[15px] top-[17px] text-gray-500 text-[45px] border-2 rounded-full " />
        </div>
        <p className="font-['DecoType_Naskh_Variants'] text-textColor text-2xl font-semibold">السلة</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-50 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
          onClick={clearCart}
        >
          إزالة جميع العناصر <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="  w-full h-full  bg-gray-50 rounded-t-[2rem] flex flex-col">
          {/* cart Items section */}
          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart Item */}
           
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
              
          </div>

          {/* cart total section */}
          <div className="w-full flex-1 bg-gray-100 rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-9 00 text-lg">المجموع</p>
              <p className="text-gray-9 00 text-lg">$ {tot}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-9 00 text-lg">رسوم توصيل </p>
              <p className="text-gray-9 00 text-lg">$ 2.5</p>
            </div>

            <div className="w-full border-b border-gray-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-gray-9 00 text-xl font-semibold"> قيمة الطلب</p>
              <p className="text-gray-9 00 text-xl font-semibold">
                ${tot + 2.5}
              </p>
            </div>

            {open ? (  
     <div className={styles.container}>
     <div className={styles.wrapper}>
       <form
       onSubmit={sendMail}
       >
          <div  >
          <MdOutlineKeyboardBackspace onClick={()=> setOpen(false)} className="absolute left-[15px] top-[17px] text-gray-500 text-[45px] border-2 rounded-full " />
        </div>
        
       <h1 className ="relative top-[-27px] flex items-center justify-center text-textColor text-2xl   gap-1   before:absolute before:rounded-lg before:content before:w-[400px] before:h-[.5px]  before:-bottom-2 before:left-o before:my-[-5px] before:bg-gray-200 ">رجاء ادخال البيانات لإتمام الطلب</h1>
       <div className={styles.item}>
         <label 
         className="select-none text-right block mt-2  text-lm font-bold text-gray-600 "> اسم المستلم</label>
         <input
         required
         placeholder="الأسم الكريم" 
         className="focus:ring-blodlog focus:outline-none focus:ring focus:ring-opacity-50 text-right block w-full px-1 py-2 mt-1 mb-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md "           
           type="text"
           onChange={(e) => setCustomer(e.target.value)}
         />
       </div>
       <div className={styles.item}>
         <label className="select-none text-right block mt-3 mb-1  text-lm font-bold text-gray-600 ">رقم هاتف</label>
         <PhoneInput
         required
 country={'jo'}  
/>
  
       </div>
       <div className={styles.item}>
         <label className="select-none text-right block mt-3 mb-1  text-lm font-bold text-gray-600 ">عنوان التوصيل</label>
         
         
         <textarea
         required
           rows={5}
           placeholder="أسم المنطقة : أسم الشارع : رقم البناية : الطابق  ارشادات إضافية"
           type="text"
           className="text-right block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-30    focus:ring-blodlog focus:outline-none focus:ring focus:ring-opacity-50"
           onChange={(e) => setAddress(e.target.value)}
         />
       </div>

       <PayPalScriptProvider
 
 options={{
     "client-id": "AWA1VjEk_-_D7-HWWr04MshsR2fyM28pOnsur6hpNjSjGqF7GwIyJvAP4DWs0NAzJryC0S0ylAg-LDgX",
     components: "buttons",
     currency: "USD"
 }}
>
<ButtonWrapper

     currency={currency}
     showSpinner={false}
  
 />
</PayPalScriptProvider>

      <button
       onClick={()=> setPaymentMethod(" سوف يتم الدفع عند الإستلام")}
       className="w-full px-0 py-1 mt-0 my-2  text-2xl font-bold text-white  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl   shadow-lg shadow-red-500/50   rounded-lg text-center mr-1 mb-1"
       >
           الدفع عند الإستلام
       </button>

       <button
       type="submit"
       className="w-full px-6 py-3 mt-5 text-2xl font-bold text-white  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl    shadow-lg shadow-red-500/50 rounded-lg text-center mr-2 mb-2"
       >
          اتمام الطلب
       </button>

       <p
        className="text-center mt-3 text-gray-600 text-2xl "
       >{PaymentMethod}</p>
       
  

       </form>
     </div>
   </div>

      ) : (  
          user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                onClick={chek}
                className="w-full p-2 rounded-full bg-gradient-to-tr
                from-pink-500 to-orange-400 hover:bg-gradient-to-bl   shadow-lg shadow-red-500/50  text-center mr-2 mb-2
                  text-gray-50 text-2xl my-2 hover:shadow-lg"
              >
                تأكيد الطلب
              </motion.button>
            ) : (
              
              <Link to ={"/Loogin"}>
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr
                from-pink-500 to-orange-400 hover:bg-gradient-to-bl   shadow-lg shadow-red-500/50  text-center mr-2 mb-2
                  text-gray-50 text-xl my-2 hover:shadow-lg"
                  
              >
                الرجاء تسجيل الدخول 
              </motion.button>
              </Link>
            ))}
          
      
         
          </div>
        </div>
      ) : (
        <div className="select-none  w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
          أضف بعض العناصر إلى عربتك
          </p>
        </div>
      )}

    </motion.div>
  );
};

export default CartContainer;
