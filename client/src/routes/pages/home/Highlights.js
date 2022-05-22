import React from 'react';

import { AspectRatio, Center, Flex, Divider, Heading, Text, Stack, HStack, VStack } from '@chakra-ui/react';
import { Parallax } from 'react-scroll-parallax';

import '../../../css/home.css'

export default function Highlights() {
    const HIGHLIGHT_VIDEO = 'https://www.youtube.com/embed/N5xL6zTZMAU'

    return (
        <Parallax
            translateX={[-15, 0]}
            // translateY={['50px', '-100px']}
            easing="easeInSine"
        >
            <Stack
                p={10}
            >
                <VStack spacing={4}>
                    <Heading>WHAT WE DO</Heading>
                    <Divider />
                    <Text color={'gray.600'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    </Text>
                </VStack>
            </Stack>
            <AspectRatio maxW='100%' className='embed-video' ratio={1}>
                <iframe
                    className='embed-video'
                    src={HIGHLIGHT_VIDEO}
                    title="Frisbee Highlights"
                    allowFullScreen
                />
            </AspectRatio>
            <VStack spacing={2}>
                <Text fontSize={'sm'} color={'gray.300'}>
                    Special Thank you to PEOPLE THAT HELPED WITH VIDEO
                </Text>
            </VStack>
        </Parallax>
    )
}

