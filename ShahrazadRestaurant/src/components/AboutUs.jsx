import React from 'react'
import chef from '../img/Chef-bro.png'
import stp1 from '../img/step-1.png'
import stp2 from '../img/step-2.png'
import stp3 from '../img/step-3.png'
import conect from '../img/Contact-rafiki .png'
import email from '../img/email-icon.png'
import phone from '../img/phone-icon.png'
import clock from '../img/clock-icon.png'
import { motion } from "framer-motion";


const AboutUs = () => {
  return (
    
  
<div class="select-none container my-24 px-6 mx-auto">

<motion.img
 whileTap={{scale: 0.6}} 
 initial={{ opacity: 0, x: -50 }}
 transition={{ ease: "easeOut", duration: 1}}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: 10 }}
src={chef} className="relative inset-y-[-130px] left-[-90px]  h-screen object-cover" 
alt="logo"/>

<motion.p 
         initial={{ opacity: 0, y: 100 }}
         transition={{ ease: "easeOut", delay: .5 ,duration: 2}}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 10 }}
        className="
        grid grid-cols-1 md:grid-cols-2 gap-2 w-full  items-end
        absolute left-[880px]  inset-y-[220px] select-none text-[2rem]  text-textColor md:text-right md:w-[80%] ">
        مطعم شهرزاد هو مكان رائع لتناول وجبة
         أردنية تقليدية، فهو بجلساته الداخلية الواسعة وفنائه الخارجي في الهواء الطلق يشكل مكاناً مثالياً لتناول 
         الطعام مع العائلة والأصدقاء، كما أنه يوفر أجواء ممتازة تبعث على الراحة والاسترخاء، لا سيما إن
          اخترت الجلوس في الطابق العلوي، حيث توجد منطقة للجلوس في الهواء الطلق تحت مظلة ضخمة تقي من
          الشمس، هذا بالإضافة إلى ديكوراته الداخلية المزينة بشكل رائع، والموسيقى المحلية التي تضفي
          أجواء ممتعة على المكان. أما قائمة الطعام فتضم العديد من الاصناف الشهية من المطبخ الشرقي
          والعربي، إلى جانب العديد من الأطباق اللذيذة الأخرى
        </motion.p>

<p className='absolute left-[1160px] inset-y-[140px] text-gray-700  text-[3rem]  '>لماذا مطعم شهرزاد؟</p>
    

<p className="font-['DecoType_Naskh_Variants']  text-textColor text-[50px] relative inset-y-[-130px] left-[40%] items-center justify-center cursor-pointer gap-1">
  خطوات بسيطة</p>

<ul className="flex items-center  inset-y-[-140px] gap-[250px] nl-auto w-[200px]">

<img className= "relative left-[100px] inset-y-[-70px] "  src={stp3}/>

<img className= "relative left-[100px] inset-y-[-70px] "  src={stp2}/>

<img className= "relative left-[100px] inset-y-[-70px] "  src={stp1}/>

</ul>

<ul className="flex">
<div className="relative  inset-y-[-300px] w-[400px] h-[350px]   border-solid rounded-lg  border-4 border-blodlog">

</div>

<div className="relative  inset-y-[-300px] left-[50px] w-[400px] h-[350px]   border-solid rounded-lg  border-4 border-blodlog">

</div>

<div className="relative  inset-y-[-300px] left-[100px] w-[400px] h-[350px]   border-solid rounded-lg  border-4 border-blodlog">

</div>
</ul>

  <p className=" absolute inset-y-[1190px]  left-[185px] font-['DecoType_Naskh_Variants']  text-textColor text-[50px] "> استمتع بالطعام</p>
  <p className=" absolute inset-y-[1180px]  left-[650px] font-['DecoType_Naskh_Variants']  text-textColor text-[50px] "> التوصيل السريع</p>
  <p className=" absolute inset-y-[1190px]  left-[1130px] font-['DecoType_Naskh_Variants']  text-textColor text-[50px] "> اختر طلب</p>

  <img className= "absolute left-[1000px] inset-y-[1280px] w-[500px] h-[500px] "  src={conect}/>


  <img className= "absolute left-[200px] inset-y-[1390px] w-[100px] h-[100px]"  src={phone}/>
  <img className= "absolute left-[500px] inset-y-[1390px] w-[100px] h-[100px]"  src={email}/>
  <img className= "absolute left-[800px] inset-y-[1390px] w-[100px] h-[100px]"  src={clock}/>

<p className=" absolute inset-y-[1500px]  left-[180px] font-['DecoType_Naskh_Variants']  text-textColor text-[30px]">الأرقام الخاصة بنا</p>
<p className=" absolute inset-y-[1550px]  left-[170px]  text-textColor1 text-[20px]">+962795675632</p>
<p className=" absolute inset-y-[1600px]  left-[170px]  text-textColor1 text-[20px]">+962883467598</p>

<p className=" absolute inset-y-[1500px]  left-[800px] font-['DecoType_Naskh_Variants']  text-textColor text-[30px]">ساعات العمل</p>
<p className=" absolute inset-y-[1570px]  left-[730px]   text-textColor text-[25px]">10:00Am to 11:00PM</p>


<p className=" absolute inset-y-[1500px]  left-[470px] font-['DecoType_Naskh_Variants']  text-textColor text-[30px]">بريدنا الإلكتروني</p>
<p className=" absolute inset-y-[1580px]  left-[400px] font-['DecoType_Naskh_Variants']  text-textColor text-[20px]">ShahrzadRestaurant@Shahrzad.com</p>


  <section class="relative inset-y-[110px]  left-[-30px] mb-32 text-gray-800">
   
    <div class="block rounded-lg shadow-lg bg-white">
      <div class="flex flex-wrap items-center">
        <div class="grow-0 shrink-0 basis-auto block w-full ">
          <div class="map-container-2 w-full">
            <iframe  src="https://maps.google.com/maps?q=%D9%85%D8%B7%D8%B9%D9%85%20%D8%B4%D9%87%D8%B1%D8%B2%D8%A7%D8%AF&t=&z=17&ie=UTF8&iwloc=&output=embed" class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0" allowfullscreen></iframe>
          </div>  
        </div>
      </div>
    </div>
    
  </section>

  
</div>

    
  )
}

export default AboutUs