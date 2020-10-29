import React from "react"
import { Button } from "react-native";


const fetchLocation = props =>{
 return(
     <Button tittle="Get Location" onPress={props.onGetLocation}/>
 );
}
export default fetchLocation