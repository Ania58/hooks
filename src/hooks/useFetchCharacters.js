import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCharacters = (url) => {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        const fetchCharacter = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(url);
                const data = response.data;
                setCharacter({
                    name: data.name,
                    image: data.sprites ? data.sprites.front_default : data.image
                });
            } catch (err) {
                setError(`Error fetching data: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [url]);

    return { character, loading, error };
};

export default useFetchCharacters;