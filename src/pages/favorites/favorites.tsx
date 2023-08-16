import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Authorization } from '../../const';
import cn from 'classnames';
import { useAppSelector } from '../../hooks';

//TODO: Здесь потом будет реализована сортировка по городам. Все вычисления будут собраны в функции и перенесены в компонент с функциями.

function Favorites(): JSX.Element {
  const offers = useAppSelector((store) => store.offers);

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities | Favorites</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Paris</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer) => (
                    <article
                      key={offer.id}
                      className="favorites__card place-card"
                    >
                      {offer.isPremium && (
                        <div className="place-card__mark">
                          <span>isPremium</span>
                        </div>
                      )}
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <Link to={`${Authorization.Offer}/${offer.id}`}>
                          <img
                            className="place-card__image"
                            src={offer.previewImage}
                            width="150"
                            height="110"
                            alt="Place image"
                          />
                        </Link>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">
                              &euro;{offer.price}
                            </b>
                            <span className="place-card__price-text">
                              &#47;&nbsp;night
                            </span>
                          </div>
                          <button
                            className={cn(
                              'place-card__bookmark-button button',
                              {
                                'place-card__bookmark-button--active':
                                  offer.isFavorite,
                              },
                            )}
                            type="button"
                          >
                            <svg
                              className="place-card__bookmark-icon"
                              width="18"
                              height="19"
                            >
                              <use xlinkHref="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">
                              In bookmarks
                            </span>
                          </button>
                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span
                              style={{
                                width: `${(offer.rating * 20).toString()}%`,
                              }}
                            >
                            </span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <Link to={`${Authorization.Offer}/${offer.id}`}>
                            {offer.title}
                          </Link>
                        </h2>
                        <p className="place-card__type">{offer.type}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
