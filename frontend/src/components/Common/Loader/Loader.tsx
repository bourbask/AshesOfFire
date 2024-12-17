import * as React from 'react'

type LoaderProps = {
    isLoading: boolean;
};

const Loader: React.FunctionComponent<LoaderProps> = ({isLoading}) => {

    return isLoading ? (
       <p>Waiting...</p>
    ) : null
}

export default Loader