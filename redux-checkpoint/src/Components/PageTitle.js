import React from 'react';
import style from '../styles/modules/title.module.scss';

function PageTitle({ children, ...rest }) {
  return (
    <div>
      <h1 className={style.title}>{children}</h1>
    </div>
  );
}

export default PageTitle;
