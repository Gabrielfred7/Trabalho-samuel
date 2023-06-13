import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Btns({ char, onPress }) {
  return (
    <TouchableOpacity
      className="flex-1 aspect-square m-2 justify-center items-center bg-gray-500 rounded-3xl shadow-md shadow-white"
      onPress={onPress}
    >
      <Text className="text-4xl">{char}</Text>
    </TouchableOpacity>
  );
}
