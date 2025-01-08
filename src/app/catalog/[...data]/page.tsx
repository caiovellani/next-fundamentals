import { AddToCartButton } from "./add-to-cart-button";

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

	return (
		<div>
			<p>Product: {productId}</p>
			<p>Size: {size}</p>
			<p>Color: {color}</p>

			<AddToCartButton />
		</div>
	);
}
