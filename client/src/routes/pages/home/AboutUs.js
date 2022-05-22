import React from 'react';

import { Box, Image, Divider, Center, Flex, Heading, Text, Stack, HStack, VStack } from '@chakra-ui/react';
import { Parallax } from 'react-scroll-parallax';
import TeamCarousel from './TeamCarousel';

export default function AboutUs() {

    const ABOUT_US_IMG = 'https://i.imgur.com/t0gCPQf.jpg'

    return (
        <Parallax
            translateX={[0, -20]}
            // translateY={['75px', '-75px']}
            easing="easeInSine"
        >
            <Stack
                p={10}
            >
                <VStack spacing={4}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>STEVENS ULTIMATE</Heading>
                    <Divider />
                    <Text fontSize={'2xl'}>About Us</Text>
                    <Text color={'gray.600'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <Divider />
                    <TeamCarousel />
                </VStack>
            </Stack>
        </Parallax>
    )
}

