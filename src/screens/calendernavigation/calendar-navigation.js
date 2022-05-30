import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { nativeStackConfig } from './nativeStackConfig';

import Routes from './routes';
// import { CreateTask } from '../Calenderscreen/CreateTask/index';
// import {  HomeC } from '../Calenderscreen/Home/index';
import { CreateTask, HomeC } from '../Calenderscreen';
//==import { useStore } from '@calendar/store';


const Stack = createStackNavigator();

const MainNavigatorWrapper = ()=> {
  return (
    <Stack.Navigator {...nativeStackConfig}>
      <Stack.Screen component={HomeC} name={Routes.HOME} />
      <Stack.Screen component={CreateTask} name={Routes.CREATE_TASK} />
    </Stack.Navigator>
  );
}

const AppContainer = React.forwardRef((props, ref) => (
  <NavigationContainer ref={ref}>
    <MainNavigatorWrapper initialRoute={props.initialRoute} />
  </NavigationContainer>
));

AppContainer.displayName = 'AppContainer';

export default React.memo(MainNavigatorWrapper);
