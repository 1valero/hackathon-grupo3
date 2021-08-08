import React, { Component,useState } from "react";
import Webcam from "react-webcam";


const videoConstraints = {
  height: 1080, //set pic resolution
  width: 1920, //set pic resolution
  facingMode: "environment" //use back camera
  // facingMode: "user" //use front camera
};

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  

class WebCamCustom extends Component {
  constructor(props) {
    super(props);
    this.webcamRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    //this.fileInput = React.createRef();
  }

  state = {
    url: null,
    loaded: false,
    URLArray: []
  };

  componentDidMount() {
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions
        .query({ name: "camera" })
        .then((permissionObj) => {
          if (permissionObj.state !== "granted") {
            alert("habilite los permisos de cámara");
          }
        })
        .catch((error) => {
          console.log("Got error :", error);
        });
    }
  }

  bytesToSize = (bytes) => {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "0 Byte";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  };

  capturePhoto = () => {

    const imageSrc = this.webcamRef.current.getScreenshot();
    const file = this.dataURItoBlob(imageSrc);
    this.getImage(file);
  };
    
    getImage(pic){
      this.setState({ url: pic, loaded: true}, () =>
          this.savePhoto()
      );
    }

  dataURItoBlob(dataURI) {
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}

  savePhoto = () => {
    var imageSrc = this.state.url;
      this.request(imageSrc);
  };

    
  handleChange(event) {
    this.setState({loaded: true});
    this.request(event.target.files[0]);
  }

  request(img){
  
    var formData = new FormData();
    formData.append("file", img);

    fetch('https://ir-hkt-equipo-03.rj.r.appspot.com/product/search/by-image',{
        crossDomain:true,
        method: 'POST',
        headers: {
          //'Content-Type': 'multipart/form-data',
        },
        body: 
          formData
        
    })
      .then((response) => response.json())
        .then((json) => {
            console.log(json.success.data);
            localStorage.setItem("resultados_busqueda", JSON.stringify(json.success.data))
            this.setState({loaded: false})
            window.location.href='/resultados';
        })
      .catch((error) => {
        console.error(error);
      });
  };

  selectPic = (pic) => {
    const picIndex = this.state.URLArray.indexOf(pic);
    console.log(picIndex);
    if (picIndex > -1) {
      let newURLArray = this.state.URLArray.splice(picIndex, 1);
      this.setState({ URLArray: newURLArray });
    }
  };


  render() {
    return (
      <>
        <Webcam
          ref={this.webcamRef}
          audio={false}
          screenshotQuality={1} 
          forceScreenshotSourceSize
          screenshotFormat="image/jpeg"
          className="webCam"
          videoConstraints={videoConstraints}
        />
        <div className="contentButtonWebCam">
            <div className="primer_boton">
              {this.state.loaded ? <img src="/assets/loading.gif" width="120" height="100" /> :
                <button className="btn-oe btn-oe-pay" onClick={this.capturePhoto}>Tomar foto</button>
              }
            </div>
            <div className="segundo_boton">
            {this.state.loaded ? <img src="/assets/loading.gif" width="120" height="100" /> :
                <input type="file" name="file"  onChange={this.handleChange} />
            }
            </div>
        </div>
      </>
    );
  }
}

export default WebCamCustom;