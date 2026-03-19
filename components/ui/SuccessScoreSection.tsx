"use client";

import { FC } from "react";
import { Text, Box, Button, Image } from "@chakra-ui/react";
import { HeartIcon, PaperPlaneIcon } from "./icon";

const SuccessScoreSection: FC = () => {
  return (
    <Box
      id="healthscore"
      as="section"
      w="full"
      bg="white"
      py={{ base: 10, md: 15 }}
      px={{ base: 4, sm: 3, md: 0 }}
    >
      <Box mx="auto" textAlign="center">
        <Box
          fontWeight="bold"
          fontSize="11px"
          mb={4}
          mx="auto"
          w="fit-content"
          bg="linear-gradient(to right, #FF9B22, #F64E02)"
          color="white"
          px={6}
          py={3}
          borderRadius="full"
          textAlign="center"
          width="fit-content"
        >
          Track journey your with health score
        </Box>

        <Box py={{ base: 2, md: 2 }}>
          {/* Heading */}
          <Text
            fontSize={{ base: "30px", md: "42px" }}
            fontWeight="extrabold"
            color="#141414"
            mb={4}
            lineHeight={{ base: "1.5", md: "0.8" }}
          >
            See Your Success in One Simple Score
          </Text>

          {/* Description */}
          <Text
            py={{ base: 0, md: 2 }}
            color="#141414"
            opacity={0.9}
            maxW={{ base: "341px", md: "700px" }}
            mx="auto"
            fontSize={{ base: "16px", md: "16px" }}
            mb={6}
            lineHeight="26px"
            fontWeight={{ base: "normal", md: "medium" }}
          >
            Turn your meals, workouts, and habits into measurable progress and
            earn Health Score Points. The higher your Health Score, the faster
            your results and the less you pay on your next subscription. Enjoy a
            14-day free trial and only pay after you start seeing real results.
          </Text>
        </Box>

        {/* Buttons */}
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={4}
          py={{ base: 2, md: 4 }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.fitnessspace.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              bg="#141414"
              color="white"
              px={10}
              py={{ base: 6, md: 5 }}
              borderRadius="4px"
              display="flex"
              alignItems="center"
              gap={2}
              fontSize="base"
              _hover={{ bg: "black" }}
              width={{ base: "270px", md: "auto" }} // ← mobile only
            >
              <Image src="/android_image.png" boxSize="12px" />
              <Text fontSize={12}>Get on Android</Text>
            </Button>
          </a>

          <Button
            bg="#141414"
            color="white"
            px={16}
            py={{ base: 8, md: 6 }}
            borderRadius="4px"
            display="flex"
            alignItems="center"
            gap={2}
            fontSize="base"
            _hover={{ bg: "black" }}
            width={{ base: "100%", md: "auto" }}
          >
            <HeartIcon />
            <Text fontSize={14}>Get on iOS</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SuccessScoreSection;
