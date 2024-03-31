import { useMemo } from 'react'
import { countCharactersAndWords } from '../utils/commonFunctions'
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from '../utils/constants'

const Stats = ({ text }) => {
  const { words, characters } = useMemo(
    () => countCharactersAndWords(text),
    [text]
  )

  return (
    <section className="stats">
      <Stat label="Words" number={words} />
      <Stat label="Characters" number={characters} />
      <Stat label="Instagram" number={INSTAGRAM_MAX_CHARACTERS - characters} />
      <Stat label="Facebook" number={FACEBOOK_MAX_CHARACTERS - characters} />
    </section>
  )
}

export default Stats

const Stat = ({ label, number }) => {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 && 'stat__number--limit'}`}>
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  )
}
