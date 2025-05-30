import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const foto = require("../../assets/images/react-logo.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={foto} style={styles.estiloFoto} />
      </View>
      <View style={styles.containerConteudo}>
        <View style={styles.containerNome}>
          <Text style={styles.nome}>Guilherm Rodrigues</Text>
        </View>
        <Text style={styles.linha}>_______________________________________</Text>
        <View style={styles.containerDados}>
          <Ionicons name="person-circle" size={28} color="#4db6ac" />
          <Text style={styles.textoDados}>16 anos</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="mail-outline" size={28} color="#4db6ac" />
          <Text style={styles.textoDados}>guilherm.rodrigues@email.com</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="call-outline" size={28} color="#4db6ac" />
          <Text style={styles.textoDados}>(42) 98888-7777</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="location-outline" size={28} color="#4db6ac" />
          <Text style={styles.textoDados}>Ponta Grossa / PR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027", // azul escuro
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  containerImg: {
    flex: 1,
    paddingTop: 60,
  },
  estiloFoto: {
    width: 280,
    height: 280,
    borderRadius: 140, // Deixa a imagem redonda
    borderWidth: 3,
    borderColor: "#4db6ac",
  },
  containerConteudo: {
    flex: 1,
    width: "100%",
    marginTop: 20,
  },
  containerNome: {
    alignItems: "center",
  },
  nome: {
    fontSize: 36,
    color: "#4db6ac",
    fontWeight: "bold",
  },
  linha: {
    color: "#4db6ac",
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
  },
  containerDados: {
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  textoDados: {
    marginLeft: 12,
    color: "#b2dfdb",
    fontSize: 22,
  },
});
