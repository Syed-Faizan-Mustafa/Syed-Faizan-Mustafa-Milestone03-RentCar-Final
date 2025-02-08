export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-01'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
"  skWX57Ha7HXOZiPVZFwWlb95JOslFqPY0VAwDVhWNNYpluCJqwXAClIsqQbUF6PdsAOWWj2mlRu9RVC9ztkDQjk25XB9PPM5n2nsxHgxCzA42XUh6KV6jko32CDwFR1xGNSvhyqc7oj8DPGk7eDFSFpIr8GShDSb1KAp11z6qf5LdlbB0bAA",
  'Missing environment variable: NEXT_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}