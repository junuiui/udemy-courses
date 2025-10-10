import { useParams } from "react-router-dom"

export default function EventDetailPage() {

  const param = useParams()

  return (
    <h1>{param.id}</h1>
  )
}