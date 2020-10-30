import React from 'react';
import {
  Link,
} from 'react-router-dom';

import Image from '../../components/Image';
import Card from '../../components/Card';

import './Home.module.scss';

import useFetch from '../../hooks/useFetch';
import imf from '../../../public/images/immfly.png'
import pokemon from '../../../public/images/pokemon.png'

const Home = () => {
  const { data = [], loading, error } = useFetch()

  if (error) {
    return <div>something went wrong</div>
  }

  return (
    <div>

      <div className="header">
        <img src={imf} />
        <img src={pokemon} />

        <p>Generation 1</p>
        <p>{data.count} Pokemon</p>

      </div>

      <main className="mainWrapper">
        {
          loading && <div>Loading...</div>
        }
        {((data && data.results) || []).map(pokemon => {
          return (
            <Card key={pokemon.name}>
              <Link to={`/pokemon/${pokemon.name}`}>
                <Image key={pokemon.name} name={pokemon.name} />
                <div>{pokemon.name}</div>
              </Link>
            </Card>
          )
        })}
      </main>
    </div>
  )
}


export default Home;
