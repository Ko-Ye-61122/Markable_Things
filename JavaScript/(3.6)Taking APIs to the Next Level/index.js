try {
    const response = await fetch(`https://apis.scrimba.com/jsonplaceholder/posts`, {method: 'POST'});
    if (!response.ok) {
        throw new Error('There was a problem with the the API')
    }
    const data = await response.json();
    console.log(data);
} catch (err) {
    console.log(err)
} finally {
    console.log('The operation completed.')
}