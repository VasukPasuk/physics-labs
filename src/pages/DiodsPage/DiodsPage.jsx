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
  const [batteryState, setBatteryState] = useState(false); // false  + => - ; true - => +
  const [start, setStart] = useState(false);
  const [switched, setSwitched] = useState(false);
  return (
    <section className={`diods-page`}>
      <div className={`diods-box`}>
        <div className="p-field-wrapper field-wrapper">
          <div
            className={`p-field field ${(start && batteryState) && 'move-left'}`}
            style={(start && !batteryState) ? {} :disperse}
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
            className={`n-field field ${(start && batteryState) && 'move-right'} ${(start && !batteryState) && 'moving'}`}
            style={(start && !batteryState) ? {} : disperse}
          >
            {[...Array(25)].map(() => {
              return (
                <div className={`circle electron-c ${(!start && !switched) && 'calm-state'}`}>
                
                </div>
              )
            })}
          </div>
          <div
            className={`n-field field ${(start && batteryState) && 'move-right'} black-circles`}
            style={(start && !batteryState) ? {} :disperse}
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
        <div className="left-frame frame"
             style={start ? {} : invisible}
        />
        <div className="right-frame frame"
             style={start ? {} : invisible}
        />
      </div>
      <div className={`battery ${(batteryState && start) && "active-rotation"}`}
           style={start ? {} : invisible}
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
          className={`start-btn`}
          onClick={() => {
            setStart(true);
          }}
        >
          Додати батарейку
        </button>
        <button
          className={`toggle-btn`}
          onClick={() => {
            setBatteryState(prev => !prev);
            setSwitched(prev => true)
          }}
        >
          Змінити полярність джерела струму
        </button>
        <button
          className={`end-btn`}
          onClick={() => {
            setStart(false);
          }}
        >
          Вилучити батарейку
        </button>
      </div>
    </section>
  );
}

export default DiodsPage;