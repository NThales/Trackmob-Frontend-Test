import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = produto => {
    let produtos = this.state.produtos
      ? [...this.state.produtos, produto]
      : new Array(produto);
    this.setState({produtos});
  };

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.tittle}>Teste Trackmob Frontend</Text>
            <Text style={styles.subTittle}>Meus Produtos</Text>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate('Create', {callback: this.handleClick})
            }>
            <Text>+ Cadastrar</Text>
          </TouchableOpacity>

          {this.state.produtos
            ? this.state.produtos.map(response => {
                return (
                  <View style={styles.containerProd}>
                    <View>
                      <Image source={require('./../../util/produtoImg.jpeg')} />
                    </View>
                    <View style={styles.containerProdCad}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 16,
                          color: 'black',
                        }}>
                        {response.nome}
                      </Text>
                      <Text style={{fontSize: 12}}>{response.valor}</Text>
                      <Text
                        style={{
                          fontSize: 12,
                          marginTop: 5,
                          marginBottom: 5,
                          color: 'black',
                        }}>
                        {response.categoria}
                      </Text>
                      <Text style={{fontSize: 10, color: 'black'}}>
                        {response.tags.map(x=>{return '#'+x+' '})}
                      </Text>
                    </View>
                    <View style={styles.prodIcones}>
                     
                     <Icon name="trash-alt" size={30} color="black" />
                     <Icon name="edit" size={30} color="black" />
                    
                    </View>
                  </View>
                );
              })
            : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 4,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  tittle: {
    fontSize: 28,
    color: 'black',
  },
  subTittle: {
    color: 'black',
  },
  btn: {
    backgroundColor: '#aaa',
    width: 100,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 25,
  },
  containerProd: {
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 10,
  },
  containerProdCad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  prodIcones: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
    
  },
});

export default Home;
