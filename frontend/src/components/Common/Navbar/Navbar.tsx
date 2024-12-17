import * as React from 'react'

import { Box, Button } from '@mui/material';

type NavbarElement = {
    content: string;
    link: string;
}

type NavbarProps = {
    elements: Array<NavbarElement>;
};

const Navbar: React.FunctionComponent<NavbarProps> = ({ elements }) => {
    return (
        <Box>
            {elements.map((element) => {
                return <Button onClick={() => {
                    console.log('redirect to : ', element.link);
                }}>{element.content}</Button>
            })}
        </Box>
    )
}

export default Navbar