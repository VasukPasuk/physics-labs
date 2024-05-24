import React, {useEffect, useRef, useState} from 'react';
import './VolumeChartsPage.scss';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
// width, height, depth
const stage_data = {
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
  
  const canvasRef = useRef(null);
  
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
    
    const origin = { x: canvas.width / 10, y: canvas.height - 40 };
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
      
      ctx.font = '16px Arial italic';
      ctx.fillText("0", canvas.width / 10 - 15, canvas.height - 20);
      ctx.fillText("N(E)", canvas.width / 10 - 35, 20);
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
      
      for (let x = origin.x; x < canvas.width; x++) {
        let canvasX = x - origin.x + 40;
        let canvasY = origin.y - Math.log((x / scale)) * scale * 1.75 - 20;
        ctx.lineTo(canvasX, canvasY);
      }
      ctx.stroke();
      
      ctx.beginPath();
      ctx.strokeStyle = "red";
      
      ctx.moveTo(origin.x + 125, origin.y);
      ctx.lineTo(origin.x + 125, origin.y - 125);
      
      ctx.moveTo(origin.x + 125,origin.y - 125);
      ctx.lineTo(origin.x + 195, origin.y - 125);
      
      ctx.moveTo(origin.x + 195,origin.y - 125);
      ctx.lineTo(origin.x + 195, origin.y - 155);
      
      ctx.moveTo(origin.x + 195,origin.y - 155);
      ctx.lineTo(origin.x + 295, origin.y - 155);
      
      ctx.moveTo(origin.x + 295,origin.y - 155);
      ctx.lineTo(origin.x + 295, origin.y - 187);
      
      ctx.fillText("E1", origin.x + 125 - 10, origin.y + 15);
      ctx.fillText("E2", origin.x + 195 - 10, origin.y + 15);
      ctx.fillText("E3", origin.x + 295 - 10, origin.y + 15);
      
      
      ctx.stroke();
      
    }
    function drawThirdChart() {
      ctx.beginPath()
      ctx.strokeStyle = "black";
      
      [[origin.x + 50, origin.y], [origin.x + 150, origin.y], [origin.x + 250, origin.y]].forEach((coords, index) => {
        const [axis_X, axis_Y] = coords;
        ctx.moveTo(axis_X,axis_Y);
        ctx.lineTo(axis_X, axis_Y - 150 - 45*(++index));
      })
      
      ctx.stroke()
    }
    function drawFourthChart() {
    
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
          <div
            className="cube"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              transform: `rotateY(${rotationY}deg) rotateX(-10deg)`,
            }}
          >
            <div className="cube__face cube__face--front"
              style={{
                top: stage_data.pos.top[currentStage - 1] + 'px',
                left: stage_data.pos.left[currentStage - 1] + 'px',
                width: stage_data.cube[currentStage - 1][0],
                height: stage_data.cube[currentStage - 1][1],
                transform: `translateZ(${stage_data.cube[currentStage - 1][2] / 2}px)`,
              }}
            />
            <div className="cube__face cube__face--back"
              style={{
                top: stage_data.pos.top[currentStage - 1] + 'px',
                left: stage_data.pos.left[currentStage - 1] + 'px',
                width: stage_data.cube[currentStage - 1][0],
                height: stage_data.cube[currentStage - 1][1],
                transform: `rotateY(180deg) translateZ(${stage_data.cube[currentStage - 1][2] / 2}px)`,
              }}
            />
            <div className="cube__face cube__face--left"
              style={{
                top: stage_data.pos.top[currentStage - 1] + 'px',
                left: stage_data.pos.left[currentStage - 1] + 'px',
                width: stage_data.cube[currentStage - 1][2],
                height: stage_data.cube[currentStage - 1][1],
                transform: `rotateY(-90deg) translateZ(${stage_data.cube[currentStage - 1][2] / 2}px)`,
              }}
            />
            <div className="cube__face cube__face--right"
              style={{
                top: stage_data.pos.top[currentStage - 1] + 'px',
                left: stage_data.pos.left[currentStage - 1] + 'px',
                width: stage_data.cube[currentStage - 1][2] + 'px',
                height: stage_data.cube[currentStage - 1][1] + 'px',
                transform: `rotateY(90deg) translateZ(${stage_data.cube[currentStage - 1][0] - stage_data.cube[currentStage - 1][2] / 2}px)`,
              }}
            />
            <div className="cube__face cube__face--top"
              style={{
                top: stage_data.pos.top[currentStage - 1] + 'px',
                left: stage_data.pos.left[currentStage - 1] + 'px',
                width: stage_data.cube[currentStage - 1][0],
                height: stage_data.cube[currentStage - 1][2],
                transform: `rotateX(90deg) translateZ(${stage_data.cube[currentStage - 1][2] / 2}px)`
              }}
            />
            <div className="cube__face cube__face--bottom"
                 style={{
                   width: stage_data.cube[currentStage - 1][0] + 'px',
                   height: stage_data.cube[currentStage - 1][2] + 'px',
                   transform: `rotateX(-90deg) translateZ(${stage_data.cube[currentStage - 1][1] - stage_data.cube[currentStage - 1][2] / 2})px`,
                 }}
            />
            
            <div className="cube__axis cube__face--x">
              <span className="axis-label axis-label-x">
                X-axis
              </span>
            </div>
            <div className="cube__axis cube__face--y">
              <span className="axis-label axis-label-y">
                Y-axis
              </span>
              <span className="axis-label axis-label-z">
                Z-axis
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
      
      </div>
      <div className="third-chart-container">
        <canvas ref={canvasRef} width="400" height="435"></canvas>
      </div>
      <div id="bottom-buttons-group">
        { (currentStage !== 1) && (<button
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
