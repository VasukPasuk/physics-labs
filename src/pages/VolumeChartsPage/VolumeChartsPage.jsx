import React, {useEffect, useRef, useState} from 'react';
import './VolumeChartsPage.scss';
import {FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp} from "react-icons/fa";
// width, height, depth
const STAGE_DATA = {
  cube: [[150, 150, 150], [50, 150, 150], [50, 50, 200], [50, 50, 50]],
  pos: {
    left: [30, 60, 80, 70],
    top: [70, 60, 150, 120],
  },
  
}

function VolumeChartsPage(props) {
  const [currentStage, setCurrentStage] = useState(1);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [rotationY, setRotationY] = useState(-15);
  const startX = useRef(0);
  const [verticalRotation, setVerticalRotation] = useState(-15)
  const canvasRef = useRef(null);
  const tst = STAGE_DATA.cube[currentStage - 1][1] - STAGE_DATA.cube[currentStage - 1][2] / 2

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    startX.current = e.clientX;
  };
  
  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    
    const deltaX = e.clientX - startX.current;
    
    setRotationY((prevRotationY) => prevRotationY + deltaX * 0.5);
    
    startX.current = e.clientX;
  };
  
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const origin = {x: canvas.width / 10, y: canvas.height - 40};
    const scale = 50;
    const drawFunctions = [drawFirstChart, drawSecondChart, drawThirdChart, drawFourthChart]
    
    function drawAxes() {
      ctx.beginPath();
      ctx.moveTo(0, origin.y);
      ctx.lineTo(canvas.width, origin.y);
      ctx.moveTo(origin.x, 0);
      ctx.lineTo(origin.x, canvas.height);
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.475)';
      ctx.stroke();
      
      ctx.font = '20px Arial italic';
      ctx.fillText("0", canvas.width / 10 - 17, canvas.height - 20);
      ctx.fillText("N(E)", canvas.width / 10 - 40, 20);
      ctx.fillText("E", canvas.width - 20, canvas.height - 20);
    }
    
    function drawFirstChart() {
      ctx.beginPath();
      ctx.strokeStyle = "black";
      
      for (let x = origin.x; x < canvas.width; x++) {
        let canvasX = x - origin.x + 40;
        let canvasY = origin.y - Math.log((x / scale)) * scale * 1.75 - 20;
        ctx.lineTo(canvasX, canvasY);
      }
      
      ctx.stroke();
    }
    
    function drawSecondChart() {
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.save();
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 5]); // 5 pixels dash, 15 pixels gap
      for (let x = origin.x; x < canvas.width; x++) {
        let canvasX = x - origin.x + 40;
        let canvasY = origin.y - Math.log((x / scale)) * scale * 1.75 - 20;
        ctx.lineTo(canvasX, canvasY);
      }
      ctx.stroke();
      ctx.restore();
      
      
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = '3'
      
      ctx.moveTo(origin.x + 125, origin.y);
      ctx.lineTo(origin.x + 125, origin.y - 125);
      
      ctx.moveTo(origin.x + 125, origin.y - 125);
      ctx.lineTo(origin.x + 195, origin.y - 125);
      
      ctx.moveTo(origin.x + 195, origin.y - 125);
      ctx.lineTo(origin.x + 195, origin.y - 155);
      
      ctx.moveTo(origin.x + 195, origin.y - 155);
      ctx.lineTo(origin.x + 295, origin.y - 155);
      
      ctx.moveTo(origin.x + 295, origin.y - 155);
      ctx.lineTo(origin.x + 295, origin.y - 187);
      ctx.stroke();
      ctx.restore();
      ctx.font = '20px Arial italic';
      ctx.fillText("3D", 180, 230);
      ctx.font = '32px Arial italic';
      ctx.fillText("↓", 205, 235);
      
      ctx.font = '32px Arial italic';
      ctx.fillText("↑", 260, 265);
      ctx.font = '20px Arial italic';
      ctx.fillText("2D", 275, 270);
      
      [125, 195, 295].forEach((num, index) => {
        ctx.fillText(`E${index + 1}`, origin.x + num - 10, origin.y + 15);
      })
      ctx.stroke();
      ctx.save();
      
      ctx.beginPath();
      
      ctx.setLineDash([5, 5])
      
      ctx.moveTo(origin.x + 195, origin.y);
      ctx.lineTo(origin.x + 195, origin.y - 125);
      
      ctx.moveTo(origin.x + 295, origin.y);
      ctx.lineTo(origin.x + 295, origin.y - 155);
      
      ctx.stroke();
      
      ctx.restore();
      
    }
    
    
    function drawThirdChart() {
      const startHeight = 200,
            heightGap = 25,
            widthGap = 75,
            PI = Math.PI;
      
      ctx.font = '14px Arial italic';
      
      for (let i = 0; i <= 3; i++) {
        const endP = [origin.x + widthGap * (i + 1), i === 3 ? origin.y - startHeight : origin.y - startHeight - heightGap * (i + 1)];
        const startP = [origin.x + widthGap * (i + 1), origin.y]
        
        if (i <= 2) {
          ctx.save();
          ctx.beginPath();
          ctx.strokeStyle = "black"
          ctx.lineWidth = "3"
          ctx.arc(endP[0] + widthGap, endP[1], widthGap, Math.PI / 2, Math.PI, false);
          ctx.stroke();
          ctx.closePath()
          ctx.restore();
        }
        
        
        ctx.save()
        ctx.beginPath();
        ctx.strokeStyle = "black"
        ctx.lineWidth = "3"
        ctx.moveTo(endP[0], endP[1]);
        ctx.lineTo(startP[0], startP[1]);
        
        ctx.stroke();
        // ctx.restore()
        
        ctx.save()

        ctx.beginPath();
        ctx.strokeStyle = "black"
        ctx.lineWidth = "2"
        ctx.setLineDash([5,5])
        ctx.moveTo(endP[0], endP[1]);
        ctx.lineTo(startP[0], 50);

        ctx.stroke();
        ctx.restore()
        
        ctx.fillText(["E11", "E21", "E22", "E13"][i], endP[0] - 7.5, origin.y + 15);
      }
      
      
      
      
      
      
    }
    
    
    function drawFourthChart() {
      ctx.beginPath()
      ctx.strokeStyle = "black";
      
      [[origin.x + 75, origin.y], [origin.x + 150, origin.y], [origin.x + 225, origin.y]].forEach((coords, index) => {
        const [axis_X, axis_Y] = coords;
        ctx.moveTo(axis_X, origin.y);
        ctx.lineTo(axis_X, origin.y - 150 - 45 * (++index));
      })
      
      ctx.stroke()
      
      ctx.font = '16px Arial italic';
      
      for (let i = 1; i < 4; i++) {
        ctx.fillText(`E${i}`, origin.x + (50 + 100 * (i - 1)) - 10, origin.y + 15);
      }
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawAxes();
    drawFunctions[currentStage - 1]()
  }, [currentStage]);
  
  return (
    <section id="volume-charts-page">
      
      <div
        className="first-chart-container"
        data-current-stage={currentStage}
      >
        <div
          className="cube-container"
        >
          <div className="change-vertical-angle-buttons-group">
            <button onClick={() => {
              setVerticalRotation(rotation => rotation <= 30 ? rotation + 10 : rotation)
            }}>
              <FaArrowUp/>
            </button>
            <button onClick={() => {
              setVerticalRotation(rotation => rotation >= -30 ? rotation - 10 : rotation)
            }}>
              <FaArrowDown/>
            </button>
          </div>
          <div
            className="cube"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              transform: `rotateY(${rotationY}deg) rotateX(${verticalRotation}deg)`,
            }}
          >
            <div
              className="cube__face cube__face--front"
              data-current-stage={currentStage}
              style={{
                top: STAGE_DATA.pos.top[currentStage - 1] + 'px',
                left: STAGE_DATA.pos.left[currentStage - 1] + 'px',
                width: STAGE_DATA.cube[currentStage - 1][0],
                height: STAGE_DATA.cube[currentStage - 1][1],
                transform: `translateZ(${STAGE_DATA.cube[currentStage - 1][2] / 2}px)`,
              }}
            >
              
              {(currentStage === 2) && (
                <>
                  <FaArrowRight className="second-phase-arrow"/>
                  <FaArrowLeft className="second-phase-arrow"/>
                  <span className="second-phase__label phase-label-box">
                    <span className="second-phase__label_big">d</span>
                    <span className="second-phase__label_small">x</span>
                  </span>
                </>
              )}
              {currentStage === 3 && (
                <div className="third-phase__front-frame">
                  <span className="phase-label-box">
                    <span className="label_big">
                      d
                    </span>
                    <span className="label_small">
                      x
                    </span>
                  </span>
                  <div className="third-phase-line"/>
                </div>
              )}
              {currentStage === 4 && (
                <>
                  
                  <div className="fourth-phase__front-frame">
                  <span className="phase-label-box">
                    <span className="label_big">
                      d
                    </span>
                    <span className="label_small">
                      z
                    </span>
                  </span>
                    <div className="fourth-phase-line"/>
                  </div>
                  
                  <div className="fourth-phase__front-frame">
                  <span className="phase-label-box">
                    <span className="label_big">
                      d
                    </span>
                    <span className="label_small">
                      x
                    </span>
                  </span>
                    <div className="fourth-phase-line"/>
                  </div>
                </>
              )}
            </div>
            <div className="cube__face cube__face--back"
                 style={{
                   top: STAGE_DATA.pos.top[currentStage - 1] + 'px',
                   left: STAGE_DATA.pos.left[currentStage - 1] + 'px',
                   width: STAGE_DATA.cube[currentStage - 1][0],
                   height: STAGE_DATA.cube[currentStage - 1][1],
                   transform: `rotateY(180deg) translateZ(${STAGE_DATA.cube[currentStage - 1][2] / 2}px)`,
                 }}
            >
              {currentStage === 3 && (
                <div className="third-phase__back-frame">
                  <span className="phase-label-box">
                    <span className="label_big">
                      d
                    </span>
                    <span className="label_small">
                      z
                    </span>
                  </span>
                  <div className="third-phase-line"/>
                </div>
              )}
            </div>
            <div className="cube__face cube__face--left"
                 style={{
                   top: STAGE_DATA.pos.top[currentStage - 1] + 'px',
                   left: STAGE_DATA.pos.left[currentStage - 1] + 'px',
                   width: STAGE_DATA.cube[currentStage - 1][2],
                   height: STAGE_DATA.cube[currentStage - 1][1],
                   transform: `rotateY(-90deg) translateZ(${STAGE_DATA.cube[currentStage - 1][2] / 2}px)`,
                 }}
            />
            <div className="cube__face cube__face--right"
                 style={{
                   top: STAGE_DATA.pos.top[currentStage - 1] + 'px',
                   left: STAGE_DATA.pos.left[currentStage - 1] + 'px',
                   width: STAGE_DATA.cube[currentStage - 1][2] + 'px',
                   height: STAGE_DATA.cube[currentStage - 1][1] + 'px',
                   transform: `rotateY(90deg) translateZ(${STAGE_DATA.cube[currentStage - 1][0] - STAGE_DATA.cube[currentStage - 1][2] / 2}px)`,
                 }}
            >
            </div>
            <div className="cube__face cube__face--top"
                 style={{
                   top: STAGE_DATA.pos.top[currentStage - 1] + 'px',
                   left: STAGE_DATA.pos.left[currentStage - 1] + 'px',
                   width: STAGE_DATA.cube[currentStage - 1][0],
                   height: STAGE_DATA.cube[currentStage - 1][2],
                   transform: `rotateX(90deg) translateZ(${STAGE_DATA.cube[currentStage - 1][2] / 2}px)`
                 }}
            >
              {(currentStage === 4) && (
                <div className="fourth-phase__front-frame">
                  <span className="phase-label-box">
                    <span className="label_big">
                      d
                    </span>
                    <span className="label_small">
                      y
                    </span>
                  </span>
                  <div className="fourth-phase-line"/>
                </div>
              )}
            </div>
            {/*<div className="cube__face cube__face--bottom"*/}
            {/*     style={{*/}
            {/*       width: STAGE_DATA.cube[currentStage - 1][0] + 'px',*/}
            {/*       height: STAGE_DATA.cube[currentStage - 1][2] + 'px',*/}
            {/*       transform: `rotateX(-90deg) rotateZ(${tst})`,*/}
            {/*     }}*/}
            {/*/>*/}
            <div className="cube__axis cube__face--x">
              <span className="axis-label axis-label-x">
                X-axis
              </span>
            </div>
            <div className="cube__axis cube__face--y">
              <span className="axis-label axis-label-y">
                Z-axis
              </span>
              <span className="axis-label axis-label-z">
                Y-axis
              </span>
            </div>
          </div>
        
        </div>
        <div
          id="cube-buttons-group"
          style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}
        >
          <button className="rotate-left-btn"
                  onClick={() => setRotationY(currentRotation => currentRotation - 30)}
          >
            <FaArrowLeft/>
          </button>
          <button className="rotate-zero-btn"
                  onClick={() => setRotationY(currentRotation => -15)}
          >
            Початкове положення
          </button>
          <button className="rotate-right-btn"
                  onClick={() => setRotationY(currentRotation => currentRotation + 30)}
          >
            <FaArrowRight/>
          </button>
        </div>
        <div className="current-angle-label">
          Поворот: {rotationY} градусів
        </div>
      </div>
      
      
      <div className="second-chart-container">
        
        <div className="sec-cont__first-phase-chart">
          <span className="sec-cont__first-phase-chart__top-label">
            E
          </span>
          <span className="sec-cont__first-phase-chart__bottom-label">
            0
          </span>
          <span className="sec-cont__first-phase-chart__bottom-right-label">
            kx, ky, kz
          </span>
          <div className="sec-cont__first-phase-chart__circle-container"/>
        </div>
        <div className="sec-cont__second-phase-chart">
        
        </div>
        <div className="sec-cont__third-phase-chart">
        
        </div>
      </div>
      
      
      <div className="third-chart-container">
        <canvas ref={canvasRef} width="400" height="435"></canvas>
      </div>
      <div id="bottom-buttons-group">
        {(currentStage !== 1) && (<button
          onClick={() => setCurrentStage(prev => prev === 1 ? 1 : --prev)}
          className="switch-state-button prev-state-btn"
        >
          Попередній стан
        </button>)}
        <button
          onClick={() => setCurrentStage(prev => prev === 4 ? 4 : ++prev)}
          className="switch-state-button next-state-btn"
        >
          Наступний стан
        </button>
      </div>
    </section>
  );
}

export default VolumeChartsPage;
