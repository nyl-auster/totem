import React from "react";

const RendezVous = () => {
  return (
    <div className="section content">
      <p>
        Yann a besoin de savoir quand vous êtes disponible pour une réunion :
      </p>
      <blockquote className="blockquote">
        Revoir la grille des tarifs pour notre offre commerciale auprès des
        entreprises.
      </blockquote>
      <a
        className="button is-primary"
        href="https://doodle.com/poll/2iwasbdzu5b7qerk#table"
      >
        Voter sur le Doodle
      </a>
    </div>
  );
};

export default RendezVous;
