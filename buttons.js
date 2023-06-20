/*global $*/
$(document).ready(function(){
    
    
    $('#gather-sticks').click(function() {
        gather(0);
    });
    $('#gather-rocks').click(function() {
        gather(1);
    });
    $('#gather-berries').click(function() {
        gather(2);
    });
    $('#gather-fiber').click(function() {
        gather(7);
    })
    
    
    $('#sleep').click(function(){
        sleep();
    });
    $('#suicide').click(function(){
        die();
    });
    
    $('#light-fire').click(function(){
        fireActions("light"); 
    });
    $("#stoke-fire").click(function(){
        fireActions("stoke");
    });
    $("#extinguish-fire").click(function() {
        fireActions("extinguish");
    });
    
    $("#recipe1").click(function(){
        craft(1);
    });
    $('#recipe2').click(function(){
        craft(2);
    });
    $("#recipe3").click(function(){
        craft(3);
    });
    $("#recipe4").click(function(){
        craft(4);
    });
    $("#recipe5").click(function(){
        craft(5);
    });
    $("#recipe6").click(function(){
        craft(6);
    });
    $("#recipe7").click(function(){
        craft(7);
    });
    $('#recipe8').click(function() {
        craft(8);
    });
    $('#recipe9').click(function(){
        craft(9);
    });
    $('#recipe10').click(function(){
        craft(10);
    });
    
    $('#harvest-log').click(function(){
        harvest(5);
    });
    $("#harvest-tree").click(function(){
        harvest(2);
    });
    $("#harvest-stone").click(function(){
        harvest(8);
    });
    
    $('#build-shelter').click(function(){
        buildShelter();
    });
    $('#upgrade-shelter').click(function(){
        upgradeShelter();
    });
    
    $("#upgrade-distress-signal").click(function(){
        upgradeDistressSignal();
    });
    
    $('#eat-berry').click(function(){
        eat(2);
    });
    $("#eat-berry-juice").click(function(){
        eat(3);
    });
    $('#eat-raw-meat').click(function() {
        eat(10);
    });
    $('#eat-cooked-meat').click(function(){
       eat(13); 
    });
    $("#drink-from-waterskin").click(function(){
        eat(14);
    })
  
    $("#search-traps").click(function() {
        hunt(1);
    });
    $('#hunt-small-game').click(function() {
        hunt(2);
    });
    $('#fill-waterskins').click(function(){
        fillWaterskins();
    });
    $('#scavenge').click(function(){
        scavenge();
    });
    $('#explore-cave').click(function(){
        exploreCave();
    });
    $("#search-for-ruins").click(function(){
       searchForRuins(); 
    });
    $('#collect-from-rain-barrel').click(function(){
        collectFromRainBarrel();
    })
})