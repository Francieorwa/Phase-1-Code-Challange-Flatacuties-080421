// Your code here
fetch('http://localhost:3000/characters')
.then(function(response){
    return response.json();
})//select character-bar elements
.then(function(characterBar){
    characters_names=document.getElementById('character-bar')
    characterBar.map((characters)=>{
        characters_names.innerHTML += `<div class='character-bar'>
        <p class="name"><span>${characters.name}</span></p>
        <p><img class=" hidden image" src="${characters.image}"</p>
        <p class="hidden votes">${characters.votes}</p>
        </div>`
        
    })

    let names = document.querySelectorAll('.name');

    for(let i=0; i<names.length;i++){
        names[i].addEventListener('click',function(e){
            let name = e.target;   
            let parent = e.target.closest('.character-bar');
            let image = parent.querySelector('.image');
            let votes=parent.querySelector('.votes');
         //div
         document.querySelector('#image').setAttribute("src", image.getAttribute("src"));
         document.querySelector('#name').innerText=name.innerText;
         document.querySelector('#vote-count').innerText=votes.innerText;
        })
    }
    //adding votes
    const inputVotes =document.querySelector('input#votes');
    let charactersVotes =document.querySelector('span#vote-count');
    const form=document.querySelector('form#votes-form');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let total_votes = parseInt(charactersVotes.innerText) + parseInt(inputVotes.value,10)
        charactersVotes.innerText = total_votes;
        let spans = document.querySelectorAll("p.name span")
        spans.forEach((span) => {
            let current_name = document.querySelector('#name').innerText;
            if(span.innerText === current_name){
               let parent = span.closest('.character-bar');
                parent.querySelector('p.votes').innerText=total_votes;
            }
           form.reset();
        });
        
       

    })
    //reset button
    const resetVotes =document.querySelector('button#reset-btn');
    resetVotes.style.cursor='pointer';
    resetVotes.addEventListener('click',()=>{
        charactersVotes.innerText = 0;
        let spans = document.querySelectorAll("p.name span")
        spans.forEach((span) => {
            let current_name = document.querySelector('#name').innerText;
            if(span.innerText === current_name){
               let parent = span.closest('.character-bar');
                parent.querySelector('p.votes').innerText=0;
            }
        
    
       form.reset();
    })
    
    }

)


})
