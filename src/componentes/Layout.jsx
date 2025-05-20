import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import 'primeflex/primeflex.css';

const Layout = ({children}) => {
    return ( 
    <>
    <div className="flex flex-column min-h-screen">
    <Header/>
    <main  className="flex-1 p-4 bg-yellow-100">
        {children}
    </main>
    <Footer />
    </div>
    </>
     );
}
 
export default Layout;