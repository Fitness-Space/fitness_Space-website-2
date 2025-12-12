"use client";
import { Box, Flex, Text, Icon, Stack } from "@chakra-ui/react";
import { CheckCircleMiniIcon, CloseCircleMiniIcon } from "./icon";

const plans = [
  {
    title: "Premium Plan ",
    subtitle: "Unlock discounts with your health score points.",
    price: "₦5,000",
    duration: "every month",
    features: [
      { text: "AI-Powered Meal Plans.", ok: true },
      { text: "Personalized Portion Control Guide.", ok: true },
      { text: "Tailored Home Workouts.", ok: true },
      { text: "Intermittent Fasting.", ok: true },
      { text: "Access to Weight Loss Community.", ok: true },
      { text: "Health Score-Based Discounts.", ok: true },
    ],
  },
  {
    title: "Personal Session with a Coach",
    subtitle: "Unlock discounts with your health score points.",
    price: "₦50,000",
    duration: "for 6 months",
    features: [
      { text: "Everything in Premium Plan", ok: true },
      { text: "Dedicated Coach Support", ok: true },
      { text: "Custom Progress Tracking", ok: true },
      { text: "Private Goal Alignment", ok: true },
      { text: "Weekly Check-ins", ok: true },
      { text: "Priority Access to New Features", ok: true },
    ],
  },
];

const PricingSection = () => {
  return (
    <Box
      width="100%"
      mx="auto"
      py={{ base: 8, md: 20 }}
      px={{ base: 4, md: 4 }}
      bg="white"
    >
      <Flex
        maxW="1100px"
        w="100%"
        mx="auto"
        justify="center"
        align="center"
        gap={{ base: 8, md: 10 }}
        direction={{ base: "column", md: "row" }}
      >
        {/* TEXT SECTION */}
        <Box flex="1" textAlign={{ base: "center", md: "left" }} w="100%">
          {/* DESKTOP TEXT */}
          <Text
            fontSize="3xl"
            fontWeight="bold"
            lineHeight="1.2"
            color="#141414"
            display={{ base: "none", md: "block" }}
            textAlign="center"
          >
            Kick-start your <br />
            <Box
              as="span"
              fontWeight="extrabold"
              textDecoration="underline"
              textDecorationColor="yellow.400"
              textUnderlineOffset={6}
            >
              wellness journey
            </Box>
            <br /> with your <br /> preferred plan.
          </Text>

          {/* MOBILE TEXT */}
          <Text
            fontSize="24px"
            fontWeight="bold"
            lineHeight="1.3"
            color="#141414"
            display={{ base: "block", md: "none" }}
            mx="auto"
          >
            Kick-start your <br /> wellness journey with <br /> your preferred
            plan.
          </Text>
        </Box>

        {/* PRICE CARDS */}
        <Flex
          flex={{ base: "1", md: "2" }}
          gap={{ base: 4, md: 6 }}
          direction={{ base: "column", md: "row" }}
          w={{ base: "100%", md: "auto" }}
          maxW="100%"
        >
          {plans.map((plan, index) => (
            <Box
              key={index}
              border="1px solid #3C3C3C"
              borderRadius="10px"
              px={{ base: 12, md: 12 }}
              py={{ base: 8, md: 8 }}
              flex={{ base: "1", md: "1" }}
              w={{ base: "100%", md: "auto" }}
              boxShadow="0 2px 12px rgba(0,0,0,0.06)"
              bg="white"
              transition="all 0.3s ease"
              _hover={{ boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}
            >
              <Text
                fontWeight="700"
                fontSize={{ base: "20px", md: "20px" }}
                color="#141414"
                mb={1}
              >
                {plan.title}
              </Text>

              <Text fontSize={{ base: "13px", md: "14px" }} color="#777" mb={4}>
                {plan.subtitle}
              </Text>

              <Text
                fontWeight="700"
                fontSize={{ base: "36px", md: "40px" }}
                mt={3}
                mb={1}
                color="#141414"
              >
                {plan.price}
              </Text>

              <Text fontSize={{ base: "12px", md: "13px" }} color="#999" mb={6}>
                {plan.duration}
              </Text>

              <Stack mt={4} gap={{ base: 3.5, md: 4 }}>
                {plan.features.map((f, i) => (
                  <Flex key={i} gap={3} align="center">
                    <Icon
                      as={f.ok ? CheckCircleMiniIcon : CloseCircleMiniIcon}
                      color={f.ok ? "#3CA836" : "#FF6B6B"}
                      boxSize={{ base: 5, md: 5 }}
                      mt={0.5}
                      flexShrink={0}
                    />
                    <Text
                      fontSize={{ base: "13px", md: "14px" }}
                      color="#141414"
                      lineHeight="1.5"
                      mt={0.5}
                    >
                      {f.text}
                    </Text>
                  </Flex>
                ))}
              </Stack>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default PricingSection;
