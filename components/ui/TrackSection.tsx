"use client";

import { useState } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import WeightScaleIcon, {
  CalendarIcon,
  CheckCircleIcon,
  TargetIcon,
} from "./icon";

const MotionBox = motion(Box);

const features = [
  {
    title: "Track your progress. Earn points. Stay motivated.",
    description:
      "Accumulate Health Score Points for workouts, nutrient-dense meals, and daily healthy habits. Convert your points into exclusive benefits and discounts. Reach your goals while earning rewards along the way.",
    icon: <TargetIcon />,
  },
  {
    title: "AI-powered Meal Plan",
    description:
      "Generate daily meal suggestions tailored to your goals, ingredients, and health needs. Eat nutrient-dense meals that boost fat-burning, support portion control, and keep you full and energized.",
    icon: <CalendarIcon />,
  },
  {
    title: "Community Drive Fitness",
    description:
      "Stay accountable with a supportive fitness community that motivates you to show up daily. Celebrate wins, share progress, and push each other toward healthier, sustainable weight loss.",
    icon: <WeightScaleIcon />,
  },
  {
    title: "Certified Fitness Coaches",
    description:
      "Access expert coaches who guide your workouts, correct your form, and help you stay consistent. Get professional support designed to help you burn fat safely and reach your goals faster.",
    icon: <CheckCircleIcon />,
  },
];

const TrackSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect if screen is mobile
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <VStack align="stretch" gap={4}>
      {features.map((feature, index) => (
        <MotionBox
          key={index}
          layout
          onClick={() => setActiveIndex(index)}
          p={activeIndex === index ? 5 : 2}
          bg="white"
          cursor="pointer"
          boxShadow={
            activeIndex === index ? "0 4px 12px rgba(0,0,0,0.04)" : "none"
          }
          borderRadius={isMobile && activeIndex === index ? "10px" : "lg"} // mobile rounded
          border={
            isMobile && activeIndex === index ? "1px solid #F2A412" : undefined
          }
          borderLeft={
            !isMobile && activeIndex === index ? "2px solid #F2A412" : undefined
          }
        >
          {/* TOP ROW WITH ICON + TITLE */}
          <HStack gap={3}>
            <Box w="22px">{feature.icon}</Box>
            <Text
              fontWeight={activeIndex === index ? "bold" : "medium"}
              fontSize="15px"
              color="#141414"
            >
              {feature.title}
            </Text>
          </HStack>

          {/* DESCRIPTION ONLY FOR ACTIVE */}
          <AnimatePresence>
            {activeIndex === index && (
              <MotionBox
                key="desc"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                overflow="hidden"
              >
                <Text
                  fontSize="13px"
                  color="#141414"
                  marginLeft={isMobile ? 0 : 8} // no indent on mobile
                  marginTop={6}
                >
                  {feature.description}
                </Text>
              </MotionBox>
            )}
          </AnimatePresence>
        </MotionBox>
      ))}
    </VStack>
  );
};

export default TrackSection;
