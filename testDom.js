
document.getElementById('btn').addEventListener('click', function(e){
    console.log("boss...");
})

function handleClick(event){
    //event.target can select the clicked button
    // console.log(event.target.parentNode);
    // immediate parent
    // console.log(event.target.parentNode.parentNode);
    //whole div parent
    console.log(event.target.parentNode.parentNode.childNodes[1].innerText);
}

const element = document.getElementById('hello-change');
element.innerText = 'Congratulations';
