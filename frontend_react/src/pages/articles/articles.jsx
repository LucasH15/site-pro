import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/joy';

import { client } from '../../client';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const query = '*[_type == "articles"]';

        client.fetch(query).then(data => {
            setArticles(data);
            setIsLoading(false);
        });
    }, []);

    return isLoading ? <CircularProgress size="md" variant="solid" /> : articles.map(article => <p>{article.title}</p>);
};

export default Articles;
