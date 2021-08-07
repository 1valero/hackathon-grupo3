import React, { Component } from "react";
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
    //this.compressPhoto(imageSrc);
    this.getImage(imageSrc);
  };
  getImage(pic){
    this.setState({ url: pic}, () =>
        this.savePhoto()
    );
  }

  savePhoto = () => {
    var imageSrc = this.state.url;
    console.log(imageSrc);
    /*this.setState((prevState) => ({
        URLArray: [...prevState.URLArray, imageSrc]
      }));*/
      this.getImage(imageSrc);
  };

  getImage = (imageSrc) => {
    return fetch('https://ir-hkt-equipo-03.rj.r.appspot.com/product/search/by-image',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          url: 'https://oechsle.vteximg.com.br/arquivos/ids/4116074-800-800/1584075.jpg?v=637610764419600000',
          //url: imageSrc
        })
    })
      .then((response) => response.json())
      .then((json) => {
          console.log(json.success.data);
          localStorage.setItem("resultados_busqueda", JSON.stringify(json.success.data))
          window.location.href='/resultados';
        return json.movies;
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
        <div>
            <button onClick={this.capturePhoto}>Tomar foto</button>
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