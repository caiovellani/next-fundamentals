"use client";

import { useState, type ReactNode } from "react";

export function AddToCartButton({ children }: { children: ReactNode }) {
	const [count, setCount] = useState(0);

	function addToCart() {
		setCount((state) => state + 1);
	}

	return (
		<div>
			<button onClick={addToCart} type="button">
				Adicionar ao carrinho {count}
			</button>
			{children}
		</div>
	);
}
