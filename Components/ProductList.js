import { Dimensions, FlatList, Image, View } from "react-native";

import React from "react";
import StyledText from './Text'

const products = [
  {
    id: 1,
    name: "Product 1",
    image:
      "https://instagram.fcpq3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/91806382_684881519032889_7396293259182037893_n.jpg?_nc_ht=instagram.fcpq3-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=aAGvsKaoeRgAX_7jNIz&oh=00bec20bd6c0bd590aa1a5b6fbc3f231&oe=5EB2985A",
    price: 63
  },
  {
    id: 2,
    name: "Product 2",
    image:
      "https://instagram.fcpq1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/92312517_2345117052453192_946769294157895135_n.jpg?_nc_ht=instagram.fcpq1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=jijsX0s_XdoAX-Ob79S&oh=eb01e1b752ee6186839b72335c8efb08&oe=5EB21A49",
    price: 163
  },
  {
    id: 3,
    name: "Product 3",
    image:
      "https://instagram.fcpq1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/91351286_656444151798907_2467899076786839513_n.jpg?_nc_ht=instagram.fcpq1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=cIU1f60F384AX8cd5e-&oh=b8c2f0edc983e42fb6d26489a0f87b8f&oe=5EAFDAD3",
    price: 263
  },
  {
    id: 4,
    name: "Product 4",
    image:
      "https://instagram.fcpq1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/91915353_3271428926209323_71097414053922035_n.jpg?_nc_ht=instagram.fcpq1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=6RU8N9MPU6cAX9Xu-dK&oh=787280468f05b2e681b1d622325a2296&oe=5EB23DDE",
    price: 363
  }
];

function ProducList(props) {
  const { height, width } = Dimensions.get("window");
  const maxImageWidthAndHeight = width / 2;

  // retorna cÃ³digo JSX
  return (
    <FlatList
      numColumns={2}
      data={products}
      // funÃ§Ã£o anonima
      keyExtractor={product => product.id}
      renderItem={({ item }) => (
        <View>
          <Image
            source={{ uri: item.image }}
            style={{
              margin: 4,
              borderRadius: 4,
              width: maxImageWidthAndHeight - 8,
              height: maxImageWidthAndHeight - 8
            }}
          />
          <StyledText>R$ {item.price}</StyledText>
          <StyledText>{item.name}</StyledText>
        </View>
      )}
    />
  );
}

// function
// function foo(bar) {
//     return bar * 2
// }

// arrow functions
// const foo = bar => bar * 2

export default ProducList;
