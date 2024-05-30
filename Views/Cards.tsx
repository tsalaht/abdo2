import { BlurView } from 'expo-blur';
import React,{useState,useRef} from "react";
import styles from "./Styles/Index";
import { SvgXml } from 'react-native-svg';
import { svgs } from "./Svg/svg";
import { background } from "native-base/lib/typescript/theme/styled-system";
import { StyleSheet,ImageBackground,View,Text, ScrollView,Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Cards : React.FC  = () => {

const [check1,setCheck1]=useState(true)
const [check2,setCheck2]=useState(false)
const [option1,setOption1]=useState(false)
const [option2,setOption2]=useState(false)
const [option3,setOption3]=useState(false)

    const navigation:any = useNavigation();
    const plagin :any= require('../assets/plagin.png');
    const arbic :ImageData=require('../assets/arabia.png')
    const red :ImageData=require('../assets/redcards.png')
    const cards :ImageData=require('../assets/cards.png')
   
      const blure = StyleSheet.create({
        container: {
          flex: 1,
        },
        blurContainer: {
          width:'100%',
          overflow: 'hidden',
          paddingHorizontal:8,
          paddingVertical:8,
          backgroundColor:'#252a3298',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:16
        },
        blurContainer2: {
      flex:1,
            width:'100%',
            overflow: 'hidden',
            paddingHorizontal:40,
            paddingTop:1,
            backgroundColor:'#00000066',
            alignItems:'center',
            justifyContent:'center',
          
      //  height:'100%'
          },
      
        
      });
      const tags = StyleSheet.create({
  
   verticale:{
    flexDirection:'column'
   },
   horizontale:{
    flexDirection:'row'
   },
   textWhiteLight:{
    color:'white',
    fontFamily:'Almarai_Light'
   },
   textWhiteMedume:{
    color:'white',
    fontFamily:'Almarai_Regular'
   },
   textWhiteBold:{
    color:'white',
    fontFamily:'Almarai_Bold'
   },
      
        
      });
      
    
   return (
    <View style={styles.viewContainer}>
       <ImageBackground style={styles.background}  source={plagin}  alt="plagin">
        <View style={{ position:'absolute',width:'100%',height:'100%',zIndex:1,backgroundColor:'#000000d9'}}     ></View>
      <View style={{...tags.horizontale,backgroundColor:'#262B3366',zIndex:2,paddingTop:40,width:'100%',justifyContent:'space-between', paddingHorizontal:32,alignItems:'center',paddingBottom:20,borderBottomRightRadius:24,borderBottomLeftRadius:24 }}>
      <View style={{...tags.horizontale,padding:12,backgroundColor:"#4D5666",borderRadius:16,alignItems:'center',justifyContent:'center'}}>
        <SvgXml xml={svgs[0].dimond}   width="20" height="20"  />
      <Text style={{
        color:'white',
        fontFamily:'Almarai_Light',
        fontSize:12,
      }} >1478</Text>
      </View>
      <View style={{...tags.horizontale,padding:16,backgroundColor:"#404040",borderRadius:8 ,alignItems:'center',justifyContent:'center'}}>
      <Text style={{
        color:'#EFB054',
        fontFamily:'Almarai_Regular',
        fontSize:12,
      }} >المتجر</Text>
      </View>
      <View style={{...tags.horizontale,padding:12,backgroundColor:"#4D5666",borderRadius:16,alignItems:'center',justifyContent:'center'}}>
      <Text style={{
        color:'white',
        fontFamily:'Almarai_Light',
        fontSize:12,
      }} >عودة</Text>
      <SvgXml xml={svgs[0].right}   width="12" height="12"  />
      </View>
      </View>
     <View style={{...tags.verticale,paddingHorizontal:16,zIndex:2}}>
     <View style={{...tags.verticale}}>
<Text style={{...tags.textWhiteMedume,marginVertical:12}}>
أقسام المتجر
</Text>
<View style={{...tags.horizontale,justifyContent:'space-between'}}>
<Pressable onPress={() => navigation.navigate('backgorund')}>
<View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#4D5666',gap:3,flexDirection:'column',paddingVertical:5,paddingHorizontal:14,borderRadius:8}}>
<SvgXml xml={svgs[0].bok}   width="25" height="25"   />
<Text style={{...tags.textWhiteMedume,fontSize:10,textAlign:'center'}}>

خلفيات
{'\n'}
الجلسة
</Text>
</View>
</Pressable>
<View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#4D5666',gap:4,flexDirection:'column',paddingVertical:3,paddingHorizontal:15,borderRadius:8}}>
<SvgXml xml={svgs[0].shadowc}   width="32" height="32"   />
<Text style={{...tags.textWhiteMedume,fontSize:10,textAlign:'center'}}>

تصاميم
{'\n'}
الورق
</Text>
</View>
<Pressable onPress={() => navigation.navigate('diamond')}>
<View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#4D5666',gap:8,flexDirection:'column',paddingVertical:14,paddingHorizontal:12,borderRadius:8}}>
<SvgXml xml={svgs[0].whiteD}   width="18" height="18"   />
<Text style={{fontSize:10,textAlign:'center',color:'white',    fontFamily:'Almarai_Regular'}}>

الالماس
</Text>
</View>
</Pressable>
<View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#4D5666',gap:8,flexDirection:'column',paddingVertical:5,paddingHorizontal:8,borderRadius:8}}>
<SvgXml xml={svgs[0].crownWhite}   width="16" height="16"   />
<Text style={{...tags.textWhiteMedume,fontSize:10,textAlign:'center'}}>

الاشتراكات
</Text>
</View>
<View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#4D5666',gap:8,flexDirection:'column',paddingVertical:5,paddingHorizontal:12,borderRadius:8}}>
<SvgXml xml={svgs[0].shop}   width="16" height="16"   />
<Text style={{...tags.textWhiteMedume,fontSize:10,textAlign:'center'}}>

المتجر{'\n'}الرئيسي
</Text>
</View>

</View>
</View>

     </View>


<View style={{...tags.verticale,marginHorizontal:16,paddingBottom:110,alignItems:'center'}}>
<View style={{...tags.horizontale}}>
  {/* Sodo */}
  <Pressable onPress={()=>{
  setOption1(false)
  setOption2(false)
  setOption3(true)
}} style={{zIndex:900000000000000000000000000,width:'50%'}}>
<View style={{...tags.verticale,paddingVertical:8,paddingHorizontal:8,alignItems:'center',justifyContent:'center'}}>
<BlurView intensity={80} tint="dark" style={{zIndex:22222222,...blure.blurContainer}}>
<Image source={red}/>
<Text style={{...tags.textWhiteBold,marginVertical:16}}>
السدو
</Text>
<View style={{...tags.horizontale,gap:8}}>
<View style={{borderRadius:9999999999,backgroundColor:'#4D5666' ,width:8,height:8}}>
</View>
<View style={{borderRadius:9999999999,backgroundColor:'#4D5666' ,width:8,height:8}}>
</View>

</View>

       </BlurView>
</View>
</Pressable>
{/* Qaid */}
<Pressable onPress={()=>{
  setOption1(false)
  setOption2(true)
  setOption3(false)
}}style={{zIndex:900000000000000000000000000,width:'50%'}}>
<View style={{...tags.verticale,paddingVertical:8,paddingHorizontal:8,alignItems:'center',justifyContent:'center'}}>
<BlurView intensity={80} tint="dark" style={{zIndex:22222222,...blure.blurContainer}}>
<Image source={cards}/>
<Text style={{...tags.textWhiteBold,marginVertical:16}}>
قيد
</Text>
<View style={{...tags.horizontale,gap:8}}>
<View style={{borderRadius:9999999999,backgroundColor:'#4D5666' ,width:8,height:8}}>
</View>
<View style={{borderRadius:9999999999,backgroundColor:'#4D5666' ,width:8,height:8}}>
</View>
<View style={{borderRadius:9999999999,backgroundColor:'#4D5666' ,width:8,height:8}}>
</View>


</View>

       </BlurView>
</View>
</Pressable>

</View>
{/* saduia */}
<Pressable onPress={()=>{
  setOption1(true)
  setOption2(false)
  setOption3(false)
}} style={{zIndex:900000000000000000000000000,width:'50%'}}>
<View style={{...tags.verticale,paddingVertical:8,paddingHorizontal:8,alignItems:'center',justifyContent:'center'}}>
<BlurView intensity={80} tint="dark" style={{zIndex:22222222,...blure.blurContainer}}>
<Image source={arbic}/>
<Text style={{...tags.textWhiteBold,marginVertical:16}}>
السعودية
</Text>
<View style={{...tags.horizontale,gap:8}}>
<View style={{borderRadius:9999999999,backgroundColor:'#4D5666' ,width:8,height:8}}>
</View>
<View style={{borderRadius:9999999999,backgroundColor:'#4D5666' ,width:8,height:8}}>
</View>

</View>

       </BlurView>
</View>
</Pressable>
</View>

   

<View  style={{ ...tags.horizontale,position:'absolute',backgroundColor:'#262B33E6',paddingVertical:23,bottom:0,zIndex:3,width:'100%',paddingHorizontal:32,justifyContent:'center',gap:25,borderTopLeftRadius:24,borderTopRightRadius:24}}>
<View style={{...tags.verticale,alignItems:'center'}}>
<View style={{padding:3,backgroundColor:'#4D5666',borderRadius:16}}>
<SvgXml xml={svgs[0].shopy}   width="38" height="38"  />
</View>
<Text style={{...tags.textWhiteLight}}>
المتجر
</Text>
</View>
<View style={{...tags.verticale,alignItems:'center'}}>
<View style={{padding:12,backgroundColor:'#4D5666',borderRadius:16}}>
<SvgXml xml={svgs[0].users}   width="20" height="20"  />
</View>
<Text style={{...tags.textWhiteLight}}>
المجتمع
</Text>
</View>
<View style={{...tags.verticale,alignItems:'center'}}>
<View style={{padding:12,backgroundColor:'#4D5666',borderRadius:16}}>
<SvgXml xml={svgs[0].homme}   width="20" height="20"  />
</View>
<Text style={{...tags.textWhiteLight}}>
الرئيسية
</Text>
</View>
<View style={{...tags.verticale,alignItems:'center'}}>
<View style={{padding:12,backgroundColor:'#4D5666',borderRadius:16}}>
<SvgXml xml={svgs[0].win}   width="20" height="20"  />
</View>
<Text style={{...tags.textWhiteLight}}>
الدوريات
</Text>
</View>
<View style={{...tags.verticale,alignItems:'center'}}>
<View style={{padding:12,backgroundColor:'#4D5666',borderRadius:16}}>
<SvgXml xml={svgs[0].chat}   width="20" height="20"  />
</View>
<Text style={{...tags.textWhiteLight}}>
الدردشة
</Text>
</View>
</View>
      </ImageBackground>
           {/* saudia */}
           { option1 && !option2 && !option3 &&
   <View style={{position:'absolute',width:'100%',height:'100%',backgroundColor:'#00000066',zIndex:2000000000000000,justifyContent:'center',alignItems:'center',}}>
   <BlurView intensity={100} tint="dark" style={{zIndex:22222222222222222222222222222222222222,...blure.blurContainer2}}>
    
   <View style={{...tags.verticale,paddingVertical:16,paddingHorizontal:20,alignItems:'center',justifyContent:'center',width:'90%',backgroundColor:'#39404D',borderRadius:8,}}>
<View style={{...tags.verticale,alignItems:'center',justifyContent:'center',backgroundColor:'#4D5666',borderRadius:16,paddingVertical:8,paddingHorizontal:8,width:'100%',marginBottom:12}}>
<Image source={arbic}/>
<Text style={{...tags.textWhiteBold,marginVertical:16}}>
السعودية
</Text>
<View style={{...tags.horizontale,alignItems:'center',backgroundColor:'#262B33',borderRadius:8,gap:8,padding:4}}>
<SvgXml xml={svgs[0].dimond}   width="20" height="20"  />
<Text style={{...tags.textWhiteLight}}>
2000
</Text>

</View>
<View style={{...tags.horizontale,gap:8,marginTop:12}}>
  <Pressable onPress={()=>{
    setCheck1(false)
    setCheck2(true)
  }}>
<View>
  <Text style={{...tags.textWhiteMedume,backgroundColor:'#39404D',borderRadius:4,paddingVertical:8,paddingHorizontal:18,borderColor:!check1 && check2 ?'#EFB054':'transparent',borderWidth:0.4,color:!check1 && check2 ?'#EFB054':'white'}}>
  الأساسي
  </Text>
</View>
</Pressable>
<Pressable onPress={()=>{
    setCheck1(true)
    setCheck2(false)
  }}>
<View>
  <Text style={{...tags.textWhiteMedume,backgroundColor:'#39404D',borderRadius:4,paddingVertical:8,paddingHorizontal:24,borderColor:check1 && !check2 ?'#EFB054':'transparent',borderWidth:0.4,color:check1 && !check2 ?'#EFB054':'white'}}>
  الفاخر
  </Text>
</View>
</Pressable>
</View>
</View>
<View style={{ width:'100%',backgroundColor:'#FFAF36',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',marginBottom:8}}>
<Text style={{
        color:'white',
        fontFamily:'Almarai_Bold',
        fontSize:12,
        textAlign:'center'
      }} >شراء</Text>
</View>
<Pressable onPress={()=>setOption1(false)} style={{width:'100%'}}>
<View style={{ width:'100%',backgroundColor:'#4D5666',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',flexDirection:'row',justifyContent:'center'}}>
 
<Text style={{
        color:'#F2BE72',
        fontFamily:'Almarai_Bold',
        fontSize:12,
        textAlign:'center'
      }} >  عودة </Text>
      
   
</View>
</Pressable>

</View>
</BlurView>
   </View>}
     
     {/* Red cards */}
     {!option1 && !option2 && option3 &&
      <View style={{position:'absolute',width:'100%',height:'100%',backgroundColor:'#00000066',zIndex:2000000000000000,justifyContent:'center',alignItems:'center',}}>
   <BlurView intensity={100} tint="dark" style={{zIndex:22222222222222222222222222222222222222,...blure.blurContainer2}}>
    
   <View style={{...tags.verticale,paddingVertical:16,paddingHorizontal:20,alignItems:'center',justifyContent:'center',width:'90%',backgroundColor:'#39404D',borderRadius:8,}}>
<View style={{...tags.verticale,alignItems:'center',justifyContent:'center',backgroundColor:'#4D5666',borderRadius:16,paddingVertical:8,paddingHorizontal:8,width:'100%',marginBottom:12}}>
<Image source={red}/>
<Text style={{...tags.textWhiteBold,marginVertical:16}}>
السدو
</Text>
<View style={{...tags.horizontale,alignItems:'center',backgroundColor:'#262B33',borderRadius:8,gap:8,padding:4}}>
<SvgXml xml={svgs[0].dimond}   width="20" height="20"  />
<Text style={{...tags.textWhiteLight}}>
2000
</Text>

</View>
<View style={{...tags.horizontale,gap:8,marginTop:12}}>
  <Pressable onPress={()=>{
    setCheck1(false)
    setCheck2(true)
  }}>
<View>
  <Text style={{...tags.textWhiteMedume,backgroundColor:'#39404D',borderRadius:4,paddingVertical:8,paddingHorizontal:18,borderColor:!check1 && check2 ?'#EFB054':'transparent',borderWidth:0.4,color:!check1 && check2 ?'#EFB054':'white'}}>
  الأساسي
  </Text>
</View>
</Pressable>
<Pressable onPress={()=>{
    setCheck1(true)
    setCheck2(false)
  }}>
<View>
  <Text style={{...tags.textWhiteMedume,backgroundColor:'#39404D',borderRadius:4,paddingVertical:8,paddingHorizontal:24,borderColor:check1 && !check2 ?'#EFB054':'transparent',borderWidth:0.4,color:check1 && !check2 ?'#EFB054':'white'}}>
  الفاخر
  </Text>
</View>
</Pressable>
</View>
</View>
<View style={{ width:'100%',backgroundColor:'#FFAF36',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',marginBottom:8}}>
<Text style={{
        color:'white',
        fontFamily:'Almarai_Bold',
        fontSize:12,
        textAlign:'center'
      }} >شراء</Text>
</View>
<Pressable onPress={()=>setOption3(false)} style={{width:'100%'}}>
<View style={{ width:'100%',backgroundColor:'#4D5666',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',flexDirection:'row',justifyContent:'center'}}>
 
<Text style={{
        color:'#F2BE72',
        fontFamily:'Almarai_Bold',
        fontSize:12,
        textAlign:'center'
      }} >  عودة </Text>
      
   
</View>
</Pressable>
</View>
</BlurView>
   </View>
   }

{!option1 && option2 && !option3 &&
   <View style={{position:'absolute',width:'100%',height:'100%',backgroundColor:'#00000066',zIndex:2000000000000000,justifyContent:'center',alignItems:'center',}}>
   <BlurView intensity={100} tint="dark" style={{zIndex:22222222222222222222222222222222222222,...blure.blurContainer2}}>
    
   <View style={{...tags.verticale,paddingVertical:16,paddingHorizontal:20,alignItems:'center',justifyContent:'center',width:'90%',backgroundColor:'#39404D',borderRadius:8,}}>
<View style={{...tags.verticale,alignItems:'center',justifyContent:'center',backgroundColor:'#4D5666',borderRadius:16,paddingVertical:8,paddingHorizontal:8,width:'100%',marginBottom:12}}>
<Image source={cards}/>
<Text style={{...tags.textWhiteBold,marginVertical:16}}>
قيد
</Text>
<View style={{...tags.horizontale,alignItems:'center',backgroundColor:'#262B33',borderRadius:8,gap:8,padding:4}}>
<SvgXml xml={svgs[0].dimond}   width="20" height="20"  />
<Text style={{...tags.textWhiteLight}}>
2000
</Text>

</View>
<View style={{...tags.horizontale,gap:8,marginTop:12}}>
  <Pressable onPress={()=>{
    setCheck1(false)
    setCheck2(true)
  }}>
<View>
  <Text style={{...tags.textWhiteMedume,backgroundColor:'#39404D',borderRadius:4,paddingVertical:8,paddingHorizontal:18,borderColor:!check1 && check2 ?'#EFB054':'transparent',borderWidth:0.4,color:!check1 && check2 ?'#EFB054':'white'}}>
  الأساسي
  </Text>
</View>
</Pressable>
<Pressable onPress={()=>{
    setCheck1(true)
    setCheck2(false)
  }}>
<View>
  <Text style={{...tags.textWhiteMedume,backgroundColor:'#39404D',borderRadius:4,paddingVertical:8,paddingHorizontal:24,borderColor:check1 && !check2 ?'#EFB054':'transparent',borderWidth:0.4,color:check1 && !check2 ?'#EFB054':'white'}}>
  الفاخر
  </Text>
</View>
</Pressable>
</View>
</View>
<View style={{ width:'100%',backgroundColor:'#FFAF36',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',marginBottom:8}}>
<Text style={{
        color:'white',
        fontFamily:'Almarai_Bold',
        fontSize:12,
        textAlign:'center'
      }} >شراء</Text>
</View>
<Pressable onPress={()=>setOption2(false)} style={{width:'100%'}}>
<View style={{ width:'100%',backgroundColor:'#4D5666',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',flexDirection:'row',justifyContent:'center'}}>
 
<Text style={{
        color:'#F2BE72',
        fontFamily:'Almarai_Bold',
        fontSize:12,
        textAlign:'center'
      }} >  عودة </Text>
      
   
</View>
</Pressable>
</View>
</BlurView>
   </View> 
   }
    </View>
   );

};

export default Cards ;



