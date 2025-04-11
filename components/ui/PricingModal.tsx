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
      "Connect 80 websites",
      "Connect up to 5 bank accounts",
      "Track up to 50 credit cards",
      "Analytics support",
      "Export up to 12 months data",
      "Cloud service 24/7",
    ],
    mealPlan: "Metabolic Reset ",
  },
  {
    price: "13,500/3 months",
    features: [
      "Connect 150 websites",
      "Connect up to 10 bank accounts",
      "Track unlimited credit cards",
      "Advanced analytics",
      "Export unlimited data",
      "Premium cloud service 24/7",
    ],
    mealPlan: "Sustained Burn",
  },
  {
    price: "27,000/6 months",
    features: [
      "Enterprise-level support",
      "Unlimited bank accounts",
      "Custom analytics",
      "Personalized data exports",
      "Dedicated account manager",
      "Cloud security & backups",
    ],
    mealPlan: "Body Recomposition",
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
              my={{ base: "4", md: "10" }}
              w={{ base: "full", md: "80%" }}
              borderWidth={2}
              borderColor={index === 1 ? "white" : "black"}
              bg={index === 1 ? "#f2a412" : " #c4fddc"}
              color="black"
              borderRadius="full"
              p={{ base: 6, md: 8 }}
              fontSize={{ base: "md", md: "xl" }}
              textAlign="center"
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
              mt={12}
              color={index === 1 ? "white" : "black"}
              fontSize={{ base: "sm", md: "lg" }}
            >
              {plan.features.map((feature, idx) => (
                <List.Item key={idx} display="flex" alignItems="center">
                  <Check color="green" size={20} />
                  <Text ml={5} fontSize={{ base: "md", md: "lg" }}>
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
