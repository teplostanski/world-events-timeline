import { describe, it, expect } from 'vitest';
import bezierEase from './bezier';

describe('bezierEase', () => {
  it('должен возвращать 0 при входном значении 0', () => {
    const ease = bezierEase({ x: 0.15, y: 0.33 }, { x: 0, y: 1 });
    expect(ease(0)).toBe(0);
  });

  it('должен возвращать 1 при входном значении 1', () => {
    const ease = bezierEase({ x: 0.15, y: 0.33 }, { x: 0, y: 1 });
    expect(ease(1)).toBe(1);
  });

  it('должен возвращать значение между 0 и 1 при входном значении 0.5', () => {
    const ease = bezierEase({ x: 0.15, y: 0.33 }, { x: 0, y: 1 });
    const result = ease(0.5);
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(1);
  });

  it('должен корректно обрабатывать линейную кривую', () => {
    const ease = bezierEase({ x: 0.5, y: 0.5 }, { x: 0.5, y: 0.5 });
    expect(ease(0.5)).toBeCloseTo(0.5, 2);
  });

  it('должен корректно обрабатывать крайние контрольные точки', () => {
    const ease = bezierEase({ x: 0, y: 0 }, { x: 1, y: 1 });
    expect(ease(0.25)).toBeCloseTo(0.25, 2);
    expect(ease(0.5)).toBeCloseTo(0.5, 2);
    expect(ease(0.75)).toBeCloseTo(0.75, 2);
  });
});
