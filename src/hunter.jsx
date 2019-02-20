import React from 'react';
import './hunter.css';

const Hunter = ({hunters, deleteHunter}) => {
      const hunterList = hunters.map((hunter,idx) => {
        return hunter.age > 20 ? (
            <ul key={idx}>
                <li>Name: {hunter.name}</li>
                <li>Age: {hunter.age}</li>
                <li>Sword: {hunter.sword}</li>
                <li>Devil Trigger: {hunter.devilTrigger}</li>
                <button onClick={() => {deleteHunter(hunter.id)}}>Delete hunter</button>
            </ul>
            ) :  null; 
        })
        
        return (
            <div>
                {hunterList}
            </div>
        )
}

export default Hunter;
