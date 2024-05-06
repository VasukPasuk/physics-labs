import React from 'react';
import './ErrorPage.style.scss';
import {NavLink} from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";

function ErrorPage(props) {
  return (
    <div className={`error-page`}>
      <div className={`sad-emoji-icon__wrapper`}>
        <TbFaceIdError className={`sad-emoji-icon`}/>
      </div>
      <h2 className={`error-status`}>
        <span className={`error-status__code`}>404</span> error
      </h2>
      <h3 className={`error-description`}>
        This page doesn't exist.
      </h3>
      <h4 className={`home-link-text`}>
        Return to <NavLink to={'/'}> home </NavLink> page
      </h4>
    </div>
  );
}

export default ErrorPage;