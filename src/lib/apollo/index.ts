import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  NormalizedCache,
  NormalizedCacheObject,
  InMemoryCache,
} from '@apollo/client'

const cache = new InMemoryCache({
  typePolicies: {},
})

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient() {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}`,
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: httpLink,
    cache,
  })
}

export function initializeApollo(initialState = null) {
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  if (initialState) {
    apolloClientGlobal.cache.restore(
      initialState as NormalizedCacheObject & NormalizedCache,
    )
  }

  if (typeof window === 'undefined') return apolloClientGlobal

  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])

  return store
}
