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
            Find a Store
          </Link>
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            Find a Store
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
            Get Help
          </Link>
          <br />
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            Returns
          </Link>
          <br />
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            Contact Us
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
            About Nike
          </Link>
          <br />
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            News
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
            Investors
          </Link>
          <br />
          <Link
            href="#"
            color="gray.400"
            _hover={{ textDecoration: "underline" }}
          >
            Sustainability
          </Link>
        </Box>

        <Box>
          <Flex gap={2} color="gray.500">
            <Icon as={Globe} boxSize={5} />
            <Text>Egypt</Text>
          </Flex>
        </Box>
      </Flex>

      {/* Footer Bottom Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={12}
        mt={30}
        alignItems="center"
      >
        <Text mt={2}>© 2025 Nike, Inc. All rights reserved</Text>
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
          Privacy & Cookie Policy
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
