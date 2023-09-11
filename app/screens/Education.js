import React from 'react';
import { ScrollView,View, Text, Pressable, Image, ProgressBarAndroid, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from "react-native-progress"
const Education = () => {
  return (
    <ScrollView style={{ display: "flex",backgroundColor:"black",position:"relative" }}>
      <Image source={require("../assets/school.png")} style={{position:"absolute",height:300,width:400,top:0,left:0,backgroundColor:"#F1C93B"}}/>
     
      <View
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          paddingTop: 240,
          
        }}
      >
        <Pressable
          style={{
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#98bc62",
            height: 100,
            width: 160,
           
            borderRadius: 20,
          }}
        >
          <Image source={require('../assets/silver-medal_3188893.png')} style={{height:60,width:60,marginRight:15}}></Image>
          <View> 
           <Text>Rank</Text></View>
         
        </Pressable>
        <Pressable
          style={{
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#98bc62",
            height: 100,
            width: 160,
           
            borderRadius: 20,
          }}
        >
          <Image source={require("../assets/coin_9590150.png")} style={{height:60,width:60,marginRight:20}}></Image>
          <View> 
           <Text>Points</Text></View>
        </Pressable>
      </View>
      <View style={{flexDirection:'row',display:'flex',justifyContent:"space-evenly"}}>
      <Text style={{fontWeight:"bold",color:"white",fontSize:20,paddingTop:18}}>Courses</Text>
      <Text style={{fontWeight:"600",fontSize:15,textDecorationLine:"underline",color:"grey",paddingTop:20,marginLeft:120}}>See all</Text>
      </View>
      <View
        style={{
          gap: 20,
          paddingTop: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          paddingBottom:40
        }}
      >
        <Pressable
        
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 120,
            width: 350,
            backgroundColor: "#222222",
            borderRadius: 35,
            elevation: 10,
          }}
        >
          <Image source={require('../assets/3d-calculator_10473465.png')} style={{ height: 80, width: 80 }} />
          <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
           <Text style={{ color: "white", fontWeight: "900", fontSize: 20, marginLeft: 20 ,marginRight:20}}>Basics of Finance</Text>
           <Progress.Bar borderColor='transparent' unfilledColor='white' color='rgb(59,198,84)' progress={0.3} width={150} height={10} borderRadius={20} style={{marginTop:20}}/>
          </View>
        </Pressable>
        <Pressable
       
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 120,
            width: 350,
            backgroundColor: "#222222",
            borderRadius: 35,
            elevation: 10,
          }}
        >
          <Image source={require('../assets/notification_6206466.png')} style={{ height: 80, width: 80 }} />
          <View style={{ display: "flex", flexDirection: "column" ,justifyContent: "center", alignItems: "center"}}>
            <Text style={{ color: "white", fontWeight: "900", fontSize: 20, marginRight: 30, textAlign: "left" }}>Scam Prevention</Text>
          
            <Progress.Bar borderColor='transparent' unfilledColor='white' color='rgb(59,198,84)' progress={0.3} width={150} height={10}  borderRadius={20} style={{marginTop:20}}/>
           </View>
        </Pressable>
        <Pressable
        
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 120,
            width: 350,
            backgroundColor: "#222222",
            borderRadius: 35,
            elevation: 10,
            
          }}
        >
          <Image source={require('../assets/piggy-bank_1511168.png')} style={{ height: 80, width: 80, margin: 8 }} />
          <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "white", fontWeight: "900", fontSize: 20 }}>Entreprenuship Guide</Text>
            <Progress.Bar borderColor='transparent' unfilledColor='white' color='rgb(59,198,84)' progress={0.3} width={150} height={10}  borderRadius={20} style={{marginTop:20}}/>
          </View>
        </Pressable>

        
      </View>
    </ScrollView>
  );
};

export default Education;

const styles = StyleSheet.create({});
