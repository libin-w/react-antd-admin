import React, { MutableRefObject } from 'react';
import ResizeObserver from 'rc-resize-observer';
import { randomInteger, debounce } from '@/utils';
import styled from 'styled-components';
import bgImage from './images/bg_image.jpg';

const StyleWrapper = styled.div<{}>`
  width: 100%;
  height: 100%;
  min-height: 720px;
  position: absolute;
  left: 0;
  top: 0;
  .bg-wrapper {
    width: 100%;
    height: 100%;
    background: #000000 url(${bgImage}) no-repeat center/cover;
    opacity: 0.4;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
  .star-canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
`;
function maxOrbit(x, y) {
  const max = Math.max(x, y),
    diameter = Math.round(Math.sqrt(max * max + max * max));
  return diameter / 2;
  // 星星移动范围，值越大范围越小，
}
const starsCount = 500; // 星星数量
const hueValue = 217;
const offscreenCanvas = document.createElement('canvas');
const offscreenCanvasCtx = offscreenCanvas.getContext('2d') as CanvasRenderingContext2D;
offscreenCanvas.width = 100;
offscreenCanvas.height = 100;
const half = offscreenCanvas.width / 2,
  gradient2 = offscreenCanvasCtx.createRadialGradient(half, half, 0, half, half, half);
gradient2.addColorStop(0.025, '#CCC');
gradient2.addColorStop(0.1, `hsl(${hueValue}, 61%, 33%)`);
gradient2.addColorStop(0.25, `hsl(${hueValue}, 64%, 6%)`);
gradient2.addColorStop(1, 'transparent');

offscreenCanvasCtx.fillStyle = gradient2;
offscreenCanvasCtx.beginPath();
offscreenCanvasCtx.arc(half, half, half, 0, Math.PI * 2);
offscreenCanvasCtx.fill();
class Star {
  private orbitRadius: number;
  private radius: number;
  private orbitX: number;
  private orbitY: number;
  private timePassed: number;
  private speed: number;
  private alpha: number;
  private ctx: CanvasRenderingContext2D;
  constructor(options: {
    canvasWidth: number;
    canvasHeight: number;
    ctx: CanvasRenderingContext2D;
  }) {
    const { canvasWidth, canvasHeight, ctx } = options;
    this.orbitRadius = randomInteger(maxOrbit(canvasWidth, canvasHeight));
    this.radius = randomInteger(60, this.orbitRadius) / 8;
    this.orbitX = canvasWidth / 2;
    this.orbitY = canvasHeight / 2;
    this.timePassed = randomInteger(0, starsCount);
    this.speed = randomInteger(this.orbitRadius) / 500000;
    this.alpha = randomInteger(2, 10) / 10;
    this.ctx = ctx;
  }
  draw() {
    const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
    const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
    const twinkle = randomInteger(10);
    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05;
    }
    this.ctx.globalAlpha = this.alpha;
    this.ctx.drawImage(
      offscreenCanvas,
      x - this.radius / 2,
      y - this.radius / 2,
      this.radius,
      this.radius
    );
    this.timePassed += this.speed;
  }
}
class UniverseBackground extends React.Component {
  private readonly canvasRef = React.createRef() as MutableRefObject<HTMLCanvasElement>;
  private requestID: number | null = null;
  canvasResize = (width: number, height: number) => {
    this.canvasRef.current.width = width;
    this.canvasRef.current.height = height;
    const ctx = this.canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
    const starsList: any[] = [];
    for (let i = 0; i < starsCount; i++) {
      starsList.push(
        new Star({
          canvasWidth: width,
          canvasHeight: height,
          ctx: ctx
        })
      );
    }
    const animation = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.5; // 尾巴
      ctx.fillStyle = `hsla(${hueValue}, 64%, 6%, 2)`;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 1, l = starsList.length; i < l; i++) {
        starsList[i].draw();
      }
      this.requestID = window.requestAnimationFrame(animation);
    };
    if (this.requestID) {
      window.cancelAnimationFrame(this.requestID);
    }
    animation();
  };

  render() {
    return (
      <ResizeObserver
        onResize={debounce(({ width, height }) => {
          this.canvasResize(width, height);
        }, 400)}
      >
        <StyleWrapper>
          <canvas ref={this.canvasRef} className="star-canvas"></canvas>
          <div className="bg-wrapper"></div>
        </StyleWrapper>
      </ResizeObserver>
    );
  }
}

export default UniverseBackground;
