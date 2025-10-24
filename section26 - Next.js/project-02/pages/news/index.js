// domain.com/news/...

import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

function NewsPage() {

  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        {/* <a href> sends a new HTTP request */}
        <li>
          <Link href="/news/1">
            list 1...
          </Link>
        </li>
      </ul>
    </Fragment>
  )
}

export default NewsPage;