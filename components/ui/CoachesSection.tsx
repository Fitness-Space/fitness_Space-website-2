"use client";

import React from "react";
import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

const CoachesSection = () => {
  const imageSrc = useBreakpointValue({
    base: "CustomerTestimonialmobile-image.png",
    md: "CustomerTestimonial.png",
  });

  return (
    <Box
      id="what-we-offer"
      px={{ base: 4, sm: 3, md: 0 }}
      py={{ base: 10, sm: 15, md: 20 }}
      width={{ base: "100%", md: "1004px" }}
      maxW="100%"
      mx="auto"
    >
      {/* Top Text */}
      <Box w="100%" textAlign="left">
        <Text
          fontSize={{ base: "23px", md: "3xl" }}
          fontWeight="bold"
          color="#141414"
          lineHeight={{ base: "1.3", md: "1.5" }}
        >
          Endless{" "}
          <Box as="span" color="#F4A72C">
            health possibilities
          </Box>
          <br /> for every individual
        </Text>
      </Box>

      {/* Image + Right Text */}
      <Flex
        w="100%"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={{ base: 8, md: 8 }} // spacing adjusted for mobile
        mt={8}
      >
        {/* Image */}
        <Box flex="2" w="100%">
          <Image
            src={imageSrc}
            alt="Coaches"
            borderRadius="20px"
            objectFit="cover"
            w="100%"
            height={{ base: "315px", md: "435px" }}
          />
        </Box>

        {/* Right Text */}
        <Box
          flex="1"
          textAlign="left"
          display="flex"
          flexDirection="column"
          justifyContent={{ base: "center", md: "flex-end" }}
          minH={{ base: "auto", md: "435px" }}
        >
          <Box>
            <Text
              fontSize={{ base: "28px", md: "2xl" }}
              fontWeight="bold"
              color="#141414"
            >
              Experienced Coaches
            </Text>
            <Text
              mt={3}
              fontSize={{ base: "13px", md: "sm" }}
              color="#141414"
              mx={{ base: "auto", md: "0" }}
              lineHeight="1.6"
              fontWeight={{ base: "light", md: "" }}
            >
              Ignite your fitness journey with a skilled weight loss coach.
              Benefit from personalized guidance and expert strategies for
              effective goal achievement.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default CoachesSection;
