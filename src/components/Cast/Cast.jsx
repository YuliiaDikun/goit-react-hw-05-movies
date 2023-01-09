import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCastById } from 'services/movieAPI';

export const Cast = () => {
    const [cast, setCast] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    getCastById(id).then(cast => {
        setCast(cast);
    });
  }, [id]);
  if (!cast) {
    return null;
  }  
 console.log(cast);
    return (
        <div>Cast from movie - {id}</div>
    )
}