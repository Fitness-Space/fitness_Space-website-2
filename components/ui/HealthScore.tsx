import { Box, Flex, Image, Text } from "@chakra-ui/react";

const HealthScore: React.FC = () => {
  return (
    <Box overflow="hidden" px={{ base: 8, md: 16 }} mt={{ base: 10, md: 10 }}>
      {" "}
      {/* Prevent overflow */}
      <Box
        width="100%"
        minH="100vh"
        bgImage="url('/health_score.jpg')"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        display="flex"
        flexDirection={{ base: "column", md: "row" }} // Stack on mobile
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 16 }}
        py={{ base: 10, md: 20 }}
        pt={{ base: 20, md: 30 }} // Pushes content down
      >
        {/* Text Inside Background */}

        <Box
          bg="rgba(209, 249, 226, 0.83)"
          p={{ base: 4, md: 8 }}
          borderRadius="lg"
          backdropFilter="blur(10px)"
          w={{ base: "100%", md: "60%" }}
          color="white"
          boxShadow="lg"
          textAlign="left"
          alignSelf="flex-start"
          mt={{ base: 10, md: 20 }}
        >
          <Text fontSize="35px" fontWeight="bold" color={"black"}>
            Track Progress. Earn Rewards. Stay Motivated.
          </Text>
          <Text
            fontSize="20px"
            mt={4}
            color={"black"}
            fontWeight="200"
            fontStyle="italic"
          >
            Earn points for workouts, meals, and consistency. Use them for your
            next subscription and stay on track your effortlessly!
          </Text>
        </Box>

        {/* Right-Aligned Image with Border Shadow */}
        <Image
          src="/20.png" // Replace with your image
          alt="Health Section"
          maxW={{ base: "100%", md: "90%" }}
          maxH={{ base: "100%", md: "750px" }}
          borderRadius="lg"
          boxShadow="0px 4px 20px rgba(255, 255, 255, 0.5)"
          mt={{ base: 10, md: 10 }}
        />
      </Box>
    </Box>
  );
};

export default HealthScore;
