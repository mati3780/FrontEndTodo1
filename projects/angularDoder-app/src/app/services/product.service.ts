import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { ResourceBaseService } from '../core/services/resource-base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ResourceBaseService<Product> {
  constructor(http: HttpClient) {
		super(http);
	}

	protected apiPath(): string {
		return 'api/v1/products';
	}

}