import React from 'react'
import {  Typography, Grid, Button } from '@material-ui/core'
import {useSpring,animated} from 'react-spring'
import '../Components/SignUp'
import { useState } from 'react'
import {Visibility,VisibilityOff, EmojiFoodBeverageOutlined} from '@material-ui/icons'
import LDicons from './LDicons'
import FieldsSub from './FieldsSub'

function Fields(props,color)
{
    
    const [springT,setSpringT]=useState(0)

    const springIn=useSpring(
        {
            
            from:{
                fontSize:'50px',
                opacity:0,
                paddingBottom:35,
                letterSpacing:5,
                color:"white",
                
                
            },
           to:{
               
                fontSize:springT?'30px':'25px',
                opacity:1,
                letterSpacing:springT===0?10:5,
                // marginLeft:springT?"150px":"0px",
                // paddingLeft:springT?"100px":"10px",
                color:springT?props.color.props.PROPS.L_D_Mode=="primary"?"white":"red":"white",
                
                
           },
                
        }
    )

    const springB=useSpring({
        to:{
            // transform: springT?"translateX(-50px)":"translateX(0px)",
            //Width:springT?"400px":"0px"
           // transform: springT?"translateY(50px)":"translateY(0px)",
        
        }
    }

)




    const toggleSpring=()=>
{

    //setSpringT(springT?false:true)     
     setSpringT((springT)=>springT+1)
    

}
    const animatedTyp=animated(Typography)

const[ic,setIc]=useState(false)

const toggleIcon=()=>
{
    setIc(ic?false:true)

}


const icon={

    props,
    ic
}

const[name,setName]=useState("")
const[password,setPassword]=useState("")
const[email,setEmail]=useState("")


const changeHandlerName=(event)=>
{
    setName(event.target.value)
    
}
const changeHandlerPassword=(event)=>
{
    setPassword(event.target.value)
   
    
}
const changeHandlerEmail=(event)=>
{
    setEmail(event.target.value)

}

const Val={
    name,
    password,
    email
}


return(
    
    <React.Fragment>
        <animated.div style={springIn} >
            {/* {console.log(props)} */}
        <div   style={{paddingLeft:"40px",paddingBottom:50}}onFocus={toggleSpring}  >

        
      {/* <Grid container>
          <Grid item xs={12}>
         */}
       
          <animatedTyp  className="text" style={springIn} style={{textShadow:"3px 2px 2px red",color:"White",paddingRight:"0px"}} onFocus={toggleSpring} > 
          {props.props}
         {/* <button  onFocus={toggleSpring}></button> */}
</animatedTyp>

        {/* <Button color={props.color.L_D_Mode} style={{borderRadius:100, marginRight:"0px"}} variant="text" onClick={toggleIcon} >
        {
            props.props=="Password"?<LDicons props={icon}  />:
            props.props=="Verify Password"?<LDicons props={icon}  />:
            null
        }
        </Button> */}
        
        {/* </Grid>
      
        
        </Grid> */}
        {/* <animated.div style={springB}>  */}
        
        {/* <input className="input" 
        type=
        {props.props=="Password"?!ic?"password":"name":props.props=="Verify Password"?!ic?"password":"name":
        props.props=="Submit"?"submit":"name"} 
        value={props.props=="Username"?name:props.props=="Password"?password:props.props=="Email"?email:null}
        name={props.props}
        on={props.props=="Username"?changeHandlerName:props.props=="Password"?changeHandlerPassword:props.props=="Email"?changeHandlerEmail:null}
        >
        </input> */}
        {/* {console.log("name = ",name,"password = ",password,"email = ",email)} */}


        

        {/* </animated.div> */}
      
        </div>  
        
        </animated.div>

        <FieldsSub props={props} values={Val} />
        {/* {props.props=="Email"?<FieldsSub props={props} values={Val} />:null } */}

    </React.Fragment>

)
}export default Fields