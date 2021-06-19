import generateGrid from './generateGrid'

describe('generateGrid', () => {
  test('should correctly generate grid', () => {
    const result = generateGrid()
    expect(result.length).toBe(100)
  })
})
