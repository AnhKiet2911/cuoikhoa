const producList = document.querySelector('.product-list')

fetch('https://6584392b4d1ee97c6bcf4612.mockapi.io/product/contribute', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(contribute =>{
        contribute.forEach(
           (con)=>{
            const conItem = document.createElement('div')
            conItem.classList.add('card')

            conItem.innerHTML =
            `
                <img class="card-img-top" src="${con.img}"/>
                <div class="card-body">
                <p class="card-text">Số thứ tự: ${con.id}</p>
                <p class="card-text">Tên sản phẩm: ${con.product}</p>
                <p class="card-text">Mô tả sản phẩm: ${con.des}</p>
                </div>
            `
            producList.appendChild(conItem)
           } 
        )
  }
    // mockapi returns first 10 tasks that are not completed
  ).catch(error => {
    // handle error
  })