import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.tittle}>Teste Trackmob Frontend</Text>
      <Text style={styles.subTittle}>Meus Produtos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 4,
  },
  tittle: {
    fontSize: 28,
    color: 'black',
  },
  subTittle: {
    color: 'black',
  },
});
