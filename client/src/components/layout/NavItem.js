import React from "react";

import { Flex, Menu, MenuButton, MenuList, Link, Icon, Text } from "@chakra-ui/react";
import NavHoverBox from "./NavHoverBox";

export default function NavItem({ navSize, title, icon, active, description }) {
    return (
        <Flex
            mt={30}
            flexDir={'column'}
            w={'100%'}
            alignItems={navSize === 'sm' ? 'center' : 'flex-start'}
            
        >
            <Menu
                placement={'right'}
                
            >
                <Link
                    backgroundColor={active && 'red.200'}
                    p={3}
                    borderRadius={8}
                    _hover={{textDecor: 'none', backgroundColor: 'red.200'}}
                    w={navSize === 'lg' && '100%'}
                >
                    <MenuButton w={'100%'}>
                        <Flex>
                            <Icon as={icon} fontSize={'xl'} color={active ? 'gray.900' : 'gray.500'} />
                            <Text display={navSize === 'sm' ? 'none' : 'flex'} >{ title }</Text>
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