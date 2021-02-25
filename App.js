import * as React from 'react';
import {Button, Provider as PaperProvider } from 'react-native-paper';
import {View } from 'react-native';
import theme from './theme/theme' 
import Appbar from './head/Appbar'  
import { AntDesign } from '@expo/vector-icons';
import Ping from 'react-native-ping';

export default function Main() {
 const [t,st] = React.useState()
  const p = async ()=>{
      try {
    // /**
    //  *
    //  * Get RTT (Round-trip delay time)
    //  *
    //  * @static
    //  * @param {string} ipAddress - For example : 8.8.8.8
    //  * @param {Object} option - Some optional operations
    //  * @param {number} option.timeout - timeout
    //  * @returns
    //  * @memberof Ping
    //  */
  //       console.log(Ping)
  //   const ms = await Ping.start('114.114.114.114',{ timeout: 1000 });
  //   console.log(ms);
  const {
    receivedNetworkSpeed,
    sendNetworkSpeed,
    receivedNetworkTotal,
    sendNetworkTotal
  } = await Ping.getTrafficStats();
  st(receivedNetworkSpeed)
  } catch (error) {
    console.log('special code',error.code, error.message);
  }
  }
  setTimeout(() => {
   p() 
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
