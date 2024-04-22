import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
export default function App() {
  return (
    <SafeAreaView className="bg-primary" style={{ height: "100%" }}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View
          style={{
            width: "100%",
            minHeight: "85vh",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 16,
          }}
        >
          <Image
            source={images.logo}
            style={{ width: "130px", height: "84px" }}
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            style={{ maxWidth: "380px", width: "100%", height: "300px" }}
            resizeMode="contain"
          />
          <View style={{ position: "relative", marginTop: 20 }}>
            <Text
              className="text-white"
              style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}
            >
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className=""
              style={{
                width: 136,
                height: 15,
                position: "absolute",
                bottom: -8,
                right: -32,
              }}
              resizeMode="contain"
            />
          </View>
          <Text
            className="font-pregular"
            style={{
              fontSize: 14,
              color: "#B3AEC6",
              textAlign: "center",
              marginTop: 28,
            }}
          >
            Where creativity meets innovation: embark in journy of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => {
              router.push("/sign-in");
            }}
          />
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
}
