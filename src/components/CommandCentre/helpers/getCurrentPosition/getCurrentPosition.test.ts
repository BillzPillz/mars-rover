import getCurrentPosition from './getCurrentPosition'

describe('getCurrentPosition', () => {
  const mockRover = {
    x: 1,
    y: 2,
    id: 'r-1',
    direction: 1,
  }

  test('should return correct position', () => {
    const result = getCurrentPosition(mockRover)
    expect(result).toEqual(`1:2:N`)
  })
})
