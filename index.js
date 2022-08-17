// code your solution here
function saturdayFun(newActiviy = "roller-skate"){
    
    return `This Saturday, I want to ${newActiviy}!`;
}
saturdayFun();

function mondayWork(jobTask = "go to the office"){
    return `This Monday, I will ${jobTask}.`;

}
mondayWork();


function wrapAdjective(star = "*"){
    return function (moon = "behavior"){
        return `You are ${star}${moon}${star}!`;
    }

}

