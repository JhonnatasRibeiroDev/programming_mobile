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
        borderWidth: 1,
        height: 300,
        borderColor: '#ddd',
      
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
};