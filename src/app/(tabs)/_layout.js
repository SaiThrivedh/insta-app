import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

import { AuthProvider } from "../../state-management/AuthContext"

export default function Layout() {
  return (
    <AuthProvider>
      <Tabs
        screenOptions={{
          headerShown: false,

          tabBarStyle: {
            backgroundColor: "black",
            borderTopColor: "#222",
          },

          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",

            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="home-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="login"
          options={{
            title: "Login",

            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="log-in-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="contact"
          options={{
            title: "Contact",

            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="call-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="projects"
          options={{
            title: "Projects",

            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="folder-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",

            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </AuthProvider>
  )
}