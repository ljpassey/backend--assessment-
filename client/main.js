const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const form = document.querySelector('form')
const dogContainer = document.getElementById('dogContainer')

const baseURL = `http://localhost:4004/api/dogs`

const dogsCallback = ({ data: dogs }) => displayDogs(dogs)
const errCallback = err => console.log(err)

const getAllDogs = () => axios.get(baseURL).then(dogsCallback).catch(errCallback)
const createDog = body => axios.post(baseURL, body).then(dogsCallback).catch(errCallback)
const deleteDog = id => axios.delete(`${baseURL}/${id}`).then(dogsCallback).catch(errCallback)
const updateDog = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(dogsCallback).catch(errCallback)

const getCompliment = () => {
    axios.get("http://localhost:4004/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4004/api/fortune")
    .then(res => {
        const data = res.data;
        alert(data);
    })
};

function submitHandler(e) {
    e.preventDefault()

    let type = document.getElementById('dogType')
    let name = document.getElementById('dogName')
    let imageURL = document.getElementById('img')

    let bodyObj = {
        type: type.value,
        name: name.value, 
        imageURL: imageURL.value
    }

    createDog(bodyObj)

    type.value = ''
    name.value = ''
    imageURL.value = ''
} 

function createDogCard(dog) {
    const dogCard = document.createElement('div')
    dogCard.classList.add('dog-card')

    dogCard.innerHTML = `<img src=${dog.imageURL} class="dog-cover-image"/>
    <p class="dog-name">${dog.name}</p>
    <div class="btns-container">
        <p class="dog-type">${dog.type}</p>
        <button >Favorite</button>
    </div>
    <button onclick="deleteDog(${dog.id})">delete</button>`

    dogContainer.appendChild(dogCard)
}

function displayDogs(arr) {
    dogContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createDogCard(arr[i])
    }
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', submitHandler)

getAllDogs()