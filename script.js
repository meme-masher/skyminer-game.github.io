var Save = {money: 10000000, xp: 0};

function save() {
    localStorage.setItem("save",JSON.stringify(Save));
}

function load() {
    Save = JSON.parse(localStorage.getItem("save"));
}

function help() {
    alert("Hello and welcome to Skyminer! In this game, you must send missions to asteroids to mine up their resources. At the beginning, you have a 50/50 chance of having your mission succeed in not ending in a disproportionate ball of flames. If you make it, you gain XP. Gaining XP will reduce the chance of failure. And remember, no matter how 'jinxed' your game seems, it's all random. Good luck! :)");
}

function sendMission() {
    document.getElementById("sendMission").setAttribute("href","#");
    if (Save.money > 1000000) {
        document.getElementById("action").innerHTML = "Sending mission... [](--";
        Save.money = Save.money - 1000000;
        
        setTimeout(function() {
            if (Math.random() > (1 / (Save.xp + 2))) {
                document.getElementById("action").innerHTML="The mission was a success! +1XP";
                Save.xp = Save.xp + 1;
                Save.money = Math.floor(Save.money + (900000 + (Math.random() * 1000000)));
            } else {
                document.getElementById("action").innerHTML="The mission was a failure!";
            }
            setTimeout(function() {
                document.getElementById("action").innerHTML="";
                document.getElementById("sendMission").setAttribute("href","javascript:sendMission()");
            }, 2000);
        }, 2000);
    } else {
        document.getElementById("action").innerHTML = "You do not have enough money.";
        setTimeout(function() {
            document.getElementById("action").innerHTML="";
            document.getElementById("sendMission").setAttribute("href","javascript:sendMission()");
        }, 2000);
    }
}

setInterval(function() {
    document.getElementById("money").innerHTML = commas(Save.money);
}, 0);

setInterval(function() {
    document.getElementById("xp").innerHTML = commas(Save.xp);
}, 0);

setInterval(function() {
    document.getElementById("save").innerHTML = localStorage.getItem("save");
}, 0);

function commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}