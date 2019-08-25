import { Brand } from "./brand";

export class Product {
	constructor() {
		this.id = 0;
		this.code = 0;
		this.description = "";
	}

	id: number;
	code: number;
	description: string;
	brand: Brand;
}
