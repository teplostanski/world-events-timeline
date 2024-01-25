import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { transitionIsLocked } from './transitionLock';

describe('transitionIsLocked', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runAllTimers();
  });

  it('должен возвращать false и блокировать при первом вызове', () => {
    const result = transitionIsLocked(1000);
    expect(result).toBe(false);
    expect(transitionIsLocked(1000)).toBe(true);
  });

  it('должен оставаться заблокированным до истечения таймаута', () => {
    transitionIsLocked(1000);
    expect(transitionIsLocked(1000)).toBe(true);

    vi.advanceTimersByTime(500);
    expect(transitionIsLocked(1000)).toBe(true);

    vi.advanceTimersByTime(500);
    expect(transitionIsLocked(1000)).toBe(false);
  });

  it('должен корректно обрабатывать нулевой таймаут', () => {
    const initialState = transitionIsLocked(0);
    expect(initialState).toBe(false);

    vi.advanceTimersByTime(0);
    expect(transitionIsLocked(0)).toBe(false);
  });
});
