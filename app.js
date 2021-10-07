let ratingArr = [];
let settingArr = [];
let sectionArr = []; 
let scores = [];
let userSetting = [];
let userTotals=[];
let userScores=[];
let userMax =[];
let percentage=[];
let settingCheck=[];
let rating = document.getElementsByClassName("userRatings");
let setting = document.getElementsByClassName("userSettings");
const reducer = (accumulator, currentValue) => accumulator + currentValue;

//collects and stores user inputed settings//
function collectSetting() {
    
    Array.prototype.forEach.call(setting, function checkSetting(el) {
        if(el.checked) {
            tempValue = el.value;
            value = parseInt(tempValue)
            settingArr.push(value);
            console.log(settingArr);         
        } 
        
    })
    validate();
    setSettings();
    
}



function validate () {
    if (settingArr.length == 13) {
        console.log("checked")
    } else {
        settingArr = [];
    return alert("Please fill in each section");  
    }  
}


//gives a multiplier that is used to calculate house scores//
function setSettings() {
    for(i = 0; i < settingArr.length; i++) {
        if (settingArr[i] == 1) {
            userSetting.push(1.20); 
        } else if (settingArr[i] == 2) {
            userSetting.push(1.40) 
        } else if (settingArr[i] == 3) {
            userSetting.push(1.60) 
        } else if (settingArr[i] == 4) {
            userSetting.push(1.80) 
        } else if (settingArr[i] == 5) {
            userSetting.push(2.0) 
        } 
    }
    calcTotals();
}

//when combined with sumTotal() provides a fair score//
function calcTotals() {
    for(i = 0; i < userSetting.length; i++) {
         total = userSetting[i] * 300;
         userMax.push(total); 
    }
}

//takes user input array and splits it into the correct sections //
function collectRating() {
    Array.prototype.forEach.call(rating, function collectRating(el) {
    if(el.checked) {
        tempValue = el.value;
        value = parseInt(tempValue);
        ratingArr.push(value);   
    } 
        tempLocation = ratingArr.slice(0,5);
        tempFrontGarden = ratingArr.slice(5,9);
        backGarden = ratingArr.slice(9,12);
        lounge = ratingArr.slice(12,16);
        kitchen = ratingArr.slice(16,21);
        utility = ratingArr.slice(21,24);
        wc = ratingArr.slice(24,26);
        bathroom = ratingArr.slice(26,29);
        bedroom = ratingArr.slice(29,31);
        ensuite = ratingArr.slice(31,33);
        gameRoom = ratingArr.slice(33,35);
        office1 = ratingArr.slice(35,37);
        office2 = ratingArr.slice(37,39);              
    })
    
    sectionArr.push(tempLocation);
    sectionArr.push(tempFrontGarden);
    sectionArr.push(backGarden);
    sectionArr.push(lounge);
    sectionArr.push(kitchen);
    sectionArr.push(utility);
    sectionArr.push(wc);
    sectionArr.push(bathroom);
    sectionArr.push(bedroom);
    sectionArr.push(ensuite);
    sectionArr.push(gameRoom);
    sectionArr.push(office1);
    sectionArr.push(office2);
    {
    {
        validateUser();
    }
   sortArr();
 }
}

function validateUser() {
    userTotals = [];
    percentage = [];
    if (ratingArr.length == 39) {
        console.log("checked")
    } else {
        ratingArr = [];
        sectionArr = [];
        scores = [];
        userTotals = [];
        percentage = [];
      
    return alert("Please fill in each section");
    }
}

//sums the individual arrays and gives the total user input per section//
function sortArr() {
    for (i = 0 ;  i < sectionArr.length; i++) {
        const total = sectionArr[i].reduce((a, b) => a + b );
        scores.push(total);    
}
sumTotal();
}

//calculates the score of a section against user inputed setting scores//
function sumTotal() {
    userTotals.push((scores[0] * userSetting[0]) * 12);
    userTotals.push((scores[1] * userSetting[1]) * 15);
    userTotals.push((scores[2] * userSetting[2]) * 20);
    userTotals.push((scores[3] * userSetting[3]) * 15);
    userTotals.push((scores[4] * userSetting[4]) * 12);
    userTotals.push((scores[5] * userSetting[5]) * 20);
    userTotals.push((scores[6] * userSetting[6]) * 30);
    userTotals.push((scores[7] * userSetting[7]) * 20);
    userTotals.push((scores[8] * userSetting[8]) * 30);
    userTotals.push((scores[9] * userSetting[9]) * 30);
    userTotals.push((scores[10] * userSetting[10]) * 30);
    userTotals.push((scores[11] * userSetting[11]) * 30);
    userTotals.push((scores[12] * userSetting[12]) * 30); 
    {
        percentCalc();     
    } 
}

//calculates each sections % score//
function percentCalc() {
    for (i = 0; i < userTotals.length; i++ ) {
        value = (userTotals[i] / userMax[i]) * 100;
        value2 = Math.round(value)
        percentage.push(value2);
    }
    totalPercent()
}

//calculates the total score for the house//
function totalPercent() {
    value1 = (userTotals.reduce(reducer) / userMax.reduce(reducer)) * 100;
    value2 = Math.floor(value1);
    percentage.push(value2)
    {
        report();
    }
} 

//returns the house report//
function report() {
    locationPer = document.getElementById('scoredNumberLocation')
    frontGardenPer = document.getElementById('scoredNumberFrontGarden') 
    backGardenPer = document.getElementById('scoredNumberBackGarden')
    loungePer = document.getElementById('scoredNumberLounge')
    kitchenPer = document.getElementById('scoredNumberKitchen')
    utilityPer = document.getElementById('scoredNumberUtility')
    wcPer = document.getElementById('scoredNumberWC')
    bathroomPer = document.getElementById('scoredNumberBathroom') 
    bedroomPer = document.getElementById('scoredNumberBedroom') 
    ensuitePer = document.getElementById('scoredNumberEnsuite')
    gameroomPer = document.getElementById('scoredNumberGameroom') 
    office1Per = document.getElementById('scoredNumberOffice1')
    office2Per = document.getElementById('scoredNumberOffice2')
    houseTotal = document.getElementById('houseTotalPercent');
    {
        locationPer.textContent = percentage[0];
        frontGardenPer.textContent = percentage[1]
        backGardenPer.textContent = percentage[2]
        loungePer.textContent = percentage[3]
        kitchenPer.textContent = percentage[4]
        utilityPer.textContent = percentage[5]
        wcPer.textContent = percentage[6]
        bathroomPer.textContent = percentage[7]
        bedroomPer.textContent = percentage[8]
        ensuitePer.textContent = percentage[9]
        gameroomPer.textContent = percentage[10]
        office1Per.textContent = percentage[11]
        office2Per.textContent = percentage[12]
        houseTotal.textContent = percentage[13]
    }
}

function settingReset() {
    settingArr = [];
    document.getElementById("settingForm").reset();
    return settingArr;
    
}

function userReset() {
    ratingArr = [];
    sectionArr = [];
    scores = [];
    userTotals = [];
    percentage = [];
    document.getElementById("scoreForm").reset();  
}



document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('submitButton').addEventListener('click', collectRating);
    document.getElementById('settingButton').addEventListener('click', collectSetting);
    document.getElementById('settingButtonReset').addEventListener('click', settingReset);
    document.getElementById('resetButton').addEventListener('click', userReset);
})

