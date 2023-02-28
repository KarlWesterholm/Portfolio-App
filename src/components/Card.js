import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box borderRadius="2%" bg="white" color = "black">
      <VStack spacing={4} alignItems={'flex-start'}>
        <Image src={imageSrc} objectFit='cover' borderRadius={"2%"}/>
        <Heading as='h6' size={"md"} paddingLeft="15px">{title}</Heading>
        <Text color="grey" paddingLeft={"15px"} paddingRight={"15px"}>{description}</Text>
        <HStack padding={"15px"} paddingTop={"0px"} spacing={2}>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size='1x'/>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
