function generateNumber(){

    const min = Math.ceil(document.querySelector('.input-main').value)
    const max = Math.floor(document.querySelector('.input-max').value)

    const result = Math.floor(Math.random() * (max - min +1)) + min;

    alert(result)
    console.log(min, max);
}

