import React, {useEffect, useState} from 'react';
import Car from "../../components/Car/Car";
import './CarsAnalogyPage.style.scss'

function CarsAnalogyPage(props) {
  const [status, setStatus] = useState(false);
  const [pos, setPos] = useState(0);
  
  useEffect(() => {
    if (status && pos !== 5) {
      const interval = setInterval(() => {
        setPos(prev => prev + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      }
    } else if (pos === 5) {
      setStatus(false); // Остановка таймера, когда достигнут pos === 5
    }
  }, [status, pos]);
  return (
    <section className={`cars-page-section`}>
      <h1>
        Фізичний зміст виникнення дірок можна розкрити на прикладі моделювання процесу переміщення автомобілів з першого
        на другий поверх гаражу
      </h1>
      <div className={`content`}>
        <div className="layer-wrapper">
          <div className={`first-layer layer ${status && 'active-animation'}`}>
            <div className={`car-track`} style={{
              transform: `translateX(${100 - pos * 20}%)`
            }}>
              {[...Array(5).fill(1)].map(() => {
                return (
                  <Car/>
                )
              })}
            </div>
          
          </div>
          
          <div className={`second-layer layer ${status && 'active-animation'}`}>
            <div
              className={`car-track`}
              style={{
                transform: `translateX(${pos * 20}%)`
              }}
            >
              {[...Array(5).fill(1)].map(() => {
                return <Car svgClassname={'l2-car'}/>
              })}
            </div>
            <div className={`circles-track`}>
              {[...Array(5).fill(1).map(() => {
                return <div className="circle"/>
              })]}
            </div>
          </div>
        </div>
        <div className={`buttons-bar`}>
          <button
            onClick={() => {
              setStatus(prev => true)
            }}>
            Почати анімацію
          </button>
          <button
            onClick={() => {
              setStatus(prev => false)
              setPos(0)
            }}>
            Очистити анімацію
          </button>
        </div>
      </div>
    </section>
  );
}

export default CarsAnalogyPage;