"use client";

import { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

type ToastProps = {
  message: string;
  visible: boolean;
  onClose: () => void;
  duration?: number;
};

const Toast = ({ message, visible, onClose, duration = 4000 }: ToastProps) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration, onClose]);

  if (!visible) return null;

  return (
    <Box
      position="fixed"
      top="20px"
      left="50%"
      transform="translateX(-50%)"
      bg="#F2A412"
      color="white"
      px={5}
      py={3}
      borderRadius="12px"
      boxShadow="lg"
      zIndex={9999}
      animation="fadeIn 0.2s ease-in-out"
    >
      <Text fontSize="14px">{message}</Text>
    </Box>
  );
};

export default Toast;
