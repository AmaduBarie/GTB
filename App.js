import * as React from 'react';
import {Button, Provider as PaperProvider } from 'react-native-paper';
import theme from './theme/theme' 
import Appbar from './head/Appbar'  
 

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Appbar/>
      <Button icon={{ source: "add-a-photo", direction: 'rtl' }}>
  Press me
</Button>
    </PaperProvider>
  );
}
