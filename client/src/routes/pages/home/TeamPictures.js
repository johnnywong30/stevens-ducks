import React from 'react';

import { AspectRatio, Center, Flex, Divider, Heading, Text, Stack, HStack, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Parallax } from 'react-scroll-parallax';

import '../../../css/home.css'
import PracticeCarousel from './PracticeCarousel';

export default function TeamPictures() {

    const translateXStart = useBreakpointValue({
        base: 10,
        smd: 15,
        md: 20
    })

    return (
        <Parallax
            translateX={[translateXStart, 0]}
            // translateY={['50px', '-100px']}
            easing="easeInSine"
        >
            <VStack spacing={4}>
                <Divider />
                <PracticeCarousel />
                <Divider />
                <Text color={'gray.600'} fontSize={'lg'} p={3}>
                    SOME TEXT FROM SOMEONE YOUNGER ON THE TEAM ABOUT HOW FRISBEE IMPACTED THEIR TIME AT STEVENS
                </Text>
            </VStack>

        </Parallax>
    )
}

