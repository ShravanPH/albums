import React,{useState,useRef, useEffect, Fragment} from 'react'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import {Typography, Divider,Button,AppBar, CssBaseline,Toolbar,MobileStepper,Paper, Grid,SwipeableDrawer, Backdrop, Popover,Card, CardMedia, CardActionArea} from '@material-ui/core'
import { makeStyles, duration } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {useSpring,animated,config} from 'react-spring'
import "../App.css"
function Home(props)
{
  

  const   toggleReload=()=>{
      
           window.location.replace("/signup")
          }  
      
  
    return(
        <Fragment>
        <BrowserRouter>
        <MuiThemeProvider>
        <CssBaseline>
        
       
   
    
        <animated.div style={props.PROPS.springFade}>
     
  
        <Typography color={props.PROPS.L_D_Mode} className={props.PROPS.classes.typo} style={{lineHeight:"30px",marginRight:"100px",marginLeft:"100px",marginLeft:150}} >
              STORE YOUR MEMORIES LIKE NEVER BEFORE...
          </Typography>
  
  
          <Typography color={props.PROPS.L_D_Mode} variant={"h1"} className={props.PROPS.classes.typo}   style={{marginTop:100}}> 
              Memories
              <Divider style={{height:5,marginRight:300,marginLeft:280 }} ></Divider>
              </Typography> 
              </animated.div>

       <Grid container xs style={{marginLeft:0}}>
  
          <Grid item xs  style={{marginTop:30,marginLeft:270}}>

        
          <Button  style={{width:215,height:30}} >
          
              <Typography color={props.PROPS.L_D_Mode} style={{textAlign:"center",marginLeft:10 , letterSpacing:"15px",textShadow:"2px 1.5px 2px #ff0000"}}>
              SIGN IN
              <Divider style={{height:1,marginRight:0,width:200,marginLeft:-10}} ></Divider>
              </Typography>
             
          </Button>
          


          </Grid>
  
          
          <Grid item  xs style={{marginTop:30}}>
          <Link to ="/signup" style={{textDecoration:"none"}} >
              <Button style={{width:215,height:30}}  onClick={toggleReload}>
                  <Typography color={props.PROPS.L_D_Mode} style={{ letterSpacing:"15px",textShadow:"2px 1.5px 2px #ff0000"}}>
                  SIGN UP
                  <Divider style={{height:1,marginRight:0,width:200,marginLeft:-10}} ></Divider>
                  </Typography>
                  </Button>
                  </Link>
              </Grid>
  
          </Grid>
              
  
          <Grid container xs wrap="wrap"  alignItems="baseline"  justify="center" direction="row" style={{marginTop:300}}>
      
  
          <Grid item  >
  
          <Button   onClick={props.PROPS.togglePop} >
          <Card className={props.PROPS.classes.root}>     
          <Paper>
          <CardMedia component="img" image={require("../Images/beach.jpg")}   style={{width:"400px"}} >
          </CardMedia>
          </Paper>
         
          </Card>
          </Button>
  
            
          </Grid>
  
          <Grid item >
  
          <Button   onClick={props.PROPS.togglePop} >
          <Card className={props.PROPS.classes.root}>     
          <Paper>
          <CardMedia component="img" image={require("../Images/nature-sky.jpg")}  style={{width:"400px"}} >
          </CardMedia>
          </Paper>
  
          </Card>
          </Button>
  
          </Grid>
          <Grid item >
  
          <Button   onClick={props.PROPS.togglePop} >
          <Card className={props.PROPS.classes.root}>     
          <Paper>
          <CardMedia component="img" image={require("../Images/stary.jpg")}   style={{width:"400px"}} >
          </CardMedia>
          </Paper>
         
          </Card>
          </Button>
  
            
          </Grid>
  
          <Grid item >
  
          <Button   onClick={props.PROPS.togglePop} >
          <Card className={props.PROPS.classes.root}>     
          <Paper>
          <CardMedia component="img" image={require("../Images/pink.jpg")}   style={{width:"400px"}} >
          </CardMedia>
          </Paper>
  
          </Card>
          </Button>
  
          
          </Grid>
  
          <Grid item >
  
          <Button   onClick={props.PROPS.togglePop} >
          <Card className={props.PROPS.classes.root}>     
          <Paper>
          <CardMedia component="img" image={require("../Images/oleksandra.jpg")}   style={{width:"400px"}} >
          </CardMedia>
          </Paper>
         
          </Card>
          </Button>
  
            
          </Grid>
  
          <Grid item >
  
  <Button   onClick={props.PROPS.togglePop} >
  <Card className={props.PROPS.classes.root}>     
  <Paper>
  <CardMedia component="img" image={require("../Images/beach.jpg")}   style={{width:"400px"}} >
  </CardMedia>
  </Paper>
  
  </Card>
  </Button>
  
    
  </Grid>
  
  
          <Grid item >
  
  <Button   onClick={props.PROPS.togglePop} >
  <Card className={props.PROPS.classes.root}>     
  <Paper>
  <CardMedia component="img" image={require("../Images/stary.jpg")}   style={{width:"400px"}} >
  </CardMedia>
  </Paper>
  
  </Card>
  </Button>
  
    
  </Grid>
  
          <Grid item >
  
          <Button   onClick={props.PROPS.togglePop} >
          <Card className={props.PROPS.classes.root}>     
          <Paper>
          <CardMedia component="img" image={require("../Images/pink.jpg")}   style={{width:"400px"}} >
          </CardMedia>
          </Paper>
         
          </Card>
          </Button>
  
            
          </Grid>
  
          <Grid item >
  
  <Button   onClick={props.PROPS.togglePop} >
  <Card className={props.PROPS.classes.root}>     
  <Paper>
  <CardMedia component="img" image={require("../Images/mt.jpg")}   style={{width:"400px"}} >
  </CardMedia>
  </Paper>
  
  </Card>
  </Button>
  
    
  </Grid>
  
  
  
  
  
   
          <animated.div style={props.PROPS.springText}>
          <Popover open={props.PROPS.pop} 
          anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
  
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'top',
            }} 
            >
          {/* <Grid  item > */}
          
              
          <Typography color="secondary" variant={"h5"}   >
             THIS IS POPOVER NAKKAN FINALLY ITS WORKING
             
          </Typography>
          
          {/* </Grid> */}
  
          <Grid item >
          <Typography color={props.PROPS.L_D_Mode} variant={"body1"} style={{marginTop:"50px"}}  >
          THIS IS POPOVER
          </Typography>
          </Grid>
          </Popover>
          </animated.div>
         
  
          <animated.div style={props.PROPS.springText}>
          <Popover open={props.PROPS.pop} 
          anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
  
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'top',
            }} 
            
            >
          {/* <Grid  item > */}
          
              
          <Typography color="secondary" variant={"h5"}   >
             THIS IS THE SECOND POPOVER NAKKAN FINALLY ITS WORKING
             
          </Typography>
          
          {/* </Grid> */}
  
          {/* <Grid item > */}
          <Typography color={props.PROPS.L_D_Mode} variant={"body1"} style={{marginTop:"50px"}}  >
          THIS IS POPOVER
          </Typography>
          {/* </Grid> */}
          </Popover>
          </animated.div>
       
  
          <Button disabled >
          <animated.div style={props.PROPS.springText}>
          <Popover open={props.PROPS.pop} 
          anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
  
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'top',
            }} 
            
            >
         
          
              
          <Typography color="secondary" variant={"h5"}   >
             THIS IS THE THIRD POPOVER NAKKAN FINALLY ITS WORKING
             
          </Typography>
          
        
  
          
          <Typography color={props.PROPS.L_D_Mode} variant={"body1"} style={{marginTop:"50px"}}  >
          THIS IS POPOVER
          </Typography>
      
          </Popover>
          </animated.div>
          </Button>
       
       
          </Grid>
  
          
      {/*                   BRUH                       */}
          </CssBaseline>
          </MuiThemeProvider>
          </BrowserRouter>
         
      </Fragment>
      
  

    
        )

}export default Home