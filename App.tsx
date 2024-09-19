import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

//  For validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  PasswordLength: Yup.number()
    .min(4, 'should be min of 4 characters')
    .max(16, 'should be max of 16 character')
    .required('Length is required'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    // todo
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    let characterIndex = Math.round(Math.random() * characters.length);
    result += characters.charAt(characterIndex);
    return result;
  };

  const resetPassword = () => {
    // todo
  };

  return (
    <View style={{}}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
