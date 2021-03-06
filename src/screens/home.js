import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Disciplina from "../components/disciplina";
import { connect } from 'react-redux';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _renderItem = (item) => (
    <Disciplina
      nome={item.nome}
      qtAulas={item.qtAulas}
      qtFaltas={item.qtFaltas}
      percentualPresenca={item.percentualPresenca}
      onPress={() => (this.props.navigation.navigate("Disciplina", { disciplina: item }))}
    />

  )

  render() {
    const {disciplinas} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={disciplinas}
          renderItem={({ item }) => this._renderItem(item)}
        />

        <View style={styles.viewbotaoAdd}>
          <TouchableOpacity
            style={styles.botaoAdicionar}
            onPress={() => this.props.navigation.navigate('AddDisciplina')}>
            <Icon name="md-add" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D7D6D6',
  },
  viewbotaoAdd: {
    alignSelf: 'flex-end',
    padding: 20
  },
  botaoAdicionar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 25
  }
});


const mapStateToProps = state => {
  const {disciplinas} = state.disciplinasReducer;

  return {
    disciplinas
  }
}


export default connect(mapStateToProps)(HomeScreen);