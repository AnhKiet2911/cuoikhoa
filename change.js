const numInput = document.querySelector('#num')
const imgInput = document.querySelector('#img')
const productInput = document.querySelector('#product')
const desInput = document.querySelector('#des')
const btnInput = document.querySelector('#button1')

btnInput.addEventListener('click',
    (e)=>{
        e.preventDefault();
        const numValue = numInput.value
        const imgValue = imgInput.value;
        const productValue = productInput.value;
        const desValue = desInput.value;

        const fixed = {
            img: imgValue,
            product: productValue,
            des: desValue,
        }
        console.log(fixed);

        fetch('https://6584392b4d1ee97c6bcf4612.mockapi.io/product/contribute/' + numValue, {
            method: 'PUT', // or PATCH
            headers: {'content-type':'application/json'},
            body: JSON.stringify(fixed)
            }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
            }).then(task => {
            // Do something with updated task
            }).catch(error => {
            // handle error
            })
        alert('Cập nhật thành công')
    }
)