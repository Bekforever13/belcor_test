import { CategoriesCard, Tests } from '@/components'
import { useSelectors } from '@/hooks/useSelectors'

const categories = [
  {
    id: 1,
    title: 'Измерение атмосферного давления',
  },
  {
    id: 2,
    title: 'Закон Ома для участка цепи',
  },
  {
    id: 3,
    title: 'Давление газов, жидкостей и твёрдых тел',
  },
  {
    id: 4,
    title: 'Электрический ток. Источники тока',
  },
]

const Home = () => {
  const { selectedTestID } = useSelectors()
  return (
    <div className="flex flex-col gap-y-10 items-center">
      <h1>Тесты по физике</h1>
      {selectedTestID === 0 && (
        <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {categories.map((cat, idx) => {
            return <CategoriesCard cat={cat} key={idx} />
          })}
        </div>
      )}
      {selectedTestID !== 0 && <Tests />}
    </div>
  )
}

export { Home }
