import React from 'react';
import { TextInput, View, Text} from 'react-native';

const Input = (props) => {
  return(
    <View>
      <Text>
        {props.label}
      </Text>
      <TextInput
        value={this.props.value}
        onChangeText={this.props.onChangeText}
        style={{ height: 20, width: 100}}
      />
    </View>
  );
};

export { Input };
