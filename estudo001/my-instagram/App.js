import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StoryInstagram from './src/components/StoryInstagram';
import Post from './src/components/Post';

export default function App() {
  const storys = {
    story1: {
      foto: 'https://s2-oglobo.glbimg.com/-0dni84YWVLwPxS6-f6_Wqkmy-4=/0x0:850x572/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg',
      nome: 'pessoa1'
    },
    story2: {
      foto: 'https://s2-oglobo.glbimg.com/-0dni84YWVLwPxS6-f6_Wqkmy-4=/0x0:850x572/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg',
      nome: 'pessoa2'
    },
    story3: {
      foto: 'https://s2-oglobo.glbimg.com/-0dni84YWVLwPxS6-f6_Wqkmy-4=/0x0:850x572/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg',
      nome: 'pessoa3'
    },
    story4: {
      foto: 'https://s2-oglobo.glbimg.com/-0dni84YWVLwPxS6-f6_Wqkmy-4=/0x0:850x572/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg',
      nome: 'pessoa4'
    },
    story5: {
      foto: 'https://s2-oglobo.glbimg.com/-0dni84YWVLwPxS6-f6_Wqkmy-4=/0x0:850x572/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg',
      nome: 'pessoa5'
    },
    story6: {
      foto: 'https://s2-oglobo.glbimg.com/-0dni84YWVLwPxS6-f6_Wqkmy-4=/0x0:850x572/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg',
      nome: 'pessoa6'
    },
    story7: {
      foto: 'https://s2-oglobo.glbimg.com/-0dni84YWVLwPxS6-f6_Wqkmy-4=/0x0:850x572/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg',
      nome: 'pessoa7'
    },
    story8: {
      foto: 'https://s2-oglobo.glbimg.com/-0dni84YWVLwPxS6-f6_Wqkmy-4=/0x0:850x572/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg',
      nome: 'pessoa8'
    }
  }
  const posts = {
    post1: {
      nome: 'pessoa1',
      foto: 'https://s2-oglobo.glbimg.com/-0dni84YWVLwPxS6-f6_Wqkmy-4=/0x0:850x572/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg',
      quantCurtidas: 10
      ,
      descricao: 'descricao1 sdasdsadsadsadsdasdsadsaddasdsa asdsadasdsdasdsad dsadasdsadasdasdasdasd dsdsad dasdas adssd asdasdsadas. #foto #instagram #insta #instagood #instalike #instalove #instadaily #instamood',
      fotoPost: 'https://www.hubspot.com/hubfs/media/fotodeperfil.jpeg#keepProtocol',
      comentarios: {
        comentario1: {
          foto: 'https://www.hubspot.com/hubfs/media/fotodeperfil.jpeg#keepProtocol',
          nome: 'comentario1',
          texto: 'texto1'
        },
        comentario2: {
          foto: 'https://www.hubspot.com/hubfs/media/fotodeperfil.jpeg#keepProtocol',
          nome: 'comentario2',
          texto: 'texto2'
        }
      },
      QuantComentarios: 2
    },
    post2: {
      nome: 'pessoa2',
      foto: 'https://s2-oglobo.glbimg.com/-0dni84YWVLwPxS6-f6_Wqkmy-4=/0x0:850x572/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg',
      comentario: 'comentario2'
    },
    post3: {
      nome: 'pessoa3',
      foto: 'https://s2-oglobo.glbimg.com/-0dni84YWVLwPxS6-f6_Wqkmy-4=/0x0:850x572/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg',
      comentario: 'comentario3'
    },
    post4: {
      nome: 'pessoa4',
      foto: 'https://s2-oglobo.glbimg.com/-0dni84YWVLwPxS6-f6_Wqkmy-4=/0x0:850x572/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg',
      comentario: 'comentario4'
    }

  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{  width: '100%', padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.logo}>Instagram</Text>
        <View style={styles.header_nav}>
          <Icon style={styles.icon} name="gear" size={50} color="#900" />
          <Icon style={styles.icon} name="heart" size={50} color="#900" />
          <Icon style={styles.icon} name="comment" size={50} color="#900" />
        </View>
      </View>
      {/* Story */}
      
      {/* Post */}
      <View style={styles.posts}>
        <ScrollView style={{ width: '100%'}}>
        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
  <StoryInstagram foto={storys.story1.foto} nome={"Seu story"} />
  <StoryInstagram foto={storys.story1.foto} nome={storys.story1.nome} />
  <StoryInstagram foto={storys.story2.foto} nome={storys.story2.nome} />
  <StoryInstagram foto={storys.story3.foto} nome={storys.story3.nome} />
  <StoryInstagram foto={storys.story4.foto} nome={storys.story4.nome} />
  <StoryInstagram foto={storys.story5.foto} nome={storys.story5.nome} />
  <StoryInstagram foto={storys.story6.foto} nome={storys.story6.nome} />
  <StoryInstagram foto={storys.story7.foto} nome={storys.story7.nome} />
  <StoryInstagram foto={storys.story8.foto} nome={storys.story8.nome} />
</ScrollView>
</View>
          <Post foto={posts.post1.foto} nome={posts.post1.nome} comentario={posts.post1.QuantComentarios} fotoPost={posts.post1.fotoPost} quantCurtidas={posts.post1.quantCurtidas} descricao={posts.post1.descricao} />
          <Post foto={posts.post1.foto} nome={posts.post1.nome} comentario={posts.post1.QuantComentarios} fotoPost={posts.post1.fotoPost} quantCurtidas={posts.post1.quantCurtidas} descricao={posts.post1.descricao} />
          <Post foto={posts.post1.foto} nome={posts.post1.nome} comentario={posts.post1.QuantComentarios} fotoPost={posts.post1.fotoPost} quantCurtidas={posts.post1.quantCurtidas} descricao={posts.post1.descricao} />
        </ScrollView>
      </View>
      <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex:1}}>
        <Icon style={styles.icon} name="home" size={50} color="#900" />
        <Icon style={styles.icon} name="search" size={50} color="#900" />
        <Icon style={styles.icon} name="plus" size={50} color="#900" />
        <Icon style={styles.icon} name="heart" size={50} color="#900" />
        <Icon style={styles.icon} name="user" size={50} color="#900" />
      </View>
      <View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40
  },
  header_nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    padding: 10,
    fontSize: 30,
    color: 'black'
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  posts:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 9
  }
});
