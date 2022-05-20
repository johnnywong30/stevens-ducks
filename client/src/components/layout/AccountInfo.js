import React from "react";
import { Avatar, Divider, Flex, Heading, Text } from "@chakra-ui/react";

export default function AccountInfo({ navSize, ...rest}) {
    // Refactor when we have account login setup
    // To use account info in Redux store

    return (
        <Flex
            p={"5%"}
            flexDir={"column"}
            w={"100%"}
            alignItems={navSize === 'sm' ? 'center' : 'flex-start'}
            mb={4}
        >
            <Divider display={navSize === 'sm' ? 'none' : 'flex'} />
            <Flex mt={4} align={"center"}>
                <Avatar size={"sm"} src={""} />
                <Flex flexDir={"column"} ml={4} display={navSize === 'sm' ? 'none' : 'flex'} >
                    <Heading as={"h3"} size={"sm"}>Johnny Wong</Heading>
                    <Text color={"gray"} >Admin</Text>
                </Flex>
            </Flex>

        </Flex>
    )
}