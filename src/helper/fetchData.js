const fetchData = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(data => resolve(data.json()))
        .catch(err => reject(err))
    })
}

export default fetchData