import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      valor: 'R$ ',
      categoria: 'Categoria 1',
      tags: [],
    };
  }

  render() {
    const {route} = this.props;

    const {navigation} = this.props;

    return (
      <KeyboardAvoidingView style={styles.container}
      keyboardVerticalOffset={50}
      >
        <ScrollView>
        <View style={styles.header}>
          <Text style={styles.tittle}>Teste Trackmob Frontend</Text>
          <Text style={styles.subTittle}>Meus Produtos</Text>
        </View>

        <Text style={styles.inputTittle}>Título do Produto</Text>
        <TextInput
          style={styles.input}
          placeholder="Meu produto"
          onChangeText={text => {
            this.setState({nome: text});
          }}
        />

        <Text style={styles.inputTittle}>Categoria</Text>

        <View style={styles.bordaPicker}>
          <Picker
            selectedValue={this.state.categoria}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({categoria: itemValue})
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
            this.setState({valor: text  });
          }}
          value={this.state.valor.toString(2)}
        />

        <Text style={styles.inputTittle}>Tags</Text>
        <TextInput
          style={styles.input}
          placeholder="Tag1 Tag2 Tag3"
          onChangeText={text => {
            this.setState({tags: text.split(" ")});
          }}
          value={this.state.tags.toString()}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            route.params.callback({
              nome: this.state.nome,
              valor: this.state.valor,
              categoria: this.state.categoria,
              tags: this.state.tags
            })
          }>
          <Text>+ Salvar</Text>
        </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
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
  btn: {
    backgroundColor: '#aaa',
    width: 100,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
  bordaPicker: {
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
  },
});

export default Create;
