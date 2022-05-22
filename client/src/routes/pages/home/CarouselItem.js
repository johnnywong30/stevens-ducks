import React from 'react';
import { Box, Image, Divider, Center, Flex, Heading, Text, Stack, HStack, VStack } from '@chakra-ui/react';

export default function CarouselItem({ id, src, caption }) {
    return (
        <Flex id={id} flexDir={'column'}>
            <Image boxSize={{ base: '0', xs: '100%'}}
                // py={{ base: '1rem', sm: 0, md: '1rem' }}
                py={{ base: '0.5rem'}}
                // my={{ base: '1rem', sm: 0, md: '.5rem' }}
                mt={{ base: '0.75rem'}}
                src={src}
                alt={caption}
                borderRadius={'15px'}
            />
            <Text fontSize={'sm'} color={'gray.300'} pt={3}>
                {caption}
            </Text>
        </Flex>
    )
}