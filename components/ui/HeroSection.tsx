import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  Image,
} from "@chakra-ui/react";

import { LuCheck } from "react-icons/lu";
import { HeartIcon, PaperPlaneIcon } from "./icon";

export default function Hero() {
  const featureList = [
    { id: "workout", label: "Daily Home Workout." },
    { id: "meals", label: "AI-Powered Meal Plan." },
    { id: "fasting", label: "Intermittent Fasting Period." },
    { id: "portion", label: "Portion Control." },
  ];
  return (
    <Box
      px={{ base: 4, md: 16 }}
      position="relative"
      height="100vh"
      bgImage={{
        base: "url('/heroimage-mobile.png')", // Mobile
        md: "url('/hero-bg.png')", // Desktop
      }}
      bgSize="cover"
      bgPos="center"
      color="white"
      mb={30}
    >
      {/* Content */}
      <Flex
        position="relative"
        zIndex={2}
        justify="center"
        align="flex-start"
        height="100%"
        pt={{ base: "80px", md: "70px" }}
      >
        <VStack gap={4} maxW="954px" textAlign="center" px={4}>
          <Text
            bg="whiteAlpha.300"
            px={{ base: 8, md: 8 }}
            py={{ base: 2, md: 2 }}
            rounded="full"
            fontSize={{ base: 12, md: 12 }}
            fontWeight="bold"
          >
            Your fitness Journey Starts Here
          </Text>
          <Heading
            fontSize={{ base: 32, md: 64 }}
            fontWeight="bold"
            color="#F2A412"
            lineHeight={{ base: 1.3, md: 1 }}
          >
            A Healthier Way to Lose Weight and Stay Fit.
          </Heading>
          <Flex
            py={{ base: 4, md: 6 }}
            gap={4}
            wrap={{ base: "nowrap", md: "wrap" }}
            direction={{ base: "column", md: "row" }}
            justify={{ base: "flex-start", md: "center" }}
          >
            {featureList.map((item) => (
              <Flex key={item.id} gap={1} align="center">
                <LuCheck size={15} color="#3CA836" />
                <Text fontSize={14} fontWeight="semibold">
                  {item.label}
                </Text>
              </Flex>
            ))}
          </Flex>

          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap={6}
            py={{ base: 0, md: 4 }}
            w="100%"
          >
            <Button
              bg="rgba(255, 255, 255, 0.1)"
              color="white"
              px={16}
              py={{ base: 6, md: 6 }}
              borderRadius="5px"
              border="1px solid white"
              display="flex"
              alignItems="center"
              gap={2}
              fontSize="base"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              width={{ base: "100%", md: "auto" }}
            >
              <PaperPlaneIcon />
              <Text fontSize={14}>Get on Android</Text>
            </Button>

            <Button
              bg="rgba(255, 255, 255, 0.1)"
              color="white"
              px={16}
              py={{ base: 6, md: 6 }}
              borderRadius="5px"
              border="1px solid white"
              display="flex"
              alignItems="center"
              gap={2}
              fontSize="base"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              width={{ base: "100%", md: "auto" }}
            >
              <HeartIcon />
              <Text fontSize={14}>Get on iOS</Text>
            </Button>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}
