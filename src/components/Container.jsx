import { useState } from 'react'
import Stats from './Stats'
import Textarea from './Textarea'

const Container = () => {
  const [text, setText] = useState('')

  return (
    <main className="container">
      <Textarea setText={setText} text={text} />
      <Stats text={text} />
    </main>
  )
}

export default Container
