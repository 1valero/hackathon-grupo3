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
                                <img src={item.image} width="250px" height="250px"/>
                            </div>
                            <div className="detalle">

                                <span class="ProductName">
                                    <span class="ProductName-primary">
                                    {item.productId}
                                    </span>
                                    <span class="ProductName-alt">
                                    {item.productName}
                                            <span class="ProductName-separator">•
                                            </span>
                                            {'S/ ' + item.price}
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

      /*                   
      <div className="cards">
        <div className="content-card">
            <div className="img">
                <img src={item.image} width="50" height="50"/>
            </div>
    <div className="detalle">
        <p>
            {item.productId} {item.productName} {'S/ ' + item.price}
            </p>*/

}


  
  export default Listado;