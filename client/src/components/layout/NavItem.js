import React from "react";
import { useDispatch } from "react-redux";
import { setActive } from "redux/actions/layout";


import { Flex, Menu, MenuButton, MenuList, Icon, Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import NavHoverBox from "./NavHoverBox";

import '../../css/sidebar.css'


export default function NavItem({ href, navSize, title, icon, active, description, ...rest }) {
    
    const dispatch = useDispatch()
    const isInstagram = href === 'https://www.instagram.com/stevens_ultimate/'
    const Link = isInstagram ? ChakraLink : RouterLink

    return (
        <Flex
            mt={30}
            flexDir={'column'}
            w={'100%'}
            alignItems={navSize === 'sm' ? 'center' : 'flex-start'}
            onClick={() => dispatch(setActive(href))}
        >
            <Menu
                placement={'right'}
            >
                <Link
                    className={`navlink ${navSize === 'lg' ? 'navlink-lg' : ''} ${active ? 'navlink-active' : ''}`}
                    to={{
                        pathname: href,
                    }}
                    href={href}
                    
                >
                    <MenuButton w={'100%'}>
                        <Flex>
                            <Icon as={icon} fontSize={'xl'} color={active ? 'gray.900' : 'gray.500'} />
                            <Text display={navSize === 'sm' ? 'none' : 'flex'} ml={3} color={active ? 'gray.900' : 'gray.500'} >
                                { title }
                            </Text>
                        </Flex>
                    </MenuButton>
                    {/* HoverBox probably not necessary */}
                    {/* <MenuList
                        py={0}
                        border={'none'}
                        w={100}
                        h={100}
                        ml={5}
                    >
                        <NavHoverBox title={title} icon={icon} navSize={navSize} description={description} />
                    </MenuList> */}
                </Link>

            </Menu>

        </Flex>
    )
}