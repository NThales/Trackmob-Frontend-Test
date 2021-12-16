import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import Produtos from '../../components/Produtos';
import Button from '../../components/Button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: false,
    };

    this.handleClick = this.handleClick.bind(this);

    this.handleDelete = this.handleDelete.bind(this);

    this.handleUpdate = this.handleUpdate.bind(this);

    this.update = this.update.bind(this);

    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate = () => {
    const {navigation} = this.props;
   navigation.navigate('Create', {
    callback: this.handleClick,
    produto: {
      nome: '',
      valor: 'R$ ',
      categoria: 'Categoria 1',
      tags: [],
    },
  })}

  update = (response, i) => {
    const {navigation} = this.props;
    return navigation.navigate('Create', {
      callback: this.handleUpdate,
      produto: response,
      index: i,
    });
  };

  handleClick = produto => {
    let produtos = this.state.produtos
      ? [...this.state.produtos, produto]
      : new Array(produto);
    this.setState({produtos});
  };

  handleUpdate = produto => {
    let produtos = [...this.state.produtos];
    produtos[produto.index] = produto;
    this.setState({produtos});
  };

  handleDelete = key => {
    const {produtos} = this.state;
    this.setState({
      produtos: produtos.filter((item, i) => i !== key),
    });
  };

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Header />

          <Button click={this.handleCreate}>+ Cadastrar</Button>

          <Produtos
            produtos={this.state.produtos}
            handleUpdate={this.handleUpdate}
            handleDelete={this.handleDelete}
            handleUpdate={this.update}
          />
        </View>
      </View>
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

export default Home;
