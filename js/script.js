  
    const searchForm = document.getElementById('search-form')
    const searchInput = document.getElementById('search-input')
    const resultEl = document.getElementById('results')

    searchForm.addEventListener('submit', function(e)  {
      e.preventDefault()
      const q = searchInput.value
      search(q)
    })

    function search(q) {
      const apikey = 'yaodqvqLaqyaORuc9A7bW6JHgruXo0Zt'
      const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}&limit=30`;

      fetch(path).then(function (res) {
            return res.json(); // how do I want to handle response= Return the Promise 
      }).then(function (json) {
      console.log(json.data[0].images.fixed_width.url)
      let resultsHTML = ''

      json.data.forEach(function (obj) {
          console.log(obj.images.fixed_width.url)
          const url = obj.images.fixed_width.url
          const width = obj.images.fixed_width.width
          const height = obj.images.fixed_width.height
          const title = obj.title

          resultsHTML += `<img 
              class ="item"
              src="${url}" 
              width="${width}" 
              height="${height}" 
              alt="${title}"
              >`
    })
      
          resultEl.innerHTML = resultsHTML 
      // Data is actual 
      }).catch(function (err) { //Catch Block
      console.log(err.message)
      })}




      const grid = document.querySelector(".grid");
      const rowSize = parseInt(getComputedStyle(grid).getPropertyValue("grid-auto-rows"), 10);
      const rowGap = parseInt(getComputedStyle(grid).getPropertyValue("grid-gap"), 10);
      const gridItems = [];

      const positionGridItems = () => {
      gridItems.forEach(({ item, content }) => {
      content.classList.remove("cover");
      const rowSpan = Math.ceil(
      (content.offsetHeight + rowGap) / (rowSize + rowGap));

      item.style.setProperty("--row-span", rowSpan);
      content.classList.add("cover");
  });
};

window.addEventListener("load", positionGridItems);
window.addEventListener("resize", _.debounce(positionGridItems, 100));

  const generateImages = (el, count = 10) => {
  const getRandomSize = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

  const newImage = () => {
    const item = document.createElement("div");
    item.className = "grid__item";

    const content = document.createElement("img");
    const width = getRandomSize(200, 600);
    const height = getRandomSize(200, 400);
    content.src = `https://unsplash.it/${width}/${height}`;

    item.appendChild(content);
    gridItems.push({ item, content });

    return item;
  };

  let images = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {if (window.CP.shouldStopExecution(0)) break;images.appendChild(newImage());}window.CP.exitedLoop(0);
  el.appendChild(images);
};

 generateImages(grid, 40);