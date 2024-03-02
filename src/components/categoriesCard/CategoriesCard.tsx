import { useActions } from '@/hooks/useActions'
import { FC } from 'react'
import coverImg from '@/assets/img_cover.jpg'
import { Button } from 'antd'

interface Props {
  cat: {
    id: number
    title: string
  }
}
const CategoriesCard: FC<Props> = ({ cat }) => {
  const { setSelectedTestID } = useActions()

  const handleStartTest = () => {
    setSelectedTestID(cat.id)
  }

  return (
    <div className="h-[400px] flex flex-col items-center shadow-lg rounded-2xl">
      <img src={coverImg} alt="photo" />
      <div className="flex items-center justify-between w-full h-[100px] px-10">
        <span>{cat.title}</span>
        <Button type='primary' onClick={handleStartTest}>Start</Button>
      </div>
    </div>
  )
}

export { CategoriesCard }
