import { Component } from 'react';
import "./App.css"

import Get from "./meli"

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: null
        };
    }

    componentDidMount() {
        Get("items/" + this.props.iditem)
        .then((res) => {

            // Si esta en revision, ignoramos el resto de las llamadas
            if(res.status === "under_review") {
                this.setState({response: res});
            } else {

                Get("items/" + this.props.iditem + "/description")
                .then((desc) => {
                    res.desc = desc;
    
                    Get("currencies/" + res.currency_id)
                    .then((curr) => {
                        res.curr = curr;
        
                        this.setState({response: res});
                    })
                    .catch((err) => {
                        alert(err);
                    });
    
                })
                .catch((err) => {
                    alert(err);
                });
    
            }            
        })
        .catch((err) => {
            alert(err);
        });
    }

    render() {
        let res = this.state.response;

        if(res === null) {
            return (
                <div className="item colblack">Loading...</div>
                )
        } else {
            if(res.status === "under_review") {

                return (
                    <div className="item colblack">Producto en revisión</div>
                )

            } else {

                let pic = res.pictures.length > 0 ? res.pictures[0].url : res.thumbnail;
                let price = Number(res.price.toFixed(2).split(".")[0]).toLocaleString("de-DE");
                let decimals = res.price.toFixed(2).split(".")[1];
    
                return (
                    <div className="item colblack">
                        <div className="item_col1">
                            <img src={pic} width="680" height="680" alt="articulo"/>
                            <div className="item_col1_pan">
                                <div className="item_title">Descripción del producto</div>
                                <div className="item_desc">{res.desc.plain_text}</div>
                            </div>
                        </div>
                        <div className="item_col2">
                            <div className="item_obs">{res.condition === "new" ? "Nuevo" : "Usado"} - {res.sold_quantity} vendidos</div>
                            <div className="item_title">{res.title}</div>
                            <div className="item_price">{res.curr.symbol + " " + price}<span className="item_price_dec">{decimals}</span></div>
                            <div className="btn_act">Comprar</div>
                        </div>
                    </div>
                    )
            }
        }

    }
}

export default Item;