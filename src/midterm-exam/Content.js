import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import StatusList from './StatusList';
import DeviceList from './DeviceList';
import data from './data';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 載入所有設備的資料
      devices: data,
      // 【進階實作範圍】控制設備列表的對應顯示狀態，即用來控制列表顯示對應狀態的設備（all：全部設備；opened：已開啟設備；closed：已關閉設備）
      displayStatus: 'all',
    };
  }

  /**
   * 控制全部設備「開啟」或「關閉」
   * TODO: 長按指定狀態按鈕時，可觸發此變更全部設備「開啟」或「關閉」狀態的方法
   * Tip: 可善用 array.map() 來調整開關資訊
   */
  handleToggleAll = () => {
    <TouchableOpacity onLongPress={() => alert('長按點擊')}></TouchableOpacity>;
  };

  /**
   * 控制指定設備「開啟」或「關閉」
   * TODO: 點擊指定設備按鈕時，可觸發此變更指定設備「開啟」或「關閉」狀態的方法
   * Tip: 可善用 array.map() 來調整開關資訊
   */
  handleToggle = () => {
    <TouchableOpacity onPress={() => alert('一般點擊')}></TouchableOpacity>;
  };

  /**
   * 【進階實作範圍】變更顯示對應狀態以控制列表顯示何種狀態的設備
   * TODO: 點擊指定狀態按鈕時，觸發控制設備列表對應顯示狀態值的變更
   */
  handleChangeDisplayStatus = () => {};

  /**
   * 【進階實作範圍】根據顯示對應狀態取得符合的設備列表
   * TODO: 根據顯示對應狀態來過濾顯示的設備列表
   * Tip: 可善用 array.filter() 來過濾設備資訊
   */
  handleGetDisplayedDevices = () => {};

  /**
   * 渲染「設備狀態」與「設備列表」畫面
   * TODO:
   *     1. 實作參數與事件傳遞
   *     2. 讓列表具備滑動功能
   */
  render() {
    return (
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>設備狀態</Text>
          <StatusList />
        </View>
        <View style={styles.hr} />
        <View>
          <Text style={styles.title}>
            設備列表
            <Text style={styles.titleDesc}>（單擊變更設備狀態）</Text>
          </Text>
          <DeviceList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 10,
  },
  titleDesc: {
    fontSize: 13,
    color: '#EEE',
  },
  hr: {
    borderColor: '#EEE',
    borderWidth: 0.2,
    marginVertical: 15,
  },
});

export default Content;
