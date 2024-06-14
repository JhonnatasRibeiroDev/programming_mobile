import React, { useState } from 'react';
import { Text, View, Image, Button } from 'react-native';

const YourApp = () => {
  const [eatCat, setEatCat] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Alimente o gato! 🎉</Text>
      {eatCat ? (
        <View>
          <Text>O gato está alimentado</Text>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/54/ee/8e/54ee8ec38082606c2bd3941e5068e185.jpg'
            }}
            style={{ width: 300, height: 200, margin: 30 }}
          />
        </View>
      ) : (
        <View>
          <Text>O gato está com fome</Text>
          <Image
            source={{
              uri: 'https://seeklogo.com/images/H/hungry-cat-logo-1CC2CB591F-seeklogo.com.png'
            }}
            style={{ width: 300, height: 200, margin: 30 }}
          />
        </View>
      )}


      <Button
        title={eatCat ? 'O gato está alimentado' : 'Alimentar o gato'}
        onPress={() => setEatCat(!eatCat)}
      />
    </View>
  );
};

export default YourApp;