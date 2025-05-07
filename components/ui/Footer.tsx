"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Globe } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <Box bg="white" color="gray.400" py={10} mb={{ base: 20, md: 30 }} px={12}>
      <Box bg="gray.100" height="1px" width="100%" />
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        gap={8}
        mt={10}
      >
        {/* Resources Section */}
        <Box>
          <Heading fontSize="lg" mb={4} color={"black"}>
            Resources
          </Heading>
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            Join an Accountability Group
          </Link>
          <br />
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            Track Your Progress
          </Link>
          <br />
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            Access Your Meal Plan
          </Link>
        </Box>

        {/* Help Section */}
        <Box>
          <Heading fontSize="lg" mb={4} color={"black"}>
            Help
          </Heading>
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            Get Support
          </Link>
          <br />
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            FAQs
          </Link>
          <br />
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            Contact Team Help
          </Link>
        </Box>

        {/* Company Section */}
        <Box>
          <Heading fontSize="lg" mb={4} color={"black"}>
            Company
          </Heading>
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            About Fitness Space
          </Link>
          <br />
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            Our Story
          </Link>
          <br />
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            Careers
          </Link>
          <br />
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            Partnerships
          </Link>
          <br />
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            Community Impact
          </Link>
        </Box>

        <Box>
          <Flex gap={2} color="gray.500">
            <Icon as={Globe} boxSize={5} />
            <Text>Nigeria</Text>
          </Flex>
        </Box>
      </Flex>

      {/* Footer Bottom Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={12}
        mt={30}
        alignItems={{ base: "flex-start", md: "center" }}
        textAlign={{ base: "left", md: "center" }}
      >
        <Link
          href="#"
          color="gray.400"
          _hover={{ textDecoration: "underline" }}
        >
          © 2025 Fitness Space Ltd. All rights reserved
        </Link>
        <Link
          href="#"
          color="gray.400"
          _hover={{ textDecoration: "underline" }}
        >
          Terms of Use
        </Link>
        <Link
          href="#"
          color="gray.400"
          _hover={{ textDecoration: "underline" }}
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          color="gray.400"
          _hover={{ textDecoration: "underline" }}
        >
          Refund Policy
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
