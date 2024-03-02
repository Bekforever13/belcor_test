import { useSelectors } from '@/hooks/useSelectors'
import { Button, Table } from 'antd'
import { FC, useEffect, useState } from 'react'
import db from '@/db.json'
import { useActions } from '@/hooks/useActions'
import type { TableColumnsType } from 'antd'

interface IData {
  question_id: number
  your_answer: string
  is_correct: string
  right_answer: string
}

const columns: TableColumnsType<IData> = [
  {
    title: 'Вопрос №',
    dataIndex: 'question_id',
    sorter: (a, b) => a.question_id - b.question_id,
  },
  {
    title: 'Ваш ответ',
    dataIndex: 'your_answer',
  },
  {
    title: 'Правильно или неправильно',
    dataIndex: 'is_correct',
    sorter: (a, b) => a.question_id - b.question_id,
  },
  {
    title: 'Правильный ответ',
    dataIndex: 'right_answer',
  },
]

const ResultTable: FC<{ answers: string[] }> = ({ answers }) => {
  const { selectedTestID } = useSelectors()
  const { setSelectedTestID } = useActions()
  const [data, setData] = useState<IData[]>([])

  const handleClickAgain = () => {
    setSelectedTestID(0)
  }

  useEffect(() => {
    if (answers.length === 5) {
      db[selectedTestID - 1].map((el, index) => {
        setData((prev) => [
          ...prev,
          {
            question_id: index + 1,
            your_answer: answers[index],
            is_correct:
              answers[index] === el.right_answer
                ? 'Вы ответили правильно'
                : 'Вы ответили неправильно',
            right_answer: el.right_answer,
          },
        ])
      })
    }
  }, [answers.length])

  return (
    <div className="flex flex-col gap-y-20 max-w-[1000px]">
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        rowKey={(el) => el.question_id}
        scroll={{ x: true }}
        style={{ width: '100%' }}
      />
      <Button onClick={handleClickAgain} type="primary">
        Хотите попробовать ещё?
      </Button>
    </div>
  )
}

export { ResultTable }
