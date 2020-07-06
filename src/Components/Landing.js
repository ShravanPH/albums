import React,{useState,useRef, useEffect, Fragment} from 'react'
import {BrowserRouter,Switch,Route,Link,withRouter} from 'react-router-dom'
import {Typography, Divider,Button,AppBar, CssBaseline,Toolbar,MobileStepper,Paper, Grid,SwipeableDrawer, Backdrop, Popover,Card, CardMedia, CardActionArea} from '@material-ui/core'
import { makeStyles, duration } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Menu,PersonOutlineOutlined, Close, Add} from '@material-ui/icons';
import LDicons from '../Components/LDicons'
import Home from '../Components/Home'
import Account from '../Components/Account'
import {useSpring,animated,config} from 'react-spring'
import "../App.css"
import SignUp from './SignUp';
import Auth from './Auth';

  
function Landing()
{
    
    
    const styles = makeStyles({
        typo:{
            margin:50,
            marginLeft:40,
            marginRight:30,
            // marginTop:"140px",
            marginBottom:"50px",
            textAlign:"center",
            letterSpacing:"15px",
            textShadow:"2px 1.5px 2px #ff0000",
         },
       nav:{
          marginTop:"30px",
          border:"100px"
         
       },
       positionStatic:{
          width:"75px",
          height:"20px",
          marginTop:"25px",
        //   marginLeft:"40px",
          padding:"0px",
          transform:"rotate(90deg)"
          
      },
      dot:{
          width:"12px",
          height:"12px",
          margin:"8px"
      },
      root:
      {
         maxWidth:"800px",
        
      },
      test:{
          height:"0px",
          width:"500px",
        
      },
     
      cssLabel: {
        color : 'white',
       
      },
    
      cssOutlinedInput: {
         '&$cssFocused $notchedOutline': 
         {

          borderColor: "white",
         
            }
      },
    
      cssFocused: { },
    
      notchedOutline: {
       
        borderWidth: '1px',
        borderColor: 'red !important',

      }, 
    },
 )
    

        
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
             secondary: {
                    main:"#000000"
              },
              background:{
               default:"#0C0215",
               paper:"#0C0215"
              },
           type:"light",
            divider:"#FAEAFF",
          },
          overrides:{
            MuiMobileStepper:{
                dot:{
                    backgroundColor:"#330A57"
                },
                dotActive:{
                    backgroundColor:"#FAEAFF"
                },
               
            },
            MuiPaper:{
                root:{ 
                    border:"1.5px #white"
             }
            },
            MuiBackdrop:
            {
                root:{
                    marginTop:"90px"
                }
            },
            MuiPopover:{
                paper:{
                    backgroundColor:"#FAEAFF"
                }

            },
            MuiInputBase:{
                input:{
                    color:"white",
                    letterSpacing:"2px",
                }
            }

        },
         
          })

    const [L_D_Mode,setL_D_Mode]=useState("primary");
          
          const prevThemeRef=useRef();
          useEffect(()=>{prevThemeRef.current=theme})
          const prevTheme=prevThemeRef.current;
 
    const toggleMode=()=>{
      
        let NewLD = theme.palette.type==="light"?"dark":"light"; 
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
                      secondary: {
                        main:"#FAEAFF"
                  },
                      
                      background:{
                       default:"#FAEAFF",
                       paper:"#FAEAFF"
                      },
                      divider:"#000000",
                      type:"dark"
                  },
                  overrides:{
                    MuiMobileStepper:{
                        dot:{
                            backgroundColor:"#CEC5D1",
                           
                        },
                        dotActive:{
                            backgroundColor:"#330A57"
                        },
                       
                    },
                    MuiPaper:{
                        root:{ 
                            border:"5px #0C0215"
                     }
                            },
                     MuiBackdrop:
                            {
                                root:{
                                    marginTop:"90px"
                                }
                            },
                            MuiPopover:{
                                paper:{
                                    backgroundColor:"#0C0215"
                                }
                            },
                            MuiInputBase:{
                                input:{
                                    color:"black"
                                }
                            }
                
                
                        
                        }
       })}
        else
        { 
            setTheme(
                {
                    typography:{
                        useNextVarients : true,
                          "fontFamily":` "Playfair Display"`,
                          "fontSize":15
                      },
                      palette:{
                          primary:{
                              main:"#FAEAFF"
                            
                          },
                          
                      secondary: {
                        main:"#000000"
                  },
                          background:{
                           default:"#0C0215",
                           paper:"#0C0215"
                          },
                       type:"light",
                        divider:"#FAEAFF",
                      },
                      overrides:{
                        MuiMobileStepper:{
                            dot:{
                                backgroundColor:"#330A57"
                            },
                            dotActive:{
                                backgroundColor:"#FAEAFF"
                            },
                           
                        },
                        MuiPaper:{
                            root:{ 
                                border:"1.5px #FAEAFF"
                         }
                        },
                        MuiBackdrop:
                        {
                            root:{
                                marginTop:"90px"
                            }
                        },
                        MuiPopover:{
                            paper:{
                                backgroundColor:"#FAEAFF"
                            }
            
            
                        },
                        MuiInputBase:{
                            input:{
                                color:"white"
                            }
                        }

            
                    },
                     
                      } 
                )


            }
        }   
    const[disp,setDisp]=useState(0)

