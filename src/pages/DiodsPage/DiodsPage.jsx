import React, {useState} from 'react';
import './DiodsPage.style.scss';

const invisible = {
  opacity: '0'
}

const disperse = {
  columnGap: `0.25rem`
}

const expand = {
  columnGap: `1rem`
}

function DiodsPage(props) {
  const [direction, setDirection] = useState(false); // false  + => - ; true - => +
  const [battery, setBattery] = useState(false);
  const [switched, setSwitched] = useState(false);
  return (
    <section className={`diods-page`}>
      <div className={`diods-box`}>
        <div className="p-field-wrapper field-wrapper">
          <div
            className={`p-field field ${(battery && direction) && 'move-left'}`}
            style={(battery && !direction) ? {} :disperse}
          >
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
          <div
            className={`n-field field ${(battery && direction) && 'move-right'} ${(battery && !direction) && 'moving'}`}
            style={(battery && !direction) ? {} : disperse}
          >
            {[...Array(25)].map(() => {
              return (
                <div className={`circle electron-c ${(!battery && !switched) && 'calm-state'}`}>
                
                </div>
              )
            })}
          </div>
          <div
            className={`n-field field ${(battery && direction) && 'move-right'} black-circles`}
            style={(battery && !direction) ? {} :disperse}
          >
            {[...Array(25)].map(() => {
              return (
                <div className={`circle electron-c black-circle'}`}>
                
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
        <div
          className={`left-frame frame ${battery && 'active-frame'}`}
        />
        <div
          className={`right-frame frame ${battery && 'active-frame'}`}
        />
      </div>
      <div className={`battery ${(direction && battery) && "active-rotation"}`}
           style={battery ? {} : invisible}
      >
        <div className={`plus`}>
          +
        </div>
        <div className={`minus`}>
          -
        </div>
      </div>
      <div className={`buttons-group`}>
        <button
          className={`add-battery-btn`}
          onClick={() => {
            setBattery(true);
          }}
        >
          Додати батарейку
        </button>
        <button
          className={`toggle-btn`}
          onClick={() => {
            setDirection(prev => !prev);
            setSwitched(prev => true)
          }}
        >
          Змінити полярність джерела струму
        </button>
        <button
          className={`end-btn`}
          onClick={() => {
            setBattery(false);
          }}
        >
          Вилучити батарейку
        </button>
      </div>
    </section>
  );
}

export default DiodsPage;