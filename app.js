console.log("Let's get this party started!");

async function getData(word){
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=hJHCuptUeoekX3VuPZQ0EedAixsQNeIz&q=${word}&limit=25&offset=0&rating=g&lang=en`);
    const img = document.createElement("img");
    img.classList.add('m-3');
    const image = res.data.data[0].images.original.url;
    img.src=image;
    container.append(img);
}

const form = document.querySelector('form'),
      word = document.querySelector('input[type="text"]'),
      removeBtn = document.querySelector('button.rmv'),
      container = document.querySelector('.container-fluid.images');

form.addEventListener('submit',function(e){
    e.preventDefault();
    getData(word.value);
})

removeBtn.addEventListener('click',function(e){
    e.preventDefault();
    container.querySelectorAll('*').forEach(n=>n.remove());
})

