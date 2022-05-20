import React from "react";
import { Flex, Heading, Icon, Text } from "@chakra-ui/react";

export default function NavHoverBox({ navSize, title, icon, description }) {
    return (
        <>
            <Flex
                pos="absolute"
                mt="calc(50px - 7.5px)"
                ml="-10px"
                width={0}
                height={0}
                borderTop="10px solid transparent"
                borderBottom="10px solid transparent"
                borderRight="10px solid #EC1313"
            />
            <Flex
                h={100}
                w="100%"
                flexDir="column"
                alignItems="center"
                justify="center"
                backgroundColor="#EC1313"
                borderRadius="10px"
                color="#fff"
                textAlign="center"
            >
                <Icon as={icon} fontSize="3xl" mb={4} />
                <Heading size="md" fontWeight="normal">{title}</Heading>
                <Text fontSize="sm">{description}</Text>
            </Flex>
        </>
    )
}