/**
 * ---- Examples -----
    fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    })

    fetch('https://mywebsite.com/mydata.json')
 */

// Constant for Topshop-Uk
const storeCode = 'ts-uk'
import { API_KEY, API_URL } from 'react-native-dotenv'

export default function ApiGateway({ url, method = 'GET', payload = {} }) {
  // console.log('Arcadia API GATEWAY : ', url, method, payload)
  // console.log(`API :::, ${API_URL}/${url}`)

  return new Promise((resolve, reject) => {
    if (!url || url === '') reject('Error: not url on request')
    fetch(`${API_URL}/${url}`, {
      method: method,
      headers: {
        'Arcadia-Api-Key': API_KEY,
        'Content-Type': 'application/json',
      }
      // body: JSON.stringify(payload)
    })
      .then((res) => {
        console.log('Arcadia Response status', res.status)
        if (res._bodyText) resolve(JSON.parse(res._bodyText))
      })
      .catch((err) => {
        reject(err)
        console.log('Arcadia Error', err)
      })
  })
}