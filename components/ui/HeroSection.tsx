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
      height="90vh"
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
        pt={{ base: "20px", md: "70px" }}
      >
        <VStack gap={4} maxW="954px" textAlign="center" px={4}>
          <Text
            bg="whiteAlpha.300"
            px={{ base: 4, md: 7 }}
            py={{ base: 1.5, md: 2 }}
            rounded="full"
            fontSize={{ base: 9, md: 11 }}
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
            py={3}
            gap={4}
            wrap={{ base: "nowrap", md: "wrap" }}
            direction={{ base: "column", md: "row" }}
            justify={{ base: "flex-start", md: "center" }}
          >
            {featureList.map((item) => (
              <Flex key={item.id} gap={1} align="center">
                <LuCheck size={15} color="#3CA836" />
                <Text fontSize={12} fontWeight="semibold">
                  {item.label}
                </Text>
              </Flex>
            ))}
          </Flex>

          <Flex
            direction={{ base: "column", md: "row" }}
            justify="center"
            gap={{ base: 2, md: 4 }}
            w={{ base: "100%", md: "auto" }}
            px={{ base: 4, md: 0 }}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.fitnessspace.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="outline"
                borderColor="white"
                color="white"
                w={{ base: "100%", md: "auto" }}
              >
                <Flex
                  px={{ base: 4, md: 6 }}
                  py={{ base: 1.5, md: 2 }}
                  align="center"
                  gap={2}
                >
                  <Image
                    src="/android_image.png"
                    boxSize={{ base: "10px", md: "12px" }}
                  />
                  <Text fontSize={{ base: 10, md: 12 }}>Get on Android</Text>
                </Flex>
              </Button>
            </a>

            <Button
              variant="outline"
              borderColor="white"
              color="white"
              w={{ base: "100%", md: "auto" }}
            >
              <Flex
                px={{ base: 4, md: 5 }}
                py={{ base: 1.5, md: 2 }}
                align="center"
                gap={2}
              >
                <Image
                  src="/ios_image.png"
                  boxSize={{ base: "10px", md: "12px" }}
                />
                <Text fontSize={{ base: 10, md: 12 }}>Get on iOS</Text>
              </Flex>
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}
