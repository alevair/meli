import { React, Fragment } from 'react';
import {useLocation} from "react-router-dom";

import Head from "./head"
import Tiles from "./tiles"

export default function ViewResults() {

    const qstring = useLocation().search;    
    const search = new URLSearchParams(qstring).get('search');

    return (
        <Fragment>
            <Head></Head>
            <main>
                <Tiles search={search}></Tiles>
            </main>
        </Fragment>
        );
}