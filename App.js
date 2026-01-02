import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";

const ProductImage = require("./assets/download.jpeg");

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome back 👋</Text>
        <Text style={styles.userName}>MD Rasel</Text>

        {/* Search */}
        <View style={styles.searchBox}>
          <Text style={styles.searchText}>Search here...</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.actionsRow}>
        {["Orders", "Wallet", "Profile", "Settings"].map((item) => (
          <TouchableOpacity key={item} style={styles.actionCard}>
            <Text style={styles.actionIcon}>⬤</Text>
            <Text style={styles.actionText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Section Title */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
      </View>

      {/* Cards */}
      <View style={styles.cardsContainer}>
        {[1, 2, 3].map((item) => (
          <View key={item} style={styles.card}>
            {/* <Image source={ProductImage} style={styles.cardImage} /> */}
            <Image
              source={{ uri: "https://picsum.photos/id/1/200/300" }}
              style={styles.cardImage}
            />

            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Product Name</Text>
              <Text style={styles.cardDesc}>Short description goes here</Text>

              <View style={styles.cardFooter}>
                <Text style={styles.price}>$25.00</Text>
                {/* <TouchableOpacity style={styles.buyBtn}>
                  <Text style={styles.buyText}>Buy</Text>
                </TouchableOpacity> */}
                {/* <Button>Buy</Button> */}
                <Button
                  title="Buy"
                  onPress={() => {
                    console.log("button on buy");
                  }}
                />
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={{ height: 20 }} />
      <Text style={{ textAlign: "center", color: "#9CA3AF" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero
        assumenda impedit! Sit sed cum error officiis magnam at illo aut dolore
        vel? Corporis nisi voluptatum provident, iste aperiam facilis similique
        tempora molestiae facere, sit labore consequatur quae quam? Esse et
        necessitatibus repudiandae commodi dolor dolorum voluptas corporis ab
        provident! Iste quidem assumenda tenetur fugiat qui aut, esse suscipit
        ut et quam facilis ab architecto nobis itaque quaerat molestias enim?
        Dolorum numquam cupiditate voluptatibus distinctio! Error quisquam
        suscipit esse harum, reprehenderit omnis est illo doloribus placeat.
        Sapiente facilis aliquid iure, quibusdam deserunt odio nobis. Harum odio
        quo ea enim quod?
      </Text>
      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  header: {
    backgroundColor: "#4F46E5",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  welcomeText: {
    color: "#E0E7FF",
    fontSize: 14,
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 12,
  },
  searchText: {
    color: "#9CA3AF",
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 24,
  },
  actionCard: {
    width: "22%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 16,
    elevation: 3,
  },
  actionIcon: {
    fontSize: 18,
    color: "#4F46E5",
  },
  actionText: {
    fontSize: 12,
    marginTop: 8,
    fontWeight: "500",
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
  },
  cardsContainer: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    elevation: 3,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  cardContent: {
    marginLeft: 16,
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },
  cardDesc: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  price: {
    color: "#4F46E5",
    fontWeight: "bold",
  },
  buyBtn: {
    backgroundColor: "#4F46E5",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 10,
  },
  buyText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
});
