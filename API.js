const tableboxList = document.querySelector('.tablebox') 

fetch('https://6584392b4d1ee97c6bcf4612.mockapi.io/product/Health', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(Health => {
    // mockapi returns first 10 tasks that are not completed
    Health.forEach(
        (health)=>{
            const healthItem = document.createElement('div')
            healthItem.classList.add('card')
            healthItem.innerHTML =
            `
                <img class="card-img-top" src="${health.img}" >
                <div class="card-body">
                    <h5 class = "card-title">${health.title}</h5>
                    <p class="card-text">${health.text}</p>
                    <a href="${health.href}"  class="btn btn-success">Xem</a>
                </div>
            `
            tableboxList.appendChild(healthItem)
        }
    )
  }).catch(error => {
    // handle error
  })