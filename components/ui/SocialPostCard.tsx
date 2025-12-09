import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {
  IoCheckmarkCircle,
  IoHeartOutline,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
} from "react-icons/io5";
import Link from "next/link";

// Platform logos
import InstagramIcon from "@/public/instagramLogo.png";
import XLogo from "@/public/Xlogo.png";
import TiktokLogo from "@/public/TiktoklLogo.png";

export type SocialPostCardProps = {
  platform: "instagram" | "x" | "tiktok";
  profileName: string;
  username: string;
  avatar: StaticImageData;
  postImage: StaticImageData;
  likes: number;
  caption: string;
  verified?: boolean;
  linkUrl?: string;
};

export default function SocialPostCard({
  platform,
  profileName,
  username,
  avatar,
  postImage,
  likes,
  caption,
  verified = true,
  linkUrl,
}: SocialPostCardProps) {
  const isInstagram = platform === "instagram";
  const isX = platform === "x";
  const isTiktok = platform === "tiktok";

  return (
    <Box
      bg="white"
      rounded="xl"
      p={4}
      mb={6}
      border="1px solid"
      borderColor="gray.300"
      boxShadow="0 2px 4px rgba(0,0,0,0.1)"
      minH="550px"
      display="flex"
      flexDirection="column"
    >
      {/* Header */}
      <Flex align="center" mb={3}>
        <Image
          src={isInstagram ? InstagramIcon : isTiktok ? TiktokLogo : XLogo}
          alt={
            isInstagram ? "Instagram logo" : isTiktok ? "TikTok logo" : "X logo"
          }
          width={isTiktok || isX ? 50 : 30}
          height={isTiktok || isX ? 50 : 30}
          style={{
            borderRadius: isInstagram ? "0" : "9999px",
          }}
        />

        <Box ml={3}>
          <Flex align="center" gap={1}>
            <Text color="black" fontWeight="semibold">
              {profileName}
            </Text>
            {verified && (
              <IoCheckmarkCircle
                size={16}
                color={
                  isInstagram ? "#1DA1F2" : isTiktok ? "#000000" : "#1DA1F2"
                }
              />
            )}
          </Flex>

          <Text color="gray.600" fontSize="10px">
            {isInstagram ? username : `${username}`}
          </Text>
        </Box>
      </Flex>

      {/* Image */}
      <Link
        href={
          linkUrl ||
          "https://www.instagram.com/p/DEU2Xqpos9O/?igsh=MWl6dXB6YWVicWVtdw=="
        }
        target="_blank"
      >
        <Image
          src={postImage}
          alt="post"
          width={400}
          height={288}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "0.5rem",
            cursor: linkUrl ? "pointer" : "default",
          }}
        />
      </Link>

      {/* Action buttons */}
      <Flex align="center" justify="space-between" mt={3}>
        <Flex align="center" gap={4}>
          <IoHeartOutline color="black" size={17} />
          <IoChatbubbleOutline color="black" size={17} />
          <IoPaperPlaneOutline color="black" size={17} />
        </Flex>
        <IoBookmarkOutline color="black" size={17} />
      </Flex>

      {/* Likes */}
      <Text color="black" fontSize="10px" fontWeight="semibold" mt={2}>
        {likes.toLocaleString()} likes
      </Text>

      {/* Caption */}
      <Text fontSize="12px" color="black" mt={1}>
        {caption}
      </Text>

      {/* More link */}
      {linkUrl && (
        <Link href={linkUrl} target="_blank">
          <Box
            border="1px solid"
            borderColor="gray.300"
            p={1}
            mt="20px"
            rounded="md"
            _hover={{ bg: "gray.50" }}
            textAlign="center"
          >
            <Text fontSize="9px" color="#0196F6">
              {isInstagram
                ? "View more on Instagram"
                : isTiktok
                ? "View on TikTok"
                : "View on X"}
            </Text>
          </Box>
        </Link>
      )}
    </Box>
  );
}
