export default class Base {
  constructor () {
    console.log('Base class')
  }

  saveInDatabase (pCollection, pObject) {
    console.log('pCollection :>> ', pCollection)
    console.log('pObject :>> ', pObject)

    pCollection.add(pObject).then((result) => {
      console.log(result)
    }).catch((err) => {
      console.error(err)
    })
  }

  logError (pDescription, pError, pMethod) {
    console.error(`Error: ${pDescription}; ${pError}. In Method: ${pMethod}`)
  }
}
