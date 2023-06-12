fetch('api/events')
    .then(response=>{
        if(response.status !== 200){
            console.log('Something went wrong: '+response.status);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log('Error: ' + err));

fetch('api/events',{
    method: 'GET',
    headers:{
        Accept: 'text/xml'
    }
})
    .then(response=>response.text()) //for xml
    .then(data => console.log(data))

function addToCart(id, quantity){
 fetch('api/cart', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: id, quantity: quantity})
})
 .then(postResponse=>{
    if(postResponse.status === 200){
        fetch('api/cart')
            .then(getResponse=>getResponse.json())
            .then(data=>console.log(data));
    }
});
}

fetch('api/events')
    .then(response=>{
        if(response.status !== 200){
            console.log('Something went wrong: '+response.status);
        }
        return response.json();
    })
    .then(data => console.log(data))