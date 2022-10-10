import {View, SafeAreaView} from 'react-native';
import React from 'react';
import StackNav from './src/navigators/StackNav';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StackNav />
    </SafeAreaView>
  );
};

export default App;
