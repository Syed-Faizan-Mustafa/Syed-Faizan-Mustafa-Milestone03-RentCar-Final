//env.ts
export const apiVersion = process.env.SANITY_API_VERSION || '2023-08-01'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = process.env.SANITY_API_TOKEN // No assertion for optional token

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) throw new Error(errorMessage)
  return v
}