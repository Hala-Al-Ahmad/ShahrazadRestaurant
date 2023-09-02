import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeContainer = () => {
  return (
    <section
      className="select-none grid grid-cols-1 md:grid-cols-2 gap-2 w-full  items-end"
      id="home"
    >
    
      <div className="py-2 flex-1 flex items-center relative">
        <motion.img
        initial={{ opacity: 0, x: 0 }}
          animate={{opacity: 1 ,scale: [0, 1,] }}
          transition={{ ease: "easeOut", delay: 1.5 ,duration: 1}}
           exit={{ opacity: 0, x: 10 }}
          src={HeroBg}
          className=" h-420  w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-5 right-12 flex items-center justify-end lg:px-32  py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{opacity: 1,  x: 100 }}
              transition={{ ease: "easeOut", delay: 2.2 ,duration: 1.5 }}
               exit={{ opacity: 0, x: 10 }}
                key={n.id}
                className="relative -left-[100px] select-none lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="  w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                 {n.price} <span className="text-md text-red-600">JD</span> السعر
                </p>
              </motion.div>
              
            ))}
            
        </div>
        
      </div>
      <div className="py-5 flex-1 flex flex-col items-end gap-6">
        <motion.div 
        className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full"
        initial={{ opacity: 0, x: -100 }}
        transition={{ ease: "easeOut", delay: .5 ,duration: 2}}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
        >
          <p className="select-none text-base text-orange-500 font-semibold">
          خدمة التوصيل بالدراجات
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, x: 100 }}
           transition={{ ease: "easeOut", delay: .5 ,duration: 2}}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: 10 }}
        >
        <p className="select-none text-right text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor ">
             نرحب بكم في مطعم شهرزاد حيث 
          <p className="select-none text-orange-600 text-[3rem] lg:text-[5rem]">
          الجودة و الخدمة و الطعم   
          </p>
        </p>
        </motion.div>

        <motion.p 
         initial={{ opacity: 0, y: 100 }}
         transition={{ ease: "easeOut", delay: .5 ,duration: 2}}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 10 }}
        className="select-none text-base text-textColor text-center md:text-right md:w-[80%]">
        مطعم شهرزاد هو مكان رائع لتناول وجبة
         أردنية تقليدية، فهو بجلساته الداخلية الواسعة وفنائه الخارجي في الهواء الطلق يشكل مكاناً مثالياً لتناول 
         الطعام مع العائلة والأصدقاء، كما أنه يوفر أجواء ممتازة تبعث على الراحة والاسترخاء، لا سيما إن
          اخترت الجلوس في الطابق العلوي، حيث توجد منطقة للجلوس في الهواء الطلق تحت مظلة ضخمة تقي من
          الشمس، هذا بالإضافة إلى ديكوراته الداخلية المزينة بشكل رائع، والموسيقى المحلية التي تضفي
          أجواء ممتعة على المكان. أما قائمة الطعام فتضم العديد من الاصناف الشهية من المطبخ الشرقي
          والعربي، إلى جانب العديد من الأطباق اللذيذة الأخرى
        </motion.p>

        <Link to ="/Menu">
        <motion.button
         initial={{ opacity: 0, x:  50 }}
         transition={{ ease: "easeOut", delay: .6 ,duration: 2 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 10 }}
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          أطلب الان
        </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default HomeContainer;
