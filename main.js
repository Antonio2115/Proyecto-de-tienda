const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.icon_menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon  = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuBackground = document.querySelector('.menuBackground');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarIcon.addEventListener('click',toggleCarAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);


function toggleDesktopMenu(){

    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive')

    const isAsideOpen = !desktopMenu.classList.contains('inactive');
    if(isAsideOpen) {
        menuBackground.classList.remove('inactive');
    }
    else{
        menuBackground.classList.add('inactive');
    }
   

}

function toggleMobileMenu(){
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');

    const isAsideOpen = !mobileMenu.classList.contains('inactive');
    if(isAsideOpen) {
        menuBackground.classList.remove('inactive');
    }
    else{
        menuBackground.classList.add('inactive');
    }
}

function toggleCarAside(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive')

    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');
    if(isAsideOpen) {
        menuBackground.classList.remove('inactive');
    }
    else{
        menuBackground.classList.add('inactive');
    }
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive')
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');

    menuBackground.classList.remove('inactive');

}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');

    menuBackground.classList.add('inactive');
}




const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Motorcycle',
    price: 5000,
    image: 'https://www.actualidadmotor.com/wp-content/uploads/2009/01/moto-naked.jpg', 
});
productList.push({
    name: 'Tricycle',
    price: 50,
    image: 'https://www.collinsdictionary.com/images/thumb/tricycle_260783777_250.jpg', 
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

function renderProducts(ArrayProducts){
    for(product of ArrayProducts){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        /*--------------Evento para escuchar clicks-------------*/
        productImg.addEventListener('click', openProductDetailAside);
        productCard.style.cursor = 'pointer';

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./Platzi_YardSale_Icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
