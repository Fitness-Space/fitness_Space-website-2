import React from "react";
import { Check } from "lucide-react";
import { Box, Button, Flex, Text, List } from "@chakra-ui/react";

const pricingPlans = [
  {
    price: "4,500/month",
    features: [
      "Intermittent fasting guide (14:10 or 16:8)",
      "28-day portion-controlled meal plan (easy-to-digest foods)",
      "Daily detox water reminders",
      "Light home workouts (10–15 mins, low impact)",
      "Digestive health focus (probiotic foods, fiber goals)",
      "100+ bonus health points",
    ],
    mealPlan: (
      <Box textAlign="center">
        <Text fontWeight="bold">Metabolic Reset</Text>
        <Text fontStyle="italic">(For beginners or those restarting)</Text>
      </Box>
    ),
  },
  {
    price: "13,500/3 months",
    features: [
      "Flexible fasting plans (user-adjusted window)",
      "Moderate workouts (20–30 mins including dance cardio)",
      "Balanced meal templates with local food swaps",
      "Step count target: 8,000–10,000/day",
      "200+ bonus health points",
    ],
    mealPlan: (
      <Box textAlign="center">
        <Text fontWeight="bold">Sustain Burn</Text>
        <Text fontStyle="italic">
          For those maintaining progress or want to build consistency
        </Text>
      </Box>
    ),
  },
  {
    price: "27,000/6 months",
    features: [
      "Structured 16:8 fasting with optional OMAD days",
      "Intense workout circuits (HIIT, Tabata options)",
      "Low-carb, high-fiber meal plans",
      "Weekly weight, waist & arm tracking",
      "High-step targets (12,000–15,000/day)",
      "Reward boosters: earn 2x Health Score points on hard days",
    ],
    mealPlan: (
      <Box textAlign="center">
        <Text fontWeight="bold">Burn</Text>
        <Text fontStyle="italic">Fat loss acceleration</Text>
      </Box>
    ),
  },
];

const PricingCards: React.FC = () => {
  return (
    <Box px={{ base: 4, md: 8, lg: 12 }} py={14}>
      <Box
        mb={10}
        maxW="800px"
        // Removed mx="auto"
        textAlign={{ base: "center", md: "left" }}
        ml={{ base: 0, md: 8, lg: 12 }} // Adds left margin on md+
      >
        <Text
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="black"
        >
          We've got a plan that is perfect for{" "}
          <Text as="span" color="#f2a412">
            YOU
          </Text>
        </Text>
      </Box>

      <Flex wrap="wrap" justify="center" gap={8}>
        {pricingPlans.map((plan, index) => (
          <Box
            key={index}
            w={{ base: "100%", md: "80%", lg: "30%" }}
            bg={index === 1 ? "black" : "white"}
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
            boxShadow="lg"
            border="1px solid"
            borderColor="gray.200"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="light"
              color={index === 1 ? "white" : "black"}
              textAlign="center"
              mb={4}
            >
              {plan.price.split("/")[0]}
              <Text as="span" fontSize="xl" color="green.500">
                /
              </Text>
              <Text as="span" fontSize="md">
                {plan.price.split("/")[1]}
              </Text>
            </Text>

            <Button
              my={{ base: 4, md: 6 }}
              w="full"
              borderWidth={2}
              borderColor={index === 1 ? "white" : "black"}
              bg={index === 1 ? "#f2a412" : "#c4fddc"}
              color="black"
              borderRadius="full"
              px={{ base: 6, md: 8 }}
              py={{ base: 10, md: 14 }}
              fontSize={{ base: "sm", md: "md" }}
              whiteSpace="normal"
              lineHeight="short"
              _hover={{
                bg: index === 1 ? "transparent" : "black",
                color: "white",
              }}
              transition="all 0.2s ease-in-out"
            >
              {plan.mealPlan}
            </Button>

            <List.Root gap={4} mt={8} color={index === 1 ? "white" : "black"}>
              {plan.features.map((feature, idx) => (
                <List.Item key={idx} display="flex" alignItems="center">
                  <Check color="green" size={20} />
                  <Text ml={3} fontSize={{ base: "sm", md: "md" }}>
                    {feature}
                  </Text>
                </List.Item>
              ))}
            </List.Root>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default PricingCards;
