/*function fetchProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const success = Math.random() > 0.2;
        if(!success) {
            return reject("Failed to fetch products");
        } else {
            return resolve(["Product1, Product2, Product3"]);
        }
        }, 5000);
        
    });
}
console.log("Before Invoking fetchProducts")

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;

        if(success) {
            resolve('Success! the data was fetched.');
        } else {
            reject('Error: Could not fetch the data.');
        }
    }, 2000);
});

myPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })
    .finally(() => {
        console.log('Promise has finished.')
    })

    //async

async function fetchProducts() {
    try {
        const response = await fetch("https://totallyrad.dev/api/v1/products");
        const products = await response.json
        console.log(products)
    } catch(error) {
    console.log(error)
    }
}  */

     async function fetchPeople() {
        try {
            const response = await fetch("https://swapi.dev/api/people/",);
            const people = await response.json();
            console.log(people);
        } catch (error) {
            console.log(error);
        }
    }


