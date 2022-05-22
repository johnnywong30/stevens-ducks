import React from 'react';

import { AspectRatio, Center, Flex, Divider, Heading, Text, Stack, HStack, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Parallax } from 'react-scroll-parallax';

import '../../../css/home.css'
import PracticeCarousel from './PracticeCarousel';

export default function TeamPictures() {

    return (
        <Parallax
            translateX={[20, 0]}
            // translateY={['50px', '-100px']}
            easing="easeInSine"
        >
            <Stack
                p={10}
            >
                <VStack spacing={4}>
                    <PracticeCarousel />
                    <Divider />
                </VStack>
            </Stack>
        </Parallax>
    )
}

