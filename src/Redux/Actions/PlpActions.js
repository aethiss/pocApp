import ApiGateway from '../ApiGateway/ApiGateway'

export function updatePlp(plp) {
  return {
    type: 'UPDATE_PLP',
    plp
  }
}

export function loadPlp() {
  return {
    type: 'LOAD_PLP'
  }
}

export function updateSeoUrl(seoUrl) {
  return {
    type: 'UPDATE_SEO_URL',
    seoUrl
  }
}


// ======== HANDLERS ======== //

export function getProductList(seoUrl) {
  const plpRequest = {
    url: `/product/seo?seoUrl=${seoUrl}`
  }
  return (dispatch) => {
    dispatch(updateSeoUrl(seoUrl))
    dispatch(loadPlp())
    ApiGateway(plpRequest)
      .then((response) => {
        // console.log('ACTION GET PLP : ', response)
        if (response.products.length === 0) {
          dispatch(updatePlp([]))
        } else {
          dispatch(updatePlp(response.products))
        }
      })
      .catch((error) => {
        console.log('PLP ACTION ERROR ::::', error)
      })
  }
}
