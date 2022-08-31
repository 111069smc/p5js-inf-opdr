class Ball {
  constructor(x, y, w, h, vx, vy)

  function draw ()
    
}

function setup() {
  createCanvas(500, 300);
  background(255);
}

let v = 3;
let x = 50;
let y = 50;
let s = 5;

let p = 25;
let q = 25;
let a = 10;
let b = 15;

let k = 30;
let l = 30;
let m = 6;
let n = 8;

function draw() {
  if (mouseIsPressed) {
    fill('red');
  }
  else {
    fill('yellow');
  }

  background('black');
  square(x, y, 25);
  square(p, q, 25);
  square(k, l, 25);

  x = x + v;
  y = y + s;
  p = p + a;
  q = q + b;
  k = k + m;
  l = l + n;

  if (x > 500) {
    v = -3
  }

  if (x < 0) {
    v = 3
  }

  if (y > 300) {
    s = -3
  }

  if (y < 0) {
    s = 3
  }


  if (p > 500) {
    a = -10
  }

  if (p < 0) {
    a = 10
  }

  if (q > 300) {
    b = -15
  }

  if (q < 0) {
    b = 15
  }


  if (k > 500) {
    m = -10
  }

  if (k < 0) {
    m = 10
  }

  if (l > 300) {
    n = -15
  }

  if (l < 0) {
    n = 15
  }

}