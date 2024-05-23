import React, {useRef, useState} from 'react';
import './VolumeChartsPage.scss';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

function VolumeChartsPage(props) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [rotationY, setRotationY] = useState(-15);
  const startX = useRef(0);
  
  const [currentStage, setCurrentStage] = useState(1);
  
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
  
  return (
    <section id="volume-charts-page">
      
      <div className="first-chart-container">
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
            <div className="cube__face cube__face--front"/>
            <div className="cube__face cube__face--back"/>
            <div className="cube__face cube__face--left"/>
            <div className="cube__face cube__face--right"/>
            <div className="cube__face cube__face--top"/>
            <div className="cube__face cube__face--bottom"/>
            
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
            <FaArrowLeft />
          </button>
          <button className="rotate-zero-btn"
            onClick={() => setRotationY(currentRotation => -35)}
          >
            Початкове положення
          </button>
          <button className="rotate-right-btn"
            onClick={() => setRotationY(currentRotation => currentRotation + 30)}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="current-angle-label">
          Поворот: {rotationY} градусів
        </div>
      </div>
      <div className="second-chart-container">
        1
      </div>
      <div className="third-chart-container">
        1
      </div>
    </section>
  );
}

export default VolumeChartsPage;