import * as React from 'react'

import { Typography } from '@mui/material';

type ParagraphProps = {
    content: string;
};

const Paragraph: React.FunctionComponent<ParagraphProps> = ({ content }) => {

    return (
       <Typography variant='body1'>{content}</Typography>
    )
}

export default Paragraph