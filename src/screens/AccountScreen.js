import React,{useContext} from "react";
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import {AuthContext} from "../context/AuthContext";

export default function AccountScreen(){

const {user,signOut} = useContext(AuthContext)

return(

<View style={styles.container}>

<View style={styles.header}/>

<Text style={styles.name}>Hung Nguyen</Text>

<Text style={styles.job}>Mobile developer</Text>

<Text style={styles.desc}>
I have above 5 years of experience in native mobile apps development,
now i am learning React Native
</Text>

<TouchableOpacity
style={styles.btn}
onPress={signOut}
>
<Text style={{color:"white"}}>Sign Out</Text>
</TouchableOpacity>

</View>

)
}

const styles = StyleSheet.create({

container:{
flex:1,
alignItems:"center"
},

header:{
width:"100%",
height:150,
backgroundColor:"#29ABE2"
},

name:{
fontSize:22,
fontWeight:"bold",
marginTop:20
},

job:{
color:"#29ABE2",
marginBottom:10
},

desc:{
padding:20,
textAlign:"center"
},

btn:{
backgroundColor:"#f39c12",
padding:10,
borderRadius:5
}

})