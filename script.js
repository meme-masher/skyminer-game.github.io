var Save = {money: 10000000, xp: 0, launchCost: 1000000, drillCost: 10000000, oreValue: 1000000};

function commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function save() {
    localStorage.setItem("save",JSON.stringify(Save));
}

function load() {
    Save = JSON.parse(localStorage.getItem("save"));
}

function dev() {
    Save.money = Save.money + 1000000;
    Save.xp = Save.xp + 1;
}

function sendMission() {
    document.getElementById("sendMission").setAttribute("href","#");
    if (Save.money > Save.launchCost) {
        document.getElementById("action").innerHTML = "Sending mission... [](--";
        Save.money = Save.money - Save.launchCost;
        
        setTimeout(function() {
            if (Math.random() > (1 / (Save.xp + 2))) {
                document.getElementById("action").innerHTML="The mission was a success! +1XP";
                Save.xp = Save.xp + 1;
                Save.money = Math.floor(Save.money + (900000 + (Math.random() * Save.oreValue)));
            } else {
                document.getElementById("action").innerHTML="The mission was a failure!";
            }
            setTimeout(function() {
                document.getElementById("action").innerHTML="...";
                document.getElementById("sendMission").setAttribute("href","javascript:sendMission()");
            }, 2000);
        }, 2000);
    } else {
        document.getElementById("action").innerHTML = "You do not have enough money.";
        setTimeout(function() {
            document.getElementById("action").innerHTML = "...";
            document.getElementById("sendMission").setAttribute("href","javascript:sendMission()");
        }, 2000);
    }
}

function drill() {
    if (Save.money > Save.drillCost) {
        Save.money = Save.money - Save.drillCost;
        Save.drillCost = Math.floor(Save.drillCost * 1.1);
        Save.launchCost = Math.floor(Save.launchCost * 1.1);
        Save.oreValue = Math.floor(Save.oreValue * 1.1);
    } else {
        document.getElementById("action2").innerHTML = "You do not have enough money.";
        setTimeout(function() {
            document.getElementById("action2").innerHTML = "...";
        }, 2000);
    }
}

setInterval(function() {
    if (Save.xp > 4) {
        document.getElementById("drill").style.visibility = "visible";
    }
}, 0);

setInterval(function() {
    document.getElementById("money").innerHTML = commas(Save.money);
}, 0);

setInterval(function() {
    document.getElementById("xp").innerHTML = commas(Save.xp);
}, 0);

setInterval(function() {
    document.getElementById("save").innerHTML = localStorage.getItem("save");
}, 0);

setInterval(function() {
    document.getElementById("launchCost").innerHTML = commas(Save.launchCost);
}, 0);

setInterval(function() {
    document.getElementById("drillCost").innerHTML = commas(Save.drillCost);
}, 0);

setInterval(function() {
    document.getElementById("drillCost2").innerHTML = commas((Save.launchCost * 1.1) - Save.launchCost);
}, 0);
