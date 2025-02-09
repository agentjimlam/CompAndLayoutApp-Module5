import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 0, backgroundColor: "red", height: "20" }} />
      <View style={{ flex: 0, backgroundColor: "darkorange", height: "30" }} />
      <View style={{ flex: 0, backgroundColor: "green" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

// column = vertical
// row = horizontal

// Good practice:
// Always use flex to scale image well in ratio perspective
// if can't scale the image then use fixed size but best to avoid, as it will not look good on different mobile devices
// optimize for 90% of user base = most users on iphone 15/16, or Samsung24, so find most optimal size for them
