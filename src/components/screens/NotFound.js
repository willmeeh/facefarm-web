import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NotFound = () => (
  <section className="content">
    <div className="error-page">
      <h2 className="headline text-success"> 404</h2>

      <div className="error-content">
        <h3><i className="fa fa-warning text-success"></i> Oops! Página não encontrada.</h3>

        <p>
          Não encontramos a página que vocẽ está procurando
        </p>
        <p>
          <Link to="home">Voltar a página inicial</Link>.
        </p>

      </div>
    </div>
  </section>
);

export default NotFound;