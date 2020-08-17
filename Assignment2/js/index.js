const items = {
  "data":[
    {
      'itemName':'Sweet Item',
      'itemPrice':'$5',
      'itemImg':'./img/sweet_cake.jpg'
    },
    {
      'itemName':'Cupcake Item',
      'itemPrice':'$5',
      'itemImg':'./img/cupcake_item.jpg'
    },
    {
      'itemName':'Cake Item',
      'itemPrice':'$5',
      'itemImg':'./img/cake_item.jpg'
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

