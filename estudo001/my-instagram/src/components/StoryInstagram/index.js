import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function StoryInstagram({ foto, nome }) {
  return (
    <View style={styles.container}>
      <View style={styles.borderFoto}>
      <Image style={styles.foto} source={{ uri: foto }} />
      </View>
      <Text style={styles.nome}>{nome}</Text>
    </View>
  );
}

StoryInstagram.propTypes = {
  foto: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};

export default StoryInstagram;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 50,
    
  },
    borderFoto: {
        borderWidth: 2,
        borderRadius: 50,
        padding: 5
    },
  nome: {
    marginTop: 10,
    fontSize: 16,
  },
});
