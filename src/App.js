import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';

import Header from './components/header/Header';
import RightBody from './components/rightbody/RightBody';
import Sidebar from './components/sidebar/Sidebar'; 
import {  AppProvider } from './context/AppContext';


function App() {
  return (

  <AppProvider>
    <div className="App">
      <div className="siderbar">
          <Sidebar/>
      </div>
      <div className="rightside">
         <Header/>
         <RightBody/>

         
         <Footer/>
         
        
      </div>
      
   </div>
  </AppProvider>  
   
  );
}

export default App;
