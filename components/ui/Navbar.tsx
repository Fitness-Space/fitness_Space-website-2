"use client";
import { useState } from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  Image,
  Portal,
  Button,
  Spacer,
  Text,
  HStack,
  Drawer,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import MobileHamburger from "./MobileHamburger";
// ...existing code...

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Box
        bg="white"
        px={{ base: 3, md: 6 }}
        py={{ base: 3, md: 4 }}
        boxShadow="sm"
      >
        <Flex
          align="center"
          maxW="1200px"
          mx="auto"
          w="100%"
          gap={{ base: 2, md: 4 }}
          justify="space-between"
          px={0}
          py={0}
        >
          {/* Logo - left */}
          <Box minW={{ base: "110px", sm: "160px", md: "260px" }}>
            <Link
              as={NextLink}
              href="/"
              display="flex"
              alignItems="center"
              gap={3}
            >
              <Image
                src="./logo1.jpeg"
                alt="Fitness Space logo"
                w={{ base: "127px", md: "177px" }}
                h="25.72px"
                objectFit="contain"
                maxW="none"
                flexShrink={0}
                display="block"
              />
            </Link>
          </Box>

          {/* Center links */}
          <Flex
            align="center"
            flex={1}
            justify="flex-end"
            display={{ base: "none", md: "flex" }}
          >
            <HStack gap={8}>
              <Link
                href="#landingsection"
                as={NextLink}
                onClick={(e) => handleScrollToSection(e, "landingsection")}
                fontSize="14px"
                color="black"
                _hover={{ textDecoration: "underline" }}
                _focus={{ outline: "none", boxShadow: "none" }}
              >
                Why Fitness-Space
              </Link>
              <Link
                as={NextLink}
                href="#stories"
                onClick={(e) => handleScrollToSection(e, "stories")}
                fontSize="14px"
                color="black"
                _hover={{ textDecoration: "underline" }}
                _focus={{ outline: "none", boxShadow: "none" }}
              >
                Stories
              </Link>
              <Link
                as={NextLink}
                href="#healthscore"
                onClick={(e) => handleScrollToSection(e, "healthscore")}
                fontSize="14px"
                color="black"
                _hover={{ textDecoration: "underline" }}
                _focus={{ outline: "none", boxShadow: "none" }}
              >
                Health Score
              </Link>
              <Link
                as={NextLink}
                href="#what-we-offer"
                onClick={(e) => handleScrollToSection(e, "what-we-offer")}
                fontSize="14px"
                color="black"
                _hover={{ textDecoration: "underline" }}
                _focus={{ outline: "none", boxShadow: "none" }}
              >
                What We Offer
              </Link>
            </HStack>
          </Flex>

          <Box display="flex" minW={{ base: "auto", md: "160px" }}>
            <NextLink href="#health-score" legacyBehavior passHref>
              <Button
                as="a"
                bg="black"
                color="white"
                _hover={{ bg: "gray.800" }}
                borderRadius="7px"
                px={6}
                py={3}
                display={{ base: "none", md: "inline-flex" }}
              >
                Get Started
              </Button>
            </NextLink>

            {/* Mobile hamburger */}
            <Box display={{ base: "block", md: "none" }}>
              <MobileHamburger />
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
