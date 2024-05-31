import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { SvgXml } from 'react-native-svg';
import { svgs } from '../Views/Svg/svg';
import LinearGradientContainer from './LinearGradientContainer';

const Card : React.FC <any>= ({ imageSource, svgXml, diamondText, priceText }) => {
    return (
        <View style={styles.cardContainer}>
          <BlurView intensity={20} tint="dark" style={styles.blurContainer}>
            {imageSource ? (
              <Image source={imageSource} style={styles.image} />
            ) : (
              <SvgXml xml={svgXml} />
            )}
            <Text style={styles.diamondText}>{diamondText}</Text>
            <LinearGradientContainer  width={'100%'} padding={0} marginBottom={10} >
            <View style={styles.priceButton}>
              <Text style={styles.priceText}>{priceText}</Text>
            </View>
            </LinearGradientContainer>
            <View style={styles.giftButton}>
              <Text style={styles.giftText}>اهداء لصديق</Text>
              <SvgXml xml={svgs[0].gift } />
            </View>
          </BlurView>
        </View>
      );
};

const styles = StyleSheet.create({
    cardContainer: {
      paddingVertical: 8,
      paddingHorizontal: 8,
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
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
    image: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
    },
    diamondText: {
      color: 'white',
      fontFamily: 'Almarai_Bold',
      fontSize: 16,
      marginVertical: 16,
    },
    priceButton: {
      width: '100%',
      // backgroundColor: '#FFAF36',
      // borderRadius: 6,
      paddingVertical: 6,
      elevation: 10,
      shadowColor: '#EFB054',
      marginBottom: 8,
    },
    priceText: {
      color: 'white',
      fontFamily: 'Almarai_Bold',
      fontSize: 10,
      textAlign: 'center',
    },
    giftButton: {
      width: '100%',
      backgroundColor: '#4D5666',
      borderRadius: 6,
      paddingVertical: 10,
      elevation: 10,
      shadowColor: '#EFB054',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    giftText: {
      color: '#F2BE72',
      fontFamily: 'Almarai_Bold',
      fontSize: 10,
      textAlign: 'center',
      marginRight: 5,
    },
  });

export default Card;


// xml={svgs[0].gift }