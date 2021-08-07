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
                    <div className="cards">
                        <div className="content-card">
                            <div className="img">
                                <img src={item.image} width="50" height="50"/>
                            </div>
                            <div className="detalle">
                                <p>
                                    {/*item.productId*/} {item.productName} {'S/ ' + item.price}
                                </p>
                                <div className="content-button">
                                    <button style={{marginRight: '16px'}} onClick={this.handleSubmit}>Comprar</button>
                                    <button  onClick={this.handleSubmit}>ver detalle</button>
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
          <div className="listado">
                {this.item(list)}
          </div>
        );
      }

}


  
  export default Listado;