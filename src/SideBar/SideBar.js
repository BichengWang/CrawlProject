import React, { Component } from 'react';
import './SideBar.css'

class SideBar extends Component {
    render() {
        return (
            <div class="sidenav">
                <a href="#about">MAKEUP</a>
                <a href="#services">SKINCARE</a>
                <a href="#clients">FRANGRANCE</a>
                <a href="#contact">HAIR</a>
                <a href="#">BATH BODY</a>
                <a href="">MEN</a>
            </div>

        );
    }
};

export default SideBar;
