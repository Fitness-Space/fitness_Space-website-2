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
        <AspectRatio
          ratio={16 / 9}
          width="100%"
          height={{ base: "400px", md: "600px" }} // Increased height
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
