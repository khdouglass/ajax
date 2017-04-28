"use strict";

$( document ).ready(function() {
    console.log( "ready!" );
});

// PART 1: SHOW A FORTUNE

function showFortune(result) {
    $('#fortune-text').html(result);

    // TODO: get the fortune and show it in the #fortune-text div
}
function getFortune() {
    $.get('/fortune', showFortune);

}

console.log("jss file");
$('#get-fortune-button').on('click', getFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var zip = $("#zipcode-field").val()
    var url = "/weather.json?zipcode=" + zip;
    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, zip, replaceWeather);

}

function replaceWeather(result){
    $('#weather-info').html(result['forecast']);
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

       
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


