import React from 'react';
import useFetch from '../../hooks/useFetch.js';
import { useHistory } from "react-router-dom";


import Image from '../../components/Image';
import Card from '../../components/Card';

const Detail = ({ match }) => {
  const {
    params: { name },
  } = match;
  let history = useHistory();
  const { data, loading, error } = useFetch(name)

  if (loading) {
    return <p>{name} is loading...</p>
  }

  const handleClose = () => {
    history.push("/");
  }
  console.log("data", data)
  return (
    <div>
      { !loading ?
        <Card>
          <div onClick={() => handleClose()} id="close_button">X</div>
          {
            data && data.id ? (
              <>
                <Image key={data.id} name={data.name} />
                <div>{data.name}</div>
                <div className="specs">
                  <div><span className="spec_type">ID:</span> &nbsp;<span>{data.id}</span></div>
                  <div><span className="spec_type">Type:</span>&nbsp;<span>{(data.types || []).map(type => type.type.name).join(",")}</span></div>
                  <div><span className="spec_type">Height:</span>&nbsp;<span>{data.height}</span></div>
                  <div><span className="spec_type">Habilities:</span>
                    <ul>
                      {(data.abilities || []).map(ability => {
                        return <li key={ability.ability.name}>{ability.ability.name}</li>
                      })}
                    </ul>
                  </div>
                </div>
              </>
            ) : <div>no such a pokemon found</div>
          }
        </Card> : null
      }
    </div>
  );
};

export default Detail;
