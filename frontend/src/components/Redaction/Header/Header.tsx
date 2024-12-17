import * as React from 'react'

import { Typography } from '@mui/material';

type HeaderProps = {
    content: string;
};

const Header: React.FunctionComponent<HeaderProps> = ({ content }) => {

    return (
       <Typography variant='h1'>{content}</Typography>
    )
}

export default Header