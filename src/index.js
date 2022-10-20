// write your code here


const menu = document.querySelector('#ramen-menu')
const details = document.querySelector("#ramen-detail")
const name1 = document.querySelector('.name')
const restaurant = document.querySelector(".restaurant")
const imag = document.querySelector(".detail-image")
const rating = document.querySelector('#rating-display')
const comments = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')
const submit = document.querySelector('#submit')

fetch('http://localhost:3001/ramens')

.then( res => res.json())
.then(data => topimages(data))

function topimages(data) {
    data.forEach(element => {
    const images = document.createElement('img')
    images.src = element.image
    menu.append(images)
    images.addEventListener('click', renderClick )

    function renderClick(data) {
        name1.textContent= element.name
        restaurant.textContent = element.restaurant
        imag.src = element.image
        rating.textContent = element.rating
        comments.textContent = element.comment
        
    }

})};


fetch('http://localhost:3001/ramens', {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
        'Accept': 'application/json'

    },
    body: JSON.stringify(newObject)
}
) 

submit.addEventListener('submit', e => {
e.preventDefault()

function newObject(data)  {
    e => {e.target 
    
   = e.target.new_name.value,
    e.target.new_restaurant.value,
    e.target.new_image.value,
    e.target.new_rating.value,
    e.target.new_comment.value


   
    }}
    .then(response => response.json()
    .then(data => console.log(data))
})







