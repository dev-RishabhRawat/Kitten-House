import  React from 'react'
import './card-list.style.css';
import {Card} from '../card/Card.component'
export const CardList = (props)=>{
    
    return (
        <div className="cardLIstStyle">
        {props.monster.map(monsters => (
            <Card key={monsters.id} monsters={monsters}/>)
          )}
        </div>
    )
}