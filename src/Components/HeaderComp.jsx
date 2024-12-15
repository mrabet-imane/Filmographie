import React,{Component} from "react";
import Filmographie from "../Images/Filmographie.png"
import App from "../App.css";

const HeaderC=()=>{
  return(
    <header>
       <div className="ImageContent">
            <img src={Filmographie} alt="error" className="Filmographie"/>
       </div>
        <nav>
            <a href="#">Home</a>
            <a href="#">Movies</a>
            <a href="#">Favories</a>
            <a href="#">News</a>
        </nav>
    </header>
  )
}
export default HeaderC