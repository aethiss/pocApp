import ApiGateway from '../ApiGateway/ApiGateway'

export function updatePdp(pdp) {
  return {
    type: 'UPDATE_PDP',
    pdp
  }
}

export function loadPdp() {
  return {
    type: 'LOAD_PDP'
  }
}

export function resetPdp() {
  return {
    type: 'RESET_PDP'
  }
}

// ======== HANDLERS ======== //

export function getProduct(seoUrl) {
  const pdpRequest = {
    url: this.replaceToHttps(seoUrl)
  }
  return (dispatch) => {
    dispatch(loadPdp())
    ApiGateway(pdpRequest)
      .then((response) => {
        dispatch(updatePdp(response))
      })
      .catch((error) => {
        console.log('PDP ACTION ERROR ::::', error)
      })
  }
}

replaceToHttps = (urlString) => {
  return urlString.replace("http://", "https://")
}
