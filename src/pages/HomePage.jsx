import React, {useState, useEffect } from 'react';
import Profile from '../components/Profile'
import axios from 'axios';
import Header from '../components/Header'
import Footer from '../components/Footer';


function HomePage(props) {
    const[profiles,setProfiles]=useState([]);
   
    useEffect(() => {
        async function getNotes() {
          axios.get("https://reqres.in/api/users",  { crossdomain: true }).then(response => {
                  
                  
                  setProfiles(response.data.data);
                  
                 
                });
              
        }
      
        getNotes();
      }, []) // An empty array means the callback will only execute once


    return (
        
        <div>

          <Header />  

           { profiles.length==0 ? <h1> No Data</h1>:
             
             
             profiles.map((profile,index)=>{
            console.log(profile);
                    return(
                        <Profile 
                            key={profile.id}
                            imagePath={profile.avatar} 
                            name={profile.first_name+" "+profile.last_name}
                            dateCreated="09/09/2021" 
                            role="Eng" 
                            status="Active"/>
                    );
           })}
           

           <Footer />  
            
        </div>
    );
}

export default HomePage;