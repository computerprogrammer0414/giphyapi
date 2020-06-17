    const searchForm = document.getElementById('search-form')
    const searchInput = document.getElementById('search-input')
    const resultEl = document.getElementById('results')

    $('#filtersubmit').click(function(e)  {
      e.preventDefault()
      const q = searchInput.value
      search(q)
    })

    function search(q) {
      const apikey = 'yaodqvqLaqyaORuc9A7bW6JHgruXo0Zt'
      // const limit = 'int(24)'
      const path =
        `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}&limit=30`;

    

      fetch(path).then(function (res) {
        return res.json(); // how do I want to handle response= Return the Promise 
      }).then(function (json) {
        console.log(json.data[0].images.fixed_width.url)

        let resultsHTML = ''
        json.data.forEach(function (obj) {
          console.log(obj.images.fixed_width.url)
          const url = obj.images.fixed_width.url
          const title = obj.title

        resultsHTML += `<img class="item" src="${url}" alt="${title}">`
        })
        resultEl.innerHTML = resultsHTML // Data is actual 
      }).catch(function (err) { //Catch Block
        console.log(err.message)
      })}

     