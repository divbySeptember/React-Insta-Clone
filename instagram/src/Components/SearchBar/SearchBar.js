import React from "react";
import logo from "instagram";
import compass from "img/compass";
import heart from "img/heart";
import person from "img/user";

const SearchBar = () => {
        return (
            <div className="flex search">
                <div className="flex div-25">
                    <img className="search__Images search__Images-logo" src={logo}/>
                    <hr/>
                    <h4 className="" >Instagram</h4>
                </div>
                <div className="div-50">
                    <input className="search__input" type="text" placeholder="search"/>
                </div>
                <div className="div-25">
                    <img className="search__Images search__Images-group" src={compass}/>
                    <img className="search__Images search__Images-group" src={heart}/>
                    <img className="search__Images search__Images-group" src={person}/>
                </div>
            </div>
        );
}

export default SearchBar