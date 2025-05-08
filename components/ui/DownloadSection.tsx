"use client";

import { Box, Button, Heading, Text, Flex, Image } from "@chakra-ui/react";

const DownloadSection: React.FC = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      gap={{ base: 8, lg: 12 }}
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 8, md: 12, lg: 20 }}
      alignItems="flex-start"
      justifyContent="center"
    >
      {/* First Section */}
      <Box
        flex="1"
        borderRadius="md"
        overflow="hidden"
        p={{ base: 4, md: 6 }}
        width="100%"
        maxW={{ base: "100%", md: "780px", lg: "100%" }}
      >
        <Image
          src="/nutrient-dense meals (1).jpg"
          alt="Training"
          width="100%"
          height={{ base: "auto", md: "auto", lg: "500px" }}
          objectFit="cover"
          borderRadius="md"
          mb={6}
        />
        <Heading
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          color="black"
          mb={4}
        >
          Nutrient-Packed{" "}
          <Text as="span" color="#f2a412">
            Meals
          </Text>
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          color="black"
          mb={8}
        >
          Fuel your body with wholesome, nutrient-dense meals. Eat smart, stay
          energized, and enjoy every bite. Portion control, meal balance, and
          mindful nutrition!
        </Text>
        <Flex
          mt={6}
          gap={4}
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="flex-start"
        >
          <Button
            bg="black"
            color="white"
            rounded="full"
            fontSize="md"
            _hover={{ bg: "gray.800" }}
            flex="1"
            py={{ base: 3, md: 6, lg: 6 }}
          >
            Download on iOS
          </Button>
          <Button
            bg="black"
            color="white"
            rounded="full"
            fontSize="md"
            _hover={{ bg: "gray.800" }}
            flex="1"
            py={{ base: 3, md: 6, lg: 6 }}
          >
            Download on Android
          </Button>
        </Flex>
      </Box>

      {/* Second Section */}
      <Box
        flex="1"
        borderRadius="md"
        overflow="hidden"
        p={{ base: 4, md: 6 }}
        width="100%"
        maxW={{ base: "100%", md: "780px", lg: "100%" }}
      >
        <Image
          src="/fitness_tracking (1).jpg"
          alt="Running"
          width="100%"
          height={{ base: "auto", md: "auto", lg: "500px" }}
          objectFit="cover"
          borderRadius="md"
          mb={6}
        />
        <Heading
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          color="black"
          mb={4}
        >
          Precision Fitness{" "}
          <Text as="span" color="#f2a412">
            Tracking
          </Text>
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          color="black"
          mb={8}
        >
          Track your workouts, measure progress, and stay on course. Set goals,
          stay consistent, and push your limits. Every step counts—log it,
          improve, and keep moving!
        </Text>
        <Flex
          mt={6}
          gap={4}
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="flex-start"
        >
          <Button
            bg="black"
            color="white"
            rounded="full"
            fontSize="md"
            _hover={{ bg: "gray.800" }}
            flex="1"
            py={{ base: 3, md: 6, lg: 6 }}
          >
            Download on iOS
          </Button>
          <Button
            bg="black"
            color="white"
            rounded="full"
            fontSize="md"
            _hover={{ bg: "gray.800" }}
            flex="1"
            py={{ base: 3, md: 6, lg: 6 }}
          >
            Download on Android
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default DownloadSection;
