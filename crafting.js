

var craft = function(recipe) {
    if (recipe == 1) {
        if (items[0].count < 3) {
            textAlert("You need more sticks!");
        } else if (items[1].count < 2) {
            textAlert("You need more rocks!");
        } else {
            items[0].remove(3);
            items[1].remove(2);
            axe = "Stone Axe";
            $('#recipe1').fadeOut(400);
            $('#shelter-manage').fadeIn(400);
            $('#harvest').fadeIn(400);
            $("#recipe3").fadeIn(400);
            $('#gather-fiber').fadeIn(400);
        }
    } else if (recipe == 2) {
        if (items[2].count < 3) {
            textAlert("You need more berries!");
        } else {
            items[2].remove(3);
            items[3].add(1);
        }
    } else if (recipe == 3) {
        if (items[0].count < 3) {
            textAlert("You need more sticks!");
        } else if (items[1].count < 3) {
            textAlert("You need more rocks!");
        } else if (items[7].count < 5) {
            textAlert("You need more fiber!");
        } else {
            items[0].remove(3);
            items[1].remove(3);
            items[7].remove(5);
            pickaxe = "Stone Pickaxe";
            $('#recipe3').fadeOut(400);
            $('#harvest-stone').fadeIn(400);
        }
    } else if (recipe == 4) {
        if (items[5].count < 5) {
            textAlert("You need more wood!");
        } else {
            items[5].remove(5);
            $('#workbench').fadeIn(400);
            $('#recipe6').fadeIn(400);
            $('#recipe7').fadeIn(400);
            $('#recipe4').fadeOut(400);
        }
    } else if (recipe == 5) {
        if (items[8].count < 10) {
            textAlert("You need more stone!");
        } else if (items[5].count < 2) {
            textAlert("You need more wood!");
        } else if (items[6].count < 5) {
            textAlert("You need more charcoal!");
        } else {
            items[8].remove(10);
            items[5].remove(2);
            items[6].remove(5);
            $('#firepit').fadeIn(400);
            $('#recipe8').fadeIn(400);
            $('#recipe5').fadeOut(400);
        }
        
    } else if (recipe == 6) {
        if (items[4].count < 1) {
            textAlert("You need flint!");
        } else if (items[0].count < 5) {
            textAlert("You need more sticks!");
        } else if (items[7].count < 5) {
            textAlert("You need more fiber!");
        } else {
            items[4].remove(1);
            items[0].remove(5);
            items[7].remove(5);
            $('#hunt').fadeIn(400);
            $('#hunt-small-game').fadeIn(400);
        }
    } else if (recipe == 7) {
        if (items[5].count < 2) {
            textAlert("You need more wood!");
        } else if (items[7].count < 10) {
            textAlert("You need more fiber!");
        } else {
            items[5].remove(2);
            items[7].remove(10);
            items[9].add(1);
            $('#hunt').fadeIn(400);
            $('#search-traps').fadeIn(400);
            $('#recipe9').fadeIn(400);
        }
    } else if (recipe == 8) {
        if (items[10].count < 1) {
            textAlert("You have no meat to cook!");
        } else if (items[6].count < 1) {
            textAlert("You need more charcoal!");
        } else if (fire == null) {
            textAlert("You need a fire!");
        } else {
            items[10].remove(1);
            items[13].add(1);
            $('#eat-cooked-meat').fadeIn(400);
        }
    } else if (recipe == 9) {
        if (items[11].count < 8) {
            textAlert("You need more furs!");
        } else if (items[7].count < 10) {
            textAlert("You need more fibers");
        } else {
            items[11].remove(8);
            items[7].remove(10);
            items[15].add(1);
            $('#explore').fadeIn(400);
            $('#recipe10').fadeIn(400);
        }
    } else if (recipe == 10) {
        if (items[11].count < 30) {
            textAlert("You need more furs!");
        } else if (items[7].count < 20) {
            textAlert("You need more fibers!");
        } else {
            items[11].remove(30);
            items[7].remove(20);
            $('#scavenge').fadeIn(400);
            $('#recipe10').fadeOut(400);
            $('#rucksack').fadeIn(400);
            gatherTime = 2;
        }
    }
};