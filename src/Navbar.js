import React, { Component } from 'react';
import {anchors} from './components/Fullpage.js'
import './css/Navbar.css';

class Navbar extends Component {
    render() {
        const headers = anchors;
        return (
            <ul id="nav">
               <li data-menuanchor={headers[0]} className='active'><a href={'#' + headers[0]}>{headers[0]}</a></li>
               <li data-menuanchor={headers[1]}><a href={'#' + headers[1]}>{headers[1]}</a></li>
               <li data-menuanchor={headers[2]}><a href={'#' + headers[2]}>{headers[2]}</a></li>
               <li data-menuanchor={headers[3]}><a href={'#' + headers[3]}>{headers[3]}</a></li>
               <li data-menuanchor={headers[4]}><a href={'#' + headers[4]}>{headers[4]}</a></li>
            </ul>
        );
    }
}

/*
 {this.props.headers.map(function(name, index) {
                    return <li data-menuanchor={name} key={index}><a href=''{name}</li>
                })}
*/

export default Navbar;

