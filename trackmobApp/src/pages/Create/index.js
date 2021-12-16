import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import Header from '../../components/Header';
import Form from '../../components/Form';
import Button from '../../components/Button';

class Create extends Component {
  constructor(props) {
    super(props);
    const {route} = this.props;
    this.state = {
      produto: {
        nome: route.params.produto.nome,
        valor: route.params.produto.valor,
        categoria: route.params.produto.categoria,
        tags: route.params.produto.tags.join(' '),
      },
    };

    this.handleChange = this.handleChange.bind(this);

    this.save = this.save.bind(this);
  }

  handleChange = (key, text) => {
    let {produto} = this.state;
    produto[key] = text;
    this.setState({produto});
  };

  save = () => {
    const navigation = this.props.navigation;
    const route = this.props.route;
    route.params.callback({
      index: route.params.index,
      nome: this.state.produto.nome,
      valor: this.state.produto.valor,
      categoria: this.state.produto.categoria,
      tags: this.state.produto.tags.split(' '),
    });
    navigation.goBack(null);
  };

  render() {
    const {route} = this.props;

    const {navigation} = this.props;

    return (
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={50}>
        <ScrollView>
          <Header />

          <Form produto={this.state.produto} handleChange={this.handleChange} />

          <Button click={this.save}>+ Salvar</Button>
          
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Create;
