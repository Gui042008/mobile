import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Profissional() {
  return (
    <View style={styles.container} >
      <View style={styles.containerConteudo}>
        <View style={styles.containerNome}>
          <Text style={styles.nome}>Formação</Text>
        </View>

        <Text style={styles.linha}>_______________________________________</Text>

        {/* Especializações de Profissionais */}
        <Text style={[styles.linha, { marginTop: 0, marginBottom: 20 }]}>Especializações de Profissionais</Text>

        <View style={styles.containerDados}>
          <Ionicons name="briefcase" size={26} color="#21a1f1" />
          <Text style={styles.textoDados}>Engenheiro de Software</Text>
        </View>

        <View style={styles.containerDados}>
          <Ionicons name="construct" size={26} color="#21a1f1" />
          <Text style={styles.textoDados}>Engenheiro Civil</Text>
        </View>

        <View style={styles.containerDados}>
          <Ionicons name="medkit" size={26} color="#21a1f1" />
          <Text style={styles.textoDados}>Enfermeiro</Text>
        </View>

        <View style={styles.containerDados}>
          <Ionicons name="school" size={26} color="#21a1f1" />
          <Text style={styles.textoDados}>Professor</Text>
        </View>

        <View style={styles.containerDados}>
          <Ionicons name="business" size={26} color="#21a1f1" />
          <Text style={styles.textoDados}>Administrador</Text>
        </View>

        {/* Especializações do Fulano */}
        <Text style={[styles.linha, { marginTop: 30 }]}>Especializações</Text>

        <View style={styles.containerDados}>
          <Ionicons name="code-slash" size={26} color="#21a1f1" />
          <Text style={styles.textoDados}>Desenvolvedor Front-end</Text>
        </View>

        <View style={styles.containerDados}>
          <Ionicons name="brush" size={26} color="#21a1f1" />
          <Text style={styles.textoDados}>Designer Gráfico</Text>
        </View>

        <View style={styles.containerDados}>
          <Ionicons name="school" size={26} color="#21a1f1" />
          <Text style={styles.textoDados}>Formação em Análise de Sistemas</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  containerConteudo: {
    width: "100%",
  },
  containerNome: {
    alignItems: "center",
  },
  nome: {
    fontSize: 40,
    color: "#61dafb",
    fontWeight: "bold",
  },
  linha: {
    color: "#61dafb",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  containerDados: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  textoDados: {
    marginLeft: 12,
    color: "white",
    fontSize: 22,
  },
});
