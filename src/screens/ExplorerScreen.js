import React from "react";
import {View,Text,TextInput,Image,ScrollView,StyleSheet} from "react-native";

export default function ExplorerScreen(){

return(

<ScrollView style={styles.container}>

<Text style={styles.title}>Explorer</Text>

<TextInput
placeholder="Search for meals or area"
style={styles.search}
/>

<View style={styles.rowBetween}>
<Text style={styles.section}>Top Categories</Text>
<Text style={{color:"#f39c12"}}>Filter</Text>
</View>

<View style={styles.row}>

<View style={styles.category}>
<Image source={require("../assets/pizza.jpg")} style={styles.catImg}/>
<Text>Pizza</Text>
</View>

<View style={styles.category}>
<Image source={require("../assets/humberger.jpg")} style={styles.catImg}/>
<Text>Burgers</Text>
</View>

<View style={styles.category}>
<Image source={require("../assets/steak.jpg")} style={styles.catImg}/>
<Text>Steak</Text>
</View>

</View>

<View style={styles.rowBetween}>
<Text style={styles.section}>Popular Items</Text>
<Text style={{color:"#f39c12"}}>View all</Text>
</View>

<View style={styles.card}>
<Image source={require("../assets/bundau.jpg")} style={styles.food}/>
<Text>Food 1</Text>
<Text style={{color:"gray"}}>1$</Text>
</View>

<View style={styles.card}>
<Image source={require("../assets/phocuon.jpg")} style={styles.food}/>
<Text>Food 2</Text>
<Text style={{color:"gray"}}>3$</Text>
</View>

</ScrollView>

)
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:15
},

title:{
fontSize:24,
fontWeight:"bold",
marginBottom:10
},

search:{
borderWidth:1,
borderColor:"#ddd",
padding:10,
borderRadius:10,
marginBottom:15
},

row:{
flexDirection:"row",
justifyContent:"space-between"
},

rowBetween:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:15,
marginBottom:10
},

section:{
fontSize:16,
fontWeight:"bold"
},

category:{
alignItems:"center"
},

catImg:{
width:90,
height:90,
borderRadius:10
},

card:{
backgroundColor:"#fff",
padding:10,
borderRadius:10,
marginBottom:10,
shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:5
},

food:{
width:"100%",
height:120,
borderRadius:10
}

})