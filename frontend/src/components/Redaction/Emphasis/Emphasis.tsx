import * as React from 'react'

import { Typography } from '@mui/material';

type EmphasisProps = {
    content: string;
};

const Emphasis: React.FunctionComponent<EmphasisProps> = ({ content }) => {

    return (
       <Typography variant='caption'>{content}</Typography>
    )
}

export default Emphasis