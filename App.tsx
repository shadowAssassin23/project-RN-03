import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

//  For validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object({
  PasswordLength: Yup.number()
    .min(4, 'should be min of 4 characters')
    .max(16, 'should be max of 16 character')
    .required('Length is required'),
});

export default function App() {
  return (
    <View style={{}}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
