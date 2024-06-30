const imgInput = document.querySelector('#img')
const productInput = document.querySelector('#product')
const desInput = document.querySelector('#des')
const button = document.querySelector('#button1')

button.addEventListener('click',
    (e)=>{
        e.preventDefault();
        
        const imgValue = imgInput.value;
        const productValue = productInput.value;
        const desValue = desInput.value;

        const product = {
            img: imgValue,
            product: productValue,
            des:desValue,
        };
        console.log(product);

        fetch('https://6584392b4d1ee97c6bcf4612.mockapi.io/product/contribute', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify(product)
            }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
            }).then(task => {
            // do something with the new task
            console.log(task)
            }).catch(error => {
            // handle error
            })
            alert('Đóng góp thành công');
    }
)