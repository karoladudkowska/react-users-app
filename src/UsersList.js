import React from 'react';
import './UsersList.css';


function UsersList(props) {

    let usersList = props.usersList;
    console.log(UsersList);
    let usersLiElements = usersList.map(user =>
        <li key={user.id}>{user.name}<span onClick={() => props.removeUserMethod(user.id)}>X</span></li >);

    // let usersLiElements = usersList.map((user) => {
    //     return <li>{user}<span>X</span></li>;
    // jeden parametr user więc można bez nawiasów oraz jeden retrn więc mozna słowo reuturn wywalić i nawias klamrowy jak wyżej

    return (
        <ul className="the-list">
            {usersLiElements}
            {/* <li>Hans <span>X</span></li> */}
        </ul>
    );
}


export default UsersList;