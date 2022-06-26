import React from 'react';
import { TouchableOpacity, StyleSheet, View, Switch, Text, Image } from 'react-native';
import SystemSetting from 'react-native-system-setting';
import Slider from '@react-native-community/slider';
import { Actions } from 'react-native-router-flux';

class SetDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wifiEnabled: false,
      bluetoothEnabled: false,
      locationEnabled: false,
      brightness: 0,
      volume: 0,
    };
  }

  componentDidMount() {
    // 初始取得目前 WiFi 的開啟狀態
    SystemSetting.isWifiEnabled().then((isEnabled) => {
      this.setState({
        wifiEnabled: isEnabled,
      });
    });
    // 初始取得目前 藍芽 的開啟狀態
    SystemSetting.isBluetoothEnabled().then((isEnabled) => {
      this.setState({
        bluetoothEnabled: isEnabled,
      });
    });
    // 初始取得目前 定位服務 的開啟狀態
    SystemSetting.isLocationEnabled().then((isEnabled) => {
      this.setState({
        locationEnabled: isEnabled,
      });
    });
    // 初始取得目前 螢幕亮度 的值（0~1）
    SystemSetting.getAppBrightness().then((brightness) => {
      this.setState({
        brightness: brightness,
      });
    });
    // 初始取得目前 音量大小 的值（0~1）
    SystemSetting.getVolume().then((volume) => {
      this.setState({
        volume: volume,
      });
    });
  }

  // 切換 WiFi 開關
  handleChangeWifi = () => {
    SystemSetting.switchWifi(() => {
      // 當切換完畢後返回 APP 時觸發 Callback 並重新取得 WiFi 狀態
      SystemSetting.isWifiEnabled().then((enable) => {
        this.setState({
          wifiEnabled: enable,
        });
      });
    });
  };

  // 切換 藍芽 開關
  handleChangeBluetooth = () => {
    SystemSetting.switchBluetooth(() => {
      // 當切換完畢後返回 APP 時觸發 Callback 並重新取得 藍芽 狀態
      SystemSetting.isBluetoothEnabled().then((enable) => {
        this.setState({
          bluetoothEnabled: enable,
        });
      });
    });
  };

  // 切換 定位服務 開關
  handleChangeLocation = () => {
    SystemSetting.switchLocation(() => {
      // 當切換完畢後返回 APP 時觸發 Callback 並重新取得 定位服務 狀態
      SystemSetting.isLocationEnabled().then((enable) => {
        this.setState({
          locationEnabled: enable,
        });
      });
    });
  };

  // 滑動結束改變 螢幕亮度值
  handleChangeCompletedBrightness = (value) => {
    this.setState(
      () => ({
        brightness: value,
      }),
      () => {
        SystemSetting.setAppBrightness(value);
      },
    );
  };

  // 滑動結束改變 音量大小值
  handleChangeCompletedVolume = (value) => {
    console.log(value);
    this.setState(
      () => ({
        volume: value,
      }),
      () => SystemSetting.setVolume(value),
    );
  };

  render() {
    const { wifiEnabled, bluetoothEnabled, locationEnabled, brightness, volume } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.listItem}>
          <Text style={styles.TitleText}>Setting</Text>
          <View>
            <TouchableOpacity onPress={() => Actions.drawerClose()}>
              <Image source={{ uri: 'https://pic.pngbag.com/00/35/94/bf5d6a41acb1f4e1.jpg' }} style={styles.cancelicon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.ItemText}>WiFi</Text>
          <Switch value={wifiEnabled} onValueChange={this.handleChangeWifi} />
        </View>
        <View style={styles.listItem}>
          <Text style={styles.ItemText}>藍芽</Text>
          <Switch value={bluetoothEnabled} onValueChange={this.handleChangeBluetooth} />
        </View>
        <View style={styles.listItem}>
          <Text style={styles.ItemText}>定位服務</Text>
          <Switch value={locationEnabled} onValueChange={this.handleChangeLocation} />
        </View>
        <View style={styles.listItem}>
          <Text style={styles.ItemText}>螢幕亮度</Text>
          <Slider
            minimumValue={0}
            maximumValue={1}
            value={brightness}
            onSlidingComplete={this.handleChangeCompletedBrightness}
            style={styles.slider}
          />
        </View>
        <View style={styles.listItem}>
          <Text style={styles.ItemText}>音量大小</Text>
          <Slider
            minimumValue={0}
            maximumValue={1}
            value={volume}
            onSlidingComplete={this.handleChangeCompletedVolume}
            style={styles.slider}
          />
        </View>
        <View>
          <Image source={{ uri: 'https://imgur.dcard.tw/vFjjB6Wh.jpg' }} style={styles.image} />
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b0c3e1',
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    //paddingVertical: 5,
    //marginVertical: 5,
  },
  slider: {
    width: 150,
  },
  cancelicon: {
    margin: 15,
    width: 20,
    height: 20,
  },
  TitleText: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 28,
  },
  ItemText: {
    fontSize: 18,
    margin: 15,
  },
  image: {
    width: 260,
    height: 375,
  },
});

export default SetDrawer;
