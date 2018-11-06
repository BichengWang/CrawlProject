import React, { Component } from 'react';
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-solid-svg-icons"

class SearchBar extends Component {
    render() {
        return (
            <div class="topnav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <div class="search-container">
                    <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit"><FontAwesomeIcon icon={Icons.faSearchPlus} size="2x" /></button>
                    </div>
                </div>
                );
          }   
      };
      
      export default SearchBar;
