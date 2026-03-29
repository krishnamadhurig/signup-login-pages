const SIGN_API="http://localhost:3000/api/signup";
const LOGIN_API="http://localhost:3000/api/login";

const form=document.getElementById('signupForm');
form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const data={
name:document.getElementById('signupname').value,
email:document.getElementById('signupemail').value,
password:document.getElementById('signuppassword').value,
};
try{
    const res=await fetch(`${SIGN_API}`,{
    method:'POST',
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
})
const result=await res.json();
console.log(result)
if(res.ok){
    alert('signup success')
}else{
    alert(result.message||'something went wrong')
}


}catch(err){
    console.log(err)
}

})
const form1=document.getElementById('loginForm');
form1.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const data={

email:document.getElementById('loginemail').value,
password:document.getElementById('loginpassword').value,
};
try{
    const res=await fetch(`${LOGIN_API}`,{
    method:'POST',
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
})
const result=await res.json();
console.log(result)

if(res.ok){
    alert('login success')
}else{
    alert(result.message||'something went wrong')
}


}catch(err){
    console.log(err)
}

})




