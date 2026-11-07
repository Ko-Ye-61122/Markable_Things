// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => {
//         console.log(err)
//         // update the DOM to warn the user
//         // access an alternative API
//         throw new Error('This is a network error!')
//     })
//     .finally(() => console.log('The operation completed.'))

// /*
//  1. Convert the above code to use async/await, handle errors with "try/catch" blocks, and ass "finally" block.
// */ 

// try {
//     // the code we want to try to execute
// } catch (err) {
//     // the code to execute on an error
// } finally {
//     // code to execute at the end of the operation
// }


try {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const data = await response.json();
    console.log(data);
} catch (err) {
    console.log(err)
    throw new Error('This is a network error!')
} finally {
    console.log('The operation completed.')
}

