"use client";

import { Box, Flex, Text, Image, VStack } from "@chakra-ui/react";
import TrackSection from "./TrackSection";

const FitnessIntro = () => {
  return (
    <Box
      id="intro"
      px={{ base: 5, sm: 5, md: 0 }}
      py={{ base: 10, sm: 12, md: 20 }}
      width={{ base: "100%", md: "1004px" }}
      mx="auto"
    >
      {/* Top Pill Label */}
      <Box
        id="intro"
        bg="black"
        color="white"
        px={{ base: 6, md: 6 }}
        py={{ base: 4, md: 2 }}
        borderRadius="full"
        textAlign="center"
        mx="auto"
        width="fit-content"
        fontSize={{ base: "12px", md: "12px" }}
        fontWeight="bold"
        mb={{ base: 4, md: 6 }}
      >
        Your fitness journey starts here
      </Box>

      {/* Title + Subtitle */}
      <VStack
        gap={{ base: 2, md: 3 }}
        textAlign="center"
        mb={{ base: 8, md: 16 }}
      >
        <Text
          fontSize={{ base: "30px", md: "40px" }}
          fontWeight={{ base: "extrabold", md: "bold" }}
          color={"#141414"}
          lineHeight={{ base: "1.2", md: "0.7" }}
          my="1"
        >
          Your four-in-one{" "}
          <Text as="span" display={{ base: "block", md: "inline" }}>
            fitness app
          </Text>
        </Text>
        <Text
          py={{ base: 4, md: 0 }}
          fontSize={{ base: "16px", md: "16px" }}
          color={"#141414"}
          maxW={{ base: "100%", md: "500px" }}
        >
          Designed to empower you to achieve, manage, and strengthen your
          fitness goals through daily home workouts, nutrient-dense meals,
          portion control, and healthy routines.
        </Text>
      </VStack>

      {/* Main Flex: TrackSection + Image */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        gap={{ base: 8, md: 12 }}
      >
        <Box flex="1">
          <TrackSection />
        </Box>

        <Box
          flex="1"
          borderRadius="3xl"
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          mt={{ base: 0, md: 0 }}
        >
          <Image
            src="fitness-yellow-image.png"
            width={{ base: "100%", md: "100%" }}
            maxW={{ base: "100%", md: "100%" }}
            h={{ base: "", md: "" }}
            alt="App Preview"
            borderRadius={{ base: "24px", md: "" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default FitnessIntro;
