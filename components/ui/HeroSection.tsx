"use client";

import { Box, Button, Container, Image, Text } from "@chakra-ui/react";

const HeroSection: React.FC = () => {
  return (
    <Box px={{ base: 8, md: 16 }} mb={{ base: 20, md: 30 }}>
      <Image
        src="./hero.jpg"
        alt="Hero Image"
        objectFit="cover"
        width={{ base: "400px", md: "100%" }}
        height={{ base: "550px", md: "100%" }}
        borderRadius="lg" // Optional rounded corners
      />
      {/* Content */}
      <Container
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        color="black"
        mt={6}
      >
        <Text
          fontSize="7xl"
          lineHeight="1"
          fontWeight="900"
          fontFamily="'Boldonse', sans-serif"
          my={{ base: 8, md: 20 }}
        >
          Redefining{" "}
          <Text as="span" color="#f2a412">
            Fitness
          </Text>{" "}
          and <br />
          for Everyone
        </Text>
      </Container>
    </Box>
  );
};

export default HeroSection;
