import * as React from 'react'
import Paragraph from '../Paragraph/Paragraph';
import { Box, Typography } from '@mui/material';

type SectionProps = {
    title: string;
    content: string;
    subtitle?: string;
};

const Section: React.FC<SectionProps> = ({title, content, subtitle}) => {

    return (
        <Box>
            <Typography variant='h2'>{title}</Typography>
            <Typography variant='subtitle2'>{subtitle}</Typography>
            <Paragraph content={content}/>
        </Box>
    )
}

export default Section