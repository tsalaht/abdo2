import { BlurView } from 'expo-blur';
import React,{useState,useRef} from "react";
import styles from "./Styles/Index";
import { SvgXml } from 'react-native-svg';
import { svgs } from "./Svg/svg";
import { background } from "native-base/lib/typescript/theme/styled-system";
import { StyleSheet,ImageBackground,View,Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradientContainer from '../Components/LinearGradientContainer';



const Subscriptions : React.FC  = () => {

const [days,setDays]=useState(14)

    const navigation:any = useNavigation();
    const plagin :any= require('../assets/plagin.png');
   
 
      const tags = StyleSheet.create({
  
   verticale:{
    flexDirection:'column'
   },
   horizontale:{
    flexDirection:'row'
   },
   Shadow:{
    elevation:10,shadowColor:'#EFB054',
    borderRadius:6,
   }
      
        
      });
      
    
   return (
    <View style={styles.viewContainer}>
       <ImageBackground style={styles.background}  source={plagin}  alt="plagin">
        <View style={{ position:'absolute',width:'100%',height:'100%',zIndex:1,backgroundColor:'#000000d9'}}     ></View>
      <View style={{...tags.horizontale,backgroundColor:'#262B3366',zIndex:2,paddingTop:40,width:'100%',justifyContent:'space-between', paddingHorizontal:32,alignItems:'center',paddingBottom:20,borderBottomRightRadius:24,borderBottomLeftRadius:24 }}>
      <View style={{...tags.horizontale,padding:12,backgroundColor:"#4D5666",borderRadius:16,alignItems:'center',justifyContent:'center'}}>
        <View style={{ elevation:20,shadowColor:'#B9F2FF',}}>
        <SvgXml xml={svgs[0].dimond}   width="20" height="20"  />
        </View>
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
      }} >الاشتراكات</Text>
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
      <View style={{ width:'100%',zIndex:2,padding:20,...tags.verticale, marginTop:50,alignItems:"center",justifyContent:'center',gap:16}}>
      <SvgXml xml={svgs[0].bigDemond} />
      <Text style={{
        color:'white',
        fontFamily:'Almarai_Regular',
        fontSize:16

      }}>
      الاشتراك عن طريق الألماس
      </Text>
      <Text style={{
        color:'#FDF4E7',
        fontFamily:'Almarai_Regular',
        fontSize:10

      }}>
 يمكنك الاشتراك عن طريق الدفع بالألماس
      </Text>
      <View style={{...tags.horizontale,borderRadius:16,padding:8,backgroundColor:'#39404D',alignItems:'center',gap:8}}>

        {/* <SvgXml xml={svgs[0].dimond}   width="20" height="20"  /> */}
        <Text style={{
        color:'white',
        fontFamily:'Almarai_Light',
        fontSize:10,
      }} >يوم واحد</Text>
        <Text style={{
        color:'#FDF5E9',
        fontFamily:'Almarai_Bold',
        fontSize:10,
      }} >مقابل</Text>
      
        <View  style={{...tags.horizontale,alignItems:'center'}}>
        <SvgXml xml={svgs[0].dimond}   width="20" height="20"  />
        <Text style={{
        color:'white',
        fontFamily:'Almarai_Light',
        fontSize:12,
      }} >160</Text>
        </View>
        
      </View>
      <Text style={{
        color:'#FDF4E7',
        fontFamily:'Almarai_Regular',
        fontSize:10

      }}>
أقل مدة اشتراك 7 أيام
      </Text>
      </View>
    
   
<View style={{
    ...tags.verticale,
    backgroundColor:'#262B33',zIndex:2,paddingHorizontal:16,paddingVertical:16,marginHorizontal:16,borderRadius:8,gap:24
}}>

<View style={{
    ...tags.verticale,
    borderWidth:0.2,
    borderColor:'#FAE7CB',
    borderRadius:8,paddingHorizontal:8,paddingVertical:12
}}>
  <Text style={{
        color:'white',
        fontFamily:'Almarai_Regular',
        fontSize:10,
        marginBottom:12
      }} >خيارات الشراء السريعة</Text>
      <View style={{...tags.horizontale,justifyContent:'space-between'}}>
      <Pressable onPress={()=>setDays(7)}>
      <View style={{...tags.horizontale ,backgroundColor:'#39404D', paddingHorizontal:27 ,paddingVertical:8,borderRadius:4}}>
      <Text style={{
        color:'white',
        fontFamily:'Almarai_Regular',
        fontSize:14,
      }} > 7 أيام</Text>
</View>
</Pressable>
<Pressable onPress={()=>setDays(14)}>
      <View style={{...tags.horizontale ,backgroundColor:'#39404D', paddingHorizontal:27 ,paddingVertical:8,borderRadius:4}}>
      <Text style={{
        color:'white',
        fontFamily:'Almarai_Regular',
        fontSize:14,
      }} > 14 يوم</Text>
</View>

</Pressable>

<Pressable onPress={()=>setDays(30)}>
      <View style={{...tags.horizontale ,backgroundColor:'#39404D', paddingHorizontal:27 ,paddingVertical:8,borderRadius:4}}>
      <Text style={{
        color:'white',
        fontFamily:'Almarai_Regular',
        fontSize:14,
      }} >  30 يوم</Text>
</View>
</Pressable>

      </View>
</View>
<View style={{...tags.verticale ,gap:8}}>
<View style={{...tags.horizontale,justifyContent:'space-between',alignItems:'center'}}>

      <View style={{...tags.horizontale,gap:4}}>
      <Pressable onPress={()=>setDays(days +1)}>
      <View style={{...tags.horizontale,padding:12,backgroundColor:'#39404D',borderRadius:5,alignItems:'center',justifyContent:'center'}}>
      <SvgXml xml={svgs[0].top}   width="12" height="12"  />

    </View>
    </Pressable>
    <View style={{...tags.horizontale,paddingHorizontal:50,backgroundColor:'#39404D',borderRadius:5,paddingVertical:10,alignItems:'center',justifyContent:'center'}}>
    <Text style={{
        color:'white',
        fontFamily:'Almarai_Light',
        fontSize:10,
      }} >{days} يوم</Text>

    </View>
    <Pressable onPress={()=>setDays(days -1)}>
    <View style={{...tags.horizontale,padding:12,backgroundColor:'#39404D',borderRadius:5,alignItems:'center',justifyContent:'center'}}>
      <SvgXml xml={svgs[0].downe}   width="12" height="12"  />

    </View>
    </Pressable>
      </View>
      <Text style={{
        color:'white',
        fontFamily:'Almarai_Light',
        fontSize:10,
      }} > أيام الاشتراك</Text>
    </View>
    <View style={{...tags.horizontale,justifyContent:'space-between',alignItems:'center'}}>

      <View style={{...tags.horizontale,gap:4}}>

    <View style={{...tags.horizontale,paddingHorizontal:77,backgroundColor:'#39404D',borderRadius:5,paddingVertical:10,alignItems:'center',justifyContent:'center'}}>
    <SvgXml xml={svgs[0].dimond}   width="20" height="20"  />
      <Text style={{
        color:'white',
        fontFamily:'Almarai_Light',
        fontSize:12,
      }} >1478</Text>

    </View>

      </View>
      <Text style={{
        color:'white',
        fontFamily:'Almarai_Light',
        fontSize:10,
      }} >كمية الألماس </Text>
    </View>
</View>
<Pressable  onPress={() => navigation.navigate('diamond')}>
  <LinearGradientContainer style={tags.Shadow}>
<View style={{ width:'100%',paddingVertical:10,elevation:10,shadowColor:'#EFB054'}}>
<Text style={{
        color:'white',
        fontFamily:'Almarai_Bold',
        fontSize:12,
        textAlign:'center'
      }} >اشترك بواسطة الألماس</Text>
</View>
</LinearGradientContainer>
</Pressable>

</View>

      </ImageBackground>
   
    </View>
   );

};

export default Subscriptions ;



