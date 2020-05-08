// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topicsContainer = document.querySelector('.topics')

function topicAppender(){

    axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {

        // console.log(response.data.topics)

        response.data.topics.forEach(topic => {

            const singleTopic = document.createElement('div')
            singleTopic.classList.add('tab')

            singleTopic.textContent = topic 

            topicsContainer.appendChild(singleTopic)
        })
    })
}

topicAppender()