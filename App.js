import * as React from 'react';
import {Button, Provider as PaperProvider } from 'react-native-paper';
import theme from './theme/theme' 
import Appbar from './head/Appbar'  
import { AntDesign } from '@expo/vector-icons';
 

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Appbar/>
      <Button icon={{ source: "add-a-photo", direction: 'rtl' }}>
  Press me again
</Button>
<AntDesign name="frown" size={24} color="black" />
<i class="fab fa-500px"></i>
    </PaperProvider>
  );
}
