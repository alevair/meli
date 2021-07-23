import { Component } from 'react';
import "./App.css"

class TileDiv extends Component {
    render() {

        return (
            <div className={this.props.hid  ? "hidden" : "tile_div"}></div>
            )
    }
}

export default TileDiv;