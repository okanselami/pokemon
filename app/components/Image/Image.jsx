import React from 'react';
import useImage from '../../hooks/useImage'

const Image = ({ name, alt = "" }) => {
    if (name === undefined) {
        return null
    }
    const src = `https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`
    const { loaded } = useImage({ src });

    return <img width="90px" height="120px" className={loaded ? 'smooth loaded' : 'smooth'} src={src} alt={alt} />;
};

export default Image;
