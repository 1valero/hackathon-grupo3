import React from 'react';

function footer() {
    return (
      <div class="footer">
      <div>
      <div class="ft-box-social d-none d-lg-block">
        <div class="container">
          <p>Síguenos en</p>
          <a class="ft-link link-yt" href="https://www.youtube.com/user/TiendasOechslePeru" target="_blank" rel="noopener">
            <i class="icon-rd-yotube"></i>  
          </a>
            <a class="ft-link link-ig" href="https://www.instagram.com/oechsleperu/" target="_blank" rel="noopener">
              <i class="icon-rd-instagram"></i>
            </a>
            <a class="ft-link link-fb" href="https://es-es.facebook.com/tiendasoechsle" target="_blank" rel="noopener">
              <i class="icon-rd-facebook"></i>
            </a>
            <p>Medios de pago</p>
            <div class="text-center img-footer-payment">
              <img src="https://www.oechsle.pe/arquivos/Mediodepago-home-desktop.png" alt=""/>
            </div>
            <div class="ft-box-store d-block d-lg-none"></div>
            <p class="module-store">
              <img src="https://www.oechsle.pe/arquivos/oerd-vector-footer.png?v=637029748737300000" alt=""/>
              <i class="icon-rd-footer-padlock"></i>Tienda 100% Segura
              <img class="img-footer-vtex" src="https://www.oechsle.pe/arquivos/oerd-img-footer-vtex.png" alt=""/>
            </p>
            </div>
          </div>  
      </div>  

      <div>
       <p class="copyright">InterHack S.A. Todos los derechos reservados.</p>
      </div>
      
      
      
      </div>

    );
  }
  
export default footer;