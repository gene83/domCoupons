//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow:
const getDisclaimer = document.getElementById('disclaimer')
getDisclaimer.innerHTML = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.';

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.
const getBrand1 = document.getElementById('brand1');
getBrand1.innerHTML = 'Nabisco';

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 
const getItem1 = document.getElementById('item1');
getItem1.innerHTML = 'Cheeseburger Oreos';

//4. Target the div element with the id of 'price1' and update the content to $8.99.
const getPrice1 = document.getElementById('price1');
getPrice1.innerHTML = `$8.99`;

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!
const getDiscount1 = document.getElementById('discount1');
getDiscount1.innerHTML = 'Free fries with purchase!';

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.
const getItem2 = document.createElement('div');
getItem2.id = 'item2'; 
getItem2.innerHTML = 'Hendrick\'s Gin';
const getBrand2 = document.getElementById('brand2');
getBrand2.appendChild(getItem2);

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.
const getPrice2 = document.createElement('div');
getPrice2.id = 'price2';
getPrice2.innerHTML = '$34.99';
getItem2.appendChild(getPrice2);

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.
const getDiscount3 = document.createElement('button');
getDiscount3.id = 'discount3';
getDiscount3.innerHTML = '50% OFF Axe body soap!';
const getPrice3 = document.getElementById('price3');
getPrice3.appendChild(getDiscount3);

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.
const getItemPanda = document.getElementsByClassName('item')[0];
getItemPanda.innerHTML = 'Orange Chicken';

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.
const getPandaPrice = document.getElementsByClassName('price')[0];
const getPandaButton = document.createElement('button')
getPandaButton.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
getPandaPrice.appendChild(getPandaButton);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.
const getBrandUniqlo = document.getElementsByClassName('brand')[1];
getBrandUniqlo.innerHTML = 'Uniqlo';

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 
const getPriceUniqlo = document.getElementsByClassName('price')[1];
getPriceUniqlo.innerHTML = '10,000';

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 
const getBrandHifiman = document.createElement('div');
getBrandHifiman.className = 'brand';
getBrandHifiman.innerHTML = 'Hifiman Shangri-La'
const getBlockHifi = document.getElementsByClassName('block3 col-sm-4')[1]
getBlockHifi.appendChild(getBrandHifiman);

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 
const getItemHifi = document.createElement('div');
getItemHifi.className = 'item';
getItemHifi.innerHTML = 'Electronstatic Headphones';
getBlockHifi.appendChild(getItemHifi);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.
const getPriceHifi = document.createElement('div');
getPriceHifi.className = 'price';
getPriceHifi.innerHTML = '$18,000';
getBlockHifi.appendChild(getPriceHifi);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.
const getDiscountHifi = document.createElement('button');
getDiscountHifi.className = 'discount';
getDiscountHifi.innerHTML = 'Free Barry Manilow CD with purchase!';
getBlockHifi.appendChild(getDiscountHifi);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!
const getBrandHM = document.getElementsByClassName('brand')[3];
getBrandHM.innerHTML = 'H&M';

const getItemHM = document.getElementsByClassName('item')[3];
getItemHM.innerHTML = 'Unicorn-Head Slippers';

const getPriceHM = document.getElementsByClassName('price')[3];
getPriceHM.innerHTML = '$21.99';

const getButtonHM = document.getElementsByClassName('discount')[2];
getButtonHM.innerHTML = 'Free knee-high tube socks with purchase!';



//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.
const getBrandDor = document.getElementsByClassName('brand')[4];
getBrandDor.innerHTML = 'Frito Lay';

const getItemDor = document.getElementsByClassName('item')[4];
getItemDor.innerHTML = 'Poppin\' Jalapeno Doritos';

const getPriceDor = document.getElementsByClassName('price')[4];
getPriceDor.innerHTML = '$7.77';

const getButtonDor = document.getElementsByClassName('discount')[3];
getButtonDor.innerHTML = '33% OFF any 6 pack Budweiser or Bud Light.';

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!
const getBrandPug = document.getElementsByClassName('brand')[5];
getBrandPug.innerHTML = 'Any Dog Breeder';

const getItemPug = document.getElementsByClassName('item')[5];
getItemPug.innerHTML = 'Baby Puggy';

const getPricePug = document.getElementsByClassName('price')[5];
getPricePug.innerHTML = 'Priceless';

const getButtonPug = document.getElementsByClassName('discount')[4];
getButtonPug.innerHTML = 'No Discounts. This cutie is worth every penny!';

//Final Boss 
//Create your own product for the last three sections.
const getBlockShades = document.getElementsByClassName('block1')[3];
const getImgShades = getBlockShades.childNodes[0];
getImgShades.src = 'https://cdn.shopify.com/s/files/1/0193/6253/products/8964m_800x.jpg?v=1518134132'

const getBrandShades = document.getElementsByClassName('brand')[6];
getBrandShades.innerHTML = 'Future Optics';

const getItemShades = document.getElementsByClassName('item')[6];
getItemShades.innerHTML = 'Impenetrable Poker Shades';

const getPriceShades = document.getElementsByClassName('price')[6];
getPriceShades.innerHTML = '10 BTC';

const getButtonShades = document.getElementsByClassName('discount')[5];
getButtonShades.innerHTML = 'Free entry to PokerStars Million Dollar Sunday event';



const getBlockGolf = document.getElementsByClassName('block2')[3];
const getImgGolf = getBlockGolf.childNodes[1];
getImgGolf.src = 'https://guide.alibaba.com/image/i4/callaway-golf-clubs-callaway-legacy-gold-edition-gift-sets-bar-male-pole/TB1imWqGXXXXXXgXFXXXXXXXXXX_!!0-item_pic.jpg'

const getBrandGolf = document.createElement('div');
getBrandGolf.className = 'brand';
getBrandGolf.innerHTML = 'Luxery inc';
getBlockGolf.appendChild(getBrandGolf);

const getItemGolf = document.createElement('div');
getItemGolf.className = 'item';
getItemGolf.innerHTML = 'Solid Gold Golf Set';
getBlockGolf.appendChild(getItemGolf);

const getPriceGolf = document.createElement('div');
getPriceGolf.className = 'price';
getPriceGolf.innerHTML = '$7.5M';
getBlockGolf.appendChild(getPriceGolf);

const getButtonGolf = document.createElement('button');
getButtonGolf.innerHTML = 'If you need a discount you shouldnt be buying these';
getButtonGolf.className = 'discount';
getBlockGolf.appendChild(getButtonGolf);



const getBlockLion = document.getElementsByClassName('block3')[3];
const getImgLion = getBlockLion.childNodes[0];
getImgLion.src = 'data:image/webp;base64,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'

const getBrandLion = document.createElement('div');
getBrandLion.className = 'brand';
getBrandLion.innerHTML = 'Exotic Wildlife inc';
getBlockLion.appendChild(getBrandLion);

const getItemLion = document.createElement('div');
getItemLion.className = 'item';
getItemLion.innerHTML = 'Real Pet lion';
getBlockLion.appendChild(getItemLion);

const getPriceLion = document.createElement('div');
getPriceLion.className = 'price';
getPriceLion.innerHTML = '$500,000';
getBlockLion.appendChild(getPriceLion);

const getButtonLion = document.createElement('button');
getButtonLion.innerHTML = 'Comes with free lion safety course';
getButtonLion.className = 'discount';
getBlockLion.appendChild(getButtonLion);
