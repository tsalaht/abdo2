import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Subscriptions  from './Subscriptions';
import Diamond  from './Diamond';
import Cards from './Cards';
import Backgorund from './Backgorund';

const Stack = createStackNavigator(); 

const Screens: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Index" id="App Main Stack Navigator"> 
 
                 <Stack.Screen name="Subscriptions " component={Subscriptions }  options={{
          headerShown: false,
        }}/>

<Stack.Screen name="diamond" component={Diamond }  options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="cards" component={Cards}  options={{
            headerShown: false,
          }}/>
              <Stack.Screen name="backgorund" component={Backgorund}  options={{
            headerShown: false,
          }}/>
      </Stack.Navigator>
  );
};{}

export default Screens;