import { describe, it, expect } from 'vitest';
import { getFormattedNumber } from './utils';

describe('getFormattedNumber', () => {
  it('должен добавлять ведущий ноль к однозначным числам', () => {
    expect(getFormattedNumber(0)).toBe('00');
    expect(getFormattedNumber(1)).toBe('01');
    expect(getFormattedNumber(9)).toBe('09');
  });

  it('не должен изменять двузначные числа', () => {
    expect(getFormattedNumber(10)).toBe('10');
    expect(getFormattedNumber(42)).toBe('42');
    expect(getFormattedNumber(99)).toBe('99');
  });

  it('должен корректно обрабатывать числа больше 99', () => {
    expect(getFormattedNumber(100)).toBe('100');
    expect(getFormattedNumber(999)).toBe('999');
  });

  it('должен корректно обрабатывать отрицательные числа', () => {
    expect(getFormattedNumber(-1)).toBe('-1');
    expect(getFormattedNumber(-10)).toBe('-10');
  });
});
