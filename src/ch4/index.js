/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Welcome from './functiontest.js';
import Welcome2 from './classtest.js';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{backgroundColor: '#FFFFBB'}}>
      <Welcome name="Bear" />
      <Welcome2 name="Xuan" />
      <Text>Hello, Xuan.</Text>
      <View style={{backgroundColor: '#E8CCFF'}}>
        <Image
          source={require('../image/image1.png')}
          style={{width: 200, height: 150, resizeMode: 'cover'}}
        />
      </View>
      <View style={{backgroundColor: '#FFB3FF'}}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg',
          }}
          style={{width: 200, height: 100, resizeMode: 'contain'}}
        />
      </View>
      <Button
        title="Simple Button"
        color="#99BBFF"
        onPress={() => {
          alert('Hello');
        }}
      />
      <TouchableOpacity
        onPress={() => alert('一般點擊')}
        onLongPress={() => alert('長按點擊')}>
        <Text>點擊我！！</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
