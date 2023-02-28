import React, { useEffect, useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [change, setChange] = useState("translateY(0px)");
  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  let currentScroll = 0;
  let lastScroll = 0;


  useEffect(() => {
  const handleScroll = (e) => {
    lastScroll = currentScroll;
    currentScroll = window.scrollY;
    if (currentScroll > lastScroll) {
      setChange("translateY(-200px)");
    } else {
      setChange("translateY(0px)");
    }
  }
    window.addEventListener('scroll', handleScroll);
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
},[])

  return (
    <Box
      position="sticky"
      top={0}
      left={0}
      right={0}
      transitionProperty= "transform"
      transform = {change}
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
            {socials.map(social => {
              return <a href={social.url} key={social.url} margin="10px"><FontAwesomeIcon icon={social.icon} size="2x"/></a>
            })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" key={'projects'} role="link" onClick={() => {handleClick("projects")}}>Projects</a>
              <a href="/#contact-me" key={'contact'} onClick={() => {
                return handleClick("contactme");
              }}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
