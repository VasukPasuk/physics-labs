import React, {useEffect} from 'react';

function TPage(props) {
  useEffect(() => {
    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');
    
    const width = canvas.width;
    const height = canvas.height;
    
    const origin = { x: width / 2, y: height / 2 };
    
    function drawAxes() {
      ctx.beginPath();
      ctx.moveTo(origin.x, 0);
      ctx.lineTo(origin.x, height);
      ctx.moveTo(0, origin.y);
      ctx.lineTo(width, origin.y);
      ctx.stroke();
      
      // Arrows on axes
      ctx.moveTo(width, origin.y);
      ctx.lineTo(width - 10, origin.y - 10);
      ctx.moveTo(width, origin.y);
      ctx.lineTo(width - 10, origin.y + 10);
      
      ctx.moveTo(origin.x, 0);
      ctx.lineTo(origin.x - 10, 10);
      ctx.moveTo(origin.x, 0);
      ctx.lineTo(origin.x + 10, 10);
      
      ctx.stroke();
      
      // Labels
      ctx.fillText("Uпр В", width - 40, origin.y - 10);
      ctx.fillText("Iпр мА", origin.x + 10, 20);
      ctx.fillText("Uобр В", 10, origin.y - 10);
      ctx.fillText("Iобр мкА", origin.x + 10, height - 20);
      
      // Additional lines and labels
      const xLabels = [0.2, 0.4, 0.6];
      const yLabels = [10, 20, 30, 40, 50];
      const yLabelsNegative = [400, 800];
      
      const yULabelsNegative = [200, 400];
      
      xLabels.forEach((label, index) => {
        const x = origin.x + (index + 1) * 60;
        ctx.fillText(label, x, origin.y + 20);
      });
      
      yLabels.forEach((label, index) => {
        const y = origin.y - (index + 1) * 30;
        ctx.fillText(label, origin.x - 20, y + 5);
      });
      
      yLabelsNegative.forEach((label, index) => {
        const y = origin.y + (index + 1) * 50;
        ctx.fillText(label, origin.x + 10, y + 15);
      });
      
      yULabelsNegative.forEach((label, index) => {
        const x = origin.x - (index + 1) * 80;
        ctx.fillText(label, x, origin.y - 10);
      })
      
      ctx.fillText("0", origin.x - 20, origin.y + 20);
    }
    
    function drawCurves() {
      // Germanium reverse breakdown
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.bezierCurveTo(origin.x - 40, origin.y + 30, origin.x - 40, origin.y + 60, origin.x - 40, origin.y + 90);
      ctx.strokeStyle = "black";
      ctx.stroke();
      
      // Silicon reverse breakdown
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.bezierCurveTo(origin.x - 20, origin.y + 15, origin.x - 20, origin.y + 30, origin.x - 20, origin.y + 60);
      ctx.strokeStyle = "black";
      ctx.stroke();
      
      // Germanium forward bias D7Ж
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(origin.x + 10, origin.y - 5);
      ctx.bezierCurveTo(origin.x + 25, origin.y - 10, origin.x + 50, origin.y - 20, origin.x + 100, origin.y - 40);
      ctx.strokeStyle = "black";
      ctx.stroke();
      
      // Silicon forward bias D226Б
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(origin.x + 20, origin.y - 10);
      ctx.bezierCurveTo(origin.x + 40, origin.y - 20, origin.x + 100, origin.y - 40, origin.x + 150, origin.y - 60);
      ctx.strokeStyle = "black";
      ctx.stroke();
    }
    
    drawAxes();
    drawCurves();
    
  }, []);
  return (
    <section>
      <canvas id="graphCanvas" width={500} height={400}></canvas>
    </section>
  );
}

export default TPage;