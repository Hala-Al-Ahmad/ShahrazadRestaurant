import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer,Evaluation,Suggestion,AboutUs,Communicate,Menu,ScrollButton,SugestOrder,Loogin,Sinup,Forpass } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import {DownThePage} from "./components/DownThePage.jsx"  
import { Content } from './components/Styles';
import DeletItem from "./components/DeletItem"
import { UserAuthContextProvider } from '../src/context/AuthContext'




const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <UserAuthContextProvider>
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/CreateItem" element={<CreateContainer />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Suggestion" element={<Suggestion />} />
            <Route path="/Communicate" element={<Communicate />} />
            <Route path="/Evaluation" element={<Evaluation />} />
            <Route path="/Menu" element={< Menu />} />
            <Route path="/Loogin" element={< Loogin />} />
            <Route path="/Sinup" element={< Sinup />} />
            <Route path="/Forpass" element={< Forpass />} />
            <Route path="/DeletItem" element={< DeletItem />} />
            <Route path="/SugestOrder" element={< SugestOrder />} />
          </Routes>
        </main>
        <Content/>
        <ScrollButton/>
        <DownThePage/>
      </div>
    </AnimatePresence>
   </UserAuthContextProvider>
  );
};

export default App;
