import React, { FC } from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

import useWindowDimensions from '../../hooks/use-window-dimensions';
import opacityHexCodes from '../../utils/opacity-hex-codes';
import colors from '../../utils/tree-colors';

const TreesAnimation: FC = () => {
  let { width, height } = useWindowDimensions();
  let currentColor: string;
  let branchLength: number;
  let numTreesDrawn = 0;
  const layers = [
    { numTrees: 11, mobileTrees: 6, sizeFactor: 20, opacity: '35' },
    { numTrees: 11, mobileTrees: 6, sizeFactor: 17, opacity: '45' },
    { numTrees: 10, mobileTrees: 5, sizeFactor: 14, opacity: '55' },
    { numTrees: 10, mobileTrees: 5, sizeFactor: 12, opacity: '65' },
    { numTrees: 12, mobileTrees: 7, sizeFactor: 10, opacity: '75' },
    { numTrees: 12, mobileTrees: 8, sizeFactor: 8.5, opacity: '40' },
    { numTrees: 11, mobileTrees: 7, sizeFactor: 9.5, opacity: '70' },
    { numTrees: 10, mobileTrees: 7, sizeFactor: 11, opacity: '85' },
    { numTrees: 11, mobileTrees: 6, sizeFactor: 12, opacity: '90' },
    {
      numTrees: 2,
      mobileTrees: 1,
      sizeFactor: 9.1,
      opacity: '100',
      color: '#fff',
    },
  ];
  const isMobile = width < 800;
  let totalTrees: number;
  if (isMobile) {
    totalTrees = layers.reduce((a, b) => {
      return { mobileTrees: a.mobileTrees + b.mobileTrees };
    }).mobileTrees;
  } else {
    totalTrees = layers.reduce((a, b) => {
      return { numTrees: a.numTrees + b.numTrees };
    }).numTrees;
  }

  function setup(p5: p5Types, canvasParentRef: Element) {
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.background(256);
    p5.frameRate(10);
  }

  function draw(p5: p5Types) {
    if (numTreesDrawn < totalTrees) {
      // set drawing properties for the current tree
      currentColor = p5.random(colors);
      let maxTreesInLayer = 0;
      for (let layer of layers) {
        let numTreesInLayer = isMobile ? layer.mobileTrees : layer.numTrees;
        if (numTreesDrawn < maxTreesInLayer + numTreesInLayer) {
          const { color, opacity, sizeFactor } = layer;
          currentColor = color || currentColor + opacityHexCodes[opacity];
          branchLength = height / sizeFactor;
          break;
        } else {
          maxTreesInLayer += numTreesInLayer;
        }
      }
      p5.stroke(currentColor);

      // position pen
      if (numTreesDrawn < totalTrees - 2) {
        // for trees other than last two, position pen at random x value
        p5.translate(p5.random(width), height);
      } else {
        // for last two trees, position within the center 1/3 of the viewable area
        p5.translate(p5.random(width / 3, (2 * width) / 3), height);
      }

      // draw one tree using recursive branching
      branch(p5, branchLength);
      numTreesDrawn++;
    }
  }

  function branch(p5: p5Types, branchLength: number) {
    // make each branch a random factor smaller than the previous
    branchLength *= p5.random(0.62, 0.86);
    // set branch width proportionally
    p5.strokeWeight(branchLength * 0.35);
    p5.line(0, 0, 0, -branchLength);
    p5.translate(0, -branchLength);

    // exit condition: branch length < 2 pixels
    if (branchLength > 2) {
      // save the current transformation state
      p5.push();
      const leftBranchLength = branchLength;
      // rotate by random angle in range
      const randomLeftAngle = p5.radians(p5.random(10, 40));
      p5.rotate(randomLeftAngle);
      // draw branch
      p5.line(0, 0, 0, -leftBranchLength);
      // move to the end of the branch
      p5.translate(0, -leftBranchLength);
      // recursively branch
      branch(p5, leftBranchLength);
      // restore the previous transformation state
      p5.pop();

      // repeat with a branch to the left
      p5.push();
      const rightBranchLength = branchLength * p5.random(0.8, 1.05);
      const randomRightAngle = p5.radians(p5.random(-40, -10));
      p5.rotate(randomRightAngle);
      p5.line(0, 0, 0, -rightBranchLength);
      p5.translate(0, -rightBranchLength);
      branch(p5, rightBranchLength);
      p5.pop();
    }
  }

  return <Sketch setup={setup} draw={draw} />;
};

export default TreesAnimation;
