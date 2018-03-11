import ApiGateway from '../ApiGateway/ApiGateway'

export function updateCagegory(category) {
  return {
    type: 'UPDATE_CATEGORIES',
    category
  }
}

export function updateSubCagegory(category) {
  return {
    type: 'UPDATE_SUBCATEGORY',
    category
  }
}

// ======== HANDLERS ======== //

export function getCategory() {
  const categoryRequest = {
    url: 'navigation'
  }
  return (dispatch) => {
    ApiGateway(categoryRequest)
      .then((response) => {
        // console.log('ACTION GET CATEGORY : ', response)
        dispatch(updateCagegory(response.navigationEntries))
      })
      .catch((error) => {
        console.log('ACTION ERROR ::::', error)
      })
  }
}
