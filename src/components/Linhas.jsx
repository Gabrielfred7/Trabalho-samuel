import { View } from "react-native";

export default function Linhas({ children }) {
  return <View className="w-full flex-row justify-between">{children}</View>;
}
