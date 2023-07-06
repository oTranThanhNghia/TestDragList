/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';

// import Basic from './src/Basic';

const MenuItems = [
  {text: 'Actions', icon: 'home', isTitle: true, onPress: () => {}},
  {text: 'Action 1', icon: 'edit', onPress: () => {}},
  {text: 'Action 2', icon: 'map-pin', withSeparator: true, onPress: () => {}},
  {text: 'Action 3', icon: 'trash', isDestructive: true, onPress: () => {}},
];

import {HoldMenuProvider, HoldItem} from 'react-native-hold-menu';

const App = () => {
  return (
    <HoldMenuProvider theme="light">
      {/* Your app components */}
      <View style={{flex: 1}}>
        <HoldItem items={MenuItems}>
          <View style={{height: 30, width: 30, backgroundColor: 'red'}} />
        </HoldItem>
        <HoldItem items={MenuItems}>
          <View style={{height: 30, width: 30, backgroundColor: 'blue'}} />
        </HoldItem>
        <HoldItem items={MenuItems} menuAnchorPosition="bottom-right">
          <View style={{height: 30, width: 30, backgroundColor: 'yellow'}} />
        </HoldItem>
      </View>
    </HoldMenuProvider>
  );
};

export default App;
