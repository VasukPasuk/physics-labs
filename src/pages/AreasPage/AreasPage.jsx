import React, {useState} from 'react';
import './AreasPage.style.scss';

function AreasPage(props) {
  const [direction, setDirection] = useState(false) // true - прямий, false - обернений
  const [diodeType, setDiodeType] = useState(false) // true - германієвий, false - кремнієвий
  return (
    <section className={`areas-page-section`}>
      <div className={`areas-page__chart-block`}>
        <div className={`areas-page__chart-block__chart-left`}>
          <div className="chart-left-wrapper">
            <div className={`chart-left__part chart-left__part-1`}>
            
            </div>
            <div
              className={`chart-left__part chart-left__part-2`}
              data-active-area={direction}
            >
            
            </div>
            <div
              className={`chart-left__part chart-left__part-3`}
              data-active-area={!direction}
            >
            
            </div>
            <div className={`chart-left__part chart-left__part-4`}>
            
            </div>
            <div className="curve-left">
              <svg viewBox={`${diodeType ? 70 : 10} ${diodeType ? 83 : 105} 351 218`} fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 227C64.6667 226.333 201 220.1 233 200.5C273 176 300 119.5 300 -0.5" strokeWidth={3}
                      stroke="black"/>
              </svg>
            </div>
            <div className={`axis-label axis-label__left`}>
              U об.
            </div>
            <div className={`axis-label axis-label__right`}>
              U пр.
            </div>
            <div className={`axis-label axis-label__bottom`}>
              I об.
            </div>
            <div className={`axis-label axis-label__top`}>
              I пр.
            </div>
            <div className={`axis-label axis-label__centre-left`}>
              0
            </div>
            <div className={`axis-label axis-label__centre-right`} style={{left: diodeType ? "57.5%" : "71%"}}>
              {diodeType ? "0,3" : "0,7"}
            </div>
          </div>
        </div>
        <div className={`areas-page__chart-block__chart-right`}>
          <div className="chart-right-wrapper">
            <div className={`chart-right__part chart-right__part-1`}>
            </div>
            <div
              className={`chart-right__part chart-right__part-2`}
              data-chart-state={direction ? 'allow' : 'forbidden'}
            >
              <div className="chart-right__zone-box electrons-zone">
                Зона вільних електронів
              </div>
              <div className="chart-right__zone-box holes-zone">
                Валентна зона дірок
              </div>
            </div>
            <div className={`chart-right__part chart-right__part-3`}>
            
            </div>
            <div className={`chart-right__part chart-right__part-4`}>
            
            </div>
            <div className={`axis-label axis-label__top`}>
              E
            </div>
            <div className={`axis-label axis-label__centre-left`}>
              0
            </div>
          </div>
        </div>
      </div>
      <div className={`areas-page__buttons-block`}>
        <div className={`switch-diode-type__btn-container`}>
          <button
            className={`set-krem-diode-button set-type-button`}
            onClick={() => {
              setDiodeType(prev => false)
              setDirection(false)
            }}
          >
            Показати кремнієвий діод
          </button>
          <button
            className={`set-germ-diode-button set-type-button`}
            onClick={() => {
              setDiodeType(prev => true)
              setDirection(false)
            }}
          >
            Показати германієвий діод
          </button>
        </div>
        <div className={`switch-electric-flow__btn-container`}>
          <button
            className={`set-direct-flow-button set-flow-button`}
            onClick={() => setDirection(prev => true)}
          >
            Прямий напрям струму
          </button>
          <button
            className={`set-reverse-flow-button set-flow-button`}
            onClick={() => setDirection(prev => false)}
          >
            Обернерний напрям струму
          </button>
        </div>
      </div>
    </section>
  );
}

export default AreasPage;