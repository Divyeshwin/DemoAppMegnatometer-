/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
import React, { useState } from 'react';
import { View, Text ,TouchableHighlight} from 'react-native';
import { magnetometer } from 'react-native-sensors';
var RNFS = require('react-native-fs');
import RNFetchBlob from 'react-native-fetch-blob';
import {initialize,showHelpCenter} from 'react-native-zendesk';


 var path = RNFetchBlob.fs.dirs.DownloadDir + '/readings.txt';

const App = () => {
  config = {
    appId: '98c604034c64584313b37d8da5583e0bc9e7a9c92038c14b',
    clientId: 'mobile_sdk_client_21750addbfdf50fe8399',
    zendeskUrl: 'https://winjit.zendesk.com'
  }
  
  initialize(config);
  // const [value, setValue] = useState(0);
  // const [axisVal, setAxisValue] = useState("");
 
  // const subscription = magnetometer.subscribe(({ x, y, z, timestamp }) => {
 
  //   var dateTime = new Date(timestamp);
  //   dateTime.toISOString(); 
  //   let a = "x: " + x + "\ny: " + y + "\nz: " + z + "\ntimestamp: " + timestamp + "\n time: " + dateTime+"\n\n";
  //   setAxisValue(a);
  //   let teslaVal = parseFloat(Math.sqrt((x * x) + (y * y) + (z * z)));
  //   setValue(teslaVal);


  //     // write the file
  //     // RNFS.writeFile(path, a, 'utf8')
  //     RNFS.appendFile(path, a, 'utf8')
  //     // RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')

  //     .then((success) => {
  //     console.log('path :'+path+' , '+a +'WRITTEN!');
  //     })
  //     .catch((err) => {
  //     console.log(err.message);
  //     });


  // });
  // subscription;

  const onPress = () => {
  showHelpCenter({hideContactSupport:true});
// console.log('test21');  
}
  

 
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
 
<TouchableHighlight        
 onPress={onPress}
>
      <Text style={{ fontSize: 20, marginTop: 30 }}>{"HelpButton"}</Text>
      </TouchableHighlight>
    </View>
  );
};
 
export default App;