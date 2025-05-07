"use client";

import { Box, Container, Image, Text } from "@chakra-ui/react";

const HeroSection: React.FC = () => {
  return (
    <>
      {/* Full-screen Hero Image */}
      <Box
        height="100vh"
        width="100%"
        overflow="hidden"
        px={{ base: 4, md: 8, lg: 12 }}
      >
        <Image
          src="hero (1).jpg"
          alt="Hero Image"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>

      {/* Text Section Below Image */}
      <Container
        py={{ base: 8, md: 10 }}
        textAlign="center"
        maxW="container.lg"
      >
        <Text
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
          lineHeight="1.2"
          fontWeight="900"
          fontFamily="'Boldonse', sans-serif"
          color="black"
        >
          Redefining{" "}
          <Text as="span" color="#f2a412">
            Fitness
          </Text>{" "}
          and <br />
          Wellness for Everyone
        </Text>
      </Container>
    </>
  );
};

export default HeroSection;
