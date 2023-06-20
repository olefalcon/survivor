

    var invtable = "";
    var hour = 6;
    var minute = 0;
    var day = 1;
    var health = 100;
    var warmth = 100;
    var hunger = 100;
    var thirst = 100;
    var energy = 100;
    var p = false;
    var stoneaxe = false;
    var fire = null;
    var shelter = 0;
    var scavengeNum = 0;
    var signal = 0;
    var axe = "";
    var pickaxe = "";
    
    var gatherTime = 3;
$(document).ready(function(){
    
    load();
    start();
    
});

var start = function() {
    $('#blackout').fadeOut(2000);
    run();
    alert(random(1,4));
    
};

var load = function() {
    
    health = 50;
    warmth = 25;
    hunger = 70;
    thirst = 30;
    energy = 100;
    
};

var run = function(){
    setInterval(render, 10);
    setInterval(updateTime, 400);
    setInterval(checkStatus, 10);
    setInterval(updateStatusText, 50);
    setInterval(updateStatus, 20000);
    setInterval(winCheck, 60000);
};



var render = function() {
    
    invtable = "<table id='invtable'>";
    for (var i = 0; i < items.length; i ++) {
        if (items[i].count > 0) {
            invtable += "<tr><td>" + items[i].name + " " + items[i].count + "</tr>";
        }
    }
    invtable += "</table>";
    document.getElementById('inv-table').innerHTML = invtable;
    if (hour < 10) {var adjhour = "0" + hour} else {adjhour = hour;}
    if (minute < 10) {var adjminute = "0" + minute} else {adjminute = minute;}
    document.getElementById('time').innerHTML = adjhour + ":" + adjminute;
    
    document.getElementById('day').innerHTML = day;
    document.getElementById('health').innerHTML = health;
    document.getElementById('warmth').innerHTML = warmth;
    document.getElementById('hunger').innerHTML = hunger;
    document.getElementById('thirst').innerHTML = thirst;
    document.getElementById('energy').innerHTML = energy;
    if (fire == null) {
        document.getElementById('fire').innerHTML = 0;
    } else {
        document.getElementById('fire').innerHTML = fire; 
    }
    document.getElementById('shelter').innerHTML = shelter;
    document.getElementById('signal').innerHTML = signal;
    document.getElementById('axe').innerHTML = axe;
    document.getElementById('pickaxe').innerHTML = pickaxe;
    
    
};

var updateTime = function() {
    
    
    if (hour == 23 && minute == 59) {
        hour = 0;
        minute = 0;
        day ++;
    } else if (minute == 59) {
        hour ++;
        minute = 0;
    } else {
        minute ++;
    }
};

var updateStatusText = function() {
    if (health > 80) {
        $("#health").css({color: '#5cb85c'});
    } else if (health > 50) {
        $("#health").css({color: '#ffe716'});
    } else if (health > 25) {
        $('#health').css({color: '#ffb916'});
    } else {
        $('#health').css({color: '#d9534f'});
    }
    
    
    if (warmth > 90) {
        $("#warmth").css({color: '#d9534f'});
    } else if (warmth > 80) {
        $("#warmth").css({color: '#ffb916'});
    } else if (warmth > 60) {
        $('#warmth').css({color: '#ffe716'});
    } else if (warmth > 40) {
        $('#warmth').css({color: '#5cb85c'});
    } else if (warmth > 20) {
        $('#warmth').css({color: '#5bc0de'});
    } else {
        $('#warmth').css({color: '#428bca'});
    }
    
    if (hunger > 80) {
        $("#hunger").css({color: '#5cb85c'});
    } else if (hunger > 50) {
        $("#hunger").css({color: '#ffe716'});
    } else if (hunger > 25) {
        $('#hunger').css({color: '#ffb916'});
    } else {
        $('#hunger').css({color: '#d9534f'});
    }
    
    if (thirst > 80) {
        $("#thirst").css({color: '#5cb85c'});
    } else if (thirst > 50) {
        $("#thirst").css({color: '#ffe716'});
    } else if (thirst > 25) {
        $('#thirst').css({color: '#ffb916'});
    } else {
        $('#thirst').css({color: '#d9534f'});
    }
    
    if (energy > 80) {
        $("#energy").css({color: '#5cb85c'});
    } else if (energy > 50) {
        $("#energy").css({color: '#ffe716'});
    } else if (energy > 25) {
        $('#energy').css({color: '#ffb916'});
    } else {
        $('#energy').css({color: '#d9534f'});
    }
};


var checkStatus = function() {
    
    if (health > 100) {
        health = 100;
    }
    if (hunger > 100) {
        hunger = 100;
    }
    if (hunger < 0) {
        hunger = 0;
    }
    if (thirst > 100) {
        thirst = 100;
    }
    if (thirst < 0) {
        thirst = 0;
    }
    if (energy > 100) {
        energy = 100;
    }
    if (health <= 0) {
        die();
    }
    if (energy <= 0) {
        energy = 100;
        sleep();
    }
    
};

var updateStatus = function() {
    
    thirst -= 4;
    hunger -= 1;
    if (fire == 1) {
        fire = null;
        items[6].add(1);
        $('#stoke-fire').fadeOut(400);
        $('#extinguish-fire').fadeOut(400);
        $('#light-fire').fadeIn(400);
    } else if (fire > 1) {
        fire -= 1;
        items[6].add(1);
    }
    if (fire == null) {
        warmth -= 1;
    } else {
        warmth += 1;
    }
    if (warmth < 25 || warmth > 75) {
        health -= 2;
    } else if (warmth < 10 || warmth > 90) {
        health -= 5;
    } else {
        health += 2;
    }
    
    if (thirst < 1) {
        health -= 5;
    }
    if (hunger < 1) {
        health -= 5;
    }
};

var winCheck = function() {
    
    var rand = getRandom(1, 100);
    if (rand < signal) {
        
        $('#whiteout').fadeIn(3000).delay(10000, function() {
            location.reload();
        });
        
        
    }
    
}

var textAlert = function(string) {
    
    document.getElementById('text-alert').innerHTML = string;
    $('#text-alert').fadeIn(400).delay(1000).fadeOut(400);

    
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
