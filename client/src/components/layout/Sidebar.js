import React from "react";
import { useState } from "react";

import { Flex, IconButton } from "@chakra-ui/react";
import { FiMenu, FiHome, FiMessageCircle } from "react-icons/fi"
import { FaInstagram, FaRegCalendar } from 'react-icons/fa'
import { MdPeople } from 'react-icons/md'
import { BiStats } from 'react-icons/bi'

import AccountInfo from "./AccountInfo";
import NavItem from "./NavItem";
import '../../css/sidebar.css'

export default function Sidebar() {
    const [navSize, setNavSize] = useState("sm")

    const width = navSize === 'sm' ? '75px' : '200px'
    const borderRadius = navSize === 'sm' ? '15px' : '30px'

    return (
        <Flex
            // className={`sidebar-${navSize}`}
            pos={"sticky"}
            h={"100vh"}
            // marginTop={"2.5vh"}
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
                <IconButton
                    background={"none"}
                    mt={5}
                    _hover={{ background: 'none'}}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize === 'sm') setNavSize('lg')
                        else setNavSize('sm')
                    }}
                />
                
                <NavItem navSize={navSize} icon={FiHome} title={"Stevens Ultimate"} href={'/'} active />
                
                <NavItem navSize={navSize} icon={FaRegCalendar} title={"Calendar"} href={'/calendar'} />
                
                <NavItem navSize={navSize} icon={MdPeople} title={"Roster"} href={'/roster'} />
                
                <NavItem navSize={navSize} icon={BiStats} title={"Stats"} href={'/stats'} />
                
                <NavItem navSize={navSize} icon={FaInstagram} title={"Instagram"} href={'https://www.instagram.com/stevens_ultimate/'} />
                
                <NavItem navSize={navSize} icon={FiMessageCircle} title={"Contact Us"} href={'/contact'} />

            </Flex>
            <AccountInfo navSize={navSize} />
        </Flex>
    )
}