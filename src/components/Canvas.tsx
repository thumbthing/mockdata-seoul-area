import React, { useState, useEffect, useRef } from 'react';
import { MockContext } from '../context/State.Context';

interface DataPoint {
  x: number;
  y: number;
}

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [data, setData] = useState<DataPoint[]>([]);
  const { state } = MockContext();
  const { GraphData } = state;

  useEffect(() => {
    const createCoordinate = () => {
      const xyArray: DataPoint[] = [];
      const lenghtOfData = GraphData.length;

      for (let i = 0; i < lenghtOfData; i += 1) {
        const x = i;
        const y = Math.sin(GraphData[i].value_area / 100);

        xyArray.push({ x, y });
      }

      return xyArray;
    };

    if (GraphData) {
      const newData = createCoordinate();
      console.log(newData);

      setData(newData);
    }
  }, [GraphData]);

  useEffect(() => {
    // Canvas에 그래프 그리기
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scaleX = canvas.width / 100;
    const scaleY = canvas.height;

    const pathPoints = data.map((point, index) => ({
      x: point.x * scaleX,
      y: point.y * scaleY,
      isFirstPoint: index === 0,
    }));

    ctx.beginPath();
    pathPoints.forEach((point, index) => {
      if (point.isFirstPoint) {
        ctx.moveTo(0, point.y);
      }
      ctx.lineTo(point.x, point.y);

      // 마지막 점에서 경로를 닫습니다.
      if (index === pathPoints.length - 1) {
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
      }
    });

    ctx.closePath();

    ctx.fillStyle = 'rgba(0, 128, 255, 0.5)';
    ctx.fill();
  }, [data]);

  return (
    <div>
      <canvas ref={canvasRef} width={1250} height={400} style={{ border: '1px solid black' }} />
    </div>
  );
}

export default Canvas;
