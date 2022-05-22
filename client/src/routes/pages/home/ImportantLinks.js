import React from 'react';

import { Center, Flex, Divider, Heading, Text, Stack, HStack, VStack, useBreakpointValue, Button } from '@chakra-ui/react';
import { Parallax } from 'react-scroll-parallax';


import '../../../css/home.css'
import ButtonLink from 'components/ButtonLink';

export default function ImportantLinks() {

    const SIGNUP_LINK = 'https://www.youtube.com/channel/UCS-Zp8bLykym3kksU0OMBSg/playlists'
    const DUES_LINK = 'https://www.instagram.com/stevens_ultimate/'
    const CONTACT_LINK = 'https://groupme.com/en-US/' // TODO FILL THIS WHEN WE GET IT


    const translateX = useBreakpointValue({
        base: [-10, 10],
        lg: [-50, 125]
    })

    return (
        // <Parallax
        //     translateX={translateX}
        //     // translateY={[90, -180]}
        //     // opacity={[0.8, 2]}
        //     // rotateZ={[0, 270]}
        //     easing="easeInSine"
        // >
            <Center>
                <VStack spacing={4}>
                    <Heading>LOGISTICS</Heading>
                    <Divider />
                    <VStack spacing={12}>

                    <ButtonLink colorScheme={'gray'} name={'SIGN UP NOW'} variant={'link'} href={SIGNUP_LINK} />
                    <ButtonLink colorScheme={'gray'} name={'PAY YOUR DUES'} variant={'link'} href={DUES_LINK}/>
                    <ButtonLink colorScheme={'gray'} name={'CONTACT US'} variant={'link'} href={CONTACT_LINK} />
                    </VStack>
                    {/* <Button colorScheme={'red'} variant={'link'}>Sign Up</Button> */}
                    {/* <Button colorScheme={'red'} variant={'link'}>Sign Up</Button> */}
                    {/* <Button colorScheme={'red'} variant={'link'}>Sign Up</Button> */}
                    
                </VStack>
            </Center>
        // </Parallax>
    )
}

