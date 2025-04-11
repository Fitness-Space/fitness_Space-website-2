import { Box, Image, AspectRatio, Heading, Text } from "@chakra-ui/react";

const SocialProofSection: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      px={{ base: 4, md: 16 }}
      py={{ base: 10, md: 20 }}
      gap={8} // Adds spacing between image and video
    >
      {/* Left Side - Image */}
      <Box width={{ base: "100%", md: "50%" }}>
        <Image
          src="/group-female-friends-enjoying-day-out-together.jpg"
          alt="Customer Testimonial"
          width="100%"
          height={{ base: "300px", md: "800px" }} // Increased height
          objectFit="cover"
          borderRadius="lg"
          boxShadow="lg"
        />
        {/* Left Side - Text Below */}
        <Heading fontSize="4xl" fontWeight="bold" mt={6} color="black">
          Community-Driven Fitness
        </Heading>
        <Text fontSize="24px" mt={4} color="black">
          Join a supportive tribe, stay accountable, and crush your wellness{" "}
          <Text as="span" color="#f2a412">
            goals—together!
          </Text>
        </Text>
      </Box>

      {/* Right Side - Video */}
      <Box width={{ base: "100%", md: "50%" }}>
        <AspectRatio
          ratio={16 / 9}
          width="100%"
          height={{ base: "300px", md: "800px" }}
        >
          <video
            src="/social.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              borderRadius: "20px", // Adds rounded corners
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", // Soft shadow effect
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures it fills the container
            }}
          />
        </AspectRatio>
        {/* Right Side - Text Below */}
        <Heading fontSize="4xl" fontWeight="bold" mt={6} color="black">
          Your All-in-One Fitness Hub
        </Heading>
        <Text fontSize="24px" mt={4} color="black">
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
