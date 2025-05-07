"use client";
import { useState } from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  Image,
  Drawer,
  Portal,
  CloseButton,
  Button,
  Spacer,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <Box bg="gray.100" px={6} py={4}>
      <Flex align="center" px={12} >
        <Spacer />
        <Flex gap={6}>
          <Link as={NextLink} href="/find-a-store" fontSize="xs"  fontWeight="medium" color="black" _hover={{ color: "gray", textDecoration: "none" }}>
            Find a Store
          </Link>
          <Box className="vertical-line" width="1px" height="20px" bg="black" />
          <Link as={NextLink} href="/help" fontSize="xs"  fontWeight="medium" color="black" _hover={{ color: "gray", textDecoration: "none" }}>
            Help
          </Link>
          <Box className="vertical-line" width="1px" height="20px" bg="black" />
          <Link as={NextLink} href="/join-us" fontSize="xs"  fontWeight="medium" color="black" _hover={{ color: "gray", textDecoration: "none" }}>
            Join Us
          </Link>
          <Box className="vertical-line" width="1px" height="20px" bg="black" />
          <Link as={NextLink} href="/sign-in" fontSize="xs"  fontWeight="medium" color="black" _hover={{ color: "gray", textDecoration: "none" }}>
            Sign In
          </Link>
        </Flex>
      </Flex>
    </Box> */}

      {/* Second Navbar */}
      <Box bg="white" px={6} py={4}>
        <Flex
          align="center"
          justify="space-between"
          px={{ base: 2, md: 8 }}
          py={{ base: 2, md: 4 }}
        >
          {/* Logo Section */}
          <Box maxWidth={{ base: "100px", md: "200px" }} p={0} m={0}>
            <Link as={NextLink} href="/">
              <Image
                src="./logo1.jpeg"
                alt="Hero Image"
                width="100%"
                height="auto"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Spacer />
          {/* Desktop Navigation Links */}
          <Flex
            align="center"
            justify="flex-end"
            gap={8}
            flexGrow={1}
            display={{ base: "none", md: "flex" }}
          >
            <Link
              as={NextLink}
              href="$1"
              fontSize="lg"
              fontWeight="bold"
              color="black"
              _hover={{
                color: "#f2a412", // Change text color on hover
                textDecoration: "underline", // Add underline on hover
              }}
            >
              Daily Habits
            </Link>
            <Link
              as={NextLink}
              href="$1"
              fontSize="lg"
              fontWeight="bold"
              color="black"
              _hover={{
                color: "#f2a412", // Change text color on hover
                textDecoration: "underline", // Add underline on hover
              }}
            >
              Health Score
            </Link>
            <Link
              as={NextLink}
              href="$1"
              fontSize="lg"
              fontWeight="bold"
              color="black"
              _hover={{
                color: "#f2a412", // Change text color on hover
                textDecoration: "underline", // Add underline on hover
              }}
            >
              Community
            </Link>
          </Flex>
          {/* Mobile Hamburger Menu */}
          <Box display={{ base: "block", md: "none" }}>
            <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
              <Drawer.Trigger asChild>
                <IconButton aria-label="Open Menu">
                  <LuMenu />
                </IconButton>
              </Drawer.Trigger>

              <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                  <Drawer.Content
                    height="100vh" // Full viewport height
                    width="100vw" // Full viewport width
                    maxWidth="100vw" // Prevents max-width limitation
                    borderRadius={0} // Removes rounded corners
                  >
                    <Drawer.Header>
                      <Drawer.Title>Menu</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body>
                      <Flex direction="column" gap={6}>
                        <Link
                          as={NextLink}
                          href="/find-a-store"
                          fontSize="lg"
                          fontWeight="bold"
                          color="white"
                          _hover={{ textDecoration: "underline" }}
                        >
                          Find a Store
                        </Link>
                        <Link
                          as={NextLink}
                          href="/about-us"
                          fontSize="lg"
                          fontWeight="bold"
                          color="white"
                          _hover={{ textDecoration: "underline" }}
                        >
                          Health Score
                        </Link>
                      </Flex>
                    </Drawer.Body>
                    <Drawer.Footer>
                      <Button variant="outline" onClick={() => setOpen(false)}>
                        Close
                      </Button>
                    </Drawer.Footer>
                    <Drawer.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Drawer.CloseTrigger>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Portal>
            </Drawer.Root>
          </Box>
        </Flex>
      </Box>

      <Box bg="gray.100" py={8} />
    </>
  );
};

export default Navbar;
