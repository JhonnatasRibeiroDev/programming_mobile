import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
function Card({ url, nome }) {
    return (
        <View style={styles.card}>
            <Image
            source={
                { uri: url }
            }
            style={{ width: 200, height: 200 }}
            />
            <Text style={styles.title}>{nome}</Text>

        </View>
    )
} export default Card;
const styles = {
    card: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
};