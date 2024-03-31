export const countCharactersAndWords = (string) => {
  string = string.trim()

  const characterCount = string.length

  const wordCount = string.split(/\s+/).filter((word) => word.length > 0).length

  return { characters: characterCount, words: wordCount }
}
