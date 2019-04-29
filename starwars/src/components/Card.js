import React, { Component } from 'react';
import './StarWars.css'

const Card = function (props){


    return(
 <div className="card">
 <div className="personName">
    {props.cardProp.name}
 </div>
 <ul className="content">

    <li>height: {props.cardProp.height} inches</li>
    <li> mass: {props.cardProp.mass} Kilograms</li>
    <li>hair color: {props.cardProp.hair_color} </li>
   <li>skin color: {props.cardProp.skin_color} </li> 
   <li>eye color: {props.cardProp.eye_color} </li> 
   <li>birth year: {props.cardProp.birth_year} </li> 
   <li>gender: {props.cardProp.gender} </li> 

 </ul>
 
 </div>)
 }

 export default Card