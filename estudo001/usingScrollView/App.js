import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './src/components/Card';
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <ScrollView horizontal style={styles.carrossel}>
        <Card nome="Neymar" url="https://i0.statig.com.br/bancodeimagens/imgalta/6d/2n/qs/6d2nqshw9lodueisju2k2bwyl.jpg" />
        <StatusBar style="auto" />
        <Card nome="Suarez" url="https://i.pinimg.com/550x/02/c4/e9/02c4e96ff0f3aea80a938fffe931c05b.jpg" />
        <StatusBar style="auto" />
        <Card nome="Messi" url="https://neofeed.com.br/wp-content/uploads/2021/08/messi-barcelona-1200x900.jpg" />
        <Card nome="Mbappe" url="https://c4.wallpaperflare.com/wallpaper/920/140/899/soccer-kylian-mbappe-french-world-cup-2018-wallpaper-preview.jpg" />
        <Card nome="Cristiano Ronaldo" url="https://conteudo.imguol.com.br/c/esporte/62/2022/10/26/cristiano-ronaldo-em-acao-com-a-camisa-da-selecao-de-portugal-1666822687434_v2_1x1.jpg" />
      </ScrollView>
      <View>
        <Text>Teste</Text>
        <ScrollView horizontal style={styles.carrossel}>
          <Card nome="Neymar" url="https://i0.statig.com.br/bancodeimagens/imgalta/6d/2n/qs/6d2nqshw9lodueisju2k2bwyl.jpg" />
          <StatusBar style="auto" />
          <Card nome="Suarez" url="https://i.pinimg.com/550x/02/c4/e9/02c4e96ff0f3aea80a938fffe931c05b.jpg" />
          <StatusBar style="auto" />
          <Card nome="Messi" url="https://neofeed.com.br/wp-content/uploads/2021/08/messi-barcelona-1200x900.jpg" />
          <Card nome="Mbappe" url="https://c4.wallpaperflare.com/wallpaper/920/140/899/soccer-kylian-mbappe-french-world-cup-2018-wallpaper-preview.jpg" />
          <Card nome="Cristiano Ronaldo" url="https://conteudo.imguol.com.br/c/esporte/62/2022/10/26/cristiano-ronaldo-em-acao-com-a-camisa-da-selecao-de-portugal-1666822687434_v2_1x1.jpg" />
        </ScrollView>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
