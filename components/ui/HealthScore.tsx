import { Box, Flex, Image, Text } from "@chakra-ui/react";

const HealthScore: React.FC = () => {
  return (
    <Box
      overflow="hidden"
      px={{ base: 4, md: 8, lg: 16 }}
      mt={{ base: 10, md: 16 }}
    >
      <Box
        width="100%"
        minH="100vh"
        bgImage="url('/health_score (1).jpg')"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 10, lg: 20 }}
        py={{ base: 10, md: 16, lg: 20 }}
        pt={{ base: 20, md: 30 }}
        gap={{ base: 10, md: 14 }}
      >
        {/* Text Content */}
        <Box
          bg="rgba(209, 249, 226, 0.83)"
          p={{ base: 4, md: 6, lg: 8 }}
          borderRadius="lg"
          backdropFilter="blur(10px)"
          w={{ base: "100%", md: "80%", lg: "60%" }}
          color="white"
          boxShadow="lg"
          textAlign={{ base: "center", md: "center", lg: "left" }} // Center on tablet
          mt={{ base: 0, md: 0, lg: 0 }}
          alignSelf={{ base: "flex-start", md: "center", lg: "flex-start" }} // Center on tablet
        >
          <Text
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            color="black"
          >
            Track Your Progress. Earn Tokens. Stay Motivated.
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            mt={4}
            color="black"
            fontWeight="300"
            fontStyle="italic"
          >
            Accumulate Health Score points for workouts, balanced meals, and
            consistency. Convert your points into tokens that unlock exclusive
            benefits—discounts, premium content, and more. Achieve your goals
            while earning rewards effortlessly!
          </Text>
        </Box>

        {/* Image */}
        <Image
          src="/20.png"
          alt="Health Section"
          maxW={{ base: "100%", md: "100%", lg: "40%" }} // Increased width on base and md
          maxH={{ base: "100%", md: "100%", lg: "700px" }} // Increased height on base and md
          objectFit="contain"
          borderRadius="lg"
          boxShadow="0px 4px 20px rgba(255, 255, 255, 0.5)"
        />
      </Box>
    </Box>
  );
};

export default HealthScore;
