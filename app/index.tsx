import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Icon library

const menuItems = [
  { id: "1", name: "Pizza", price: "$10" },
  { id: "2", name: "Burger", price: "$7" },
  { id: "3", name: "Pasta", price: "$12" },
  { id: "4", name: "Salad", price: "$6" },
];

const options = [
  { id: "1", name: "Today's Sales", icon: "cash-outline" },
  { id: "2", name: "Orders", icon: "list-outline" },
  { id: "3", name: "Customers", icon: "people-outline" },
  { id: "4", name: "Menu Management", icon: "restaurant-outline" },
  { id: "5", name: "Reservations", icon: "calendar-outline" },
  { id: "6", name: "Staff", icon: "person-outline" },
  { id: "7", name: "Inventory", icon: "archive-outline" },
  { id: "8", name: "Analytics", icon: "bar-chart-outline" },
];

export default function RestaurantApp() {
  // Split the options into rows (2 options per row)
  const row1 = options.slice(0, 2);
  const row2 = options.slice(2, 4);
  const row3 = options.slice(4, 6);
  const row4 = options.slice(6, 8);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurant Management</Text>
      <Text style={styles.subHeader}>Options</Text>

      {/* First Row */}
      <View style={styles.optionsRow}>
        {row1.map((item) => (
          <TouchableOpacity key={item.id} style={styles.optionBox}>
            <Ionicons name={item.icon as "cash-outline" | "list-outline" | "people-outline" | "restaurant-outline" | "calendar-outline" | "person-outline" | "archive-outline" | "bar-chart-outline"} size={24} color="#fff" />
            <Text style={styles.optionText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Second Row */}
      <View style={styles.optionsRow}>
        {row2.map((item) => (
          <TouchableOpacity key={item.id} style={styles.optionBox}>
            <Ionicons name={item.icon as "cash-outline" | "list-outline" | "people-outline" | "restaurant-outline" | "calendar-outline" | "person-outline" | "archive-outline" | "bar-chart-outline"} size={24} color="#fff" />
            <Text style={styles.optionText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Third Row */}
      <View style={styles.optionsRow}>
        {row3.map((item) => (
          <TouchableOpacity key={item.id} style={styles.optionBox}>
            <Ionicons name={item.icon as "cash-outline" | "list-outline" | "people-outline" | "restaurant-outline" | "calendar-outline" | "person-outline" | "archive-outline" | "bar-chart-outline"} size={24} color="#fff" />
            <Text style={styles.optionText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Fourth Row */}
      <View style={styles.optionsRow}>
        {row4.map((item) => (
          <TouchableOpacity key={item.id} style={styles.optionBox}>
            <Ionicons name={item.icon as "cash-outline" | "list-outline" | "people-outline" | "restaurant-outline" | "calendar-outline" | "person-outline" | "archive-outline" | "bar-chart-outline"} size={24} color="#fff" />
            <Text style={styles.optionText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Menu section */}
      <Text style={styles.subHeader}>Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemText}>{item.name} - {item.price}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Order</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#fff", // Text color inside the box
    backgroundColor: "#4CAF50", // Background color for the box
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    overflow: "hidden", // To make sure the text doesn't overflow the box
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc", // Add line under the header
    paddingBottom: 10,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  optionBox: {
    width: "48%", // Adjusted to fit two options per row
    height: 80,
    backgroundColor: "#ff6347", // Change the background color for options
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 10,
    borderWidth: 2,
    borderColor: "#e57373", // Add border for the options box
  },
  optionText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#e0e0e0", // Light border for menu items
  },
  itemText: {
    fontSize: 18,
  },
  button: {
    backgroundColor: "#ff6347",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
