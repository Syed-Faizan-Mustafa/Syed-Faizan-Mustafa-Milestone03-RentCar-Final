// import { createClient } from "next-sanity";

// const client = createClient({
//   projectId: "ba9c7oue",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2023-10-10",
// });

// export async function sanityFetch<T>({ 
//     query, 
//     params = {} 
//   }: { 
//     query: string; 
//     params?: Record<string, unknown>; 
//   }): Promise<T> {
//     return await client.fetch<T>(query, params);
//   }

import { createClient } from "next-sanity";

const client = createClient({
    projectId: "ba9c7oue",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-10"
});

export async function sanityFetch<T>({ query, params = {} }: { query: string; params?: Record<string, unknown> }): Promise<T> {
    return await client.fetch<T>(query, params);
}