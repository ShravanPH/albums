import React,{useState,useRef, useEffect} from 'react'
import {Typography, Divider,Button,AppBar, CssBaseline,Toolbar,Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Menu} from '@material-ui/icons';
import LDicons from '../Components/LDicons'


  const styles = makeStyles({
  typo:{
      margin:"250px",
      marginTop:"175px",
      textAlign:"center",
      letterSpacing:"15px",
      textShadow:"2px 1.5px 2px #ff0000",
 
   },
 nav:{
    marginTop:"30px",
    border:"100px"
   
 }

  })
  
function Landing()
{
    const [theme,setTheme] =useState({
        typography:{
            useNextVarients : true,
              "fontFamily":` "Playfair Display"`,
              "fontSize":15
          },
          palette:{
              primary:{
                  main:"#FAEAFF"
                
              },
              background:{
               default:"#0C0215"
              },
           type:"light",
            divider:"#FAEAFF"
          }
          })

    const [L_D_Mode,setL_D_Mode]=useState("primary");
          
    
          const prevThemeRef=useRef();
          useEffect(()=>{prevThemeRef.current=theme})
          const prevTheme=prevThemeRef.current;
 
    const toggleMode=()=>{
      
        let NewLD = theme.palette.type==="light"?"dark":"light"; 
        // console.log("CURRENT bg",prevTheme,"/n type",prevTheme)
       if(NewLD == "dark")
       {setTheme(
            {
                typography:{
                    useNextVarients : true,
                      "fontFamily":` "Playfair Display"`,
                      "fontSize":15
                  },
                  palette:{
                      primary:{
                          main:"#000000"
                        
                      },
                      
                      background:{
                       default:"#FAEAFF"
                      },divider:"#000000",
                      type:"dark"
                  }
       })}
        else
        {
            setTheme(prevTheme)
            }
        }   

const MuiTheme= createMuiTheme(theme)
const classes= styles();

    return( 
    <React.Fragment>      
       <MuiThemeProvider theme={MuiTheme}>
           <CssBaseline>
            
           <AppBar position="static" color={"transparent"} className={classes.nav} variant="outlined">
        <Toolbar >
        <Menu style={{fontSize:45,  marginLeft:"20px"}} color={L_D_Mode}>
           </Menu>
           <Typography style={{flexGrow:1}}></Typography>
           <Button color={L_D_Mode} style={{borderRadius:100, marginRight:"20px"}} variant="text"   onClick={toggleMode} >
           {console.log("MODE",theme.palette.type)}
         <LDicons mode={theme.palette.type} ></LDicons>
           </Button>
        </Toolbar>
      </AppBar>

           
   
        <Typography color={L_D_Mode} variant={"h1"} className={classes.typo} > 
            Memories.
            <Divider style={{height:5,marginRight:20}} ></Divider>
        </Typography>
       
        <Typography color={L_D_Mode} className={classes.typo} style={{lineHeight:"30px",margin:"100px",marginTop:"300px"}} >
            STORE YOU'R MEMORIES LIKE NEVER BEFORE...
        </Typography>
        <div style={{height:"350px",width:"500px",border:"5px #ffffff dashed ",borderRadius:"5px 5px 5px "}}>
        </div>
       


        </CssBaseline>
        </MuiThemeProvider>
        

    </React.Fragment>
    
    )   


}export default Landing