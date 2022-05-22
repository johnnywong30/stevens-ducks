import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setSmall, setLarge, setActive } from "redux/actions/layout";

import { Flex, IconButton, Text } from "@chakra-ui/react";
import { FiMenu, FiHome, FiMessageCircle } from "react-icons/fi"
import { FaInstagram, FaRegCalendar } from 'react-icons/fa'
import { MdPeople } from 'react-icons/md'
import { BiStats } from 'react-icons/bi'

import AccountInfo from "./AccountInfo";
import NavItem from "./NavItem";
import '../../css/sidebar.css'

export default function Sidebar() {
    const currentRoute = window.location.pathname.split('/').filter(i => i)
    // const [activeRoute, setActiveRoute] = useState('')

    const dispatch = useDispatch()
    const { navSize, active } = useSelector(({ layout }) => layout)

    const width = navSize === 'sm' ? '75px' : '200px'
    const borderRadius = navSize === 'sm' ? '15px' : '30px'

    useEffect(() => {
        const page = currentRoute.length > 0 ? `/${currentRoute[0]}` : '/'
        dispatch(setActive(page))
    }, [])

    return (
        <Flex
            className={'sidebar'}
            pos={"sticky"}
            top={0}
            h={"100vh"}
            boxShadow={"0 4px 12px 0 rgba(0, 0, 0, 0.05)"}
            flexDir={"column"}
            justifyContent={"space-between"}
            w={width}
            borderRadius={borderRadius}
        >

            <Flex
                p={"5%"}
                flexDir={"column"}
                alignItems={navSize === 'sm' ? 'center' : 'flex-start'}
                as={"nav"}
            >
                <Flex
                    flexDir={'row'}
                    alignItems={navSize === 'sm' ? 'center' : 'flex-start'}
                    as={"nav"}
                >
                    <IconButton
                        background={"none"}
                        mt={5}
                        _hover={{ background: 'none' }}
                        icon={<FiMenu />}
                        onClick={() => {
                            if (navSize === 'sm') dispatch(setLarge())
                            else dispatch(setSmall())
                        }}
                    />
                    {navSize === 'lg' &&
                        <>
                            {/* Put logo here? */}
                            <Text mx={7} mt={3} color={'gray.500'}>Stevens Ultimate</Text>
                        </>
                    }
                </Flex>

                <NavItem navSize={navSize} icon={FiHome} title={"About Us"} href={'/'} active={active === '/'} />

                <NavItem navSize={navSize} icon={FaRegCalendar} title={"Calendar"} href={'/calendar'} active={active === '/calendar'} />

                <NavItem navSize={navSize} icon={MdPeople} title={"Roster"} href={'/roster'} active={active === '/roster'} />

                <NavItem navSize={navSize} icon={BiStats} title={"Stats"} href={'/stats'} active={active === '/stats'} />

                <NavItem navSize={navSize} icon={FaInstagram} title={"Instagram"} href={'https://www.instagram.com/stevens_ultimate/'} />

                <NavItem navSize={navSize} icon={FiMessageCircle} title={"Contact Us"} href={'/contact'} active={active === '/contact'} />

            </Flex>
            <AccountInfo navSize={navSize} />
        </Flex>
    )
}