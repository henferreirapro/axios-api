const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(e => console.error(e))
}

// POST
function addNewUser(newUser) {
  axios.post(url, newUser)
    .then(response => {
      console.log(response)
    })
    .catch(e =>console.error(e))
}

// GET com Parametros
function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(response => {
      const data = response.data
      userAvatar.src = data.avatar
      userName.textContent = data.name
      userCity.textContent = data.city
      userID.textContent = `ID: ${data.id}`
    })
    .catch(e => console.error(e))
}

// PUT
function updateUser(userUpdated, id) {
  axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(e => console.error(e))
}

// DELETE
function deleteUser(id) {
  axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(e => console.error(e))
}

const newUser = {
  name: "Henrique Ferreira",
  avatar: "https://avatars.githubusercontent.com/u/62857389?v=4",
  city: "SP"
}

const userUpdated = {
  name: "Marcelo Calvinho",
  avatar: "https://picsum.photos/250/250",
  city: "Recife"
}

getUsers()
getUser(1)
// addNewUser(newUser)
// updateUser(userUpdated, 2)
deleteUser(2)