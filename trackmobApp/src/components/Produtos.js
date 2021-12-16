import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Produtos(props) {

  return (
    <View>
      {
      props.produtos
        ? props.produtos.map((response, i) => {
            return (
              <View style={styles.containerProd}>
                <View>
                  <Image source={require("./../util/produtoImg.jpeg")} />
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
                  <Text style={{fontSize: 12, color: 'black'}}>
                    {response.tags.map(x => {
                      return '#' + x + ' ';
                    })}
                  </Text>
                </View>
                <View style={styles.prodIcones}>
                  <Icon.Button
                    name="trash-alt"
                    size={30}
                    color="black"
                    backgroundColor={'white'}
                    onPress={() => props.handleDelete(i)}
                  />
                  <Icon.Button
                    name="edit"
                    size={30}
                    color="black"
                    backgroundColor={'white'}
                    onPress={() =>
                      props.handleUpdate(response,i)
                    }
                  />
                </View>
              </View>
            );
          })
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
  },
});
