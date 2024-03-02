import { useState } from 'react'
import db from '@/db.json'
import { useSelectors } from '@/hooks/useSelectors'
import { Button, Radio } from 'antd'
import type { RadioChangeEvent } from 'antd'
import { ResultTable } from './ResultTable'

const Tests = () => {
  const { selectedTestID } = useSelectors()
  const [answers, setAnswers] = useState<string[]>([])
  const [value, setValue] = useState('')

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  const onClickNext = () => {
    if (value !== '') {
      setAnswers((prev) => [...prev, value])
    }
    setValue('')
  }

  if (answers.length === 5) {
    return <ResultTable answers={answers} />
  }

  return (
    <div className="flex flex-col gap-y-10 max-w-[500px]">
      <h2>{db[selectedTestID - 1][answers.length].question}</h2>
      <Radio.Group
        style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
        onChange={onChange}
        value={value}
      >
        {db[selectedTestID - 1][answers.length].answers.map((el) => (
          <Radio key={el} value={el}>
            {el}
          </Radio>
        ))}
      </Radio.Group>
      <Button type="primary" onClick={onClickNext}>
        Следующий вопрос
      </Button>
    </div>
  )
}

export { Tests }
