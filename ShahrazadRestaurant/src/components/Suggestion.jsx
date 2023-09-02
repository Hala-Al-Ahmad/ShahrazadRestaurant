import chef from '../img/Chef-bro.png'
import { motion } from "framer-motion";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom"

const Suggestion = () => {
  const [name, setname] = useState("الإسم ");
  const [age, setage] = useState(0);
  const [Weight, setWeight] = useState(0);
  const [long, setlong] = useState(0);
  const [fodType, setFoodType] = useState("نوع الطعام");
  const [soup, setsoup] = useState(false);
  const [salad, setsalad] = useState(false);
  const [drinks, setdrinks] = useState(false);
  const [sensitive, setsensitive] = useState("لا أعاني من حساسية ");
  const [illness, setillness] = useState("مرض");
  let navigate = useNavigate();
 

  const handelName = (e) => {
    setname(e.target.value)
}

const handelAge = (e) => {
  setage(e.target.value)
}

const handelWeight = (e) => {
  setWeight(e.target.value)
}

const handelLong = (e) => {
  setlong(e.target.value)
}

const clearData = (e) => {
  setname('');
  setage('');
  setWeight('');
  setlong('');
  setFoodType('');
  setsoup(false);
  setsalad(false);
  setdrinks(false);
  setsensitive('');
  setillness('');
}

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

  const sendMail = (e) => {
    scrollToTop()
    navigate("/SugestOrder");
  }
  
  return (
  
      <div className='select-none text-right'>
        <motion.div 
        initial={{ opacity: 0, y: -40 }}
        transition={{ ease: "easeOut", duration: 1}}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className='font-medium relative text-textColor text-[28px] font-serif text-b top-2 '>
        <p >
          أهلا بك بخدمة اقتراح الوجبة وهي خدمة نقدمها في المطعم للعملاء الذين يرغبون في الحصول
          <p> على التوصيات والإقتراحات الملائمة لهم حسب الدقيق للسعرات الحرارية والتحليل الغذائي</p>
          </p>
        </motion.div> 

      <motion.img
        initial={{ opacity: 0, x: -50 }}
        transition={{ ease: "easeOut", duration: 1}}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
        src={chef} className="relative inset-y-[-160px] left-[-110px]  h-screen object-cover" 
        alt="chefemg"/>

      <motion.form
       initial={{ opacity: 0, x: 50 }}
       transition={{ ease: "easeOut", duration: 1}}
       animate={{ opacity: 1, x: 0 }}
       exit={{ opacity: 0, x: 10 }}
      className="absolute right-10 top-[195px] w-[800px] h-[785px] text-right px-8  mx-auto overflow-hidden text-gray-700 bg-white rounded-lg shadow-2xl "
      onSubmit={sendMail}>

        <div className='absolute right-5 text-textColor  '>

      <h1 className='select-none  text-[40px] font-medium my-3 '>: لإتمام الخدمة يرجى الإجابة عن الأسئلة الأتية</h1>
      <hr className='absolute h-[20px] w-[740px] right-0 color-bold my-[-12px] ' /> 

    <p className='text-[30px] my-8'>الإسم ؟</p>
    <input required onChange={handelName} class="absolute right-[65px] top-[120px] text-[25px] w-[140px]  border-b-2 border-icobg  appearance-none bg-transparent  text-gray-700 mr-3 px-2 leading-tight focus:outline-none text-right" type="text" placeholder="أدخل إسمك هنا" aria-label="Full name"/>

    <p className='absolute right-[240px] top-[115px] text-[30px] '>العمر ؟</p>
    <input required onChange={handelAge}  class="absolute right-[310px] top-[120px] text-[25px] w-[70px]  border-b-2 border-icobg  appearance-none bg-transparent  text-gray-700 mr-3 px-2 leading-tight focus:outline-none text-right" type="number"  min="0" aria-label="Full name"/>

    <p className='absolute right-[420px] top-[115px] text-[30px] '>الوزن ؟</p>
    <input required onChange={handelWeight} class="absolute right-[490px] top-[120px] text-[25px] w-[70px]  border-b-2 border-icobg  appearance-none bg-transparent  text-gray-700 mr-3 px-2 leading-tight focus:outline-none text-right" type="number"  min="0" aria-label="Full name"/>

    <p className='relative right-[590px] top-[-65px] text-[30px] '>الطول ؟</p>
    <input required onChange={handelLong} class="absolute right-[660px] top-[120px] text-[25px] w-[70px]  border-b-2 border-icobg  appearance-none bg-transparent  text-gray-700 mr-3 px-2 leading-tight focus:outline-none text-right" type="number"  min="0" aria-label="Full name"/>

    <p className='absolute top-[150px] right-[0px] text-[30px] my-8'>ما هو نوع الأطباق الذي تفضله؟</p>

    <div className='inline-flex  h-[47px] my-2 text-center gap-[50px]  text-textColor font-medium  text-[23px]  '>

      <div onClick ={()=> setFoodType("بيتزا و برجر") } className={`shadow-lg w-[140px] rounded-lg py-1 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog 
      ${fodType === "بيتزا و برجر"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} 
      `}> 
      بيتزا و برجر</div>

      <div onClick ={()=> setFoodType("الأطباق الصحية") } className={`shadow-lg w-[140px] rounded-lg py-1 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog 
      ${fodType === "الأطباق الصحية"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} 
      `}> 
      الأطباق الصحية
      </div>

      <div onClick ={()=> setFoodType("المأكولات بحرية") } className={`shadow-lg w-[140px] rounded-lg py-1 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog 
      ${fodType === "المأكولات بحرية"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} 
      `}> 
      المأكولات بحرية 
      </div>
      <div onClick ={()=> setFoodType("مأكولات عربية") } className={`shadow-lg w-[140px] rounded-lg py-1 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog 
      ${fodType === "مأكولات عربية"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} 
      `}> 
      مأكولات عربية 
      </div>
    </div>
    
    <p className='absolute top-[300px] right-[0px] text-[30px] my-8'>هل ترغب بـ  ؟ </p>

    <div className='relative right-[180px]  inline-flex  h-[47px] my-9  text-center gap-[55px]  text-textColor font-medium  text-[23px]  '>

      <div onClick ={()=> setdrinks(true) } className={` shadow-lg w-[140px] rounded-lg py-1 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog 
      ${drinks === true ? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}
      `}>
        مشروبات
      
      </div>
      <div onClick ={()=> setsoup(true) } className={` shadow-lg w-[140px] rounded-lg py-1 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog 
      ${soup === true? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}
      `}>
        شوربة
      
      </div>
      <div onClick ={()=> setsalad(true) } className={` shadow-lg w-[140px] rounded-lg py-1 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog 
      ${salad === true? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}
      `}>
        سلطة
      
      </div>
    </div>
    
    <p className='absolute top-[380px] right-[0px] text-[30px] my-8'>هل تعاني من إحدى أنواع الحساسية التالية؟</p>
    
    <div className='inline-flex  h-[47px] my-14 text-center gap-[36px]  text-textColor font-medium  text-[23px]  '>

      <div onClick ={()=> setsensitive("لا أعاني من حساسية") } className={`shadow-lg w-[180px] rounded-lg py-1 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog 
      ${sensitive === "لا أعاني من حساسية"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}
      `}>
        لا أعاني من حساسية
      
      </div>
      <div onClick ={()=> setsensitive("حساسية الجلوتين") } className={`shadow-lg w-[140px] rounded-lg py-1 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog 
      ${sensitive === "حساسية الجلوتين"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}
      `}>
        حساسية الجلوتين
      
      </div>
      <div onClick ={()=> setsensitive("حساسية اللاكتوز") } className={`shadow-lg w-[140px] rounded-lg py-1 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog 
      ${sensitive === "حساسية اللاكتوز"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}
      `}>
        حساسية اللاكتوز 
      
      </div>
      <div onClick ={()=> setsensitive("حساسية القمح") } className={`shadow-lg w-[140px] rounded-lg py-1 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog 
      ${sensitive === "حساسية القمح"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}
      `}>
        حساسية القمح
      
      </div>
    </div>

    <p className='absolute top-[520px] right-[0px] text-[30px] my-8'>هل تعاني من إحدى الأمراض المزمنة التالية ؟</p>
    
    <div className='relative right-[0px]  inline-flex  h-[47px] my-9  text-center gap-[125px]  text-textColor font-medium  text-[23px]  '>
    
      <div onClick ={()=> setillness("لا أعاني من أمراض") } className={` shadow-lg w-[180px] rounded-lg py-1 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog   
      ${illness === "لا أعاني من أمراض"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}
      `}>
        لا أعاني من أمراض
      
      </div>
      <div onClick ={()=> setillness("مرض السكري") } className={` shadow-lg w-[140px] rounded-lg py-1 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog  
      ${illness === "مرض السكري"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}
      `}>
        مرض السكري
      
      </div>
      <div onClick ={()=> setillness("مرض الضغط") } className={` shadow-lg w-[140px] rounded-lg py-1 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog  
      ${illness === "مرض الضغط"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}
      `}>
        مرض الضغط
      
      </div>
    </div>

    <hr className=' absolute  right-0 h-[10px] w-[710px]  my-[-10px]' /> 

    <button 
      type="submit" 
      class="relative right-[0px] top-[-10px] my-7 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium shadow-lg shadow-red-500/50 rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2">
        متابعة</button>

      
      <div 
      onClick={clearData}
      class="absolute left-[70px] top-[675px] my-7 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium shadow-lg shadow-red-500/50 rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2">
        حذف</div> 

        </div>   
      </motion.form>
    </div>
  )
}

export default Suggestion
