import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

interface ImageCardProps {
  imageBeforeSrc: string;
  imageAfterSrc: string;
}

/**
 * Renders a side-by-side before and after image layout.
 */
const ImageCard: React.FC<ImageCardProps> = ({
  imageBeforeSrc,
  imageAfterSrc,
}) => {
  return (
    <Box className="flex space-x-0.5 rounded-lg overflow-hidden">
      {/* Before Image */}
      <Box className="w-1/2">
        <Image
          src={imageBeforeSrc}
          alt="Before fitness journey"
          objectFit="cover"
          className="aspect-[4/5] min-h-full"
        />
      </Box>

      {/* After Image */}
      <Box className="w-1/2 relative">
        <Image
          src={imageAfterSrc}
          alt="After fitness journey"
          objectFit="cover"
          className="aspect-[4/5] min-h-full"
        />
        {/* Mock watermark from the image */}
        <Text
          fontSize="8px"
          className="absolute bottom-1 right-2 text-white opacity-70"
        >
          © Image AI
        </Text>
      </Box>
    </Box>
  );
};

export default ImageCard;
