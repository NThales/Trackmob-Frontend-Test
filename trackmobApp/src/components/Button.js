import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Button(props) {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => props.click()}>
      <Text style={styles.btnTxt}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#EEE9E9',
    width: 100,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 25,
  },
  btnTxt: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
