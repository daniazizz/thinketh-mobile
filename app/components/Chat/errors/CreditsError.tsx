import { VStack, Text, HStack } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreditsError = () => {
  const navigation = useNavigation();
  return (
    <VStack
      justifyContent={"center"}
      alignItems={"center"}
      //   bgColor={"gray.600"}
      mx={2}
      p={2}
      rounded={"xl"}
    >
      <Text color={"white"} fontSize={16}>
        Dear <Text fontStyle={"italic"}>Thinker</Text>, you are out of credits 🪫
      </Text>
      <Text color={"white"} fontSize={16}>
        Come back tomorrow or{" "}
        <Text
          color={"blue.600"}
          fontWeight={700}
          onPress={() => navigation.navigate({ name: "Shop" } as never)}
        >
          refill
        </Text>{" "}
        💭
      </Text>
    </VStack>
  );
};

export default CreditsError;
