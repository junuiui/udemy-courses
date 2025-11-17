// [ ] - dynamic pages

import { useRouter } from 'next/router'

function DetailPage() {

  const router = useRouter();

  // send a request to the backend API
  // to fetch the news item with newsId


  return <h1>{router.query.newsId}</h1>
}

export default DetailPage;