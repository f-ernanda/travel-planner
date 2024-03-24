import Detail from '@/templates/Detail'

export default function Result({ params }: { params: { id: string } }) {
  const { id: placeId } = params
  return <Detail $id={placeId} />
}
