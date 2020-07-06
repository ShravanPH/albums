import React, { useState } from 'react'
import { CssBaseline, Grid, Typography, CardMedia, Card, Divider, TextField, Input, Button } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import {useSpring,animated} from 'react-spring'
import "../App.css"
import Fields from './Fields'
import LDicons from './LDicons'
import axios from 'axios'
function SignUp(props)
{

    const[username,setName]=useState()
    const[password,setPassword]=useState()
    const[verPass,setVerPass]=useState()
    const[email,setEmail]=useState()
    const[borderVal,setBorderVal]=useState()
    const[borderValSh,setBorderValSh]=useState()
    const[springT,setSpringT]=useState(0)
    const[count,setCount]=useState(false)
    const[ar,setAr]=useState(["Username","Password","Verify Password","Email"])
    const[ic,setIc]=useState(false)
    const[passCheck,setPassCheck]=useState(false)
    const icon={props,ic}
    const animatedTyp=animated(Typography)
    const axios=require('axios').default
 

   const springIn=useSpring( {
            
            from:{
                fontSize:'20px',
                opacity:0,
                paddingBottom:35,
                letterSpacing:5,
                color:"white",
                
                
            },
           to:{
               
                fontSize:springT?'45px':'20px',
                opacity:1,
                letterSpacing:springT===0?25:5,
                // marginLeft:springT?"150px":"0px",
                // paddingLeft:springT?"100px":"10px",
                color:springT?props.PROPS.L_D_Mode=="primary"?"white":"red":"white",
                
                
           },
                
    })

    const toggleSpring=()=>{setSpringT((springT)=>springT+1); console.log(springT)}
    const prop={toggleSpring,props,springIn,springT}

    const toggleIcon=()=>{setIc(ic?false:true)}

    const changeHandlerName=(event)=>{setName(event.target.value)}

    const changeHandlerEmail=(event)=>{setEmail(event.target.value)}

    const changeHandlerPassword=(event)=>
    {
        setPassword(event.target.value)

        if(event.target.value==''){
            setBorderVal("solid white")
            setBorderValSh("")
            
        
        }
        else if(event.target.value==verPass)
        {
            setBorderVal("solid #00FF3F")
            setBorderValSh("#00FF3F")
        
        }
        
        else if(event.target.value!=verPass){
            setBorderVal("dashed #f30000")
            setBorderValSh("#f30000")
        
        }
    
    }
    const changeHandlerVerifyPassword=(event)=>
    {
        if(event.target.value!=password)
        {
            setBorderVal("dashed #f30000")
            setVerPass(event.target.value)
            setBorderValSh("#f30000")
            setPassCheck(false)
        }
        else if(event.target.value==''){
            setBorderVal("solid white")
            setVerPass(event.target.value)
            setBorderValSh("")
            setPassCheck(false)
        }
        else if(event.target.value==password)
        {
        
            setBorderVal("solid #00FF3F")
            setBorderValSh("#00FF3F")
            setVerPass(event.target.value)
            setPassCheck(true)
           
        }
    

        
    }

    const submitHandler=(event)=>
    {
    event.preventDefault()
    if(passCheck)
{
    axios.post('https://bruhbruh.free.beeceptor.com/my/api/path ',{username,password,email})
    .then(res=>{
        console.log(res)
    })
    console.log("submitted")
    }

else{

    console.log("not submitted")

}
    } 
    return( 
        <React.Fragment>
            <CssBaseline>
                <BrowserRouter>
                    <Grid  container   style={{borderRadius:200,boxShadow:"0px 0px 40px 1px "+borderValSh,marginTop:50,width:1200,marginLeft:25,marginRight:150,height:850}} >
                        <Grid item xs >
                            <Card style={{height:850,borderRadius:"25px 25px"}}>
                            <Typography color={props.PROPS.L_D_Mode} style={{marginBottom:10,marginLeft:25,marginRight:10,fontSize:"35px"}} className={props.PROPS.classes.typo} >
                                   CREATE AN ACCOUNT.
                            </Typography>
                                <Divider style={{height:3,width:650,marginLeft:25,marginBottom:70}} ></Divider>
                                    <form onSubmit={submitHandler}> 
                                        <input className="input" type="name" onChange={changeHandlerName}/>    
                                        <Fields props={"Username"} color={prop} onClick={toggleSpring}/>
                                        <input className="input" type={!ic?"password":"name"} value={password} onChange={changeHandlerPassword} 
                                            style={{border:"0px "+borderVal,borderBottom:"4px "+borderVal}}/>


                                        <Grid container>
                                            <Grid item xs={7}> 
                                                        <Fields props={"Password"} color={prop} onClick={toggleSpring} />
                                            </Grid>
                                            <Grid item xs={2}> 
                                                        <Button color={props.PROPS.L_D_Mode} style={{borderRadius:100, marginRight:"0px"}} variant="text" onClick={toggleIcon} >
                                                                    <LDicons props={icon} val={"Password"} />
                                                        </Button>
                                            </Grid>
                                        </Grid>

                                        <input className="input" type={!ic?"password":"name"} value={verPass} onChange={changeHandlerVerifyPassword}  
                                        style={{border:"0px  "+borderVal,borderBottom:"4px "+borderVal}}/>


                                        <Grid container>
                                            <Grid item xs={7}> 
                                                        <Fields props={"Verify Password"} color={prop} onClick={toggleSpring} />
                                            </Grid>
                                            <Grid item xs={1}> 
                                                        <Button color={props.PROPS.L_D_Mode} style={{borderRadius:100, marginRight:"0px"}} variant="text" onClick={toggleIcon} >
                                                                    <LDicons props={icon} val={"Verify Password"} />
                                                        </Button>
                                            </Grid>
                                        </Grid>

                    
                                        <input className="input" type="name" onChange={changeHandlerEmail}/>
                                        <Fields props={"Email"} color={prop} onClick={toggleSpring}/>
                                        
  
                                        <input className="input" 
                                        style={{textShadow:"1px 1px 2px #ff0000", borderBottom:"0px solid white",borderRadius:"200px",
                                        width: "135px",marginLeft:"280px",marginTop:"30px",marginBottom:"150px",position:"absolute",
                                        zIndex:1,padding:10,background:"#10041A",
                                        cursor:"pointer",boxShadow:"1px 1px 1px 0px "+borderValSh}}type="Submit"/>

                                    </form>                            
                            </Card>
                        </Grid>

                        <Grid item xs={5}>
                            <Card style={{height:850,width:500,borderRadius:"0px 25px 25px 0px"}}>
                                <CardMedia image={require("../Images/oleksandra.jpg")}  
                                style={{height:850,width:500}}>
                                </CardMedia>
                            </Card>
                        </Grid>
                   </Grid>
                </BrowserRouter>
            </CssBaseline>
        </React.Fragment>



    )
}export default SignUp