const toggleText=()=>
{
    setDisp(disp==0?1:0)

}

const[pop,setPop]=useState(false)

const togglePop=()=>
{
    setPop(pop==false?true:false)

}







const [draw,setDraw]=useState(false)
const toggleDrawer=()=>
{
    setDraw(draw?false:true)

}


const MuiTheme= createMuiTheme(theme)
const classes= styles();

const springFade = useSpring({
    config:{
        mass:50,
        tension:365,
        duration:1000
    },
    opacity: 1,
    fontSize:"15px",
    paddingTop:"0px",
    from: { opacity:0,fontSize:"0px",paddingTop:"100px" }
  });
  

const springIntoL=useSpring({

    from:{marginLeft:"-400px"},
    to:{marginLeft:"0px"}

})
const springIntoR=useSpring({

    from:{marginRight:"-400px"},
    to:{marginRight:"0px"}

})

const springText=useSpring({


    to:{opacity:disp}

})

const brops = {

    L_D_Mode,
    classes,
    togglePop,
    springFade,
    springText,
    pop,
    to:"/signup"


}





    return( 
    <Fragment>      
       <BrowserRouter>
       <MuiThemeProvider theme={MuiTheme}>
           <CssBaseline>

           <animated.div style={springIntoL}>
           <AppBar position="static" color={"transparent"} className={classes.nav} variant="outlined">
        <Toolbar >
        
       
            <Button onClick={toggleDrawer}  style={{marginLeft:"20px",borderRadius:100}}> 
            <Menu style={{fontSize:45}} color={L_D_Mode}>
           </Menu>
           </Button>
          
       
           <SwipeableDrawer 
           open={draw}
           color={L_D_Mode}
           transitionDuration={{enter:duration.enteringScreen=350,exit:duration.leavingScreen="100"}}
            anchor="top"
            
           >
              <Backdrop
               open={draw} 
               transitionDuration={{enter:duration.enteringScreen=350,exit:duration.leavingScreen="100"}}
               onClick={toggleDrawer}

              >
                </Backdrop> 
         
            <Grid container>
               
            <Grid item xs={1}>
             <Button onClick={toggleDrawer}  style={{marginLeft:"20px",borderRadius:100,width:"16px",marginTop:"20px"}}> 
            <Close style={{fontSize:45,marginBottom:"15px"}} color={L_D_Mode}  >
           </Close>
           </Button>
           </Grid>

           <Grid item xs={1}>
           <Link to="/" style={{textDecoration:"none"}} onClick={toggleDrawer}> 
           <Button style={{textTransform:"none"}}>
           <Typography color={L_D_Mode} variant={"h5"} style={{marginTop:"30px"}} > 
            Memories
            </Typography>
            </Button>
           </Link>
            </Grid>

            <Grid item xs={1}>
           <PersonOutlineOutlined color={L_D_Mode} style={{fontSize:45,marginLeft:"53px",marginTop:"28px"}}>
           </PersonOutlineOutlined>
           </Grid>
          
           <Grid item xs={6}>
           <Link to="/account" style={{textDecoration:"none"}} onClick={toggleDrawer}> 
           <Button style={{textTransform:"none"}}>
           <Typography color={L_D_Mode} variant={"h5"} style={{marginTop:"30px" }} >
                    Account 
            </Typography>
            </Button>
            </Link>
            </ Grid >

            <Grid item xs={1}>
            <Add color={L_D_Mode} style={{fontSize:45,marginLeft:"53px",marginTop:"28px"}}>
            </Add>
            </Grid>
            <Grid item xs={2}>
            <Typography color={L_D_Mode} variant={"h5"} style={{marginTop:"30px" }} >
                    Add Memory
               </Typography>

            </Grid>
               </Grid>
           </SwipeableDrawer>


           <Typography style={{flexGrow:1}}></Typography>
           <animated.div style={springIntoR}>
               
           <Button color={L_D_Mode} style={{borderRadius:100, marginRight:"20px"}} variant="text"  onClick={toggleMode} >
         <LDicons mode={theme.palette.type}></LDicons>
           </Button>
           
           </animated.div>
        </Toolbar>
      </AppBar>
      </animated.div>

      


{/* ///////////////////////////////////////////////////////////////////// */}

        
    {/*                   BRUH                       */}
                 <Switch>
                   
                        <Route path="/" exact render={(props)=><Home PROPS={brops}/>}/>

                      
                        <Route path="/auth" exact render={(props)=><Auth/>} />
                        <Route path="/account" exact component={Account}/>
                      
                        <Route path="/signup" exact render={(props)=><SignUp PROPS={brops}/>} />


                </Switch> 
        
        </CssBaseline>
        
        </MuiThemeProvider>
       </BrowserRouter>
       
    </Fragment>
    
    )   


}export default Landing