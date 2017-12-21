// add pagination with bootstrap (for now)
//add categories
//and style it fancy !


function dress(x, y, z, w) {
  this.image = x;
  this.size = y;
  this.color = z;
  this.price = w;
}

var inventory = [];

var dress1 = new dress('img/dress1.png', 'small', 'red', '$45')
var dress2 = new dress('img/dress1.png', 'small', 'red', '$45')
var dress3 = new dress('img/dress1.png', 'small', 'red', '$45')
var dress4 = new dress('img/dress1.png', 'small', 'red', '$45')
var dress5 = new dress('img/dress1.png', 'small', 'red', '$45')
var dress6 = new dress('img/dress1.png', 'small', 'red', '$45')
var dress7 = new dress('img/dress1.png', 'small', 'red', '$45')
var dress8 = new dress('img/dress1.png', 'small', 'red', '$45')
var dress9 = new dress('img/dress1.png', 'small', 'red', '$45')
var dress10 = new dress('img/dress1.png', 'small', 'red', '$45')

inventory.push(dress1);
inventory.push(dress2);
inventory.push(dress3);
inventory.push(dress4);
inventory.push(dress5);
inventory.push(dress6);
inventory.push(dress7);
inventory.push(dress8);
inventory.push(dress9);
inventory.push(dress10);

  for(var i = 0; i< inventory.length; i++) {

    var dimage = inventory[i].image;
    var img = document.createElement('img');
    img.src = dimage;


    var div2 = document.createElement('div');
    div2.innerHTML = '<div>' + '<h4>' + inventory[i].size + '</h4>' + '<h4>' + inventory[i].color + '</h4>' + '<h6>' + inventory[i].price + '</h6>' + '<button type="button" class="btn btn-danger">Order Now</button>' + '</div>';

    var divbig = document.createElement('div');
    divbig.className = 'col-sm-4 mt-5 row';
    img.className = 'col-sm-8 img-responsive';
    img.setAttribute('style', 'object-fit: cover;');
    div2.className = 'col-sm-4';

    divbig.appendChild(img);
    divbig.appendChild(div2);
    divbig.setAttribute('style', 'margin-right: 10px;')

    document.getElementById('products').appendChild(divbig);


  }
