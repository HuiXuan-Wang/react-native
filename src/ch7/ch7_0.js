import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

/*export default class ch7_0 extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello, ch7.</Text>
      </View>

    );
  }
}*/

function Welcome(props) {
  const {phone} = props;
  const formattedPhone =
    phone.substring(0, 4) +
    '-' +
    phone.substring(4, 7) +
    '-' +
    phone.substring(7);

  return (
    <View>
      <Text>Hi, {props.name}</Text>
      <Text>your phone number is {formattedPhone}</Text>
    </View>
  );
}

Welcome.defaultProps = {
  phone: '09xxxxxxxx',
};

Welcome.propTypes = {
  phone: PropTypes.string.isRequired,
};

export default () => <Welcome name="Jacky" phone={'0912345678'} />;
