import React, {useEffect, useState} from 'react';
import './AreasPage.style.scss';

function AreasPage(props) {
  const [direction, setDirection] = useState(false) // true - прямий, false - обернений
  const [diodeType, setDiodeType] = useState(false) // true - германієвий, false - кремнієвий
  useEffect(() => {
    const canvas = document.getElementById('left-chart');
    const ctx = canvas.getContext('2d');
    const origin = {startAxisX: canvas.width / 2, startAxisY: canvas.height / 2 + 50};
    const scale = 50;
    let animationFrameId;
    
    ctx.font = '12px Arial';
    
    function drawChartAxes() {
      ctx.beginPath();
      ctx.moveTo(0, origin.startAxisY);
      ctx.lineTo(canvas.width, origin.startAxisY);
      ctx.moveTo(origin.startAxisX, 0);
      ctx.lineTo(origin.startAxisX, canvas.height);
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.475)';
      ctx.stroke();
      
      const textData = [
          {
            text: 'Uобр, В',
            x: 0,
            y: origin.startAxisY - 35,
          },
          {
            text: 'Uпрям, В',
            x: canvas.width - 55,
            y: origin.startAxisY + 35,
          },
          {
            text: 'Iобр, мкА',
            x: origin.startAxisX + 15,
            y: 10,
          },
          {
            text: 'Iпрям, мА',
            x: origin.startAxisX + 45,
            y: canvas.height - 0,
          }
        ];
      textData.forEach((data) => {
        ctx.fillText(data.text,data.x, data.y)
      })
    }
    
    function drawPlusYAxisLabels() {
      const labels = [10, 20, 30, 40, 50];
      const gap = 35;
      const axisLeftOffset = 25;
      labels.forEach((label, index) => {
        const positionX = origin.startAxisX - axisLeftOffset,
              positionY = origin.startAxisY - gap * (++index)
        
        ctx.fillText(String(label), positionX, positionY)
        ctx.beginPath();
        ctx.moveTo(origin.startAxisX, positionY - 5);
        ctx.lineTo(origin.startAxisX - 5, positionY - 5)
        ctx.stroke();
      })
    }
    
    function drawMinusYAxisLabels() {
      const labels = [400, 800];
      const gap = 60;
      const axisLeftOffset = 15;
      labels.forEach((label, index) => {
        const positionX = origin.startAxisX + axisLeftOffset,
              positionY = origin.startAxisY + gap * (++index)
      
        ctx.fillText(String(label), positionX, positionY)
        ctx.beginPath();
        ctx.moveTo(positionX - 10, positionY - 5);
        ctx.lineTo(positionX - 15, positionY - 5)
        ctx.stroke();
      })
    }
    
    function drawPlusXAxisLabels() {
      const labels = ['0.2', '0.3', '0.4', '0.5', '0.6', '0.7'],
            gap = 30,
            axisBottomOffset = 15;
      labels.forEach((label, index) => {
        const positionX = origin.startAxisX + gap * (++index),
          positionY = origin.startAxisY + axisBottomOffset;
        
        ctx.fillText(String(label), positionX, positionY)
        ctx.beginPath();
        ctx.moveTo(positionX + 10, origin.startAxisY);
        ctx.lineTo(positionX + 10, origin.startAxisY - 5);
        ctx.stroke();
      })
    }
    
    function drawMinusXAxisLabels() {
      const labels = [200, 400, 600],
            gap = 75,
            axisBottomOffset = -15;
      
      labels.forEach((label, index) => {
        const positionX = origin.startAxisX - gap * (++index),
              positionY = origin.startAxisY + axisBottomOffset;
        
        ctx.fillText(String(label), positionX, positionY)
        ctx.beginPath();
        ctx.moveTo(positionX + 10, origin.startAxisY);
        ctx.lineTo(positionX + 10, origin.startAxisY - 5);
        ctx.stroke();
      })
    }
    
    function drawSiliconDiodeChart(direction) {
      if (direction) {
        ctx.save();
        ctx.lineWidth = '3'
        let start = { x: origin.startAxisX, y: origin.startAxisY};
        let cp1 = { x: origin.startAxisX + 185, y: origin.startAxisY};
        let cp2 = { x: origin.startAxisX + 190, y: origin.startAxisY - 50 };
        let end = { x: origin.startAxisX + 195, y: origin.startAxisY - 200};
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
        ctx.stroke();
        
        
        ctx.restore();
        
        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([5,5])
        ctx.moveTo(origin.startAxisX + 190, origin.startAxisY);
        ctx.lineTo(origin.startAxisX + 190, origin.startAxisY - 110)
        ctx.stroke()
        ctx.restore();
      } else {
        ctx.save();
        ctx.lineWidth = '3'
        let start = { x: 20, y: origin.startAxisY + 35 };
        let cp1 = { x: 25, y: origin.startAxisY };
        let cp2 = { x: 60, y: origin.startAxisY + 15 };
        let end = { x: origin.startAxisX, y: origin.startAxisY };
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
        ctx.stroke();
        ctx.restore();
      }
    }
    
    function drawGermaniumDiodeChart(direction) {
      if (direction) {
        ctx.save();
        ctx.lineWidth = '2'
        let start = { x: origin.startAxisX, y: origin.startAxisY};
        let cp1 = { x: origin.startAxisX + 68, y: origin.startAxisY};
        let cp2 = { x: origin.startAxisX + 73, y: origin.startAxisY - 50 };
        let end = { x: origin.startAxisX + 78, y: origin.startAxisY - 200};
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
        ctx.stroke();
        ctx.restore();
        
        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([5,5])
        ctx.moveTo(origin.startAxisX + 70, origin.startAxisY);
        ctx.lineTo(origin.startAxisX + 70, origin.startAxisY - 80)
        ctx.stroke()
        ctx.restore();
      } else {
        ctx.save();
        ctx.lineWidth = '3'
        let start = { x: 70, y: origin.startAxisY + 100 };
        let cp1 = { x: 80, y: origin.startAxisY + 50 };
        let cp2 = { x: 95, y: origin.startAxisY + 65 };
        let end = { x: origin.startAxisX - 30, y: origin.startAxisY + 50 };
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
        ctx.moveTo(end.x, end.y);
        ctx.bezierCurveTo(origin.startAxisX, origin.startAxisY + 50, origin.startAxisX,origin.startAxisY, origin.startAxisX, origin.startAxisY);
        
        ctx.stroke();
        ctx.restore();
      }
    }
    
    drawChartAxes();
    drawMinusYAxisLabels();
    drawMinusXAxisLabels();
    drawPlusXAxisLabels();
    drawPlusYAxisLabels();
    
    if (diodeType === false) {
      drawSiliconDiodeChart(direction)
    } else  {
      drawGermaniumDiodeChart(direction)
    }
    
    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [direction, diodeType]);
  
  return (
    <section className={`areas-page-section`}>
      <div className={`areas-page__chart-block`}>
        <div className={`areas-page__chart-block__chart-left`}>
          <canvas id="left-chart" width={500} height={350}/>
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