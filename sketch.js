var myLoc;
var myMap;
var canvas;
var mappa= new Mappa('MapboxGL', 'pk.eyJ1IjoicmFjaGVsZWJhcmF6emV0dGEiLCJhIjoiY2pvaDdndGd6MGIwcjNwcW8zYndiazcyeCJ9.t-55v8vl28nalmYH6ozm6w');

var petraLat = 30.328459 ;
var petraLng= 35.4421682;

var muragliaLat = 40.4319118;
var muragliaLng= 116.5681809;

var colosseoLat = 41.8902142;
var colosseoLng = 12.4900369;

var chichenLat = 20.6842899;
var chichenLng= -88.5699767;

var machupicchuLat = -13.163136;
var machupicchuLng= -72.547157;

var tajmahalLat = 27.1750199;
var tajmahalLng= 78.0399612;

var cristoRioLat = -22.951911;
var cristoRioLng= -43.2126812;

var petra = {
  lat: petraLat,
  lng: petraLng,
}

var muraglia = {
  lat: muragliaLat,
  lng: muragliaLng,
}

var colosseo = {
  lat: colosseoLat,
  lng: colosseoLng,
}

var chichen = {
  lat: chichenLat,
  lng: chichenLng,
}

var machupicchu = {
  lat: machupicchuLat,
  lng: machupicchuLng,
}

var tajmahal = {
  lat: tajmahalLat,
  lng: tajmahalLng,
}

var cristoRio = {
  lat: cristoRioLat,
  lng: cristoRioLng,
}


var options = {
  lat: 0,
  lng: 0,
  zoom: 1,
  style: 'mapbox://styles/rachelebarazzetta/cjoxbmx9t2z212rs0r49pbi5b',
  pitch: 15 //degree
}

function preload(){
  myLoc = getCurrentPosition();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  options.lat = myLoc.latitude;
  options.long = myLoc.longitude;
  angleMode(DEGREES);
}

function draw() {
  clear();

  var point1 = myMap.latLngToPixel(petraLat, petraLng);
  ellipse(point1.x, point1.y, 10);

  var point2 = myMap.latLngToPixel(muragliaLat, muragliaLng);
  ellipse(point2.x, point2.y, 10);

  var point3 = myMap.latLngToPixel(colosseoLat, colosseoLng);
  ellipse(point3.x, point3.y, 10);

  var point4 = myMap.latLngToPixel(chichenLat, chichenLng);
  ellipse(point4.x, point4.y, 10);

  var point5 = myMap.latLngToPixel(machupicchuLat, machupicchuLng);
  ellipse(point5.x, point5.y, 10);

  var point6 = myMap.latLngToPixel(tajmahalLat, tajmahalLng);
  ellipse(point6.x, point6.y, 10);

  var point7 = myMap.latLngToPixel(cristoRioLat, cristoRioLng);
  ellipse(point7.x, point7.y, 10);
 }
