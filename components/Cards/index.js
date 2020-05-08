// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

function cardCreator(){

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    
    .then(response => {
        console.log(response)
        response.data.articles.javascript.forEach(article => {

            const cardDiv = document.createElement("div")
            const headlineDiv = document.createElement("div")
            const authorDiv = document.createElement("div")
            const imgDiv = document.createElement("div")
            const authorImg = document.createElement("img")
            const authorName = document.createElement("span")
        
            cardDiv.appendChild(headlineDiv)
            cardDiv.appendChild(authorDiv)
            authorDiv.appendChild(imgDiv)
            authorDiv.appendChild(authorName)
            imgDiv.appendChild(authorImg)
        
            cardDiv.classList.add('card')
            headlineDiv.classList.add('headline')
            authorDiv.classList.add('author')
            imgDiv.classList.add('img-container')

            headlineDiv.textContent = article.headline
            authorImg.src = article.authorPhoto
            authorName.textContent = article.authorName

            // console.log(cardDiv)

            cardsContainer.appendChild(cardDiv)
        })

        response.data.articles.node.forEach(article => {

            const cardDiv = document.createElement("div")
            const headlineDiv = document.createElement("div")
            const authorDiv = document.createElement("div")
            const imgDiv = document.createElement("div")
            const authorImg = document.createElement("img")
            const authorName = document.createElement("span")
        
            cardDiv.appendChild(headlineDiv)
            cardDiv.appendChild(authorDiv)
            authorDiv.appendChild(imgDiv)
            authorDiv.appendChild(authorName)
            imgDiv.appendChild(authorImg)
        
            cardDiv.classList.add('card')
            headlineDiv.classList.add('headline')
            authorDiv.classList.add('author')
            imgDiv.classList.add('img-container')

            headlineDiv.textContent = article.headline
            authorImg.src = article.authorPhoto
            authorName.textContent = article.authorName

            // console.log(cardDiv)

            cardsContainer.appendChild(cardDiv)

        })

        response.data.articles.jquery.forEach(article => {

            const cardDiv = document.createElement("div")
            const headlineDiv = document.createElement("div")
            const authorDiv = document.createElement("div")
            const imgDiv = document.createElement("div")
            const authorImg = document.createElement("img")
            const authorName = document.createElement("span")
        
            cardDiv.appendChild(headlineDiv)
            cardDiv.appendChild(authorDiv)
            authorDiv.appendChild(imgDiv)
            authorDiv.appendChild(authorName)
            imgDiv.appendChild(authorImg)
        
            cardDiv.classList.add('card')
            headlineDiv.classList.add('headline')
            authorDiv.classList.add('author')
            imgDiv.classList.add('img-container')

            headlineDiv.textContent = article.headline
            authorImg.src = article.authorPhoto
            authorName.textContent = article.authorName

            // console.log(cardDiv)

            cardsContainer.appendChild(cardDiv)

        })
        response.data.articles.bootstrap.forEach(article => {

            const cardDiv = document.createElement("div")
            const headlineDiv = document.createElement("div")
            const authorDiv = document.createElement("div")
            const imgDiv = document.createElement("div")
            const authorImg = document.createElement("img")
            const authorName = document.createElement("span")
        
            cardDiv.appendChild(headlineDiv)
            cardDiv.appendChild(authorDiv)
            authorDiv.appendChild(imgDiv)
            authorDiv.appendChild(authorName)
            imgDiv.appendChild(authorImg)
        
            cardDiv.classList.add('card')
            headlineDiv.classList.add('headline')
            authorDiv.classList.add('author')
            imgDiv.classList.add('img-container')

            headlineDiv.textContent = article.headline
            authorImg.src = article.authorPhoto
            authorName.textContent = article.authorName

            // console.log(cardDiv)

            cardsContainer.appendChild(cardDiv)

        })

        response.data.articles.technology.forEach(article => {

            const cardDiv = document.createElement("div")
            const headlineDiv = document.createElement("div")
            const authorDiv = document.createElement("div")
            const imgDiv = document.createElement("div")
            const authorImg = document.createElement("img")
            const authorName = document.createElement("span")
        
            cardDiv.appendChild(headlineDiv)
            cardDiv.appendChild(authorDiv)
            authorDiv.appendChild(imgDiv)
            authorDiv.appendChild(authorName)
            imgDiv.appendChild(authorImg)
        
            cardDiv.classList.add('card')
            headlineDiv.classList.add('headline')
            authorDiv.classList.add('author')
            imgDiv.classList.add('img-container')

            headlineDiv.textContent = article.headline
            authorImg.src = article.authorPhoto
            authorName.textContent = article.authorName

            // console.log(cardDiv)

            cardsContainer.appendChild(cardDiv)

        })
    })

}

cardCreator() 