import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Projects() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>PROJECTS</Text>

      <View style={styles.card}>
        <Text style={styles.title}>⚡ Thor App</Text>
        <Text style={styles.desc}>React Native app with dark UI</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>⚡ Portfolio</Text>
        <Text style={styles.desc}>Personal portfolio website</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>⚡ Dashboard</Text>
        <Text style={styles.desc}>Finance tracking dashboard</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "900",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },
  desc: {
    color: "#aaa",
    marginTop: 5,
  },
});