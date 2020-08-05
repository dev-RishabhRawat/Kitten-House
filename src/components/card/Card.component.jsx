import React from 'react';
import './cardStyle.css';
export const Card = props =>(
    <div className="card-container">
    <img src={`https://robohash.org/${props.monsters.id}?set=set4&size=150x150`} alt=""/>
    <h2>{props.monsters.name}</h2>
    <p>{props.monsters.email}</p>
    </div>
)
