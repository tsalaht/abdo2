import { BlurView } from 'expo-blur';
import React,{useState,useRef} from "react";
import styles from "./Styles/Index";
import { SvgXml } from 'react-native-svg';
import { svgs } from "./Svg/svg";
import { background } from "native-base/lib/typescript/theme/styled-system";
import { StyleSheet,ImageBackground,View,Text, ScrollView,Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Diamond : React.FC  = () => {



    const navigation:any = useNavigation();
    const plagin :any= require('../assets/plagin.png');
    const three :ImageData=require('../assets/three.png')
    const four :ImageData=require('../assets/four.png')
   
      const blure = StyleSheet.create({
        container: {
          flex: 1,
        },
        blurContainer: {
          width:'100%',
          overflow: 'hidden',
          paddingHorizontal:8,
          paddingVertical:24,
          backgroundColor:'#252a3298',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:16
        },
        blurContainer2: {
      flex:1,
            width:'100%',
            overflow: 'hidden',
            paddingHorizontal:32,
            paddingTop:1,
            backgroundColor:'#252a3298',
            alignItems:'center',
            justifyContent:'center',
          
            borderTopLeftRadius:24,
            borderTopRightRadius:24,
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
<Pressable onPress={() => navigation.navigate('cards')}>
<View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#4D5666',gap:8,flexDirection:'column',paddingVertical:7,paddingHorizontal:15,borderRadius:8}}>
<SvgXml xml={svgs[0].cardhe}   width="16" height="16"   />
<Text style={{...tags.textWhiteMedume,fontSize:10,textAlign:'center'}}>

تصاميم
{'\n'}
الورق
</Text>
</View>
</Pressable>
<View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#4D5666',gap:8,flexDirection:'column',paddingVertical:5,paddingHorizontal:12,borderRadius:8}}>
<SvgXml xml={svgs[0].shodowd}   width="25" height="25"   />
<Text style={{fontSize:10,textAlign:'center',color:'#B9F2FF',    fontFamily:'Almarai_Regular'}}>

الالماس
</Text>
</View>
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
    <ScrollView style={{zIndex:2,marginTop:20}} >

<View style={{...tags.verticale,marginHorizontal:16,paddingBottom:110}}>
<View style={{...tags.horizontale}}>
<View style={{...tags.verticale,paddingVertical:8,paddingHorizontal:8,alignItems:'center',justifyContent:'center',width:'50%'}}>
<BlurView intensity={80} tint="dark" style={{zIndex:22222222,...blure.blurContainer}}>
<SvgXml xml={svgs[0].twodd}      />
<Text style={{...tags.textWhiteBold,marginVertical:16}}>
1,500 ألماسة
</Text>
<View style={{ width:'100%',backgroundColor:'#FFAF36',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',marginBottom:8}}>
<Text style={{
        color:'white',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} > 
شراء بـ 19.99 ر.س
       </Text>
</View>
<View style={{ width:'100%',backgroundColor:'#4D5666',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',flexDirection:'row',justifyContent:'center'}}>
<Text style={{
        color:'#F2BE72',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} >  اهداء لصديق</Text>
      <SvgXml xml={svgs[0].gift }      />
</View>
       </BlurView>
</View>
<View style={{...tags.verticale,paddingVertical:8,paddingHorizontal:8,alignItems:'center',justifyContent:'center',width:'50%'}}>
<BlurView intensity={80} tint="dark" style={{zIndex:22222222,...blure.blurContainer}}>
<SvgXml xml={svgs[0].twod}      />
<Text style={{...tags.textWhiteBold,marginVertical:16}}>
550 ألماسة
</Text>
<View style={{ width:'100%',backgroundColor:'#FFAF36',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',marginBottom:8}}>
<Text style={{
        color:'white',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} >  شراء بـ 7.99 ر.س</Text>
</View>
<View style={{ width:'100%',backgroundColor:'#4D5666',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',flexDirection:'row',justifyContent:'center'}}>
<Text style={{
        color:'#F2BE72',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} >  اهداء لصديق</Text>
      <SvgXml xml={svgs[0].gift }      />
</View>
       </BlurView>
</View>

</View>
<View style={{...tags.horizontale}}>
<View style={{...tags.verticale,paddingVertical:8,paddingHorizontal:8,alignItems:'center',justifyContent:'center',width:'50%'}}>
<BlurView intensity={80} tint="dark" style={{zIndex:22222222,...blure.blurContainer}}>
<Image source={four}/>
<Text style={{...tags.textWhiteBold,marginVertical:16}}>
12,000 ألماسة
</Text>
<View style={{ width:'100%',backgroundColor:'#FFAF36',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',marginBottom:8}}>
<Text style={{
        color:'white',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} > 
شراء بـ 114.99 ر.س
       </Text>
</View>
<View style={{ width:'100%',backgroundColor:'#4D5666',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',flexDirection:'row',justifyContent:'center'}}>
<Text style={{
        color:'#F2BE72',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} >  اهداء لصديق</Text>
      <SvgXml xml={svgs[0].gift }      />
</View>
       </BlurView>
</View>
<View style={{...tags.verticale,paddingVertical:8,paddingHorizontal:8,alignItems:'center',justifyContent:'center',width:'50%'}}>
<BlurView intensity={80} tint="dark" style={{zIndex:22222222,...blure.blurContainer}}>
{/* <Image source={require('../assets/three.png')}/> */}
<Image source={three}/>
<Text style={{...tags.textWhiteBold,marginVertical:16}}>
4,000 ألماسة
</Text>
<View style={{ width:'100%',backgroundColor:'#FFAF36',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',marginBottom:8}}>
<Text style={{
        color:'white',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} >  شراء بـ 7.99 ر.س</Text>
</View>
<View style={{ width:'100%',backgroundColor:'#4D5666',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',flexDirection:'row',justifyContent:'center'}}>
<Text style={{
        color:'#F2BE72',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} >  اهداء لصديق</Text>
      <SvgXml xml={svgs[0].gift }      />
</View>
       </BlurView>
</View>

</View>
<View style={{...tags.horizontale}}>
<View style={{...tags.verticale,paddingVertical:8,paddingHorizontal:8,alignItems:'center',justifyContent:'center',width:'50%'}}>
<BlurView intensity={80} tint="dark" style={{zIndex:22222222,...blure.blurContainer}}>
<Image source={four}/>
<Text style={{...tags.textWhiteBold,marginVertical:16}}>
12,000 ألماسة
</Text>
<View style={{ width:'100%',backgroundColor:'#FFAF36',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',marginBottom:8}}>
<Text style={{
        color:'white',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} > 
شراء بـ 114.99 ر.س
       </Text>
</View>
<View style={{ width:'100%',backgroundColor:'#4D5666',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',flexDirection:'row',justifyContent:'center'}}>
<Text style={{
        color:'#F2BE72',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} >  اهداء لصديق</Text>
      <SvgXml xml={svgs[0].gift }      />
</View>
       </BlurView>
</View>
<View style={{...tags.verticale,paddingVertical:8,paddingHorizontal:8,alignItems:'center',justifyContent:'center',width:'50%'}}>
<BlurView intensity={80} tint="dark" style={{zIndex:22222222,...blure.blurContainer}}>
{/* <Image source={require('../assets/three.png')}/> */}
<Image source={three}/>
<Text style={{...tags.textWhiteBold,marginVertical:16}}>
4,000 ألماسة
</Text>
<View style={{ width:'100%',backgroundColor:'#FFAF36',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',marginBottom:8}}>
<Text style={{
        color:'white',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} >  شراء بـ 7.99 ر.س</Text>
</View>
<View style={{ width:'100%',backgroundColor:'#4D5666',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',flexDirection:'row',justifyContent:'center'}}>
<Text style={{
        color:'#F2BE72',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} >  اهداء لصديق</Text>
      <SvgXml xml={svgs[0].gift }      />
</View>
       </BlurView>
</View>

</View>
<View style={{...tags.horizontale}}>
<View style={{...tags.verticale,paddingVertical:8,paddingHorizontal:8,alignItems:'center',justifyContent:'center',width:'50%'}}>
<BlurView intensity={80} tint="dark" style={{zIndex:22222222,...blure.blurContainer}}>
<Image source={four}/>
<Text style={{...tags.textWhiteBold,marginVertical:16}}>
12,000 ألماسة
</Text>
<View style={{ width:'100%',backgroundColor:'#FFAF36',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',marginBottom:8}}>
<Text style={{
        color:'white',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} > 
شراء بـ 114.99 ر.س
       </Text>
</View>
<View style={{ width:'100%',backgroundColor:'#4D5666',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',flexDirection:'row',justifyContent:'center'}}>
<Text style={{
        color:'#F2BE72',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} >  اهداء لصديق</Text>
      <SvgXml xml={svgs[0].gift }      />
</View>
       </BlurView>
</View>
<View style={{...tags.verticale,paddingVertical:8,paddingHorizontal:8,alignItems:'center',justifyContent:'center',width:'50%'}}>
<BlurView intensity={80} tint="dark" style={{zIndex:22222222,...blure.blurContainer}}>
<Image source={three}/>
<Text style={{...tags.textWhiteBold,marginVertical:16}}>
4,000 ألماسة
</Text>
<View style={{ width:'100%',backgroundColor:'#FFAF36',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',marginBottom:8}}>
<Text style={{
        color:'white',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} >  شراء بـ 7.99 ر.س</Text>
</View>
<View style={{ width:'100%',backgroundColor:'#4D5666',borderRadius:6,paddingVertical:10,elevation:10,shadowColor:'#EFB054',flexDirection:'row',justifyContent:'center'}}>
<Text style={{
        color:'#F2BE72',
        fontFamily:'Almarai_Bold',
        fontSize:10,
        textAlign:'center'
      }} >  اهداء لصديق</Text>
      <SvgXml xml={svgs[0].gift }      />
</View>
       </BlurView>
</View>

</View>
</View>
    </ScrollView>
   

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
   
    </View>
   );

};

export default Diamond ;



