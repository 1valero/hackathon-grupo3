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
    NewZipPic: null,
    URLArray: []
  };

  componentDidMount() {
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions
        .query({ name: "camera" })
        .then((permissionObj) => {
          if (permissionObj.state !== "granted") {
            // Show how to grant accress right to browser
            alert("habilite los permisos de cámara");
          }
          console.log(permissionObj.state);
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
    console.log(file);
    //const formData = new FormData();
    //formData.append('upload', file, 'image.jpg') 
    //this.compressPhoto(imageSrc);
    this.getImage(file);
    };
    
    getImage(pic){
      this.setState({ url: pic}, () =>
          this.savePhoto()
      );
    }

  dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}

  savePhoto = () => {
    var imageSrc = this.state.url;
    /*this.setState((prevState) => ({
        URLArray: [...prevState.URLArray, imageSrc]
      }));*/
      this.request(imageSrc);
  };

    
  handleChange(event) {
    this.request(event.target.files[0]);
  }

  request(img){
    
    console.log("getImage");
    console.log(img);
    var formData = new FormData();
    formData.append("file", img);

    fetch('https://ir-hkt-equipo-03.rj.r.appspot.com/product/search/by-image',{
        crossDomain:true,
        method: 'POST',
        headers: {
          //'Content-Type': 'multipart/form-data',
        },
        body: 
          //url: 'https://oechsle.vteximg.com.br/arquivos/ids/4116074-800-800/1584075.jpg?v=637610764419600000',
          formData
        
    })
      .then((response) => response.json())
        .then((json) => {
            console.log(json.success.data);
            localStorage.setItem("resultados_busqueda", JSON.stringify(json.success.data))
            window.location.href='/resultados';
        })
      .catch((error) => {
        console.error(error);
      });
  };

  selectPic = (pic) => {
    //click pic to select that pic, and remove others
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
          //https://www.npmjs.com/package/react-webcam
          ref={this.webcamRef}
          audio={false}
          screenshotQuality={1} // set the Quality of camera (0-1)
          forceScreenshotSourceSize
          // screenshotFormat="image/png"
          screenshotFormat="image/jpeg"
          className="webCam"
          videoConstraints={videoConstraints} //cameraSetting,eg:resolution, use which camera
          // onUserMedia={(e) => console.log(e)} // show info of media stream
        />
        <div style={{display: 'flex'}}>
            <div style={{width: '50%', marginRight:'16px'}}>
                <button style={{float: 'right'}} onClick={this.capturePhoto}>Tomar foto</button>
            </div>
            <div style={{width: '50%'}}>
                <input type="file" name="file" style={{float: 'left'}} onChange={this.handleChange} />
            </div>
        </div>
        
        {/*this.state.URLArray.map((x) => (
          <div id={x}>
            <img
              className="webCam"
              src={x} //show pic in state
              alt="Screenshot"
              onClick={() => this.selectPic(x)} // click pic to select that pic, and remove others
            />
          </div>
        ))*/}
      </>
    );
  }
}

export default WebCamCustom;