import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import CarouselItem from './CarouselItem';
import '../../../css/home.css'
import { Flex, useBreakpointValue } from '@chakra-ui/react';

export default function TeamCarousel() {
    const view = useBreakpointValue(
        {
            base: { w: 0, h: 0 },
            xs: { w: '250px', h: '250px' },
            sm: { w: '300px', h: '300px' },
            smd: { w: '400px', h: '400px' },
            md: { w: '100%', h: '100%' },
        })

    const carouselItems = [
        { id: 'Picture 1', caption: 'High Tide 2022', src: 'https://i.imgur.com/t0gCPQf.jpg' },
        { id: 'Picture 2', caption: 'Bloomsburg 2022', src: 'https://i.imgur.com/6zDLdis.jpg' },
        { id: 'Picture 3', caption: 'Autumn Sky 2021', src: 'https://i.imgur.com/ecQb68t.jpg' },
        { id: 'Picture 4', caption: 'Garden State 2021', src: 'https://i.imgur.com/f4qOdFR.jpg' },
        { id: 'Picture 5', caption: 'Sectionals 2021', src: 'https://i.imgur.com/H03PgeX.jpg' },
    ]
    const items = carouselItems.map(({ id, caption, src }) =>
        <CarouselItem id={id} caption={caption} src={src} />
    )

    return (
        <Carousel
            width={view.w}
            height={view.h}
            emulateTouch
            showArrows
            infiniteLoop
            showIndicators={false}
            showThumbs={false}
            useKeyboardArrows
            autoPlay
            stopOnHover
            swipeable
            interval={7500}
            className='about-us-carousel'
            statusFormatter={() => ''}
        >
            {items}
        </Carousel>

    )
}