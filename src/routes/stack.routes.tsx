import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screns/Home';
import { CarDetails } from '../screns/CarDetails';
import { Schedulling } from '../screns/Schedulling';
import { SchedulingDetails } from '../screns/SchedulingDetails';
import { SchedulingComplete } from '../screns/SchedulingComplete';
import { MyCars } from '../screns/MyCars';

const { Navigator, Screen } = createNativeStackNavigator();


export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="CarDetails"
        component={CarDetails}
      />
      <Screen
        name="Schedulling"
        component={Schedulling}
      />
      <Screen
        name="SchedulingDetails"
        component={SchedulingDetails}
      />
      <Screen
        name="SchedulingComplete"
        component={SchedulingComplete}
      />
      <Screen
        name="MyCars"
        component={MyCars}
      />
    </Navigator>
  );
}