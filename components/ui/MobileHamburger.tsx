"use client";

import {
  Drawer,
  Portal,
  IconButton,
  Image,
  Flex,
  Button,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import NextLink from "next/link";

const MobileHamburger = () => {
  const [open, setOpen] = useState(false);

  return (
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
            height="100vh"
            width="100vw"
            maxWidth="100vw"
            borderRadius={0}
            bg="white"
          >
            {/* HEADER */}
            <Drawer.Header
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              px={4}
            >
              <NextLink href="/" passHref>
                <Image
                  src="/logo1.jpeg"
                  alt="logo"
                  w="127px"
                  h="auto"
                  objectFit="contain"
                />
              </NextLink>

              <Drawer.CloseTrigger asChild>
                <IconButton aria-label="Close Menu">
                  <LuX />
                </IconButton>
              </Drawer.CloseTrigger>
            </Drawer.Header>

            {/* MENU ITEMS */}
            <Drawer.Body px={6} pt={2}>
              <Flex direction="column" gap={6} mt={6}>
                <Link
                  as={NextLink}
                  href="#why"
                  fontSize="lg"
                  color="black"
                  onClick={() => setOpen(false)}
                >
                  Why Fitness-Space
                </Link>

                <Link
                  as={NextLink}
                  href="#stories"
                  fontSize="lg"
                  color="black"
                  onClick={() => setOpen(false)}
                >
                  Stories
                </Link>

                <Link
                  as={NextLink}
                  href="#health-score"
                  fontSize="lg"
                  color="black"
                  onClick={() => setOpen(false)}
                >
                  Health Score
                </Link>

                <Link
                  as={NextLink}
                  href="#what-we-offer"
                  fontSize="lg"
                  color="black"
                  onClick={() => setOpen(false)}
                >
                  What We Offer
                </Link>

                <NextLink href="#health-score" passHref legacyBehavior>
                  <Button
                    as="a"
                    bg="black"
                    color="white"
                    borderRadius="full"
                    _hover={{ bg: "gray.800" }}
                    mt={4}
                    onClick={() => setOpen(false)}
                  >
                    Get Started
                  </Button>
                </NextLink>
              </Flex>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MobileHamburger;
