import { Component } from 'react';

import Get from "./meli"

class Tile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            price: props.price//,
            //id: null
        };
    };

    componentDidMount() {
        Get("currencies/" + this.props.currency)
        .then((res) => {

            let price = res.symbol + " " + this.props.price;

            this.setState({ price: price}); //, idtile: this.props.idtile});
        }).catch((err) => {
            alert(err);
        });
    }

    onClick(id) {
        window.location.href = "/items/" + id;
    };

    render() {

        const style = {
            display: this.props.ship === "false" ? "none" : ""
        }

        return (
            <div className="tile colblack">
                <img className="pic" src={this.props.picture} width="180" height="180" alt="producto" title={this.props.desc} onClick={() => {this.onClick(this.props.idtile)}}/>
                <div className="pan">
                    <div className="tile_price">{this.state.price} <img src="assets/ic_shipping.png" alt="shipping" style={style} title="Envío gratis"/></div>
                    <div className="tile_desc" title={this.props.desc} onClick={() => {this.onClick(this.props.idtile)}} >{this.props.desc}</div>
                </div>
                <div className="pan2">
                    <div className="tile_from">{this.props.from}</div>
                </div>
            </div>
            )
    }
}

export default Tile;