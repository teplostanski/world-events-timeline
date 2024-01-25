import { describe, it, expect } from 'vitest';
import { IData } from '../../types/types';

describe('Сортировка данных', () => {
  const mockData: IData = [
    {
      title: 'Test Period',
      items: [
        { year: 2000, descr: 'Event C' },
        { year: 1990, descr: 'Event A' },
        { year: 1995, descr: 'Event B' },
      ],
    },
  ];

  it('должен сортировать события по годам в порядке возрастания', () => {
    const sortedData = mockData.map((period) => ({
      ...period,
      items: period.items.sort((a, b) => a.year - b.year),
    }));

    expect(sortedData[0].items[0].year).toBe(1990);
    expect(sortedData[0].items[1].year).toBe(1995);
    expect(sortedData[0].items[2].year).toBe(2000);
  });

  it('должен сохранять заголовок периода после сортировки', () => {
    const sortedData = mockData.map((period) => ({
      ...period,
      items: period.items.sort((a, b) => a.year - b.year),
    }));

    expect(sortedData[0].title).toBe('Test Period');
  });

  it('должен корректно обрабатывать пустой массив событий', () => {
    const emptyData: IData = [{ title: 'Empty Period', items: [] }];
    const sortedData = emptyData.map((period) => ({
      ...period,
      items: period.items.sort((a, b) => a.year - b.year),
    }));

    expect(sortedData[0].items).toHaveLength(0);
    expect(sortedData[0].title).toBe('Empty Period');
  });
});
