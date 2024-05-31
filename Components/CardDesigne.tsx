import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

const CardDesigne : React.FC <any>= ({ imageSource, name }) => {
  return (
    <View style={styles.cardContainer}>
      <BlurView intensity={20} tint="dark" style={styles.blurContainer}>
        <Image source={imageSource}  />
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.dotContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
    {name==='قيد'&& <View style={styles.dot} />}
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
//   image: {
//     width: 80,
//     height: 80,
//     resizeMode: 'contain',
//   },
  nameText: {
    color: 'white',
    fontFamily: 'Almarai_Bold',
    fontSize: 16,
    marginVertical: 16,
  },
  dotContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    borderRadius: 50,
    backgroundColor: '#4D5666',
    width: 8,
    height: 8,
  },
});

export default CardDesigne;
