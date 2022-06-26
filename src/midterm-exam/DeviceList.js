import {tsIndexSignature} from '@babel/types';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import DeviceItem from './DeviceItem';
import data from './data';
//console.log(data);
/**
 * 設備列表
 * TODO: 實作產生多個設備項目
 * Tip:
 *     1. 可善用 array.map() 產生多個設備項目
 */
const DeviceList = props => {
  const {devices} = props;
  return (
    <ScrollView>
      {devices.map(device => (
        <DeviceItem />
      ))}
    </ScrollView>
  );
};

export default DeviceList;
