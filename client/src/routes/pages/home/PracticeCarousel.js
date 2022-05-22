import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import CarouselItem from './CarouselItem';
import '../../../css/home.css'
import { Flex, useBreakpointValue } from '@chakra-ui/react';

export default function PracticeCarousel() {
    const view = useBreakpointValue(
        {
            // base: { w: , h: 0 },
            base: { w: '200px', h: '200px' },
            sm: { w: '300px', h: '300px' },
            smd: { w: '400px', h: '400px' },
            md: { w: '75%', h: '100%' },
        })

    const carouselItems = [
        { id: 'Pic 1', caption: 'WE THROW EVERYTHING', src: 'https://i.imgur.com/fBHlYDJ.jpg' },
        { id: 'Pic 2', caption: 'WE CATCH EVERYTHING', src: 'https://i.imgur.com/mvDAfmI.jpg' },
        { id: 'Pic 3', caption: 'WE MEAN EVERYTHING', src: 'https://i.imgur.com/HscILC5.jpg' },
        { id: 'Pic 4', caption: 'LIKE PIZZA', src: 'https://i.imgur.com/12wSyFV.jpg' },
        { id: 'Pic 5', caption: 'AFTER PRACTICE', src: 'https://i.imgur.com/7CcuZkW.jpg' },
        { id: 'Pic 6', caption: 'GRAB A DISC', src: 'https://i.imgur.com/RIEAJnw.jpg' },
        { id: 'Pic 7', caption: 'AND JOIN STEVENS ULTIMATE', src: 'https://i.imgur.com/LIZtvoP.jpg' },
    ]
    const items = carouselItems.map(({ id, caption, src, color}) =>
        <CarouselItem id={id} caption={caption} src={src} color={'gray.900'} baseBoxSize={'100%'}/>
    )

    return (
        <Carousel
            width={view.w}
            height={view.h}
            showArrows
            infiniteLoop
            showIndicators={false}
            showThumbs={false}
            useKeyboardArrows
            autoPlay
            stopOnHover
            swipeable
            className='about-us-carousel'
        >
            {items}
        </Carousel>

    )
}