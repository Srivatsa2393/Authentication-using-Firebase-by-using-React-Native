import React from 'react';
import { TextInput, View, Text} from 'react-native';

const Input = (props) => {
  return(
    <View>
      <Text>
        {props.label}
      </Text>
    </View>
  );
};

export { Input };
