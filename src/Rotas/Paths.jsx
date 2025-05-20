import React from 'react';
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../componentes/Layout";



const Home =lazy (() => import('../Pages/Home.jsx'));
const About =lazy (() => import('../Pages/About.jsx'));
const Contact =lazy (() => import('../Pages/Contact.jsx'));
const Userprofile =lazy (() => import('../Pages/Userprofile.jsx'));
const Notfound =lazy (() => import('../Pages/Notfound.jsx'));
const Login = lazy (() =>import('../Pages/Login.jsx'));

const Paths = () => {
    return ( 
        <BrowserRouter>
        <Layout>
          <Suspense fallback={<div>Carregando...</div>}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/About" element={<About />}/>
                <Route path="/Contact" element={<Contact />}/>
                <Route path='/login' element={<Login/>}/>
                <Route path="/user" element={<Userprofile />}/>
                <Route path="*" element={<Notfound />}/>
            </Routes>
          </Suspense>
        </Layout>
        </BrowserRouter>
    
   );
}
 
export default Paths;