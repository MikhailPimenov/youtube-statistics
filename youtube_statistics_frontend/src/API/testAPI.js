import axios from 'axios'

function getTestModel(url, setTestData) {
  console.log(url)

  axios
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response)
      setTestData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}

export default getTestModel
