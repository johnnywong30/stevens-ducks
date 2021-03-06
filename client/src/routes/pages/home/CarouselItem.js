import React from 'react';
import { Box, Image, Divider, Center, Flex, Heading, Text, Stack, HStack, VStack } from '@chakra-ui/react';

export default function CarouselItem({ id, src, caption, color='gray.300', baseBoxSize='0' }) {
    return (
        <Flex id={id} flexDir={'column'}>
            <Image boxSize={{ base: baseBoxSize, xs: '100%'}}
                // py={{ base: '1rem', sm: 0, md: '1rem' }}
                py={{ base: '0.5rem'}}
                // my={{ base: '1rem', sm: 0, md: '.5rem' }}
                mt={{ base: '0.75rem'}}
                src={src}
                alt={caption}
                borderRadius={'15px'}
            />
            <Text fontSize={'sm'} color={color} pt={3}>
                {caption}
            </Text>
        </Flex>
    )
}