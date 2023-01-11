import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsById } from 'services/movieAPI';
import css from './Comments.module.css';

const Comments = () => {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    getReviewsById(id).then(({ results }) => {
      setReviews(results);
    });
  }, [id]);
  if (!reviews) {
    return null;
  }
  const isReviews = !!reviews.length;
  return (
    <>
      <h3>Reviews</h3>
      {isReviews ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id} className={css.reviewContainer}>
                <p className={css.author}>
                  Author:
                  <span className={css.authorName}>{review.author}</span>
                </p>

                <div className={css.ContentContainer}>
                  <p className={css.ContentTitle}>Content:</p>
                  <span className={css.Content}>{review.content}</span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.noReview}>Oops!There are no such reviews!</p>
      )}
    </>
  );
};
export default Comments;