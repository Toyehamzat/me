import { ReactP5Wrapper } from "react-p5-wrapper";

let angle: number;

const Sketch = (p5: any) => {
  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    angle = p5.PI / 4;
    p5.stroke(255);
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, p5.height);
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16); // vary the angle using sin()
    branch(100);
  };

  function branch(len: number) {
    p5.line(4, 4, 4, -len);
    p5.translate(1, -len);
    if (len > 2) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.67);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.67);
      p5.pop();
    }
  }
};

const FractalTree = () => (
  <div className="pb-20">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default FractalTree;