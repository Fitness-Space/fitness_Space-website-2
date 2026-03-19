"use client";

import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";

const DownloadAppSection = () => {
  return (
    <Box px={{ base: 4, sm: 3, md: 0 }}>
      <Box
        bgImage={{
          base: "url('/downloadImagemobile.png')",
          md: "url('/downloadImage.png')",
        }}
        bgSize="contain"
        bgPos="center"
        bgRepeat="no-repeat"
        borderRadius={{ base: "12px", md: "28px" }}
        h={{ base: "574px", md: "360px", lg: "390px" }}
        display="flex"
        alignItems={{ base: "flex-start", md: "center" }}
        justifyContent="flex-start"
        px={{ base: 4, md: 12, lg: 16 }}
        py={{ base: 8, md: 8 }}
        pt={{ base: 6, md: 8 }}
        w={{ base: "100%", md: "1004px" }}
        mx="auto"
      >
        <Flex
          direction="column"
          maxW={{ base: "100%", md: "480px" }}
          color="white"
          mt={{ base: 4, md: 0 }} // Added margin-top for mobile
        >
          {/* Header Text */}
          <Text
            fontSize={{ base: "22px", md: "32px", lg: "32px" }}
            fontWeight="800"
            lineHeight="1.35"
            textAlign={{ base: "center", md: "left" }}
          >
            Download our mobile app to kick-start your <br />
            <span style={{ position: "relative" }}>
              journey weight-loss and wellness.
              <Box
                as="span"
                position="absolute"
                bottom="-4px"
                left="0"
                width="100%"
                height="6px"
                bg="#f2a412"
                borderRadius="4px"
                zIndex={-1}
              />
            </span>
          </Text>

          {/* Buttons */}
          <Flex
            gap={4}
            mt={{ base: 16, md: 6 }}
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "flex-start" }}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.fitnessspace.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
                px={{ base: 6, md: 8 }}
                py={5}
                display="flex"
                alignItems="center"
                gap={2}
                width={{ base: "100%", md: "auto" }}
                maxW="260px"
              >
                <Image src="/android_image.png" boxSize="14px" alt="Android" />
                Get on Android
              </Button>
            </a>

            <Button
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
              px={{ base: 6, md: 9 }}
              py={5}
              display="flex"
              alignItems="center"
              gap={2}
              width={{ base: "100%", md: "auto" }}
              maxW="260px"
            >
              <Image src="/ios_image.png" boxSize="14px" alt="iOS" />
              Get on IOS
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default DownloadAppSection;
