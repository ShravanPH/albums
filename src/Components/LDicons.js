import React from 'react'
import {NightsStay,Brightness5Outlined, Visibility, VisibilityOff} from '@material-ui/icons';

export default function LDicons(props)
{
    //console.log(props)
    if(props.mode==="light")
    {
        // {console.log(props.mode)}
        return(
        <Brightness5Outlined color={props.color}style={{fontSize:45}}>
            </Brightness5Outlined>
            
        )
        
    }

    else if(props.mode==="dark"){
        
        return(
        
        <NightsStay color={props.color}style={{fontSize:45}}>
          
        </NightsStay>
        
        )
        
    }


    
    else if((props.val=="Password")||(props.val=="Verify Password"))
        {

            if(!props.props.ic)
        {
            return(
            <VisibilityOff color={props.props.props.PROPS.L_D_Mode} style={{fontSize:"30px",marginTop:"0px"}}/>            
            )
        }
        else{
            return( <Visibility color={props.props.props.PROPS.L_D_Mode} style={{fontSize:"30px",marginTop:"0px"}}/>   )
        }


        }
    else if((props.val=="Email")||(props.val=="Username"))
    {

            return null
    }

   

}
