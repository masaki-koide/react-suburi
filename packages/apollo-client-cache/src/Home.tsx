import React, { useCallback } from 'react'
import { useSearchRepositoriesQuery, useNowQuery } from "./generated/graphql"

export const Home = () => {
  const { data: repositories, loading, fetchMore } = useSearchRepositoriesQuery()
  const { data: now } = useNowQuery()

  const fetchAfter = useCallback(() => {
    fetchMore({
      variables: {
        after: repositories?.search.pageInfo.endCursor,
      }
    })
  }, [repositories, fetchMore])

  if (loading || !repositories || !now) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div>{`now ${now.now}`}</div>
      <ul>
        {repositories.search.edges?.map(({ node }) => {
          if (node.__typename !== 'Repository') return null

          return (
            <li key={node.id}>
              <a href={node.url} target="_blank">{`${node.nameWithOwner}`}</a>
              <span> ☆{node.stargazers.totalCount}</span>
            </li>
          )
        })}
      </ul>
      <div>
        {repositories.search.pageInfo.hasNextPage && <button onClick={fetchAfter}>Fetch More</button>}
      </div>
    </>
  )
}
