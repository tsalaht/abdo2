import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { SvgXml } from 'react-native-svg';
import LinearGradientContainer from './LinearGradientContainer';

const BackgroundCard: React.FC <any> = ({ svgXml, name, rentalIcon }) => {
  return (
    <View style={styles.cardContainer}>
      <BlurView intensity={20} tint="dark" style={styles.blurContainer}>
        <SvgXml xml={svgXml} />
        <Text style={styles.nameText}>{name}</Text>
        <LinearGradientContainer style={styles.rentalButton}>
        <View style={{...styles.rentalButton,marginBottom:0}}>
          <SvgXml xml={rentalIcon} style={styles.rentalIcon} />
          <Text style={styles.rentalText}>
          تأجير لمدة 7 أيام بـ   500
          </Text>
        </View>
        </LinearGradientContainer>
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
  nameText: {
    color: 'white',
    fontFamily: 'Almarai_Bold',
    fontSize: 16,
    marginVertical: 16,
  },
  rentalButton: {
    width: '100%',
    borderRadius: 6,
    paddingVertical: 3,
    elevation: 10,
    shadowColor: '#EFB054',
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rentalIcon: {
    marginRight: 5,
  },
  rentalText: {
    color: 'white',
    fontFamily: 'Almarai_Bold',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default BackgroundCard;
