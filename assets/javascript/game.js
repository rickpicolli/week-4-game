

$( document ).ready(function(){

  var enemyPower = Math.floor(Math.random()*102+19)
  
  $('#randomNumber').text(enemyPower);
  
  var hero1= Math.floor(Math.random()*12+1)
  var hero2= Math.floor(Math.random()*12+1)
  var hero3= Math.floor(Math.random()*12+1)
  var hero4= Math.floor(Math.random()*12+1)
  var hero5= Math.floor(Math.random()*12+1)
 
  var wins= 0;
  var losses = 0;
  var strenghtTotal= 0; 
 
$('#wins').text(wins);
$('#losses').text(losses);

function reset(){
      enemyPower = Math.floor(Math.random()*102+19);
      console.log(enemyPower)
      $('#randomNumber').text(enemyPower);
      hero1= Math.floor(Math.random()*12+1);
      hero2= Math.floor(Math.random()*12+1);
      hero3= Math.floor(Math.random()*12+1);
      hero4= Math.floor(Math.random()*12+1);
      hero5= Math.floor(Math.random()*12+1)
      strenghtTotal= 0;
      $('#finalTotal').text(strenghtTotal);
      } 

function winner(){
alert("Congratiolations! You won! :) ");
  wins++; 
  $('#wins').text(wins);
  reset();
}

function loser(){
alert ("Oh No! You lose! :( ");
  losses++;
  $('#losses').text(losses);
  reset()
}

  $('#flash').on('click', function(){
    strenghtTotal = strenghtTotal + hero1;
    console.log("New strenghtTotal= " + strenghtTotal);
    $('#strengthTotal').text(strenghtTotal); 
       
        if (strenghtTotal == enemyPower){
          winner();
        }
        else if ( strenghtTotal > enemyPower){
          loser();
        }   
  })  
  $('#green').on('click', function(){
    strenghtTotal = strenghtTotal + hero2;
    console.log("New strenghtTotal= " + strenghtTotal);
    $('#strengthTotal').text(strenghtTotal); 
        if (strenghtTotal == enemyPower){
          winner();
        }
        else if ( strenghtTotal > enemyPower){
          loser();
        } 
  })  
  $('#batman').on ('click', function(){
    strenghtTotal = strenghtTotal + hero3;
    console.log("New strenghtTotal= " + strenghtTotal);
    $('#strengthTotal').text(strenghtTotal);

          if (strenghtTotal == enemyPower){
          winner();
        }
        else if ( strenghtTotal > enemyPower){
          loser();
        } 
  })  
  $('#wonder').on ('click', function(){
    strenghtTotal = strenghtTotal + hero4;
    console.log("New strenghtTotal= " + strenghtTotal);
    $('#strengthTotal').text(strenghtTotal); 
      
          if (strenghtTotal == enemyPower){
          winner();
        }
        else if ( strenghtTotal > enemyPower){
          loser();
        }
  });   
  $('#superman').on ('click', function(){
    strenghtTotal = strenghtTotal + hero5;
    console.log("New strenghtTotal= " + strenghtTotal);
    $('#strengthTotal').html(strenghtTotal); 
      
          if (strenghtTotal == enemyPower){
          winner();
        }
        else if ( strenghtTotal > enemyPower){
          loser();
        }
  });   
}); 