import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {send} from 'emailjs-com'
import fant from "../img/emoje/fav.gif"
import vgod from "../img/emoje/vgod.gif"
import god from "../img/emoje/god.gif"
import nor from "../img/emoje/nor.gif"
import sad from "../img/emoje/sad.gif";


const Evaluation = () => {
  const [WebsitFed, setWebsitFed] = useState("");
  const [Frndreoc, setFrndreoc] = useState("0");
  const [Esyus, setEsyus] = useState("0");
  const [Maseg, setMaseg] = useState("");
  const [verfied, setVerifed] =useState (false);
  const [msg, setMsg] = useState(null);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [fields, setFields] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handelNameMaseeg = (e) => {
    setMaseg(e.target.value)
}

function onChange(value) {
  console.log("Captcha value:", value);
  setVerifed(true);
}


const sendMail = (e) => {
  e.preventDefault();
  send (
      'service_sheog78',
      'template_1u74esj',
      {Maseg,WebsitFed,Frndreoc,Esyus},
      '2v_ItFOsexvxP8eKo'
  )

  setIsLoading(false);
  setFields(true);  
  setMsg("!تم إرسال الرسالة بنجاح ");
  setAlertStatus("success");
  setFields(false);
  clearData();
    
}

const clearData = () => {
   
 
  setTimeout(() => {
    setVerifed(false)
    setMaseg("");
    setWebsitFed("");
    setEsyus("");
    setFrndreoc("");
    setMsg(null)
  }, 1000);
};


  return (
   <div className='select-none w-screen '>
    <form
    onSubmit={sendMail}
    >
       <div
       className=" w-[1300px] h-[1120px] text-right px-8  mx-auto overflow-hidden text-gray-700 bg-white rounded-lg shadow-2xl ">
       <h1 className='select-none  text-[40px] font-medium text-gray-700 my-4'><b>شاركنا رأيك</b></h1>
       <hr className='h-[10px] py-3' /> 
       <p className='text-[25px]'>كيف تقيم تجربتك مع شهرذاد دوت كوم ؟</p>
       
       
       <ul className="flex  py-2  ">
       <img className= "absolute right-[900px] w-[100px] h-[100px]"  src={nor}/>
       <img className= "absolute right-[700px] w-[100px] h-[100px]"  src={sad}/>
       <img className= "absolute right-[500px] w-[100px] h-[100px]"  src={god}/>
       <img className= "absolute right-[300px] w-[100px] h-[100px]"  src={vgod}/>
       <img className= "absolute right-[100px] w-[100px] h-[100px] "  src={fant}/>
       <img className= "relative right-[1000px] w-[100px] h-[100px] "  src={fant}/>
       </ul>

      <div class="inline-flex rounded-md h-[47px] my-2 text-center gap-7">
          <div onClick ={()=> setWebsitFed("غير راضٍ ابداً") } aria-current="page" class={` w-[170px] py-2 px-4 text-2xl font-medium shadow-lg text-gray-600 rounded-lg border border-gray-200 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${WebsitFed === "غير راضٍ ابداً"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}  `}>
             غير راضٍ ابداً
          </div>
          <div onClick ={()=> setWebsitFed("راضٍ قليلاً") } aria-current="page" class={` w-[170px] py-2 px-4 text-2xl font-medium shadow-lg text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${WebsitFed === "راضٍ قليلاً"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}  `}>
             راضٍ قليلاً
          </div>
          <div onClick ={()=> setWebsitFed("راضٍ بعض الشئ") } aria-current="page" class={` w-[170px] py-2 px-4 text-2xl font-medium shadow-lg text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#332619] focus:text-blodlog ${WebsitFed === "راضٍ بعض الشئ"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}  `}>
             راضٍ بعض الشئ
          </div>
          <div onClick ={()=> setWebsitFed("راضٍ تماماً") } aria-current="page" class={` w-[170px] py-2 px-4 text-2xl font-medium shadow-lg text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${WebsitFed === "راضٍ تماماً"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}  `}>
             راضٍ تماماً
          </div>
          <div onClick ={()=> setWebsitFed("راضٍ للغاية") } aria-current="page" class={` w-[170px] py-2 px-4 text-2xl font-medium shadow-lg text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${WebsitFed === "راضٍ للغاية"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''}  `}>
             راضٍ للغاية
          </div>
      </div>
      
       <hr className='my-4 absolute top[30px] right-0 h-[10px] w-[1040px]  ' /> 


       <p className='my-4 text-[25px] py-4'>ما مقدار الجهد الذي بذلته لتستفيد من الخدمة ؟</p>

       <pre className="text-xl text-icobg font-serif">مجهود عالٍ جداً                                                                                                                                                        مجهود قليل جداً  </pre>
       

<div class="inline-flex rounded-md shadow-lg h-[47px] my-2 text-center">
  <div onClick ={()=>setEsyus("1")} value="1" aria-current="page" class={`w-[190px] py-2 px-4 text-2xl font-medium text-gray-600 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Esyus === "1"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
    1
  </div>
  <div onClick = {()=>setEsyus("2")} value="2" aria-current="page" class={`w-[190px] py-2 px-4 text-2xl font-medium text-gray-600 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Esyus === "2"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
   2
  </div>
  <div onClick = {()=>setEsyus("3")} value="3" aria-current="page" class={`w-[190px] py-2 px-4 text-2xl font-medium text-gray-600 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Esyus === "3"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
   3
  </div>
  <div onClick = {()=>setEsyus("4")} value="4" aria-current="page" class={`w-[190px] py-2 px-4 text-2xl font-medium text-gray-600 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Esyus === "4"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
   4
  </div>
  <div onClick = {()=>setEsyus("5")} value="5" aria-current="page" class={`w-[190px] py-2 px-4 text-2xl font-medium text-gray-600 bg-white  border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Esyus === "5"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
    5
  </div>
</div>



<hr className='my-4 absolute top[30px] right-0 h-[10px] w-[1040px]  py-2' /> 

<p className="my-4 text-[25px] py-4">ما هي إحتمالية ان توصي بإستخدام موقع شهرزاد إلى صديق أو زميل في العمل ؟</p>

<pre className=" text-xl text-icobg font-serif">وارد جداً                                                                                                                                                                            غير وارد  </pre>

<div class="inline-flex rounded-md shadow-lg h-[47px] my-2 text-center">
  <div onClick = {()=>setFrndreoc("1")} value="1" aria-current="page" class={`w-[96px] py-2 px-4 text-2xl font-medium rounded-l-lg text-gray-600 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Frndreoc === "1"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
    1
  </div>
  <div onClick = {()=>setFrndreoc("2")} value="2" aria-current="page" class={`w-[96px] py-2 px-4 text-2xl font-medium text-gray-600 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Frndreoc === "2"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
   2
  </div>
  <div onClick = {()=>setFrndreoc("3")} value="3" aria-current="page" class={`w-[96px] py-2 px-4 text-2xl font-medium text-gray-600 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Frndreoc === "3"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
   3
  </div>
  <div onClick = {()=>setFrndreoc("4")} value="4" aria-current="page" class={`w-[96px] py-2 px-4 text-2xl font-medium text-gray-600 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Frndreoc === "4"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
   4
  </div>
  <div onClick = {()=>setFrndreoc("5")} value="5" aria-current="page" class={`w-[96px] py-2 px-4 text-2xl font-medium text-gray-600 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Frndreoc === "5"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
   5
  </div>
  <div onClick = {()=>setFrndreoc("6")} value="6" aria-current="page" class={`w-[96px] py-2 px-4 text-2xl font-medium text-gray-600 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Frndreoc === "6"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
   6
  </div>
  <div onClick = {()=>setFrndreoc("7")} value="7" aria-current="page" class={`w-[96px] py-2 px-4 text-2xl font-medium text-gray-600 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Frndreoc === "7"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
   7
  </div>
  <div onClick = {()=>setFrndreoc("8")} value="8" aria-current="page" class={`w-[96px] py-2 px-4 text-2xl font-medium text-gray-600 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Frndreoc === "8"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
   8
  </div>
  <div onClick = {()=>setFrndreoc("9")} value="9" aria-current="page" class={`w-[96px] py-2 px-4 text-2xl font-medium text-gray-600 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Frndreoc === "9"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
   9
  </div>
  <div onClick = {()=>setFrndreoc("10")} value="10" aria-current="page" class={`w-[96px] py-2 px-4 text-2xl font-medium text-gray-600 rounded-r-lg bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blodlog focus:z-10 focus:ring-2 focus:ring-[#ffb26a] focus:text-blodlog ${Frndreoc === "10"? ' bg-gray-100 text-blodlog z-10 ring-2 ring-[#ffb26a]':''} `}>
    10
  </div>
</div>

       <hr className='my-4 absolute top[30px] right-0 h-[10px] w-[1040px]  py-2' /> 

       <p className='my-4 text-[25px] relative top-[20px]'>يرجى المشاركة بأية ملاحظة أخرى حول تجربتك مع شهرذاد دوت كوم</p>

       <div className="w-full mt-6 py-1">
          <textarea 
          required
          value={Maseg}
          onChange={handelNameMaseeg} 
          className="text-2xl relative  left-[250px] w-[1000px] text-right block  h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-200 rounded-md md:h-48  focus:border-blodlog  focus:ring-blodlog focus:outline-none focus:ring focus:ring-opacity-40" placeholder="أكتب استفساراتك"></textarea>
      </div>




      <button 
      type="submit" 
      
      class="relative left-[-10px]  my-7 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium shadow-lg shadow-red-500/50 rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2">
        ارسل التجربة</button>
      
      </div>

      </form>
    </div>
  )
}

export default Evaluation
