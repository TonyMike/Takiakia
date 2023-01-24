import axios from 'axios'

export async function Fetcher (url: any, options = {}) {
  try {
    let response
    if (!options) {
      response = await axios.get(url)
    } else {
      const data = response
      return data
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}
