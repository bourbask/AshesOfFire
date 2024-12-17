import * as React from 'react'

import { Typography } from '@mui/material';

type NoSpoilProps = {
    content: string;
};

const NoSpoil: React.FunctionComponent<NoSpoilProps> = ({ content }) => {
    const [isHidden, setHidden] = React.useState<boolean>(true);

    const handleOnClick = () => {
        return setHidden(!isHidden);
    };

    return (
        <Typography variant='caption' onClick={handleOnClick}>{isHidden ? '*******' : content}</Typography>
    )
}

export default NoSpoil