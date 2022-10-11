var animationDetail = animtaionData.slice(0);
console.log(animationDetail);


window.addEventListener("load", getanimation());

function getanimation() {
    let animationContainer = document.getElementsByClassName("container")[0];
    let output = "";
    for(let i=0;i<animationDetail.length;++i){
        output += `
        <div class="animationcards">
        <a href=${animationDetail[i].AnimationURL} class="hoverEffect"
            target="_blank">
            <div class="img-box">
                <img class="animateCardImg" src="${animationDetail[i].AnimationGif}" alt="Animation Gif">
            </div>
            <h2 class="Conrtibutor"><a href=${animationDetail[i].ContributorURL}><span>${animationDetail[i].ContributorName}</span></a></h2>
        </a>
        </div>`
    }
    
    console.log(output);
    console.log(animationContainer);
    animationContainer.innerHTML = output;
}


