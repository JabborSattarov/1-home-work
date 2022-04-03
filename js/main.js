alert("Assalomu aleykum saytda xatolar mavjud !")
let MatherDivEl = document.querySelector("#ForList");



for(let poc of pokemons){
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let imgEl = document.createElement("img");
    imgEl.setAttribute("class", "image")
    imgEl.setAttribute("src", poc.img);

    imgEl.addEventListener("error", () =>{
        imgEl.setAttribute("src", 'http://www.serebii.net/pokemongo/pokemon/002.png')
    })
    
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let pocName = document.createElement("h2");
    pocName.textContent = poc.name ;
    pocName.setAttribute("class", "poc-name")
    cardBody.appendChild(pocName);

    let pocNum = document.createElement("h5");
    pocNum.textContent = poc.num ;
    pocNum.setAttribute("class", "poc-num")
    cardBody.appendChild(pocNum);

    let pocHeight = document.createElement("h4")
    pocHeight.textContent =`Height :  ${poc.height}`;
    pocHeight.setAttribute("class", "poc-name")
    cardBody.appendChild(pocHeight);

    let pocWeight = document.createElement("h4")
    pocWeight.textContent =`Weight :  ${poc.weight}`;
    pocWeight.setAttribute("class", "poc-name")
    cardBody.appendChild(pocWeight);

    if(poc.candy === "None"){
        let pocCandy = document.createElement("h4")
        pocCandy.textContent =`Candy :  Candy mavjd emas`;
        pocCandy.setAttribute("class", "poc-name error")
        cardBody.appendChild(pocCandy);
    }else{
        let pocCandy = document.createElement("h4")
        pocCandy.textContent =`Candy :  ${poc.candy}`;
        pocCandy.setAttribute("class", "poc-name")
        cardBody.appendChild(pocCandy);
    }
   

    if (poc.candy_count === undefined) {
        let pocCandyCount = document.createElement("h4")
        pocCandyCount.textContent =`Candy-Count :  Bunda candy yoq`;
        pocCandyCount.setAttribute("class", "poc-name error")
        cardBody.appendChild(pocCandyCount);
    } else {
        let pocCandyCount = document.createElement("h4")
        pocCandyCount.textContent =`Candy-Count :  ${poc.candy_count}`;
        pocCandyCount.setAttribute("class", "poc-name")
        cardBody.appendChild(pocCandyCount);
    }

    let pocEgg = document.createElement("h4")
    pocEgg.textContent =`Egg :  ${poc.egg}`;
    pocEgg.setAttribute("class", "poc-name")
    cardBody.appendChild(pocEgg);

    let pocSpawn = document.createElement("h4")
    pocSpawn.textContent =`Spawn Chance :  ${poc.spawn_chance}`;
    pocSpawn.setAttribute("class", "poc-name")
    cardBody.appendChild(pocSpawn);

    let pocAvg = document.createElement("h4")
    pocAvg.textContent =`Avg Spawns  :  ${poc.avg_spawns}`;
    pocAvg.setAttribute("class", "poc-name")
    cardBody.appendChild(pocAvg);

    let pocTime = document.createElement("h4")
    pocTime.textContent =`Spawn Time  :  ${poc.spawn_time}`;
    pocTime.setAttribute("class", "poc-name")
    cardBody.appendChild(pocTime);

    if (poc.multipliers == null) {
        let pocMultip = document.createElement("h4");
        pocMultip.textContent =` Multipliers majud emas  `;
        pocMultip.setAttribute("class", "poc-name error")
        cardBody.appendChild(pocMultip)
    } else {
        let pocMultip = document.createElement("h4");
        pocMultip.textContent =`Multipliers : `+ poc.multipliers.join(" ");
        pocMultip.setAttribute("class", "poc-name")
        cardBody.appendChild(pocMultip)
    }
    

        let pocWeakness = document.createElement("h4");
        pocWeakness.textContent =`Weakenesses : ` + poc.weaknesses.join(" ");
        pocWeakness.setAttribute("class", "poc-name")
        cardBody.appendChild(pocWeakness)

        if (poc.prev_evolution == undefined) {
            let pocPrev = document.createElement("h4");
            pocPrev.textContent = "Prev evolution mavjud emas!";
            pocPrev.setAttribute("class", "error poc-name    ")
            cardBody.appendChild(pocPrev)

        } else {
            let pocPrev = document.createElement("h4");
            for(let prev of poc.prev_evolution){
                pocPrev.textContent =`Prev Evolution : { Name: ${prev.name} 
                Number: ${prev.num} } `;
                pocPrev.setAttribute("class", "poc-name")
            }
            cardBody.appendChild(pocPrev)   
        }   ;

        if (poc.next_evolution == undefined) {
            let pocNext = document.createElement("h4");
            pocNext.setAttribute("class", "error poc-name");
            pocNext.textContent = "Next evolution mavjud emas!"
            console.log("xato");
            cardBody.appendChild(pocNext);
        } else {
            let pocNext = document.createElement("h4");
            for(let next of poc.next_evolution){
                pocNext.textContent =`Next Evolution : { Name : ${next.name} 
                Number : ${next.num}  }`  
                pocNext.setAttribute("class", "poc-name");
            }
            cardBody.append(pocNext)
        }

        let cardFooter = document.createElement("div")
        cardFooter.setAttribute("class", "footer")
        


        const DelBtn = document.createElement("button");
        DelBtn.setAttribute("class" , "Del-Btn")
        DelBtn.textContent = "DELETE";
        DelBtn.addEventListener('click', () =>{
            card.remove()
        })
        cardFooter.appendChild(DelBtn);
        

        const like = document.createElement("button");
        like.textContent = "like";
        like.setAttribute("class" , "Del-Btn")
        like.addEventListener("click", () => {
            card.setAttribute("class", "Like")
        })
        cardFooter.appendChild(like);


    card.appendChild(imgEl);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    MatherDivEl.appendChild(card);
}