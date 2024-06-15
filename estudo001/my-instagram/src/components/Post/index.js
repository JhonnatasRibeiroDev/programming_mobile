import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


function Post({ foto, nome, fotoPost, comentario, quantCurtidas , descricao}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.nav}>
                    <Image style={styles.foto} source={{ uri: foto }} />
                    <Text style={styles.nome}>{nome}</Text>
                </View>
                <Icon style={styles.icon} name="ellipsis-h" size={50} color="#900" />
            </View>
            <Image style={{ width: '100%', height: 300 }} source={{ uri: fotoPost }} />
            <View style={styles.barraIteracoes}>
                <View style={styles.interacoes}>
                    <Icon style={styles.icon} name="heart" size={50} color="#900" />
                    <Icon style={styles.icon} name="comment" size={50} color="#900" />
                    <Icon style={styles.icon} name="paper-plane" size={50} color="#900" />
                </View>
                <Icon style={styles.icon} name="bookmark" size={50} color="#900" />
            </View>
            <View style={styles.footer}>
                <Text>{quantCurtidas} Curtidas</Text>
                <View>
                    <Text>{nome}</Text>
                    <Text>
                        {descricao}
                    </Text>
                </View>
                <View>
                </View>
                <Text>Ver todos os {comentario} comentários</Text>
            </View>
        </View>
    )
} export default Post;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        width: '100%',
        alignItems: 'center',
    },
    foto: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    nome: {
        marginLeft: 10,
        color: 'black',
        fontSize: 16
    },
    footer: {
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
    },
    icon: {
        padding: 10,
        fontSize: 30,
        color: 'black',
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,
    barraIteracoes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    interacoes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})