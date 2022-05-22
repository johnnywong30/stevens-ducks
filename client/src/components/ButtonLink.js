import React from "react";
import { Link, Button } from "@chakra-ui/react";

export default function ButtonLink({href, name, ...rest }) {
    return (
        <Link href={href} textDecor={'none'} isExternal>
            <Button {...rest}>
                {name}
            </Button>
        </Link>
    )
}