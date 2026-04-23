"use client";

import { Box, Flex, Text, Image, Link, VStack } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
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
    <Box bg="white" w="100%" py={20}>
      {/* TOP SECTION */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="flex-start"
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 8 }}
        gap={{ base: 10, md: 0 }}
      >
        {/* BRAND + DESCRIPTION */}
        <Box maxW="350px">
          <Image src="./logo1.jpeg" alt="Fitness Space" w="160px" mb={4} />

          <Text fontSize="12px" color="black" lineHeight="1.6" mb={6}>
            Fitness Space has helped thousands achieve sustainable weight loss
            and fitness goals through simple daily habits that encourage
            healthier choices. Our approach has guided over 15,000 users to
            reach not only their weight-loss targets but also broader wellness
            goals, building long-term, sustainable well-being.
          </Text>

          <Text fontWeight="600" color="black" mb={1}>
            Contact us
          </Text>
          <Text fontSize="12px" color="black">
            support@getfitness.space
          </Text>
        </Box>

        {/* LOCATIONS */}
        <Box color="black">
          <Text fontWeight="bold" mb={3}>
            Office:
          </Text>
          <Text fontSize="12px">
            46 Kenneth Road, Achara Layout, <br />
            Enugu, Enugu State.
          </Text>
        </Box>

        {/* SERVICES */}
        <Flex
          direction="column"
          align="flex-start"
          color="black"
          gap={{ base: 0, md: 1 }}
        >
          <Text fontWeight="bold" mb={{ base: 0, md: 3 }}>
            Services
          </Text>
          <Link
            href="/"
            _focus={{ outline: "none", boxShadow: "none" }}
            onClick={(e) => handleScrollToSection(e, "intro")}
          >
            <Text
              fontSize="12px"
              color="black"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              AI-Powered Meal Plan
            </Text>
          </Link>
          <Link
            href="/"
            _focus={{ outline: "none", boxShadow: "none" }}
            onClick={(e) => handleScrollToSection(e, "intro")}
          >
            <Text
              fontSize="12px"
              color="black"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Portion Control guide
            </Text>
          </Link>
          <Link
            href="/"
            _focus={{ outline: "none", boxShadow: "none" }}
            onClick={(e) => handleScrollToSection(e, "intro")}
          >
            <Text
              fontSize="12px"
              color="black"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Home Workout
            </Text>
          </Link>
          <Link
            href="/"
            _focus={{ outline: "none", boxShadow: "none" }}
            onClick={(e) => handleScrollToSection(e, "intro")}
          >
            <Text
              fontSize="12px"
              color="black"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Intermittent Fasting
            </Text>
          </Link>
        </Flex>

        {/* WHY FITNESS SPACE */}
        <Box color="black">
          <Text fontWeight="bold" mb={3}>
            Why Fitness Space
          </Text>
          <Link
            href="#stories"
            _focus={{ outline: "none", boxShadow: "none" }}
            onClick={(e) => handleScrollToSection(e, "stories")}
          >
            <Text
              fontSize="12px"
              color="black"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Stories
            </Text>
          </Link>
          <Text fontSize="12px" color="black">
            Learn
          </Text>
          <Text fontSize="12px" color="black">
            FAQS
          </Text>
        </Box>

        {/* LEGAL */}
        <Flex direction="column" align="flex-start" color="black" gap={1}>
          <Text fontWeight="bold" mb={0}>
            Legal
          </Text>

          <Link href="/terms" _focus={{ outline: "none", boxShadow: "none" }}>
            <Text
              fontSize="12px"
              cursor="pointer"
              color="black"
              _hover={{ textDecoration: "underline" }}
            >
              Terms
            </Text>
          </Link>

          <Link
            href="/privacy-policy"
            _focus={{ outline: "none", boxShadow: "none" }}
          >
            <Text
              fontSize="12px"
              cursor="pointer"
              color="black"
              _hover={{ textDecoration: "underline" }}
            >
              Privacy
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Box
        height="1px"
        bg="gray.300"
        my={6}
        display={{ base: "none", md: "block" }}
      />

      {/* BOTTOM FOOTER */}
      <Flex
        justify="flex-end"
        align="center"
        maxW="1200px"
        mx="auto"
        mt={{ base: 4, md: 10 }}
        px={{ base: 6, md: 8 }}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 60 }}
      >
        <Text fontSize="12px" color="#393838">
          &copy; {new Date().getFullYear()} Fitness space. All Rights Reserved.
        </Text>

        {/* SOCIAL ICONS */}
        <Flex gap={6} fontSize="18px" color="#6B6666">
          <Link
            href="https://www.instagram.com/getfitness.space"
            target="_blank"
            color="black"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://www.twitter.com/FitnessSpace_Ng"
            target="_blank"
            color="black"
          >
            <FaTwitter />
          </Link>

          <Link
            href="https://www.youtube.com/@fitnessspace1410"
            target="_blank"
            color="black"
          >
            <FaYoutube />
          </Link>

          <Link
            href="https://www.tiktok.com/@getfitness.space"
            target="_blank"
            color="black"
          >
            <FaTiktok />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
