function getLabelHTML(text, sender, ...staffObjs) {

    return staffObjs.map(staffObj => 
        `
        <div class="label-card">
            <p>Dear ${staffObj.name}</p>
            <p>${text}</p>
            <p>Best Wishes</p>
            <p>${sender}</p>
        </div>
        `
    ).join('')
}

const text = 'Thank you for all your hard work throughout the year!' 
const sender = 'Ye Min Oo'


document.getElementById("labels-container").innerHTML += getLabelHTML(
    text, 
    sender,
    {name:"Ali"}, 
    {name:"Robert"}, 
    {name:"George"},  
    {name:"Carlos"},
    {name:"Donald"},
    )