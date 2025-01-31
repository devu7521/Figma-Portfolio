const cardsContainer = document.querySelector('.cards-container');
        const paginationDots = document.querySelectorAll('.pagination span');
        
        paginationDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                cardsContainer.style.transform = `translateX(-${index * 5}%)`;
                
                document.querySelector('.pagination .active').classList.remove('active');
                dot.classList.add('active');
            });
        });

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close");
btn.onclick = function() {
    modal.style.display = "block";
}

// span[0].onclick = function() {
//     modal.style.display = "none";
// }
span[1].onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

let submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    let domain = document.getElementById("domain").value;
    if(domain=="" || domain.length<4)
        alert("Please enter correct domain")
    else{
        let skills = document.getElementsByClassName("skill-input");
        let proficiencies = document.getElementsByClassName("proficiency-input");
        console.log(domain)
        
        let container = document.getElementById("skills-container");
        let card = `<div class="skills-card">
                        <h3>${domain}</h3>`;

        for (let i = 0; i < skills.length; i++) {

            let skillName = skills[i].value;
            let proficiency = proficiencies[i].value;
            console.log(skills[i].value+" "+proficiencies[i].value)
            if(skillName=="" || proficiency=="")
                continue
            card += `<div class="skill">
                        <div>${skillName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${proficiency}%</div>
                        <div class="progress-bar"><div style="width: ${proficiency}%;"></div></div>
                        </div>`;
        }

        card += `</div>`; 


        container.innerHTML += card;
        modal.style.display="none";
    }
    
});
