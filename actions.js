var gather = function(item) {
    
    if (p == false) {
        
        p = true;
        $("#progress-bar").animate({
            left: '0vw'
        }, gatherTime * 1000, "swing", function(){
            if (item == 1 && getRandom(1,3) == 2) {
                items[4].add(1);
            } else if (item == 2) {
                items[item].add(getRandom(1,3));
            } else if (item == 7) {
                items[item].add(getRandom(2,5));
            } else {
                items[item].add(1);
            }
            energy --;
            $("#progress-bar").css({
                left: '-100vw'
            });
            p = false;
        });
    
    }

};

var die = function() {
    
    $('#blackout').fadeIn(1000).delay(3000, function() {
        location.reload();
    });
    
};



var sleep = function() {
    
    $('#blackout').fadeIn(1000).delay(400).fadeOut(1000, function(){
        if (hour > 5 && hour < 12) {
            energy += ((16 - hour)*10);
            hour = 16;
            minute = 0;
        } else if (hour < 6) {
            energy += ((9 - hour)*10);
            hour = 9;
            minute = 0;
        } else {
            energy += (((24 - hour) + 6)*10);
            hour = 6;
            minute = 0;
            day++;
        }
    });
    
};

var fireActions = function(action) {
    if (action == "light") {
        if (items[0].count < 3) {
            textAlert("You need more sticks!");
        } else if (items[4].count < 1) {
            textAlert("You need flint!");
        } else {
            fire = 5;
            items[0].remove(3);
            items[4].remove(1);
            $('#light-fire').fadeOut(400, function() {
                $('#stoke-fire').fadeIn(400);
                $('#extinguish-fire').fadeIn(400);
                $('#signal-header').fadeIn(400);
                $('#upgrade-distress-signal').fadeIn(400);
            });
        }
    } else if (action == "stoke") {
        if (items[0].count < 3) {
            textAlert("You need more sticks!");
        } else {
            fire += 5;
            items[0].remove(3);
        }
    } else {
        fire == null;
        items[6].add(1);
        $('#stoke-fire').fadeOut(400);
        $('#extinguish-fire').fadeOut(400, function() {
            $("#light-fire").fadeIn(400);
        });
    }
};


var harvest = function(item) {
    if (p == false) {
        p = true;
        $("#progress-bar").animate({
            left: '0vw'
        }, 8000, "swing", function(){
            items[item].add(1);
            energy -= 3;
            $("#progress-bar").css({
                left: '-100vw'
            });
            p = false;
    });
    }
};

var buildShelter = function() {
    
    if (items[5].count < 5) {
        textAlert("You need more wood!");
    } else {
        items[5].remove(5);
        shelter = 1;
        $("#build-shelter").fadeOut(400);
        $('#upgrade-shelter').fadeIn(400);
        $('#recipe4').fadeIn(400);
        $('#recipe5').fadeIn(400);
    }
    
}
var upgradeShelter = function(){
    
    if (items[5].count < (10*shelter)) {
        textAlert("You need more wood!"); 
    } else {
        items[5].remove(10*shelter);
        shelter ++;
        if (shelter == 2) {
            $('#collect-from-rain-barrel').fadeIn(400);
        } else if (shelter == 3) {
            $('#collect-from-garden').fadeIn(400);
        }
    }
    
}

var eat = function(item) {
    
    if (items[item].count < 1) {
        if (item == 14) {
             textAlert("None of your waterskins are full!");
        } else {
        textAlert("You don't have any of these to eat!");
        }
    } else {
        items[item].remove(1);
        if (item == 14) {
            items[15].add(1);
            thirst += 25
        }
        if (item == 2) {
            hunger += 1;
            thirst += 1;
        } else if (item == 3) {
            thirst += 6;
        } else if (item == 10) {
            hunger += 10;
            thirst -= 5;
            health -= 10;
        } else if (item == 13) {
            hunger += 15;
            thirst -= 5;
        }
    }
    
}

var hunt = function(action) {
    
    if (action == 1) {
        if (p == false) {
        
            p = true;
            $("#progress-bar").animate({
                left: '0vw'
            }, 10000, "swing", function(){
                var totalGains;
                items[10].add(getRandom(1, 2*items[9].count));
                items[11].add(getRandom(1, 3*items[9].count));
                items[12].add(getRandom(0, 1*items[9].count));
                energy -= 3;
                $("#progress-bar").css({
                    left: '-100vw'
                });
                p = false;
            });
        
        }
    }
    if (action == 2) {
        if (p == false) {
            
            p = true;
            $("#progress-bar").animate({
                left: '0vw'
            }, 10000, "swing", function(){
                items[10].add(getRandom(3, 10));
                energy -= 10;
                $("#progress-bar").css({
                    left: '-100vw'
                });
                p = false;
            });
        
        }
    }
    $('#eat-raw-meat').fadeIn(400);
}

var fillWaterskins = function() {
    
    if (p == false) {
            if (items[15].count > 0) {
                p = true;
                $("#progress-bar").animate({
                    left: '0vw'
                }, 20000, "swing", function(){
                    items[14].add(items[15].count)
                    items[15].remove(items[15].count);
                    energy -= 20;
                    $("#progress-bar").css({
                        left: '-100vw'
                    });
                    p = false;
                });
            } else {
                textAlert("You have no empty waterskins!");
            }
            $('#drink-from-waterskin').fadeIn(400);
        }
    
}

var upgradeDistressSignal = function() {
    
    if (items[5].count < (10 + signal*10)) {
        textAlert("You don't have enough wood!");
    } else if (items[6].count < (5 + signal*5)) {
        textAlert("You don't have enough charcoal!");
    } else {
        items[5].remove(10 + signal*10);
        items[6].remove(10 + signal*10);
        signal ++;
    }
}

var scavenge = function() {
    
        if (p == false) {
        
            p = true;
            $("#progress-bar").animate({
                left: '0vw'
            }, 30000, "swing", function(){
                scavengeNum++;
                items[12].add(getRandom(2, 3));
                items[2].add(getRandom(2, 8));
                energy -= 30;
                if (scavengeNum == 5) {
                    $('#explore-cave').fadeIn(400);
                }
                if (scavengeNum == 10) {
                    $('#search-for-ruins').fadeIn(400);
                }
                $("#progress-bar").css({
                    left: '-100vw'
                });
                p = false;
            });
        
        }
    
}

var exploreCave = function() {
    
    if (p == false) {
        
            p = true;
            $("#progress-bar").animate({
                left: '0vw'
            }, 60000, "swing", function(){
                $('#harvest-metal').fadeIn(400);
                $('#explore-cave').fadeOut(400);
                $("#progress-bar").css({
                    left: '-100vw'
                });
                p = false;
            });
        
    }
    
    
};

var searchForRuins = function() {
    
    if (p == false) {
        
            p = true;
            $("#progress-bar").animate({
                left: '0vw'
            }, 30000, "swing", function(){
                
                $("#progress-bar").css({
                    left: '-100vw'
                });
                p = false;
            });
        
    }
    
}

var collectFromRainBarrel = function(){
    
};
    
