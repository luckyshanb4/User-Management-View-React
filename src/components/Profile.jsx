import React from 'react';

function Profile(props) {
    return (
        <div>
            <img src={props.imagePath} />
            <h3>{props.name}</h3>
            <h3>{props.dateCreated}</h3>
            <h3>{props.role}</h3>
            <h3>{props.status}</h3>    
            
        </div>
    );
}

export default Profile;