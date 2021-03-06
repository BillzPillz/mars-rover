const filterCommands = (commands: string): string[] => {
  if (!commands) return ['']
  const validCharacters = ['l', 'r', 'm']

  return commands
    .toLowerCase()
    .split('')
    .filter(command => validCharacters.includes(command))
}

export default filterCommands
