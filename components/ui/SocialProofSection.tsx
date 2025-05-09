import { Box, Image, AspectRatio, Heading, Text } from "@chakra-ui/react";

const SocialProofSection: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      px={{ base: 4, md: 8 }} // Reduced padding on tablet
      py={{ base: 10, md: 20 }}
      gap={{ base: 8, md: 6 }} // Slightly tighter gap for more width
    >
      {/* Left Side - Image */}
      <Box width={{ base: "100%", md: "100%" }}>
        <Image
          src="/group-female-friends-enjoying-day-out-together (1).jpg"
          alt="Customer Testimonial"
          width="100%"
          height={{ base: "400px", md: "600px" }} // Increased height
          objectFit="cover"
          borderRadius="lg"
          boxShadow="lg"
        />
        <Heading fontSize="3xl" fontWeight="bold" mt={6} color="black">
          Community-Driven Fitness
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} mt={4} color="black">
          Join a supportive tribe, stay accountable, and crush your wellness{" "}
          <Text as="span" color="#f2a412">
            goals—together!
          </Text>
        </Text>
      </Box>

      {/* Video Section */}
      <Box width={{ base: "100%", md: "100%" }}>
        <Box position="relative" width="100%">
          <AspectRatio
            ratio={16 / 9}
            width="100%"
            height={{ base: "400px", md: "600px" }}
          >
            <video
              src="/social.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                borderRadius: "20px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </AspectRatio>

          {/* Text Overlay - Positioned at very bottom */}
          <Box
            position="absolute"
            bottom={{ base: "8px", md: "8px" }} // Moved down closer to bottom edge
            left="50%"
            transform="translateX(-50%)"
            textAlign="center"
            width="100%"
            color="white"
            zIndex={1}
            px={4}
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
              fontWeight="bold"
              fontStyle="italic"
              textShadow="0 2px 4px rgba(0,0,0,0.8)" // Darker shadow for better contrast
              lineHeight="1.2"
              mb={{ base: 2, md: 0 }} // Added margin bottom for breathing room
            >
              This mockup video will be replaced with a live video of the app
            </Heading>
          </Box>
        </Box>

        <Heading fontSize="3xl" fontWeight="bold" mt={6} color="black">
          Your All-in-One Fitness Hub
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} mt={4} color="black">
          Track progress, stay consistent, and experience optimal fitness—{" "}
          <Text as="span" color="#f2a412">
            all in one app
          </Text>
        </Text>
      </Box>
    </Box>
  );
};

export default SocialProofSection;
