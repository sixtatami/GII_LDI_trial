import React from "react";

import { Box, Flex, Text, Grid, Stack, Image } from "@chakra-ui/core";

export default function App() {
  return (
    <>
      <Box width="100%>">
        <Flex
          align={["center", "center", "center", "start"]}
          justify={["center", "center", "center", "flex-start"]}
        >
          <Box
            p={["0px", "2px", "12px", "64px"]}
            width={["100%", "90%", "70%", "60%"]}
          >
            <Box display={["block", "block", "block", "none"]}>
              <Text fontSize={["5rem"]}>NOT XL</Text>
            </Box>

            <Box display={["none", "none", "none", "block"]}>
              <Text fontSize={["5rem"]}> XL</Text>
              <Box bg={["bg1", "bg2", "bg3", "bg4"]} p={[2, 4, 6, 16]}>
                <Text fontSize={["12px", "sm", "lg", "64px"]}>
                  Here the important headline and more
                </Text>
              </Box>
            </Box>

            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(5, 1fr)"
              ]}
              gap={6}
            >
              <Box w="100%" h="100%" bg="blue.500">
                some bla blasome bla bla some bla blasome bla blasome bla bla
                some bla bla
              </Box>

              <Box w="100%" h="100%" bg="blue.500">
                <iframe
                  title="1"
                  width="400"
                  height="400"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FI5mg7ddoRbkvaC5f2dyzzi%2FLDK-Master-Thesis-Structure-and-steps%3Fnode-id%3D73%253A912%26scaling%3Dmin-zoom"
                />
              </Box>

              <Box w="100%" h="100%" bg="blue.500">
                <iframe
                  title="2"
                  width="400"
                  height="400"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FI5mg7ddoRbkvaC5f2dyzzi%2FLDK-Master-Thesis-Structure-and-steps%3Fnode-id%3D1%253A2"
                  allowfullscreen
                />
              </Box>

              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
            </Grid>

            <Box fontSize={["sm", "md", "lg", "6xl"]}>Font Size</Box>

            <Box mt={[2, 4, 6, 8]} width="full" height="24px" bg="secondary" />
            <Text fontSize={["12px", "sm", "lg", "5xl"]}>hello world</Text>

            <h1>
              Hello world <Text fontSize={["10rem"]}>new</Text>
            </h1>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
