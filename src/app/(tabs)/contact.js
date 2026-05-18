import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CONTACT</Text>

      <Text style={styles.info}>Email: thor@avengers.com</Text>
      <Text style={styles.info}>Phone: +91 9876543210</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SEND MESSAGE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "900",
    color: "#fff",
    marginBottom: 20,
  },
  info: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#111",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    width: 220,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "900",
  },
});