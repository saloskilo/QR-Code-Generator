let inputValue=document.querySelector('#inputValue');
let imgContainer=document.querySelector('#imgContainer');
let btn=document.querySelector('#btn');

btn.addEventListener('click',()=>{
    
    imgContainer.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputValue.value;

})