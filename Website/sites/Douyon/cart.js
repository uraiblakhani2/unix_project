let productsInCart= JSON.parse(localStorage.getItem('ShoppingCart'));
if(!productsInCart){
	productInCart = [];
}
const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector("#sum-prices");
const products = document.querySelector('#products-under');

const countTheSumPrice = function(){
	let sumPrice =0;
	
	productsInCart.forEach(product=>{
		sumPrice += product.price;
	});
	return sumPrice;
	
}

cost updateShoppingCartHTML = function(){
	localStorage.setItem('ShoppingCart', JSON.stringify(productsInCart));
	if(productsInCart.length > 0){
		let result = productsInCart[i].map(product =>{
			return
				<li class ="buyItem">
					<img scr="${product.image}">
					<div>
						<h5>${product.name}</h5>
						<h6>${product.price}</h6>
							<div>
								<button class="button-minus" data-id='${product.id}'>-</button>
								<span class ="countOfProduct">${product.count}</span>
								<button class="button-plus" data-id='${product.id}'>+</button>
							</div>
					</div>
				</li>
			.	
		});
		parentElement.innerHTML = result.join('');
		document.querySelector('.checkout').classList.add('hidden');
		cartSumPrice.innerHTML = "$"+countTheSumPrice();
	}
	else{
		document.querySelector('.checkout').classList.add('hidden');
		parentElement.innerHTML = 'h4 class="empty">Your shooping cart is empty</h4>';
		cartSumPrice.innerHTML = "";
	}
}




function updateProductsInCart(product){
	for(let i=0; i<ProductsInCart.length; i++){
		if(productsInCart[i].id == product.id){
			productsInCart[i].count +=1;
			productsInCart[i].price = productInCart[i].basePrice * productsIncart[i].count;
			return;
		}
	}
	productsInCart.push(product);
}

product.forEach(product=>{
	product.addEventListener('click, (e) =>{
		if(e.target.classList.contains('addToCart')){
			const productID = e.target.dataSet.ProductID;
			const productName = product.querySelector('.productName').innerHTML;
			const productPrice = product.querySelector('.productPrice').innerHTML;
			const productImage = product.querySelector('.img').src;
			let productToCart = {
				name: productName,
				image: productImage,
				id: productID,
				count: 1,
				price: +productPrice,
				basePrice: +productPrice,
			}
			updateProductsInCart(productToCart);
			updateShoppingCartHTML(productToCart);
		}
	});
});

parentElement.addEventListener('click', (e)=>{
	const isPlusButton = e.target.classList.contains('button-plus');
	const isMinusButton = e.target.classList.contains('button-minus');
	if(isPlusButton ||isMinusButton){
		for(let i=0; i<productInCart.length;i++){
			if(productIsCart[i].id === e.target.dataset.id){
				if(isPlusButton){
					productInCart[i].count +=1;
				}
				else if(isMinusButton){
					productInCart[i].count -=1;
				}
				productInCart[i].price = productInCart[i].basePrice *productInCart[i].count;
			}
			if(productInCart[i].count <=0){
				productsInCart.splice(1,1); 
			}
		}
		updateShoppingCartHTML();
	}
});

updateShoppingCartHTML();