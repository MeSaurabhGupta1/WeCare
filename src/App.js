import React, {useState} from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import CoachSignUp from "./Components/CoachSignUp";
import CoachLogin from "./Components/CoachLogin";
import UserSignUp from "./Components/UserSignUp";
import UserLogin from "./Components/UserLogin";
import Footer from "./Components/Footer";
import CoachHome from "./Components/CoachHome";
import UserHome from "./Components/UserHome";
import './pageStyle.css';

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coachSignUp/*" element={<CoachSignUp/>}/>
      <Route path="/coachLogin/*" element={<CoachLogin  />}/>
      <Route path="/userSignUp/*" element={<UserSignUp/>}/>
      <Route path="/userLogin/*" element={<UserLogin/>}/>
      <Route path="/coachhome/*" element={<CoachHome />}/>
      <Route path="/userhome/*" element={<UserHome/>}/>
      {/* <Route path="/muCheckbox/*" element={<MuCheckbox/>}/>
      <Route path="/searchWal/*" element={<SearchWal/>}/>
      <Route path="/TableComponent/*" element={<TableComponent/>}/>
      <Route path="/table/*" element={<Table/>}/>
      <Route path="/atc/*" element={<AutoCompleteChip/>}/> */}
    </Routes>
     {/* <div className="App">
      <button onClick={handleOpenModal}>Open Modal</button>
      <SimpleModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>*/}
    <Footer/>
  </BrowserRouter>
  </>)}
  
export default App;
