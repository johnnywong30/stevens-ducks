import React from "react";
import { Link, Icon } from "@chakra-ui/react";

export default function IconLink({as, href, boxSize='200px', color='gray.900' }) {
    return (
        <Link href={href} textDecor={'none'} isExternal>
            <Icon as={as} boxSize={boxSize} color={color} />
        </Link>
    )
}