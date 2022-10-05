const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(e => console.error(e))
}

function addNewUser(newUser) {
  axios.post(url, newUser)
    .then(response => {
      console.log(response)
    })
    .catch(e =>console.error(e))
}

const newUser = {
  name: "Henrique Ferreira",
  avatar: "https://avatars.githubusercontent.com/u/62857389?v=4",
  city: "SP"
}

getUsers()
addNewUser(newUser)