import React from "react";
import image from "../../assets/download.jpeg";
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { Link } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Image source={image} style={styles.image} resizeMode="contain" />

        <Link href="/contact" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>GO TO CONTACT</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/projects" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>GO TO PROJECTS</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/login" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>GO TO LOGIN</Text>
          </TouchableOpacity>
        </Link>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#111",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 15,
    width: 220,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },
});