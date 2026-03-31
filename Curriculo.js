import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import mateus from '../images/mateus.jpg';
import background from '../images/background.png';

const width = Dimensions.get("screen").width;

export default function Curriculo() {
    return (
  <>
    <Image source={background} style={estilos.topo} />

    <Text style={estilos.titulo}>Currículo</Text>

    <View style={estilos.curriculo}>
      <Text style={estilos.nome}>Mateus Rafael</Text>

      <View style={estilos.perfil}>
        <Image source={mateus} style={estilos.imagemPerfil} />
        <Text style={estilos.cargo}>Desenvolvedor Júnior</Text>
      </View>

      <Text style={estilos.descricao}>
        Estudante de programação front-end e React Native.
      </Text>

      <Text style={estilos.subtitulo}>Habilidades</Text>
      <Text style={estilos.texto}>• React Native</Text>
      <Text style={estilos.texto}>• JavaScript</Text>

      <Text style={estilos.subtitulo}>Formação</Text>
      <Text style={estilos.texto}>• Ensino Médio</Text>

      <Text style={estilos.subtitulo}>Contato: 45 999533186</Text>
      <Text style={estilos.texto}>• mateussuss@gmail.com</Text>
    </View>
  </>
);
}

const estilos = StyleSheet.create({
  topo:{
    width: "100%",
    height: 50,
  },

  titulo:{
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
    color: "black",
    padding: 16,
  },

  curriculo:{
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  nome:{
    color: "#fffefe",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },

  perfil:{
    flexDirection: "row",
    paddingVertical: 12,
  },

  imagemPerfil:{
    width: 300,
    height: 300,
    borderRadius: 300,
  },

  cargo:{
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    alignSelf: "center",
  },

  descricao:{
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
  },

  subtitulo:{
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    color: "#ffffff",
  },

  texto:{
    fontSize: 16,
    lineHeight: 24,
    color: "#ffffff",
  },
});
