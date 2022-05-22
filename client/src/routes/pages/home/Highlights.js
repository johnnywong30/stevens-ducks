import React from 'react';

import { AspectRatio, Center, Flex, Divider, Heading, Text, Stack, HStack, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Parallax } from 'react-scroll-parallax';

import '../../../css/home.css'

export default function Highlights() {
    const HIGHLIGHT_VIDEO = 'https://www.youtube.com/embed/N5xL6zTZMAU'

    const frameDim = useBreakpointValue({
        base: { w: '70%', h: '150px' },
        xs: { w: '75%', h: '175px' },
        sm: { w: '70%', h: '200px' },
        smd: { w: '75%', h: '250px' },
        // md: {w: '90%', h: '300px'},
        lg: { w: '90%', h: '300px' }
    })

    const translateX = useBreakpointValue({
        base: [10, -10],
        md: [30, 60]

    })

    return (
        // <Parallax
        //     translateX={translateX}
        //     // translateY={['50px', '-100px']}
        //     easing="easeInSine"
        // >
        <>
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
            <AspectRatio maxW={frameDim.w} className='embed-video' ratio={1}>
                <iframe
                    className='embed-video'
                    src={HIGHLIGHT_VIDEO}
                    title="Frisbee Highlights"
                    allowFullScreen
                />
            </AspectRatio>
            <VStack spacing={2}>
                <Center>
                    <Text fontSize={'sm'} color={'gray.300'} textAlign={'center'}>
                        Special Thank You to Ryan & Andrew
                    </Text>
                </Center>
            </VStack>
        </>
        // </Parallax>
    )
}

