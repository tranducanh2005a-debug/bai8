import React, {useState, useContext} from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from "react-native";
import {AuthContext} from "../context/AuthContext";

export default function SignInScreen(){

const {signIn} = useContext(AuthContext)

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

return(

<View style={styles.container}>

<Text style={styles.title}>Sign In</Text>

<Text style={styles.label}>Email ID</Text>
<TextInput
placeholder="Enter your email here!"
style={styles.input}
onChangeText={setEmail}
/>

<Text style={styles.label}>Password</Text>
<TextInput
placeholder="Enter your password here!"
secureTextEntry
style={styles.input}
onChangeText={setPassword}
/>

<Text style={styles.forgot}>Forgot password?</Text>

<TouchableOpacity
style={styles.signinBtn}
onPress={()=>signIn(email,password)}
>
<Text style={styles.signinText}>Sign In</Text>
</TouchableOpacity>

<Text style={styles.or}>Or sign in with</Text>

<View style={styles.row}>

<TouchableOpacity style={styles.googleBtn}>
<Text>Google</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.facebookBtn}>
<Text style={{color:"white"}}>Facebook</Text>
</TouchableOpacity>

</View>

<Text style={styles.signup}>
Not yet a member? <Text style={{color:"#f39c12"}}>Sign Up</Text>
</Text>

</View>

)
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:25,
justifyContent:"center"
},

title:{
fontSize:28,
fontWeight:"bold",
alignSelf:"center",
marginBottom:30
},

label:{
marginBottom:5
},

input:{
borderWidth:1,
borderColor:"#ddd",
borderRadius:5,
padding:10,
marginBottom:15
},

forgot:{
color:"#f39c12",
alignSelf:"flex-end",
marginBottom:20
},

signinBtn:{
backgroundColor:"#f39c12",
padding:15,
borderRadius:5,
alignItems:"center"
},

signinText:{
color:"white",
fontWeight:"bold"
},

or:{
textAlign:"center",
marginTop:20
},

row:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:15
},

googleBtn:{
borderWidth:1,
borderColor:"#ddd",
padding:12,
borderRadius:5,
width:"48%",
alignItems:"center"
},

facebookBtn:{
backgroundColor:"#3b5998",
padding:12,
borderRadius:5,
width:"48%",
alignItems:"center"
},

signup:{
marginTop:20,
textAlign:"center"
}

})