import React from 'react';

function Profile(props) {
    return (
        <div className='profile' >
            <div className='photo'>
                <img  src={props.imagePath} />
            </div>
            <div className='name'>
                <h3  >{props.name}</h3> 
            </div>
            <div className='dateCreated'>
                <h3 >{props.dateCreated}</h3>
            </div>
            <div className='role'>
                <h3 >{props.role}</h3>
            </div>
            <div className='status'>
                <h3 >{props.status}</h3> 
            </div>
       
        </div>
    );
}

export default Profile;