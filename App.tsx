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
    let characterList = '';

    const charUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charLowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const charNumbers = '01234567890';
    const charSymbols = '!@#$%^&*()_+';

    if (upperCase) characterList += charUpperCase;

    if (lowerCase) characterList += charLowerCase;

    if (numbers) characterList += charNumbers;

    if (symbols) characterList += charSymbols;

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    let characterIndex = Math.round(Math.random() * characters.length);
    result += characters.charAt(characterIndex);
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View style={{}}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
