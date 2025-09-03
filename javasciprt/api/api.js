function firstapi(params) {
    // let url = "https://meowfacts.herokuapp.com/"
    // let line = document.querySelector("p")

    // async function api() {
    //     console.log("getting data....");

    //     let response = await fetch(url)
    //     console.log(response)
    //     let data = await response.json()
    //     console.log(data);
    //     console.log(data.data);
    //     line.innerText = data.data[0];
    // }
    // api()

    // // wiithout async
    // function oa() {
    //     let response = fetch(url)
    //     .then((response) => {
    //         return response.json()

    //     }).then((response) => {
    //         console.log(response);
    //         line.innerText = response.data[0];
    //     })

    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }
    // oa()
}



let p1 = document.querySelector(".p1")
let p2 = document.querySelector(".p2")
let pic = document.querySelector("#pic")
const url = "https://aes.shenlu.me/api/v1/random"
const get = async () => {
    try {
        let response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        let data = await response.json()
        console.log(data);
        p1.innerText = `id : ${data.id}`
        p2.innerText = `name : ${data.scientific_name}`
        pic.innerHTML = ` <img src="${data.image}" alt="pic" width="200px" height="299px">`
    } catch (error) {
        console.log(error)
    }
}
get()











function not_working(params) {
    

// const url = 'https://etsy-api2.p.rapidapi.com/product/search?query=gift';

// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-host': 'etsy-api2.p.rapidapi.com',
//     'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY' // ← Yahan apni API key daalein
//   }
// };

// const getData = async () => {
//   try {
//     const response = await fetch(url, options);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);  // ← Yahan data milega (search results)

//     // Example: pehle product ka title dikha do
//     // if (data && data.results && data.results.length > 0) {
//     //   console.log("First product title:", data.results[0].title);
//     // }

//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//   }
// };

// getData();
}