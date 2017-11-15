import React from "react";

const TotemRules = () => (
  <div>
    <strong>Règles du Totem : </strong>
    <ul>
      <li className="menu-list">
        - Un message ne peut pas dépasser 200 caractères
      </li>
      <li>
        - Vous ne pouvez pas poster un second message avant que quelqu'un
        d'autre réponde.
      </li>
    </ul>
  </div>
);

export default TotemRules;
