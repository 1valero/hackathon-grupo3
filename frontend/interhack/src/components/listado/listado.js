import React from 'react';

class Listado extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: ''}
    }

    /*handleChange(event) {
        this.setState({value: event.target.value});
      }*/
    
    handleSubmit(event) {
        window.location.href='/detalle'
    }

    item(data){
        return(
            data.map(item=>

                <div className="col-3">
                        <div className="ProductCard">
                            <div className="ProductCard-image">
                                <img src="https://oechsle.vteximg.com.br/arquivos/ids/2932928/1792953.jpg" width="250px" height="250px"/>
                            </div>
                            <div className="detalle">

                                <span class="ProductName">
                                    <span class="ProductName-primary">
                                    {item.productId}
                                    </span>
                                    <span class="ProductName-alt">
                                        GENERO
                                            <span class="ProductName-separator">•
                                            </span>
                                        COLOR
                                    </span>
                                    </span>

                                <div className="content-button">
                                    <button className="btn-oe btn-oe-pay" onClick={this.handleSubmit}>Comprar</button>
                                    <button className="btn-oe btn-oe-pay" onClick={this.handleSubmit}>Ver detalle</button>
                                </div>
                            </div>
                            
                        </div>
                </div>
                )
        );
    }

    render() {
        const {list} = this.props 
        return (
          <div className="row">
                {this.item(list)}
          </div>
        );
      }

}


  
  export default Listado;