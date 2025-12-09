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
    <Flex
      width={{ base: "100%", md: "1004px" }}
      mx="auto"
      justify="center"
      py={20}
      px={{ base: 4, md: 4 }}
    >
      <Flex
        maxW="1100px"
        w="100%"
        justify="space-between"
        align="flex-start"
        gap={{ base: 12, md: 10 }}
        direction={{ base: "column", md: "row" }}
      >
        {/* TEXT SECTION */}
        <Box flex="1" textAlign={{ base: "center", md: "left" }}>
          {/* DESKTOP TEXT */}
          <Text
            fontSize="3xl"
            fontWeight="bold"
            lineHeight="1.2"
            color="#141414"
            display={{ base: "none", md: "block" }}
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
            fontSize="26px"
            fontWeight="bold"
            lineHeight="1.2"
            color="#141414"
            display={{ base: "block", md: "none" }}
            mx="auto"
            maxW="310px"
          >
            Kick-start your wellness journey with your preferred plan.
          </Text>
        </Box>

        {/* PRICE CARDS */}
        <Flex
          flex="2"
          gap={{ base: 6, md: 6 }}
          direction={{ base: "column", md: "row" }}
        >
          {plans.map((plan, index) => (
            <Box
              key={index}
              border="1px solid #e7e7e7"
              borderRadius="xl"
              p={{ base: 5, md: 6 }}
              flex="1"
              w={{ base: "100%", md: "auto" }} // FULL WIDTH ON MOBILE
              boxShadow={{ base: "sm", md: "none" }} // MOBILE CARD POP
            >
              <Text fontWeight="bold" fontSize="lg" color="#141414">
                {plan.title}
              </Text>

              <Text fontSize="sm" color="#666">
                {plan.subtitle}
              </Text>

              <Text fontWeight="bold" fontSize="3xl" mt={4} color="#141414">
                {plan.price}
              </Text>

              <Text fontSize="sm" color="#444">
                {plan.duration}
              </Text>

              <Stack mt={5} gap={3}>
                {plan.features.map((f, i) => (
                  <Flex key={i} align="center" gap={3}>
                    <Icon
                      as={f.ok ? CheckCircleMiniIcon : CloseCircleMiniIcon}
                      color={f.ok ? "green.500" : "red.300"}
                      boxSize={4}
                    />
                    <Text fontSize="sm" color="#141414">
                      {f.text}
                    </Text>
                  </Flex>
                ))}
              </Stack>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PricingSection;
