"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Flex, Text, Image, Stack, IconButton } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight, LuArrowRight } from "react-icons/lu";
import Axios from "axios";

interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
}

interface PostItem {
  item: {
    title: string;
    pubDate: string;
    "content:encoded": string;
    link: string;
  };
}

const ArticlesSection: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Auto-play state
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const mediumUrl = "https://api-fitnessspace-zn09.onrender.com/";

  const extractImage = (content: string) => {
    const regex = /\bhttps?:\/\/\S+?\.(?:png|jpe?g|gif|bmp|webp)\b/i;
    const match = content.match(regex);
    return match ? match[0] : "";
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get<PostItem[]>(mediumUrl);
        const posts = response.data;
        const formattedArticles: Article[] = posts.map((post, index) => {
          const item = post.item;
          return {
            id: index,
            title: item.title,
            date: new Date(item.pubDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
            image: extractImage(item["content:encoded"]),
            link: item.link,
          };
        });

        setArticles(formattedArticles);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setErrorMessage(true);
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (articles.length > 1 && isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setMobileIndex((prevIndex) =>
          prevIndex === articles.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
  }, [articles.length, isAutoPlaying]);

  // Pause auto-play when user interacts
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Mobile navigation handlers with auto-play pause
  const handleMobilePrev = () => {
    pauseAutoPlay();
    setMobileIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  const handleMobileNext = () => {
    pauseAutoPlay();
    setMobileIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    pauseAutoPlay();
    setMobileIndex(index);
  };

  if (isLoading) return <Text textAlign="center">Loading articles...</Text>;
  if (errorMessage)
    return <Text textAlign="center">Failed to load articles.</Text>;
  if (!articles.length)
    return <Text textAlign="center">No articles available.</Text>;

  return (
    <Box
      bg="white"
      py={{ base: 12, md: 20 }}
      px={{ base: 2, md: "" }}
      width={{ base: "100%", md: "1110px" }}
      mx="auto"
    >
      {/* Header */}
      <Flex
        justify="space-between"
        align="center"
        mb={8}
        direction={{ base: "column", md: "row" }}
        gap={4}
        px={{ base: 0, md: 12 }}
      >
        <Box>
          <Text
            fontSize={{ base: "32px", md: "36px" }}
            fontWeight="extrabold"
            color="#141414"
          >
            Articles
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }} color="#141414">
            Check out this quick read that will help you build healthy habits.
          </Text>
        </Box>
        <Text
          as="a"
          fontSize="14px"
          color="gray.600"
          whiteSpace="nowrap"
          display="flex"
          alignItems="center"
          gap={2}
          _hover={{ textDecoration: "underline" }}
          mt={{ base: 4, md: 0 }}
        >
          See more articles <LuArrowRight size={16} />
        </Text>
      </Flex>

      {/* Mobile carousel - Show only ONE card with auto-slide */}
      <Box display={{ base: "block", md: "none" }} position="relative">
        <Box
          position="relative"
          borderRadius="20px"
          overflow="hidden"
          width="100%"
          maxW="328px"
          mx="auto"
          height="200px"
          mb={6}
          onClick={() => {
            pauseAutoPlay();
            window.open(articles[mobileIndex]?.link, "_blank");
          }}
          cursor="pointer"
        >
          {articles[mobileIndex] && (
            <>
              <Image
                src={articles[mobileIndex].image}
                alt={articles[mobileIndex].title}
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="13px"
              />
              <Box
                position="absolute"
                bottom="0"
                left="0"
                width="100%"
                height="65%"
                background="linear-gradient(to bottom, 
                  rgba(255,255,255,0.1) 0%,
                  rgba(255,255,255,0) 30%,
                  rgba(0,0,0,0) 50%,
                  rgba(0,0,0,0.6) 70%,
                  rgba(0,0,0,0.9) 100%
                )"
                zIndex={1}
              />
              <Flex
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                direction="column"
                justify="flex-end"
                height="100%"
                px={5}
                py={2}
                color="white"
                zIndex={2}
              >
                <Text fontSize="14px" fontWeight="semibold" mb={3}>
                  {articles[mobileIndex].title}
                </Text>
                <Flex justify="space-between" align="center">
                  <Text fontSize="12px">{articles[mobileIndex].date}</Text>
                  <LuArrowRight size={18} />
                </Flex>
              </Flex>
            </>
          )}
        </Box>

        {/* Mobile Navigation Buttons */}
        {articles.length > 1 && (
          <Flex
            justify="space-between"
            position="absolute"
            top="50%"
            left="0"
            right="0"
            transform="translateY(-50%)"
            px={4}
            zIndex={10}
            maxW="328px"
            mx="auto"
          >
            {/* Left Button */}
            <IconButton
              aria-label="Previous article"
              bg="#f2a412"
              color="white"
              borderRadius="full"
              w="40px"
              h="40px"
              shadow="lg"
              onClick={(e) => {
                e.stopPropagation();
                handleMobilePrev();
              }}
              _hover={{ bg: "#e69500" }}
              _active={{ bg: "#d08500" }}
            >
              <LuChevronLeft size={20} />
            </IconButton>

            {/* Right Button */}
            <IconButton
              aria-label="Next article"
              bg="#f2a412"
              color="white"
              borderRadius="full"
              w="40px"
              h="40px"
              shadow="lg"
              onClick={(e) => {
                e.stopPropagation();
                handleMobileNext();
              }}
              _hover={{ bg: "#e69500" }}
              _active={{ bg: "#d08500" }}
            >
              <LuChevronRight size={20} />
            </IconButton>
          </Flex>
        )}

        {/* Mobile Dots Indicator */}
        {articles.length > 1 && (
          <Flex justify="center" mt={4} gap={2}>
            {articles.map((_, index) => (
              <Box
                key={index}
                w="8px"
                h="8px"
                borderRadius="full"
                bg={mobileIndex === index ? "#f2a412" : "gray.300"}
                transition="background-color 0.3s"
                cursor="pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDotClick(index);
                }}
                position="relative"
              >
                {/* Progress bar for auto-slide */}
                {mobileIndex === index && isAutoPlaying && (
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    height="100%"
                    width="0%"
                    bg="#f2a412"
                    borderRadius="full"
                    animation="progress 5s linear forwards"
                    style={{
                      animation: "progress 5s linear forwards",
                    }}
                  />
                )}
              </Box>
            ))}
          </Flex>
        )}
      </Box>

      {/* Desktop carousel */}
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        justify="center"
        gap={2}
        position="relative"
      >
        <Box
          position="relative"
          w="100%"
          h="320px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {articles.map((article, index) => {
            const isCenter = index === currentIndex % articles.length;
            const isLeft =
              index === (currentIndex - 1 + articles.length) % articles.length;
            const isRight = index === (currentIndex + 1) % articles.length;

            let positionStyle = {};
            let cardWidth = "380px";
            let cardHeight = "220px";
            let zIndex = 1;

            if (isCenter) {
              positionStyle = {
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              };
              cardWidth = "460px";
              cardHeight = "266px";
              zIndex = 20;
            } else if (isLeft) {
              positionStyle = {
                left: "5%",
                top: "54%",
                transform: "translateY(-50%)",
              };
              zIndex = 5;
            } else if (isRight) {
              positionStyle = {
                right: "5%",
                top: "54%",
                transform: "translateY(-50%)",
              };
              zIndex = 5;
            }

            return (
              <Box
                key={article.id}
                position="absolute"
                borderRadius="13px"
                overflow="visible"
                w={cardWidth}
                h={cardHeight}
                zIndex={zIndex}
                cursor="pointer"
                transition="all 0.4s ease-in-out"
                display={isCenter || isLeft || isRight ? "block" : "none"}
                {...positionStyle}
                onClick={() => window.open(article.link, "_blank")}
              >
                {/* Image Container */}
                <Box position="relative" width="100%" height="100%">
                  {/* Image */}
                  <Image
                    src={article.image}
                    alt={article.title}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    borderRadius="13px"
                    objectPosition="center"
                  />

                  {/* Gradient Overlay - White at top to Black at bottom */}
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    borderRadius="13px"
                    background="linear-gradient(to bottom, 
        rgba(255,255,255,0.1) 0%,
        rgba(255,255,255,0) 30%,
        rgba(0,0,0,0) 50%,
        rgba(0,0,0,0.6) 70%,
        rgba(0,0,0,0.9) 100%
      )"
                    zIndex={1}
                    pointerEvents="none"
                  />
                </Box>

                {/* Content */}
                <Flex
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  direction="column"
                  justify="flex-end"
                  height="100%"
                  px={5}
                  py={2}
                  color="white"
                  zIndex={2}
                  pointerEvents="none"
                >
                  <Text fontSize="14px" fontWeight="semibold" mb={3}>
                    {article.title}
                  </Text>
                  <Flex justify="space-between" align="center">
                    <Text fontSize="12px">{article.date}</Text>
                    <LuArrowRight size={18} />
                  </Flex>
                </Flex>

                {/* Navigation buttons */}
                {isLeft && (
                  <IconButton
                    aria-label="Previous articles"
                    bg="#f2a412"
                    color="white"
                    borderRadius="full"
                    w="40px"
                    h="40px"
                    position="absolute"
                    top="50%"
                    left="-28px"
                    transform="translateY(-50%)"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    zIndex={50}
                  >
                    <LuChevronLeft size={24} />
                  </IconButton>
                )}
                {isRight && (
                  <IconButton
                    aria-label="Next articles"
                    bg="#f2a412"
                    color="white"
                    borderRadius="full"
                    w="40px"
                    h="40px"
                    position="absolute"
                    top="50%"
                    right="-28px"
                    transform="translateY(-50%)"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    zIndex={50}
                  >
                    <LuChevronRight size={24} />
                  </IconButton>
                )}
              </Box>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );
};

export default ArticlesSection;
