import filterCommands from './filterCommands'

describe('filterCommands', () => {
  test('should return command as array', () => {
    const result = filterCommands('lmr')
    expect(result).toEqual(['l', 'm', 'r'])
  })

  test('should convert to lowercase', () => {
    const result = filterCommands('LMR')
    expect(result).toEqual(['l', 'm', 'r'])
  })

  test('should filter out invalid characters', () => {
    const result = filterCommands('l2hm5tr')
    expect(result).toEqual(['l', 'm', 'r'])
  })

  test('should return empty array if only empty string is supplied', () => {
    const result = filterCommands('')
    expect(result).toEqual([''])
  })
})
