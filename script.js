let getPosts = async (n) => {

    let arr = []

    for (let i = 1; i <= n; i++) {

      let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`);  
      let post = await response.json()
      arr.push(post)

    }

    return arr

} 

getPosts(10).then((result) => console.log(result))
