const items = {
  "data":[
    {
      'itemName':'Sweet Item',
      'itemPrice':'$5',
      'itemImg':'./img/1.jpg'
    },
    {
      'itemName':'Cupcake Item',
      'itemPrice':'$7',
      'itemImg':'./img/2.jpg'
    },
    {
      'itemName':'Cake Item',
      'itemPrice':'$10',
      'itemImg':'./img/3.jpg'
    },
    {
      'itemName':'Au chocolate',
      'itemPrice':'$8',
      'itemImg':'./img/4.jpg'
    },
    {
      'itemName':'Baklava',
      'itemPrice':'$4',
      'itemImg':'./img/5.jpg'
    },
    {
      'itemName':'Borma',
      'itemPrice':'$12',
      'itemImg':'./img/6.jpg'
    },
    {
      'itemName':'brownies',
      'itemPrice':'$14',
      'itemImg':'./img/7.jpg'
    },
    {
      'itemName':'Brulee',
      'itemPrice':'$13',
      'itemImg':'./img/8.jpg'
    },
    {
      'itemName':'Cannoli',
      'itemPrice':'$3',
      'itemImg':'./img/9.jpg'
    }
  ]
};

let eachItem = document.querySelectorAll('.img');
let eachItemName = document.querySelectorAll('.name');
let eachItemPrice = document.querySelectorAll('.price');

const allItems = ()=>{
  for(let i=0; i<items.data.length; i++)
  {
    eachItem[i].style.backgroundImage=`url(${items.data[i].itemImg})`;
    eachItemName[i].innerHTML = items.data[i].itemName;
    eachItemPrice[i].innerHTML = items.data[i].itemPrice;
  }
}
allItems();

const visible = document.querySelectorAll('.each-item');

 function searchResult(){
  const x = document.getElementById("searchValue").value;
  let y;
  for(let i=0; i<items.data.length; i++)
  {
    console.log(items.data[i].itemName.toLowerCase().match(x))
    if(items.data[i].itemName.toLowerCase().match(x)){
      visible[i].style.display = 'block';
    }
    else{
      visible[i].style.display = 'none';
    }
  }
}

