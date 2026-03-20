"use client";

import { FC, useState } from "react";
import { Text, Box, Button } from "@chakra-ui/react";

const SuccessScoreSection: FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleDownload = () => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      // Android → Play Store
      window.open(
        "https://play.google.com/store/apps/details?id=com.fitnessspace.app",
        "_blank",
      );
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      // iOS → App Store (Instagram used for testing)
      window.open("https://apps.apple.com/app/id389801252", "_blank");
    } else {
      // Desktop → show message
      setShowMessage(true);

      // Auto hide after 4 seconds
      setTimeout(() => setShowMessage(false), 4000);
    }
  };

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
        {/* Tag */}
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
        >
          Track journey your with health score
        </Box>

        {/* Heading + Description */}
        <Box py={{ base: 2, md: 2 }}>
          <Text
            fontSize={{ base: "30px", md: "42px" }}
            fontWeight="extrabold"
            color="#141414"
            mb={4}
            lineHeight={{ base: "1.5", md: "1.1" }}
          >
            See Your Success in One Simple Score
          </Text>

          <Text
            color="#141414"
            opacity={0.9}
            maxW={{ base: "341px", md: "700px" }}
            mx="auto"
            fontSize="16px"
            mb={6}
            lineHeight="26px"
          >
            Turn your meals, workouts, and habits into measurable progress and
            earn Health Score Points. The higher your Health Score, the faster
            your results and the less you pay on your next subscription.
          </Text>
        </Box>

        {/* Button */}
        <Box display="flex" justifyContent="center" py={{ base: 2, md: 4 }}>
          <Button
            onClick={handleDownload}
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
            width={{ base: "270px", md: "auto" }}
            disabled={showMessage}
          >
            <Text fontSize={12}>Download App</Text>
          </Button>
        </Box>

        {/* Message for desktop users */}
        {showMessage && (
          <Text color="#141414" mt={4}>
            Open this page on your phone to download the app 📱
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default SuccessScoreSection;
