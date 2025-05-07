import React from "react";
import { Check } from "lucide-react";
import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  List,
  ListItem,
  Icon,
} from "@chakra-ui/react";

const pricingPlans = [
  {
    price: "4,500/month",
    features: [
      "Intermittent fasting guide (14:10 or 16:8",
      "28-day portion-controlled meal plan (easy-to-digest foods)",
      "Daily detox water reminders",
      "Light home workouts (10–15 mins, low impact)",
      "Digestive health focus (probiotic foods, fiber goals)",
      "100+ bonus health points",
    ],
    mealPlan: "Metabolic Reset (For beginners or those restarting) ",
  },
  {
    price: "13,500/3 months",
    features: [
      " Flexible fasting plans (user-adjusted window)",

      "Moderate workouts (20–30 mins including dance cardio)",
      "Balanced meal templates with local food swaps",
      "Step count target: 8,000–10,000/day",
      "200+ bonus health points",
    ],
    mealPlan:
      "Sustain Burn (For those maintaining progress or want to build consistency) ",
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
    mealPlan: "Burn (Fat loss acceleration) ",
  },
];

const PricingCards: React.FC = () => {
  return (
    <Box p={6}>
      <Flex maxW={{ base: "full", md: "48%" }} p={{ base: "6", md: "20" }}>
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          color="black"
        >
          We've got a plan that is perfect for{" "}
          <Text as="span" color="#f2a412">
            YOU
          </Text>
        </Text>
      </Flex>

      <Flex wrap="wrap" justify="center" gap={6} p={{ base: "full", md: "6" }}>
        {pricingPlans.map((plan, index) => (
          <Box
            key={index}
            w={{ base: "full", md: "30%" }}
            bg={index === 1 ? "black" : "white"}
            borderRadius="2xl"
            p={8}
            boxShadow="lg"
            border="1px solid"
            borderColor="gray.700"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text
              fontSize={{ base: "3xl", md: "2xl" }}
              fontWeight="light"
              color={index === 1 ? "white" : "black"}
              textAlign="center"
            >
              {plan.price.split("/")[0]}
              <Text as="span" fontSize="2xl" color="green.500">
                /
              </Text>
              <Text as="span" fontSize="lg">
                {plan.price.split("/")[1]}
              </Text>
            </Text>
            {/* #c4fddc
        #8bfdbb */}
            <Button
              my={{ base: "4", md: "4" }}
              w={{ base: "full", md: "full" }}
              borderWidth={2}
              borderColor={index === 1 ? "white" : "black"}
              bg={index === 1 ? "#f2a412" : "#c4fddc"}
              color="black"
              borderRadius="full"
              p={{ base: 6, md: 10 }}
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

            <List.Root
              gap={4}
              mt={10}
              color={index === 1 ? "white" : "black"}
              fontSize={{ base: "sm", md: "lg" }}
            >
              {plan.features.map((feature, idx) => (
                <List.Item key={idx} display="flex" alignItems="center">
                  <Check color="green" size={20} />
                  <Text ml={5} fontSize={{ base: "base", md: "md" }}>
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
