import React,{useState,useRef, useEffect, Fragment} from 'react'
import {Typography, Divider,Button,AppBar, CssBaseline,Toolbar,MobileStepper, Grid,SwipeableDrawer, Backdrop, Popover} from '@material-ui/core'
import { makeStyles, duration } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Menu,PersonOutlineOutlined, Close, Add, Image} from '@material-ui/icons';
import LDicons from '../Components/LDicons'
import {useSpring,animated,config} from 'react-spring'
import "../App.css"

  
function Landing()
{
    
    
    const styles = makeStyles({
        typo:{
            margin:"250px",
            marginTop:"140px",
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
          marginTop:"165px",
          marginLeft:"335px",
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
          height:"300px",
          width:"500px", 
          paddingBottom:"50%"
        
      },
      test:{
          height:"0px",
          width:"500px",
        
      },
      },
        )
    
    const CSSstyle={
            maxWidth:"500px",
            maxHeight:"800px"
    }    
        
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



    return( 
    <Fragment>      
       
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
           <Typography color={L_D_Mode} variant={"h5"} style={{marginTop:"30px" }} > 
            Memories
            </Typography>
            </Grid>

            <Grid item xs={1}>
           <PersonOutlineOutlined color={L_D_Mode} style={{fontSize:45,marginLeft:"53px",marginTop:"28px"}}>
           </PersonOutlineOutlined>
           </Grid>
           <Grid item xs={6}>
           <Typography color={L_D_Mode} variant={"h5"} style={{marginTop:"30px" }} >
                    Account 
               </Typography>
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
           {console.log("MODE",theme.palette.type)}
           {console.log("drawer",draw)}
         <LDicons mode={theme.palette.type}></LDicons>
           </Button>
           </animated.div>
        </Toolbar>
      </AppBar>
      </animated.div>

      <animated.div style={springFade}>
     
  
        <Typography color={L_D_Mode} variant={"h1"} className={classes.typo}   style={springFade}> 
            Memories
            <Divider style={{height:5,marginRight:0}} ></Divider>
           
            <MobileStepper
            variant={"dots"}
            color={L_D_Mode}
            position={"static"}
            steps={3}
            activeStep={0}
            classes={{dot:classes.dot,positionStatic:classes.positionStatic}}>
            </MobileStepper>
            </Typography> 
            
    </animated.div>

        <Typography color={L_D_Mode} className={classes.typo} style={{lineHeight:"30px",margin:"100px",marginTop:"300px"}} >
            STORE YOUR MEMORIES LIKE NEVER BEFORE...
        </Typography>

        <Grid container xs={12}   spacing={2}  alignItems="center" >
      
        <Grid container item> 
        
       
        <Button   onClick={togglePop} >
        <img src={require("../Images/nature-sky.jpg")}
            style={CSSstyle}
            >
        </img>
        </Button>
        </Grid>

        
        <animated.div style={springText}>
        <Popover open={pop} 
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
        <Typography color={L_D_Mode} variant={"body1"} style={{marginTop:"50px"}}  >
        THIS IS POPOVER
        </Typography>
        </Grid>
        </Popover>
        </animated.div>
       
        
        <Grid  item > 
        
        
        <Button   onClick={togglePop} size="small">
         <img src={require("../Images/smol_image.jpg")}
          style={CSSstyle}>
        </img>
        </Button>
       
        </Grid>

        
       
        <animated.div style={springText}>
        <Popover open={pop} 
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
        <Typography color={L_D_Mode} variant={"body1"} style={{marginTop:"50px"}}  >
        THIS IS POPOVER
        </Typography>
        {/* </Grid> */}
        </Popover>
        </animated.div>
     
        
        
        <Grid item> 
         <Button>  
        <img src={require("../Images/oleksandra.jpg")}
          style={CSSstyle}>

        </img>
        </Button>
    
    
        </Grid>
        
      
       
        <Button disabled >
        <animated.div style={springText}>
        <Popover open={pop} 
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
        
      

        
        <Typography color={L_D_Mode} variant={"body1"} style={{marginTop:"50px"}}  >
        THIS IS POPOVER
        </Typography>
    
        </Popover>
        </animated.div>
        </Button>

           
        <Grid  item > 
        
        
        <Button   onClick={togglePop} size="small">
         <img src={require("../Images/smol_image.jpg")}
          style={CSSstyle}>
        </img>
        </Button>
       
        </Grid>

       
        
     
        </Grid>

        
    {/*                   BRUH                       */}
        </CssBaseline>
        </MuiThemeProvider>
        
       
    </Fragment>
    
    )   


}export default Landing