"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";

const DownloadSection: React.FC = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={2}
      px={{ base: 8, md: 16 }}
      alignItems="center"
    >
      {/* First Section */}
      <Box
        flex="1"
        borderRadius="md"
        overflow="hidden"
        p={1}
        width={{ base: "350px", md: "100%" }}
        height={{ base: "550px", md: "100%" }}
        alignItems="center"
      >
        <Image
          src="/nutrient-dense meals.jpg"
          alt="Training"
          width="100%"
          height="65vh"
        />
        <Heading fontSize="4xl" fontWeight="bold" mt={10} color="black">
          Nutrient-Packed{" "}
          <Text as="span" color="#f2a412">
            Meals
          </Text>
        </Heading>
        <Text fontSize="24px" mt={10} color="black">
          Fuel your body with wholesome, nutrient-dense meals. Eat smart, stay
          energized, and enjoy every bite. Portion control, meal balance, and
          mindful nutrition!
        </Text>
        <Flex
          mt={10}
          mb={20}
          gap={4}
          flex="1"
          flexDirection={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
        >
          <Button
            bg="black"
            color="white"
            rounded="4xl"
            fontSize="xl"
            _hover={{ bg: "gray.800" }}
          >
            Download iOS
          </Button>
          <Button
            bg="black"
            color="white"
            rounded="4xl"
            fontSize="xl"
            _hover={{ bg: "gray.800" }}
          >
            Download Android
          </Button>
        </Flex>
      </Box>

      {/* Second Section */}
      <Box
        flex="1"
        borderRadius="md"
        overflow="hidden"
        p={1}
        width={{ base: "350px", md: "100%" }}
        height={{ base: "550px", md: "100%" }}
        mt={{ base: 4, md: 0 }}
        alignItems="center"
      >
        <Image
          src="/fitness_tracking.jpg"
          alt="Running"
          width="100%"
          height="65vh"
        />
        <Heading fontSize="4xl" fontWeight="bold" mt={10} color="black">
          Precision Fitness{" "}
          <Text as="span" color="#f2a412">
            Tracking
          </Text>
        </Heading>
        <Text fontSize="24px" mt={10} color="black">
          Track your workouts, measure progress, and stay on course. Set goals,
          stay consistent, and push your limits. Every step counts—log it,
          improve, and keep moving!
        </Text>
        <Flex
          mt={10}
          mb={20}
          gap={4}
          flex="1"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Button
            bg="black"
            color="white"
            rounded="4xl"
            fontSize="xl"
            _hover={{ bg: "gray.800" }}
          >
            Download iOS
          </Button>
          <Button
            bg="black"
            color="white"
            rounded="4xl"
            fontSize="xl"
            _hover={{ bg: "gray.800" }}
          >
            Download Android
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default DownloadSection;
