import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useAuth } from "../../state-management/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Not logged in</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>
        {user.first_name} {user.middle_name} {user.last_name}
      </Text>

      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>Phone: {user.phone}</Text>
      <Text style={styles.text}>DOB: {user.dob}</Text>
      <Text style={styles.text}>Gender: {user.gender}</Text>
      <Text style={styles.text}>PAN: {user.pan}</Text>
      <Text style={styles.text}>Aadhaar: {user.aadhaar}</Text>
      <Text style={styles.text}>Occupation: {user.occupation}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    color: "#ccc",
    marginTop: 10,
    fontSize: 16,
  },
});