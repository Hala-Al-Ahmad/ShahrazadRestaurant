import React, { useEffect, useRef, useState } from "react";
  import RowOrder1 from './RowOrder1'
  import RowOrder2 from './RowOrder2'
import RowOrder3 from './RowOrder3'
import { useStateValue } from "../context/StateProvider";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import CartContainer from "./CartContainer";



const SugestOrder = () => {
  const [filter, setFilter] = useState("chicken");
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue1, setScrollValue1] = useState(0);
  const [scrollValue2, setScrollValue2] = useState(0);
  const [scrollValue3, setScrollValue3] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className='select-none w-screen '>

<p className='relative left-[-125px] mt-5 my-8  text-3xl font-semibold capitalize text-textColor  before:absolute before:rounded-lg before:content before:w-[1430px] before:h-[.5px]  before:-bottom-2 before:left-[120px] before:my-[-5px] before:bg-gray-200  transition-all ease-in-out duration-100 text-right  '> : بنائنا على تحليل البيانات التي قمت بإدخالها نقترح عليك الوجبات التالية </p>

<p className="relative  left-[-125px] top-5 text-2xl font-semibold capitalize text-textColor  before:absolute before:rounded-lg before:content before:w-[145px] before:h-1 before:-bottom-2 before:left-[1400px] before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 text-right">
المأكولات العربية
</p>

<section className="w-full my-[-8px]">

        <div className="w-full flex items-center justify-between">
          <div className="relative  hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue1(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue1(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>

        <RowOrder1
          scrollValue={scrollValue1}
          flag={true}
          data={foodItems?.filter((n) => n.category === "arabicfood")}
        />


<p className="relative  left-[-125px] top-5 text-2xl font-semibold capitalize text-textColor  before:absolute before:rounded-lg before:content before:w-[60px] before:h-1 before:-bottom-2 before:left-[1485px] before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 text-right">
سلطة
</p>

<div className="w-full flex items-center justify-between">
          <div className="relative  hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue2(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue2(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>

<RowOrder2
          scrollValue={scrollValue2}
          flag={true}
          data={foodItems?.filter((n) => n.category === "salad")}
        />


      </section>

      <p className="relative  left-[-125px] top-5 text-2xl font-semibold capitalize text-textColor  before:absolute before:rounded-lg before:content before:w-[90px] before:h-1 before:-bottom-2 before:left-[1455px] before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 text-right">
مشروبات
</p>

<div className="w-full flex items-center justify-between">
          <div className="relative  hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue3(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue3(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>


<RowOrder3
          scrollValue={scrollValue3}
          flag={true}
          data={foodItems?.filter((n) => n.category === "drinks")}
        />

{cartShow && <CartContainer />}
   </div>
  )
}

export default SugestOrder
