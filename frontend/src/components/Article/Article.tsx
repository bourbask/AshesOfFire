import * as React from 'react'

import { Card, CardContent, CardHeader } from '@mui/material';

type ArticleProps = {
    children: React.ReactNode;
    title: React.ReactNode;
    lang: 'en' | 'fr';
};

const Article: React.FunctionComponent<ArticleProps> = ({ children, title, lang }) => {

    return <Card>
        <CardHeader content={title} lang={lang} />
        <CardContent>
            {children}
        </CardContent>
    </Card>
}

export default Article