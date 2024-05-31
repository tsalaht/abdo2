import React from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

const LinearGradientContainer: React.FC<any> = (props) => {
  return (
<LinearGradient
         colors={['#EFB054', '#FFAF36']}
      start={[0, 0]}
      end={[1, 1]}  
      style={{borderRadius:6,}} 
      {...props}
    ></LinearGradient>
  );
};

export default LinearGradientContainer;

