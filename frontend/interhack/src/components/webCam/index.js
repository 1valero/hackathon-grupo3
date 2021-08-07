import React from 'react';
import WebCam from '../webCam/webCam';
import Head from '../head/head';
import Footer from '../footer/footer';
function Index() {
  return (
    <div className="App">
        <Head/>
        <WebCam/>
         <Footer/>
    </div>
  );
}

export default Index;