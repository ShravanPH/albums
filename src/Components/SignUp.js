import React, { useState } from 'react'
import { CssBaseline, Grid, Typography, CardMedia, Card, Divider, TextField, Input, Button } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import {useSpring,animated} from 'react-spring'
import "../App.css"
import Fields from './Fields'
import LDicons from './LDicons'

function SignUp(props)
{

    const [springT,setSpringT]=useState(0)

    const springIn=useSpring(
        {
            
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
                
        }
    )

    const toggleSpring=()=>
    {
    
        //setSpringT(springT?false:true)     
         setSpringT((springT)=>springT+1)
         console.log(springT)
        
    
    }

const toggleCount=()=>
{

    console.log("bruh")

}


const[ar,setAr]=useState(["Username","Password","Verify Password","Email"])
const[count,setCount]=useState(1)
const prop={
        
    toggleSpring,
    props,
    springIn,
    springT,
    toggleCount
}


const[ic,setIc]=useState(false)

const toggleIcon=()=>
{
    setIc(ic?false:true)

}

const icon={

    props,
    ic
}


const animatedTyp=animated(Typography)
  
    return( 
        <React.Fragment>
            <CssBaseline>
                <BrowserRouter>
                    <Grid  container   style={{borderRadius:200,boxShadow:"0px 0px 40px 1px #FF3535",marginTop:50,width:1200,marginLeft:25,marginRight:150,height:1000}} >
                        <Grid item xs >
                            <Card style={{height:1000,borderRadius:"25px 25px"}}>
                            <Typography color={props.PROPS.L_D_Mode} style={{marginBottom:10,marginLeft:25,marginRight:10,fontSize:"35px"}} className={props.PROPS.classes.typo} >
                                   CREATE AN ACCOUNT.
                            </Typography>
                            <Divider style={{height:3,width:650,marginLeft:25,marginBottom:100}} ></Divider>



{
    ar.map(
            (m)=><div>

<Grid container>
          <Grid item xs={m=="Password"?6:10}> 
          <animated.div style={springIn} onFocus={toggleSpring} >
                            <Fields props={m} color={prop} onClick={toggleSpring} />
            </animated.div>
                            </Grid>
                            <Grid item xs={1}> 
                            <Button color={props.PROPS.L_D_Mode} style={{borderRadius:100, marginRight:"0px"}} variant="text" onClick={toggleIcon} >
                                {
                                    m=="Password"?<LDicons props={icon} val={m} />:
                                    m=="Verify Password"?<LDicons props={icon} val={m} />:
                                    console.log(null)
                                }
                                </Button>
            </Grid>
           
                        <input  className="input" 
                      
                            type={m=="Password"?!ic?"password":"name":m=="Verify Password"?!ic?"password":"name":
                            m=="Submit"?"submit":"name"}
                        
                            ></input>
        
</Grid>                           
                            
                            
                            
                            
                            
                            
                            </div>
    )
}
                            
                           
                      
                          



                         
                            </Card>
                        
                        </Grid>
                            

                        
                        <Grid item xs={5}  >
                            <Card style={{height:1000,width:500,borderRadius:"0px 25px 25px 0px"}}>
                                <CardMedia image={require("../Images/oleksandra.jpg")}  
                                style={{height:1000,width:500}}>
                                </CardMedia>
                            </Card>
                        </Grid>
                        <Grid item xs={5} >
                         
                        {/* <animatedTyp style={springIn} style={{textShadow:"3px 2px 2px red",color:"White",paddingRight:"30px"}}> Submit </animatedTyp> */}
                    
                    </Grid>
                   </Grid>
                </BrowserRouter>
            </CssBaseline>
        </React.Fragment>



    )
}export default SignUp