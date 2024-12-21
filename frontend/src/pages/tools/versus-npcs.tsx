import * as React from 'react'

import VersusNpcs from '../../components/Tools/VersusNpcs/VersusNpcs';
import WorkInProgress from '../../components/Common/WorkInProgress/WorkInProgress';


const VersusNpcsPage: React.FunctionComponent = () => {
    return (
        <>
            <WorkInProgress status='next'/>
            <VersusNpcs />
        </>
    )
}

export default VersusNpcsPage