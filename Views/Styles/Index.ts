import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewContainer: {
    flexGrow: 1,
backgroundColor:'#131514',
    position: "relative",
    overflow: "visible",
  },

  mainContainer: {
    position: "relative",
    flex: 1,

    paddingHorizontal: 14,
    overflow: "visible",
    
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
},

  logoContainer: {
    top: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    paddingVertical: 70,
  },

  headerText: {
    fontFamily: "Poppins_400Regular",
    color: "white",
    fontSize: 32,
    textTransform: "capitalize",
    lineHeight: 50,
  },

  lightGrayText: {
    fontFamily: "Poppins_400Regular",
    color: "#858585",
    fontSize: 12,
  },

  lightText: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 12,
  },

  interestTitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    marginTop: 8,
    color: "#858585",
  },

  passToHomeBtn: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#fff",
  },

  innerContainer: {
    margin: 4,
    justifyContent: "center",
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  pagination: {
    bottom: -10, // Adjust this value to change the vertical position of the pagination dots
  },
});

export default styles;
