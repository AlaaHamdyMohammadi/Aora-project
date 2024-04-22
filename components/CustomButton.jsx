import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({title, handlePress, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className="bg-secondary"
      style={{
        borderRadius: 12,
        minHeight: 62,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 28,
        width: "100%"
      }}
      disabled={isLoading}
    >
      <Text className="text-primary text-lg font-semibold"></Text>
      <Text className="text-primary"
        style={{fontWeight: 600, fontSize: 18}}
      >{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
