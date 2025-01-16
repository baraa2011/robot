import { describe, it, expect, vi, beforeEach } from 'vitest';
import main from './main.js';

vi.mock('./utils/getDimension.js', () => ({
  default: vi.fn((_, prompt) => {
    if (prompt.includes('width')) return Promise.resolve(5);
    if (prompt.includes('height')) return Promise.resolve(5);
  }),
}));

vi.mock('./utils/drawRoom.js', () => ({
  default: vi.fn(),
}));

vi.mock('./utils/isPositionValid.js', () => ({
  default: vi.fn((x, y, width, height) => x >= 0 && x < width && y >= 0 && y < height),
}));

vi.mock('./utils/constants.js', () => ({
  directions: ['N', 'E', 'S', 'W'],
  moves: {
    N: { x: 0, y: -1 },
    E: { x: 1, y: 0 },
    S: { x: 0, y: 1 },
    W: { x: -1, y: 0 },
  },
}));

beforeEach(() => {
  vi.resetModules();
  vi.clearAllMocks();
});

describe('Robot Movement Tests', () => {
  it('should navigate correctly and return the final position (1 3) N', async () => {
    
    vi.mock('./utils/getStartPosition.js', () => ({
      default: vi.fn(() => Promise.resolve({ x: 1, y: 2, orientation: 'N' })),
    }));
    
    vi.mock('./utils/getCommands.js', () => ({
      default: vi.fn(() => Promise.resolve('RFRFFRFRF')),
    }));

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await main();

    expect(logSpy).toHaveBeenCalledWith('\nFinal position: (1 3) N');

    logSpy.mockRestore();
  });

  
});
