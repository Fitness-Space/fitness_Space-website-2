"use client";

import { socialPosts } from "@/data/socialPosts";
import {
  Box,
  Image,
  VStack,
  Text,
  Flex,
  Button,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import SocialPostCard from "./SocialPostCard";

const FitnessTransformations = () => {
  const cards = socialPosts;
  const [currentPage, setCurrentPage] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const cardsPerPage = 4;

  // Auto-slide effect for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  // Create an extended array with first cards duplicated at the end
  const extendedCards = [...cards, ...cards.slice(0, cardsPerPage)];
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  // Desktop slice
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = extendedCards.slice(startIndex, endIndex);

  // Desktop navigation (endless loop)
  const goToPrevPage = () =>
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage >= totalPages) {
      setCurrentPage(0);
    } else {
      setCurrentPage(nextPage);
    }
  };

  // Mobile navigation
  const goToPrevMobile = () =>
    setMobileIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));

  const goToNextMobile = () =>
    setMobileIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));

  return (
    <Box
      id="stories"
      px={{ base: 4, md: 6 }}
      py={{ base: 15, md: 20 }}
      maxW="1200px"
      mx="auto"
    >
      {/* HEADER */}
      <VStack gap={3} textAlign="center" mb={16}>
        <Text
          fontSize={{ base: "30px", md: "40px" }}
          fontWeight="bold"
          color="#141414"
        >
          Transformations that keep us going
        </Text>
        <Text fontSize={{ base: "md", md: "14px" }} color="#141414">
          Stories of people that took their fitness journey from zero to 100
        </Text>
      </VStack>

      {/* SOCIAL POST CARDS */}
      <Box position="relative" display={{ base: "none", md: "block" }}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          gap={3}
          justifyItems="center"
        >
          {currentCards.map((post, i) => (
            <Box key={i} position="relative">
              <SocialPostCard
                {...post}
                platform={post.platform as "instagram" | "x"}
              />

              {/* Previous Button - First Card */}
              {i === 0 && (
                <IconButton
                  aria-label="Previous"
                  onClick={goToPrevPage}
                  position="absolute"
                  top="50%"
                  left={4}
                  transform="translateY(-50%)"
                  borderRadius="full"
                  bg="#F2A412"
                  color="white"
                  _hover={{
                    bg: "#333",
                  }}
                  size="lg"
                  zIndex={10}
                  css={{
                    backdropFilter: "blur(25px)",
                    boxShadow: "0 8px 32px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <IoChevronBack size={24} />
                </IconButton>
              )}

              {/* Next Button - Last Card */}
              {i === currentCards.length - 1 && (
                <IconButton
                  aria-label="Next"
                  onClick={goToNextPage}
                  position="absolute"
                  top="50%"
                  right={4}
                  transform="translateY(-50%)"
                  borderRadius="full"
                  bg="#F2A412"
                  color="white"
                  _hover={{
                    bg: "#333",
                  }}
                  size="lg"
                  zIndex={10}
                  css={{
                    backdropFilter: "blur(25px)",
                    boxShadow: "0 8px 32px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <IoChevronForward size={24} />
                </IconButton>
              )}
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box display={{ base: "block", md: "none" }}>
        <SocialPostCard
          {...cards[mobileIndex]}
          platform={cards[mobileIndex].platform as "instagram" | "x"}
        />
        <Flex justify="center" gap={4} mt={6}>
          <IconButton aria-label="Previous" onClick={goToPrevMobile} size="sm">
            <IoChevronBack size={20} />
          </IconButton>
          <IconButton aria-label="Next" onClick={goToNextMobile} size="sm">
            <IoChevronForward size={20} />
          </IconButton>
        </Flex>
      </Box>
    </Box>
  );
};

export default FitnessTransformations;
