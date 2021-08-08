import Head from '../head/head';
import Footer from '../footer/footer';
import React from 'react';

function thankyou() {
    return (

<div>
<Head/>
<div className="thankyoupage2">

<div className="cHeaderBanner"><h1>¡Gracias por preferir Oechsle.pe!</h1><span>Recibimos tu orden y estamos confirmando tu compra</span></div>

<div className="ph3-ns w-70-ns db center"><div className="mb4">
<div className="htmlMsgCustomer"><p>Hemos enviado todos los detalles sobre tu compra al correo&nbsp;<strong>prueba@gmail.com</strong>&nbsp;y también puedes el revisar el detalle&nbsp;
<a href="#miModal">aquí</a>.</p><p>Si no encuentras el correo no olvides revisar tu bandeja de spam.</p></div>
</div></div>

<div className="step-content ph3-ns w-70-ns db center js-pago-safetypay">
	
	
    <div className="widthtkp">
    <h2 className="titulo_pasos">Próximos pasos de tu pedido:</h2>
    <ul className="items_pasos">
		<li className="item_paso">
			<span className="paso paso_1">1</span>
			<span className="des_paso">
				Estamos en proceso de validación de tu compra, esto puede tomar hasta una
				hora.</span>
		</li>
		<li className="item_paso paso_2">
			<span className="paso paso_1">2</span>
			<span className="des_paso">
				Una vez que validemos tu compra, te enviaremos un código por correo para
				que realices tu pago. No olvides realizar el pago dentro de las
				siguientes <strong>3 horas</strong>, de lo contrario tu compra será
				cancelada.</span>
		</li>
		<li className="item_paso paso_3">
			<span className="paso paso_1">3</span>
			<span className="des_paso">
				Te enviaremos un correo confirmado tu compra y otro con tu comprobante
				virtual</span>
		</li>
		<li className="item_paso paso_4 envio-domicilio">
			<span className="paso paso_1">4</span>
			<span className="des_paso">
				Nos comunicaremos contigo cuando tus pedidos con despacho a domicilio
				estén en camino a tu dirección.
			</span>
		</li>
	</ul>
</div>
</div>

</div>
<Footer/>  
</div>

    );
  }
  
export default thankyou;