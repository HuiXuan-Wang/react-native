import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

class ch8_4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { id: 1, label: 'React', isChecked: false },
        { id: 2, label: 'React Native', isChecked: false },
        { id: 3, label: 'Angular', isChecked: false },
        { id: 4, label: 'Vue', isChecked: false },
      ],
    };
  }

  handleSelectedValue = (id, value) => {
    const { languages } = this.state;
    const newLanguages = languages.map((language) => {
      return language.id === id ? { ...language, isChecked: value } : { ...language };
    });

    this.setState({
      languages: newLanguages,
    });
  };

  handleSubmit = () => {
    console.log('送出的表單資料：', this.state.languages);
  };

  render() {
    const { languages } = this.state;

    return (
      <View style={styles.container}>
        <Text>勾選您擁有的程式技能</Text>
        {languages.map((language) => (
          <View key={language.id} style={styles.checkboxContainer}>
            <CheckBox
              value={language.isChecked}
              onValueChange={(value) => this.handleSelectedValue(language.id, value)}
            />
            <Text>{language.label}</Text>
          </View>
        ))}

        <Button title="送出表單" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ch8_4;
