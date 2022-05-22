import React from 'react';

import { AspectRatio, Center, Flex, Divider, Heading, Text, Stack, HStack, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Parallax } from 'react-scroll-parallax';

import '../../../css/home.css'
import PracticeCarousel from './PracticeCarousel';

export default function TeamPictures() {

    const bp = useBreakpointValue({
        base: 'base',
        xs: 'xs',
        sm: 'sm',
        smd: 'smd',
        md: 'md',
        lg: 'lg'
    })

    const translateX = useBreakpointValue({
        base: [20, -30],
        smd: [20, -20],
    })
    const padTop = useBreakpointValue({
        base: '0px',
        smd: '0px',
        md: '0',
        lg: '100px'
    })

    const pos = useBreakpointValue({
        base: 'relative',
        lg: 'static'
    })

    const top = useBreakpointValue({
        base: '250px',
        xs: '-30px',
        sm: '-50px',
        smd: '-130px',
        md: '-125px'

    })

    console.log(bp)

    return (
        <Parallax
            translateX={translateX}
            // translateY={['50px', '-100px']}
            easing="easeInSine"
        >
            <VStack spacing={4} pt={padTop} pos={pos}>
                <PracticeCarousel />
                
                {/* <Text color={'gray.600'} fontSize={'lg'} p={3}>
                    SOME TEXT FROM SOMEONE YOUNGER ON THE TEAM ABOUT HOW FRISBEE IMPACTED THEIR TIME AT STEVENS
                </Text>
                <Divider /> */}
            </VStack>

        </Parallax>
    )
}

