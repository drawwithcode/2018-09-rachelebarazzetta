var myLoc;
var myMap;

var petraImg;
var muragliaImg;
var colosseoImg;
var chichenImg;
var machupicchuImg;
var tajmahalImg;
var cristoRioImg;
var niagaraImg;

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

var niagaraLat = 43.0828162;
var niagaraLng= -79.0763516;

var name1 = "Petra";
var name2 = "Muraglia cinese ";
var name3 = "Colosseo";
var name4 = "Chichen";
var name5 = "Machu Picchu";
var name6 = "Tajmahal";
var name7 = "Cristo redentore";
var name8 = "Cascate del Niagara";

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

var cascateNiagara = {
  lat: niagaraLat,
  lng: niagaraLng,
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
  petraImg = loadImage("./assets/petra.png");
  muragliaImg = loadImage("./assets/muragliaCinese.png");
  colosseoImg = loadImage("./assets/colosseo.png");
  chichenImg = loadImage("./assets/chichen.png");
  machupicchuImg = loadImage("./assets/machupicchu.png");
  tajmahalImg = loadImage("./assets/tajmahal.png");
  cristoRioImg = loadImage("./assets/cristoredentore.png");
  niagaraImg = loadImage("./assets/niagara.png");
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
  noStroke();
  fill('blue');
  var point0 = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
  ellipse(point0.x, point0.y, 10);


  fill('yellow');
  var point1 = myMap.latLngToPixel(petraLat, petraLng);
  ellipse(point1.x, point1.y, 10);
  text(name1,point1.x+10, point1.y);
  image(petraImg,point1.x-30, point1.y,30,30);

  var point2 = myMap.latLngToPixel(muragliaLat, muragliaLng);
  ellipse(point2.x, point2.y, 10);
  text(name2,point2.x+10, point2.y);
  image(muragliaImg,point2.x-30, point2.y,30,30);

  var point3 = myMap.latLngToPixel(colosseoLat, colosseoLng);
  ellipse(point3.x, point3.y, 10);
  text(name3,point3.x+10, point3.y);
  image(colosseoImg,point3.x-30, point3.y,30,30);

  var point4 = myMap.latLngToPixel(chichenLat, chichenLng);
  ellipse(point4.x, point4.y, 10);
  text(name4,point4.x+10, point4.y);
  image(chichenImg,point4.x-30, point4.y,30,30);

  var point5 = myMap.latLngToPixel(machupicchuLat, machupicchuLng);
  ellipse(point5.x, point5.y, 10);
  text(name5,point5.x+10, point5.y);
  image(machupicchuImg,point5.x-30, point5.y,30,30);

  var point6 = myMap.latLngToPixel(tajmahalLat, tajmahalLng);
  ellipse(point6.x, point6.y, 10);
  text(name6,point6.x+10, point6.y);
  image(tajmahalImg,point6.x-30, point6.y,30,30);

  var point7 = myMap.latLngToPixel(cristoRioLat, cristoRioLng);
  ellipse(point7.x, point7.y, 10);
  text(name7,point7.x+10, point7.y);
  image(cristoRioImg,point7.x-30, point7.y,30,30);

  var point8 = myMap.latLngToPixel(niagaraLat, niagaraLng);
  ellipse(point8.x, point8.y, 10);
  text(name8,point8.x+10, point8.y);
  image(niagaraImg,point8.x-30, point8.y,30,30);


  var distance1 = calcGeoDistance(myLoc.latitude, myLoc.longitude, petraLat, petraLng, "km");

  var distance2 = calcGeoDistance(myLoc.latitude, myLoc.longitude, muragliaLat, muragliaLng, "km");

  var distance3 = calcGeoDistance(myLoc.latitude, myLoc.longitude, colosseoLat, colosseoLng, "km");

  var distance4 = calcGeoDistance(myLoc.latitude, myLoc.longitude, chichenLat, chichenLng, "km");

  var distance5 = calcGeoDistance(myLoc.latitude, myLoc.longitude, machupicchuLat, machupicchuLng, "km");

  var distance6 = calcGeoDistance(myLoc.latitude, myLoc.longitude, tajmahalLat, tajmahalLng, "km");

  var distance7 = calcGeoDistance(myLoc.latitude, myLoc.longitude, cristoRioLat, cristoRioLng, "km");

  var distance8 = calcGeoDistance(myLoc.latitude, myLoc.longitude, niagaraLat, niagaraLng, "km");


if(mouseIsPressed === true){
  stroke(20);
  line(point0.x, point0.y, point1.x, point1.y);
  line(point0.x, point0.y, point2.x, point2.y);
  line(point0.x, point0.y, point3.x, point3.y);
  line(point0.x, point0.y, point4.x, point4.y);
  line(point0.x, point0.y, point5.x, point5.y);
  line(point0.x, point0.y, point6.x, point6.y);
  line(point0.x, point0.y, point7.x, point7.y);
  line(point0.x, point0.y, point8.x, point8.y);

  text(distance1,point1.x+10, point1.y+15);
  text(distance2,point2.x+10, point2.y+15);
  text(distance3,point3.x+10, point3.y+15);
  text(distance4,point4.x+10, point4.y+15);
  text(distance5,point5.x+10, point5.y+15);
  text(distance6,point6.x+10, point6.y+15);
  text(distance7,point7.x+10, point7.y+15);
  text(distance8,point8.x+10, point8.y+15);

}

var d = dist(point8.x,point8.y,mouseX, mouseY);

if( d < radius){
  fill('red');
} else{
  fill('yellow');
}
ellipse(point8.x,point8.y, 10);



 }
