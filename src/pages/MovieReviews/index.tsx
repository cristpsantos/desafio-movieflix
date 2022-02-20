import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieReviewsPage } from "types/movieReviewsPage";
import { requestBackend } from "util/request";
import "./styles.css";

type UrlParams = {
  movieId: string;
};

const MoviesReviews = () => {
  const { movieId } = useParams<UrlParams>();

  const [page, setPage] = useState<MovieReviewsPage[]>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: "/movies/" + movieId + "/reviews",
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
      console.log(response.data);
    });
  }, [movieId]);

  return (
    <div className="reviews-container">
      <h1>Tela detalhes do filme id: {movieId}</h1>
      <div className="card-newreviews">
        <form className="form-reviews">
          <input type="text" placeholder="Deixe aqui sua avaliação" />
          <div className="buttom-div-custom">
            <button className="buttom-custom-review">
              SALVAR SUA AVALIAÇÃO
            </button>
          </div>
        </form>
      </div>
      <div className="card-reviews">
        {page?.map((review) => [
          <div className="details-reviews" key={ review.id }>
            <h4 className="name-user"> { review.user.name }</h4>
            <p className="review-users">
              { review.text}
            </p>
          </div>,
        ])}
      </div>
    </div>
  );
};

export default MoviesReviews;
