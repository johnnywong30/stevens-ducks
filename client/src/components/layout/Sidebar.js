import React from "react";
import { useState } from "react";

import { Flex, IconButton } from "@chakra-ui/react";
import { FiMenu, FiHome } from "react-icons/fi"

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
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize === 'sm') setNavSize('lg')
                        else setNavSize('sm')
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title={"Stevens Ultimate"} active />
                <NavItem navSize={navSize} icon={FiHome} title={"Stevens Ultimate"} description={'Stevens Ultimate Frisbee Team'} />

            </Flex>
            <AccountInfo navSize={navSize} />
        </Flex>
    )
}