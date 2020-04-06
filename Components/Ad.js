import { Dimensions, Image, ScrollView, Text, View } from "react-native";

import React from "react";

const URI =
  "https://photos.enjoei.com.br/public/640x350/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9iYW5uZXJzLzQ3MTkyOS85NTc5OGM3ZmY4ZGVlMTEwYWM2YzVhMjNkNTRjOWQ5NC5qcGc";

export function Ad(props) {
  const { adList } = props;

  // mudando de nomes
  const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

  const width = 640;
  const height = 350;
  const fraction = height / width;

  const maxImageWidth = 0.9 * screenWidth;
  const idealImageHeight = maxImageWidth * fraction;

  return (
    <ScrollView horizontal>
      {adList.map(ad => (
        <View key={ad.id} style={{ padding: 6 }}>
          <View>
            <Text>{ad.title}</Text>
            <Text>{ad.subtitle}</Text>
          </View>
          <View>
            <Image
              source={{ uri: ad.URI }}
              style={{
                width: maxImageWidth,
                height: idealImageHeight,
                borderRadius: 4
              }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

// Higher Order Component (HOC)
// https://devdocs.io/react/higher-order-components
function withAdList(WrappedComponent) {
  const list = [
    {
      id: 86786,
      title: "Propaganda 1",
      subititle: "subtitulo",
      URI: URI
    },
    {
      id: 222222,
      title: "Propaganda 2",
      subititle: "subtitulo",
      URI: URI
    }
  ];

  return class extends React.Component {
    // componente anonimo
    // definir como o objeto deve ser mostrado para o usuario
    render() {
      return (
        <>
          {/* comentario codigo jsx é em parentesis, e para chamar a uma função não precisa fazer nada só chamar a função e colocar os parametros do lado */}
          <WrappedComponent adList={list} />
        </>
      );
    }
  };
}

export default withAdList(Ad);
