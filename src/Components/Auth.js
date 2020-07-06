import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import axios from 'axios'
import Data from './Data'
function Auth()
{
    const axios=require('axios').default

    const client_id=563865970932811
    const client_secret="e3e961edaed1d2173e415ab387d5a8bb"
    const long_access_token="IGQVJXVHM0ZADJISjFpdXpzenVaNVFxS29CSFhlVW9qb3JnelYzU3p5Q3c3dGpnUDlJUzZAzMlowYU53ejlobjNNSDB6Q0MtRDhLSk94aFMzb2FvOTZAadGd0OU0wal9JTlNrS3UzeF9n"
    const design_access_token="IGQVJXM3gzS244V3hheUhpVEk1ZAjZAJSXNnODRhNF9ZAaFhleGVJcXlxVHJRVGkySnRKWk1UYjhJaU1aeml0akZAkcHZAWZA3R5Q3ZA1amZAzTTB3SGZAkd0thR2gwakEwektjUFgzV3A1VnFCOG04ekJ5NTZAfbAZDZD"
    const user_id="563865970932811"

    const[data,setData]=useState(null)

{
    //get name and id
    // axios.get(`https://graph.instagram.com/17841400588245009?fields=id,username&access_token=${long_access_token}`)
    // .then((res)=>console.log(res))

    //get long lived access token 
    // axios.get("https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=e3e961edaed1d2173e415ab387d5a8bb&access_token=IGQVJXblpKdEdWdFFXSnZAHcFNaT21jZAHdLQVJ1UXpTMGlsbnNzOEV4N1hQYkhEaFNqZAVVtQ1A3cUJYVHVfZAjcyWGRoUXhxT19XQXVlaWNjYUJVWmxjZAW0zRnV5RXk1QjNGckJnYnl4VUZAxQnpGMl9hNGQ3NkJiclJ5Wk5n")
    // .then((res)=>console.log(res))
    
    //get authorization from user
    //axios.get(`https://www.instagram.com/oauth/authorize?client_id=563865970932811&redirect_uri=https://localhost:3000/auth&scope=user_profile,user_media&response_type=code`)
   // .then((res)=>console.log(res))
}
    // axios.get(`https://graph.instagram.com/me/media?fields=id,caption&access_token=${design_access_token}`)
    // .then((res)=>console.log(data))

    
{
        // data.map((d)=>console.log(data))
    // axios.get(`https://graph.instagram.com/${data}?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJ...`)

    
        //long lived access token
        //"IGQVJXVHM0ZADJISjFpdXpzenVaNVFxS29CSFhlVW9qb3JnelYzU3p5Q3c3dGpnUDlJUzZAzMlowYU53ejlobjNNSDB6Q0MtRDhLSk94aFMzb2FvOTZAadGd0OU0wal9JTlNrS3UzeF9n"
}


// axios.get(`https://graph.instagram.com/me/media?access_token=${design_access_token}&fields=id,username,caption,media_type,media_url`)
// .then((res)=> 
//     {   if(data==null)
//         {setData(res.data.data)}
//     }).then(console.log(data))

console.log(Data.map(e=>e.id))

    return(


        <div>


        {
    Data.map(element => 
        <div>
        <h1 style={{color:"white",marginLeft:100}}>id : {element.id}   </h1> 
        <img src={element.media_url} style={{widht:500,height:500,marginLeft:100,borderRadius:20}}></img>
        <h1 style={{color:"white",marginLeft:100}}>username : {element.username}</h1>
        <h1 style={{color:"white",marginLeft:100}}>caption : {element.caption}</h1>
        <h1 style={{color:"white",marginLeft:100}}>media_type : {element.media_type}</h1>
        </div>

         )
         
         }

    

        </div>



    )
}
export default Auth