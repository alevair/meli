import { React, Fragment } from 'react';
import {useLocation} from "react-router-dom";

import Head from "./head"
import Tree from "./tree"
import Item from "./item"

export default function ViewProduct() {

    const loc = useLocation();
    const iditem = loc.pathname.split("/")[loc.pathname.split("/").length - 1];
    
    return (
        <Fragment>
            <Head></Head>
            <main>
                <Tree></Tree>
                <div className="data_cont">
                    <Item iditem={iditem}></Item>
                </div>
            </main>
        </Fragment>
        );
}