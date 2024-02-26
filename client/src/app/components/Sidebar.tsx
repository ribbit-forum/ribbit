"use client";

import { Box, Divider, IconButton, InputGroup, InputLeftElement, Text, VStack } from "@chakra-ui/react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Spacer
} from "@chakra-ui/react";
import {
  WilliamWen,
} from "../Icons/Icons";
import { FiAward, FiBell, FiChevronLeft, FiChevronRight, FiCompass, FiHome, FiSettings } from "react-icons/fi";
import React, { useState } from "react";

import { Input } from 'antd';
import { SearchIcon } from "@chakra-ui/icons";

const { Search } = Input;

type SidebarProps = {
  setCurrentTopic: (arg0: never) => void;
};

const Sidebar = ({ setCurrentTopic }: SidebarProps) => {
  const [topics, setTopics] = useState([]); // ["topic1", "topic2"
  const [searchFilter, setSearchFilter] = useState(""); // ["topic1", "topic2"
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const onSearch = (value: React.SetStateAction<string>) => {
    console.log("Search: ", value);
    setSearchFilter(value);
  };
  const onAddTopic = (value: string) => {
    if (value != "") {
    setTopics([...topics, value]);
    console.log("On Add Topic: ", value);
  }
};
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <IconButton
        icon={isSidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
        onClick={handleSidebarToggle}
        position="fixed"
        bottom="5%"
        left={isSidebarOpen ? "48" : "48px"}
        transform="translateY(-50%)"
        zIndex="999" aria-label={""}/>

      {isSidebarOpen && (
        <Box
          bg="white"
          w={"194px"}
          p={5}
          shadow="md"
          borderRadius="md"
          h={"calc(100vh)"}
          textColor={"black"}
          padding={35}
          //   paddingRight={65}
        >
          <Flex direction={"row"} gap={"10px"}>
            <WilliamWen/>
            <Text
              fontSize={36}
              fontWeight="bold"
              mb={4}
              textAlign="left"
              textColor={"#205B45"}
            >
              RIBBIT
            </Text>
          </Flex>
          <Flex direction={"column"} justifyContent={"space-around"}>
            <Flex direction={"column"} gap={"30px"} mt={"40px"} fontSize={"18px"}>
              <Flex direction={"row"}>
                <Button
                  gap={"20px"}
                  justifyContent={"left"}
                  marginLeft={15}
                  _hover={{ background: "#D9D9D9" }}
                  className="rounded-xl"
                  pr={2}
                >
                  <Text>Home </Text>
                </Button>
              </Flex>
              <Flex direction={"row"}>
                <Button
                  gap={"20px"}
                  justifyContent={"left"}
                  marginLeft={15}
                  _hover={{ background: "#D9D9D9" }}
                  className="rounded-xl"
                >
                  <Text>Explore </Text>
                </Button>
              </Flex>
              <Flex direction={"row"}>
                <Button
                  gap={"20px"}
                  justifyContent={"left"}
                  marginLeft={15}
                  _hover={{ background: "#D9D9D9" }}
                  className="rounded-xl"
                >
                  <Text>Discover</Text>
                </Button>
              </Flex>
              <Flex direction={"row"}>
              <Search
                placeholder="Input topic"
                allowClear
                enterButton="Add Topic"
                size="large"
                onSearch={onAddTopic}
              />
              </Flex>
              <Flex direction={"row"}>
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
              </Flex>
              {topics
                .filter(topic => searchFilter === "" || topic.includes(searchFilter))
                .map((topic, index) => (
                  <Flex key={index} direction="row" onClick={() => setCurrentTopic(topic)}>
                    <Icon as={FiAward} />
                    <Text>{topic}</Text>
                  </Flex>
                ))}
              
            </Flex>
            <Spacer />
            
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Sidebar;