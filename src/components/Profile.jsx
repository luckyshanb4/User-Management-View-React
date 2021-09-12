import React from 'react';

function Profile(props) {
    return (
        <div className='profile' >
            <img className='photo' src={props.imagePath} />
            <h3 className='name' >{props.name}</h3>
            <h3 className='dateCreated'>{props.dateCreated}</h3>
            <h3 className='role'>{props.role}</h3>
            <h3 className='status'>{props.status}</h3>    
            
        </div>
    );
}

export default Profile;