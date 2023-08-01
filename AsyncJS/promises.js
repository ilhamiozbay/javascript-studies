axios.get("http://localhost:3000/api/orders")
.then(({result})=>{
    if(result.status===200){
        //succes condition operations 
    }
    else{
        //error condition operations 
    }
});