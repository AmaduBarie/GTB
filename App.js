import * as React from 'react';
import {Button, Provider as PaperProvider } from 'react-native-paper';
import {View } from 'react-native';
import theme from './theme/theme' 
import Appbar from './head/Appbar'  
import { AntDesign } from '@expo/vector-icons';
import p from 'ping.js';

export default function Main() {
 const [t,st] = React.useState()
  const ps = ()=>{
      try {
        p.ping("https://google.com", (err, data) => {
          if (err) {
            console.log("error loading resource", err);
          }
          console.log(data)
         st({ google: data });
        });
  } catch (error) {
    console.log('special code',error.code, error.message);
  }
  }
  setTimeout(() => {
   ps() 
  }, 3000);
  
  return (
    <PaperProvider theme={theme}>
      <Appbar/>
      <Button icon={{ source: "add-a-photo", direction: 'rtl' }}>
  Press me again
</Button>
<AntDesign name="frown" size={24} color="black" />
    <View>{t}</View>
    </PaperProvider>
  );
}
