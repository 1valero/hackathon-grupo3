import React from 'react';
import WebCam from '../webCam/webCam';
import WebCamCustom from '../webCam/webCamCustom';
import Head from '../head/head';
import Footer from '../footer/footer';
function Index() {
  return (
    <div className="App">
        <Head/>
        <div>
          <WebCamCustom/>
        </div>
         <Footer/>
    </div>
  );
}

export default Index;