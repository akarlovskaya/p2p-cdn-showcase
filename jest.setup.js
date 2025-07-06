// jest.setup.js
import "@testing-library/jest-dom";
import "jest-canvas-mock";
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};
