
import { Component, Fragment } from 'react';

import Tile from "./tile"
import TileDiv from "./tilediv"
import Tree from "./tree"

import Get from "./meli"

class Tiles extends Component {

    constructor(props) {
        super(props);
        this.state = {
          response: null,
          items: null
        };
    }

    componentDidMount() {
        Get("sites/MLA/search?q=" + this.props.search)
        .then((res) => {

            let its = [];
            for(let l1=0; l1<res.results.length; l1++) {
                let resu = res.results[l1];
                
                let price = Number(Number(resu.price).toFixed(0)).toLocaleString("de-DE");

                its.push({
                    id: resu.id,
                    title: resu.title,
                    currency_id: resu.currency_id,
                    price: price,
                    ship: resu.shipping.free_shipping,
                    thumbnail: resu.thumbnail,
                    location: resu.address.state_name,
                    last: l1 === 3 ? true : l1 === res.results.length - 1 ? true : false
                }) 

                if(its.length === 4) {
                    break;
                }
            }

            this.setState({ response: res, items: its});
        }).catch((err) => {
            alert(err);
        });
    }

    render() {
        if(this.state.items === null) {
            return(
                <div className="data_cont">Loading...</div>
            )

        } else {
            const list = this.state.items.map((i) => <Fragment key={"f" + i.id}>
                        <Tile key={i.id} idtile={i.id} picture={i.thumbnail} price={i.price} desc={i.title} from={i.location} ship={i.ship} currency={i.currency_id}/>
                        <TileDiv key={"s" + i.id} hid={i.last}></TileDiv>
                    </Fragment>
            );

            return (
                <Fragment>
                    <Tree filters={this.state.response.filters}></Tree>
                    <div className="data_cont">
                        {list}
                    </div>                
                </Fragment>
            )
        }
    }
}

export default Tiles;