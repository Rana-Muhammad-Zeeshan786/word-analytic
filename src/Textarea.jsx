import { useState } from 'react'
import Warning from './Warning'

const Textarea = () => {
  const [text, setText] = useState('')
  const [warningText, setWarningText] = useState('')

  const onTextareChange = (e) => {
    e.preventDefault()

    let newText = e.target.value

    if (newText.includes('<script>')) {
      setWarningText('No script tag allowed')
      newText = newText.replace('<script>', '')
    } else if (newText.includes('@')) {
      setWarningText('No @ symbol allowed')
      newText = newText.replace('@', '')
    } else {
      setWarningText('')
    }

    setText(newText)
  }

  return (
    <div className="textarea">
      <textarea
        value={text}
        placeholder="Enter your text"
        spellCheck="false"
        onChange={onTextareChange}
      />
      <Warning warningText={warningText} />
    </div>
  )
}

export default Textarea
