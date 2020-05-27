import React from 'react'
import {NightsStay,Brightness5Outlined} from '@material-ui/icons';

export default function LDicons(props)
{
    if(props.mode==="light")
    {
        
        return(
        <Brightness5Outlined color={props.color}style={{fontSize:45}}>
            </Brightness5Outlined>
            
        )
        
    }
    else{
        
        return(
        
        <NightsStay color={props.color}style={{fontSize:45}}>
          
        </NightsStay>
        
        )
        
    }
}
