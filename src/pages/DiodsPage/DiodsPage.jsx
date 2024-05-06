import React from 'react';
import './DiodsPage.style.scss';

function DiodsPage(props) {
  return (
    <section className={`diods-page`}>
      <div className={`diods-box`}>
        <div className="p-field-wrapper field-wrapper">
          <div className={`p-field field`}>
            {[...Array(25)].map(() => {
              return (
                <div className={`circle hole-c`}>
                
                </div>
              )
            })}
          </div>
          <div className={`label p-label`}>
            Область p-провідності
          </div>
          <div className={`tag-anod tag`}>
            АНОД
          </div>
        </div>
        <div className="n-field-wrapper field-wrapper">
          <div className={`n-field field`}>
            {[...Array(25)].map(() => {
              return (
                <div className={`circle electron-c`}>
                
                </div>
              )
            })}
          </div>
          <div className={`label n-label`}>
            Область n-провідності
          </div>
          <div className={`tag-katod tag`}>
            КАТОД
          </div>
        </div>
      </div>
      <div className={`battery`}>
        <div className={`plus`}>
          +
        </div>
        <div className={`minus`}>
          -
        </div>
      </div>
      <div className={`buttons-group`}>
        <button className={`start-btn`}>
          Старт
        </button>
        <button className={`toggle-btn`}>
          Змінити полярність джерела струму
        </button>
      </div>
    </section>
  );
}

export default DiodsPage;