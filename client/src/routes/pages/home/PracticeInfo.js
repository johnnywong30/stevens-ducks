import React from 'react';

import { Box, Image, Divider, Center, Flex, Heading, Text, Stack, HStack, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Parallax } from 'react-scroll-parallax';

export default function PracticeInfo() {

    const startTranslateX = useBreakpointValue({
        base: -10,
        lg: -35
    })

    return (
        <Stack
            p={10}
        >
            <VStack spacing={4}>
                <Heading fontSize={'4xl'} textAlign={'center'}>GENERAL INFO</Heading>
                <Divider />
                <Text color={'gray.700'}>
                    Our first practice on (INSERT DATE HERE) is welcome to all.
                    We HIGHLY encourage you to bring a buddy you've made to our first practice! You can even make one there!
                    The only thing you really have to bring are comfortable sneakers to run in (cleats if you have), water, and yourself!
                </Text>
                <Text color={'gray.700'}>
                    Our club is a great way to stay connected with people outside of class and to get outside playing a fun sport.
                    We aim to have a night practice at least once a week during the semester, weather permitting.
                    Outside of night practice, we aim to have at least three tournaments/semester. We travel to these tournaments together on a bus Stevens provides.
                </Text>
                <Text color={'gray.700'}>
                    Full disclosure: after our first night practice, we highly recommend you get cleats if you are interested in playing with the team.
                    If you are interested, you will have to pay dues. Please reach out to a captain or our eboard with any questions!
                </Text>
                <Divider />
            </VStack>
        </Stack>

    )
}

