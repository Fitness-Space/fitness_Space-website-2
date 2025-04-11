"use client";

import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";

const DiscoverSection: React.FC = () => {
  return (
    <Box>
      <Box
        justifyContent="center"
        px={16}
        mb={{ base: 20, md: 30 }}
        display={{ base: "none", md: "flex" }}
      >
        <Box
          position="relative"
          width="100vw"
          height="100vh"
          backgroundImage="url('best-friends-spending-time-together-outdoors.jpg')"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          p={10}
        >
          {/* Content on the left */}
          <Box maxW="100%" textAlign="left" color="white" mt={10}>
            <Text fontSize="7xl" mt={4} color="white" fontWeight={600}>
              {" "}
              Community-Driven Fitness: Free Coaching, Shared Goals, Lifelong
              Bonds{" "}
            </Text>
            <Text fontSize="4xl" mt={8} maxWidth="600px" color="white">
              {" "}
              Accountability Meets Progress{" "}
            </Text>
            <Text fontSize="2xl" color="white" fontStyle="italic">
              {" "}
              10K Trybe, No Soda Gang, Vegan Tribe & More{" "}
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Mobile Version - Image with Text Below */}
      <Box
        display={{ base: "block", md: "none" }}
        textAlign="center"
        px={6}
        py={6}
      >
        <Image
          src="Screen Shot 2025-03-16 at 12.42.37 PM.png"
          alt="Nike Air"
          width="100%"
          height="auto"
          objectFit="contain"
        />
        <Box justifyContent="left" textAlign="left">
          <Heading fontSize="2xl" fontWeight="bold" mt={4} color="black">
            Community-Driven Fitness:
          </Heading>
          <Text fontSize="lg" mt={4} color="black">
            Free coaching, shared goals, and a supportive fitness family. Stay
            accountable, stay consistent, and keep progressing. Join 10K Trybe,
            No Soda Gang, Vegan Tribe & more!
          </Text>

          {/* <Button
            size="lg"
            w="180px"
            h="48px"
            mt={4}
            fontSize="24px"
            bg="black"
            color="white"
            rounded="4xl"
            _hover={{ bg: "gray.500" }}
          >
            Shop Now
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
};

export default DiscoverSection;
