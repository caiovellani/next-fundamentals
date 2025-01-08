"use client";

type ProductProps = {
	params: {
		data: string[];
	};
};

// Sever Components -> Não USA JavaScript no lado do cliente
// Client Components -> O JavaScript é enviado ao navegador (cliente)

export default function Product({ params }: ProductProps) {
	const [productId, size, color] = params.data;

	console.log(params);

	function addToCart() {
		console.log("Adicionou ao carrinho");
	}

	return (
		<div>
			<p>Product: {productId}</p>
			<p>Size: {size}</p>
			<p>Color: {color}</p>

			<button type="button" onClick={addToCart}>
				Adicionar ao carrinho
			</button>
		</div>
	);
}
