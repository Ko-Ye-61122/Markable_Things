async function fetchData() {
    const response = await fetch('https://www.boredapi.com/api/activity');
    const data = await response.json();    
    console.log(data);
}

fetchData()

// asyn function is used because two await keywords are used.