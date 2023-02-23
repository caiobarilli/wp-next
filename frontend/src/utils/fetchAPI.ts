/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function fetchAPI(
  query = '',
  { variables }: Record<string, any> = {}
) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_API_URL) {
    const res = await fetch(process.env.WORDPRESS_API_URL, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        query,
        variables
      })
    })

    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
  }
}
