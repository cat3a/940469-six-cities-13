import './style.css';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities | NotFound</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className="header__logo-link header__logo-link--active"
                to="/"
              >
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

      <main className="page__main page__main--index">
        <div className="container-not-found text">
          <p className="text__p-bolt">404</p>
          <p className="text__p">Not Found...</p>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
