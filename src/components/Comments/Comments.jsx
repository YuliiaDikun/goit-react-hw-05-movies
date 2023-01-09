import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsById } from 'services/movieAPI';

export const Comments = () => {
    const [reviews, setReviews] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    getReviewsById(id).then(({results}) => {
        setReviews(results);
    });
  }, [id]);
  if (!reviews) {
    return null;
  }  
    return (
        <>
        <h3>Reviews</h3>
        <ul>
            {reviews.map(review => {
                return (
                    <li>
                        <div className="authorContainer">
                        <p>Author:</p>
                        <span>{review.author}</span>
                        </div>
                        <div className="ContentContainer">
                        <p>Content:</p>
                        <span>{review.content}</span>
                        </div>
                    </li>
                )
            })}
        </ul>
        </>
    )
}