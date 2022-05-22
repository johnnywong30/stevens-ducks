import React from 'react';

import { Center, Flex, Divider, Heading, Text, Stack, HStack, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Parallax } from 'react-scroll-parallax';
import { FaYoutube, FaInstagram } from 'react-icons/fa'
import { GroupMeIcon } from './GroupMeIcon';
import IconLink from 'components/IconLink';


import '../../../css/home.css'

export default function Links() {

    const YOUTUBE_LINK = 'https://www.youtube.com/channel/UCS-Zp8bLykym3kksU0OMBSg/playlists'
    const INSTAGRAM_LINK = 'https://www.instagram.com/stevens_ultimate/'
    const GROUPME_LINK = 'https://groupme.com/en-US/' // TODO FILL THIS WHEN WE GET IT

    const startTranslateX = useBreakpointValue({
        base: 10,
        lg: 35
    })

    const endTranslateX = useBreakpointValue({
        base: -100,
        lg: -250
    })

    return (
        <Parallax
            translateX={[startTranslateX, endTranslateX]}
            // translateY={[90, -180]}
            // opacity={[0.8, 2]}
            // rotateZ={[0, 270]}
            easing="easeInSine"
        >
            <Center>
                <VStack spacing={4}>
                    <Heading>MORE FROM US</Heading>
                    <Divider />
                    <IconLink as={FaYoutube} boxSize={'100px'} href={YOUTUBE_LINK} color={'red.500'} />
                    <IconLink as={FaInstagram} boxSize={'100px'} href={INSTAGRAM_LINK} color={'purple.300'} />
                    <IconLink as={GroupMeIcon} boxSize={'100px'} href={GROUPME_LINK} color={'cyan.500'} />
                </VStack>
            </Center>
        </Parallax>
    )
}

