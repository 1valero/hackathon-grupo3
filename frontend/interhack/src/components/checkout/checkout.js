import Head from '../head/head';
import Footer from '../footer/footer';
import React from 'react';

function checkout() {

  var carrito =  localStorage.getItem('carrito');
  carrito = JSON.parse(carrito);

  function handleFinalizar(evt){
    window.location.href='/thankyou';
  }

    return (

<div>
<Head/>
<div className="checkout">

<div className="">
            <div className="">

                <div className="">
                    <div className="">
                        <div className="row step-row">
                            <div className="col-4">
                                <a className="btn btn-primary button-no-gradient btn-circle btn-step">1</a>
                                <p>Detalle</p>
                            </div>
                            <div className="col-4">
                                <a className="btn btn-default button-no-gradient btn-circle" disabled="disabled">2</a>
                                <p>Resumen</p>
                            </div>
                            <div className="col-4">
                                <a className="btn btn-default button-no-gradient btn-circle" disabled="disabled">3</a>
                                <p>Compra</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>

<h2>PÁGINA DE PAGO</h2>
<p>COMPRA TOTALMENTE SEGURA.</p>
<div className="row2">
  <div className="col-75">
    <div className="container">
      <form action="">
        <div className="row2">
          <div className="col-50">
            <h3>Dirección de Envío</h3>
            <label for="fname"><i className="fa fa-user"></i> Usuario comprador</label>
            <input type="text"  placeholder="John M. Doe"/>
            <label for="email"><i className="fa fa-envelope"></i> Correo</label>
            <input type="text" placeholder="john@example.com"/>
            <label for="adr"><i className="fa fa-address-card-o"></i> Dirección</label>
            <input type="text" placeholder="542 W. 15th Street"/>
            <label for="city"><i className="fa fa-institution"></i> Ciudad</label>
            <input type="text"  placeholder="New York"/>

            <div className="row2">
              <div className="col-50">
                <label for="state">State</label>
                <input type="text"  placeholder="NY"/>
              </div>
              <div className="col-50">
                <label for="zip">Zip</label>
                <input type="text" placeholder="10001"/>
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Método de Pago</h3>
            <label for="fname">Aceptamos</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa"></i>
              <i className="fa fa-cc-amex"></i>
              <i className="fa fa-cc-mastercard"></i>
              <i className="fa fa-cc-discover"></i>
            </div>
            <label for="cname">Nombre de la Tarjeta</label>
            <input type="text"  placeholder="John More Doe"/>
            <label for="ccnum">Número de Tarjeta</label>
            <input type="text" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Mes de expiración</label>
            <input type="text"  placeholder="September"/>
            <div className="row2">
              <div className="col-50">
                <label for="expyear">Año de expiración</label>
                <input type="text"  placeholder="2018"/>
              </div>
              <div className="col-50">
                <label for="cvv">CVV</label>
                <input type="text" placeholder="352"/>
              </div>
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox" checked="checked" /> Aceptar los terminos y condiciones de uso
        </label>
        <input type="button" value="Confirmar compra" className="btn" onClick={() => handleFinalizar()}/>
      </form>
    </div>
  </div>
  <div className="col-25">
    <div className="container">
      <h4>Resumen <span className="price"><i className="fa fa-shopping-cart"></i> <b>{carrito.length}</b></span></h4>
      {
        carrito.map(item => 
            <p>{item.productName}<span className="price">S/ {item.price}</span></p>
          )
      }
      <hr/>
      {/*<p>Total <span className="price"><b>$30</b></span></p>*/}
    </div>
  </div>
</div>
</div>
<Footer/>  
</div>

    );
  }
  
export default checkout;





