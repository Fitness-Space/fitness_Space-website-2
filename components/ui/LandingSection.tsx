"use client";

import { useState, useEffect } from "react";
import { Box, Text, Image, VStack, useBreakpointValue } from "@chakra-ui/react";

const LandingSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToImage = () => {
    const imageElement = document.getElementById("hero-image");
    if (imageElement) {
      imageElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      title: "Home Workout",
      description:
        "Our personalized, simple, and replicable daily home workouts kick-start science-backed metabolic processes, promoting effective and sustainable weight loss for a transformative journey.",
    },
    {
      title: "Culture-Fit Meals",
      description:
        " Fuel your body with meals built around the foods you already love. Bibi understands your favorites, your budget and your goals.",
    },
    {
      title: "Intermittent Fasting",
      description:
        "Your body uses glucose or stored fat for fuel. Our guided fasting helps users tap into fat stores, often overnight, for effective weight loss",
    },
  ];

  // Only render the mobile image section if on mobile
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      px={{ base: 5, sm: 3, md: 0 }}
      py={{ base: 8, sm: 12, md: 20 }}
      maxW="1004px"
      mx="auto"
    >
      <Box id="landingsection">
        {/* Mobile Hero Image */}
        {isMobile && (
          <Box id="hero-image" mb={10} mt={10} borderRadius="md">
            <VStack textAlign="center" color="#141414">
              <Text fontSize="32px" fontWeight="extrabold" lineHeight="1.2">
                Redefining <br />
                <Text as="span" borderBottom="3px solid #F2A412" pb="2px">
                  Fitness and Wellness
                </Text>
                <br />
                for Everyone
              </Text>
              <Text
                fontSize="16px"
                fontWeight="medium"
                pt={{ base: 6, md: 0 }}
                pb={{ base: 8, md: 0 }}
              >
                Fast-track your weight-loss and wellness goals with a
                personalized approach.
              </Text>
            </VStack>

            <Image
              src="fitnessmobile_image.png"
              alt="Fitness Hero Mobile"
              width="100%"
              objectFit="cover"
              borderRadius="md"
            />
          </Box>
        )}

        {/* Desktop/Laptop Hero Image  */}
        <Box
          id="hero-image"
          position="relative"
          mb={12}
          borderRadius="md"
          display={{ base: "none", md: "block" }}
        >
          <VStack
            position="absolute"
            top="0%"
            left="50%"
            transform="translateX(-50%)"
            gap={3}
            textAlign="center"
            color="#141414"
            width="100%"
          >
            <Text fontSize="32px" lineHeight="1.2" fontWeight="extrabold">
              Your daily system for sustainable weight loss and wellness.
            </Text>
            <Text fontSize="16px">
              Fast-track your weight-loss and wellness goals with a personalized
              approach.
            </Text>
          </VStack>

          <Image
            src="fitness_image.png"
            alt="Fitness Hero"
            width="100%"
            objectFit="cover"
          />
        </Box>

        {/* Features Section */}
        <Box display={{ base: "block", md: "flex" }} gap={8}>
          {features.map((feature, index) => (
            <Box key={index} mb={{ base: 8, md: 0 }} flex="1">
              <Text
                fontWeight="bold"
                fontSize={{ base: "20px", md: "20px" }}
                mb={2}
                color="black"
                cursor="pointer"
                onClick={scrollToImage}
                _hover={{ textDecoration: "underline" }}
              >
                {feature.title}
              </Text>
              <Text color="#09090B" fontSize="14px">
                {feature.description}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LandingSection;
