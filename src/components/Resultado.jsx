import { Text, View } from "react-native";
export default function Resultado({ resultado }) {
  return (
    <View className="w-full h-28 bg-zinc-900 justify-center items-end pr-3">
      <Text className="text-5xl text-white">{resultado}</Text>
    </View>
  );
}
