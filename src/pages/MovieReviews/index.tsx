import './styles.css';

const MoviesReviews = () => {
    return (
        <div className="reviews-container">
            <h1>Tela detalhes do filme id: 1</h1>
            <div className="card-newreviews">
                <form className="form-reviews">
                    <input type="text" placeholder="Deixe aqui sua avaliação" />
                    <div className="buttom-div-custom">
                        <button className="buttom-custom-review">SALVAR SUA AVALIAÇÃO</button>
                    </div>
                </form>
            </div>
            <div className="card-reviews">
                <div className="details-reviews">
                    <h4 className="name-user"> * Maria Silva</h4>
                    <p className="review-users">Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
                </div>
                <div className="details-reviews">
                    <h4 className="name-user"> * Maria Silva</h4>
                    <p className="review-users">Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
                </div>
                <div className="details-reviews">
                    <h4 className="name-user"> * Maria Silva</h4>
                    <p className="review-users">Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
                </div>
            </div>
        </div>
    );
}

export default MoviesReviews;