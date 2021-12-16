import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import {Picker} from '@react-native-picker/picker';

export default function Form(props) {
  return (
    <>
      <Text style={styles.inputTittle}>Título do Produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Meu produto"
        value={props.produto.nome}
        onChangeText={text => {
          props.handleChange('nome',text);
        }}
      />
      <Text style={styles.inputTittle}>Categoria</Text>
      <View style={styles.bordaPicker}>
        <Picker
          selectedValue={props.produto.categoria}
          onValueChange={(itemValue, itemIndex) =>
            props.handleChange('categoria', itemValue)
          }>
          <Picker.Item key={1} value={'Categoria 1'} label={'Categoria 1'} />
          <Picker.Item key={2} value={'Categoria 2'} label={'Categoria 2'} />
          <Picker.Item key={3} value={'Categoria 3'} label={'Categoria 3'} />
        </Picker>
      </View>
      <Text style={styles.inputTittle}>Valor</Text>
      <TextInput
        style={styles.input}
        placeholder="R$ 100,00"
        keyboardType="numeric"
        onChangeText={text => {
            props.handleChange('valor', text)
        }}
        value={props.produto.valor.toString(2)}
      />
      <Text style={styles.inputTittle}>Tags</Text>
      <TextInput
        style={styles.input}
        placeholder="Tag1 Tag2 Tag3"
        onChangeText={text => {
            props.handleChange('tags', text);
        }}
        value={props.produto.tags}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    height: 40,
  },
  inputTittle: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 20,
  },
  bordaPicker: {
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
  },
});
