import React from 'react';
import './MovesList.css';
import UserService from '../../services/UserService'
const MovesList = ({ title, moveList, inHome }) => (

    <div className="moves">
        <h5 className="h5">{title}</h5>
        <ul className="move-list">
            {moveList.map(move => (
                <li key={move.at}>
                    <div className="flex-column">
                        {inHome && <h6 className="h6">To {move.to}</h6>}
                        <h6 className="h6">At :{UserService.formatted_date(move.at)}</h6>
                        <h6 className="h6">Amount :{move.amount}</h6>
                    </div>

                </li>
            ))}
        </ul>
    </div>

);

export default MovesList;