import { React, Component } from 'react';

class Head extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.dat = {
            text: ""
        }
    }

    onKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.search();
          }
    }

    onChange(text) {
        this.dat.text = text;
    }

    search() {
        window.location.href = "/items?search=" + this.dat.text;
    };

    render() {
        return (
            <header>
                <div className="header_cont">
                    <img src="/assets/Logo_ML.png" alt="logo" />
                    <div className="criterio">
                        <input type="text" placeholder="Nunca dejes de buscar"  onChange={(e) => { this.onChange(e.target.value) }}  onKeyDown={(e) => { this.onKeyDown(e) }}/>
                        <p className="btn" onClick={() => { this.search() }}><img src="/assets/ic_search.png" alt="lupa"/></p>              
                    </div>
                </div>
            </header>
            )
    }
}

export default Head;

