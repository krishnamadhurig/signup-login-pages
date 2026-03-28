const API='http://localhost:5000/api/signup'
const form = document.getElementById('signupForm');
form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const data={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value
    };
    try{
        const res= await fetch(`${API}`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        const result=await res.json();
        console.log("Response:",result);
        alert(result.message);
        //clear form
        form.reset()
    }catch(err){
        console.log('Error:',err)
    }
})