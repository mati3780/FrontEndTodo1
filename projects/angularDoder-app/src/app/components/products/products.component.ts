import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product} from '../../model/product';

import { PageChangedEvent } from '../../core/components/data-table/data-table.component';
import { SortDirection } from '../../core/directives/sortable-header.directive';
import { Page } from '../../core/model/page';
import { ModalService } from '../../core/services/modal.service';
import { ModalResult } from '../../core/model/modal-result.enum';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService, private modalService: ModalService) { }

  ngOnInit() {
    this.onPageChange({offset: 0, limit: 5, sortCol: "name", sortDir: "asc"});
  }

  loading: boolean = true;
  page: Page<Product> = new Page<Product>();
  products: Product[] ;
  sortCol: string;
  sortDir: SortDirection;

  onPageChange({offset, limit, sortCol, sortDir}: PageChangedEvent) {
    this.sortCol = sortCol;
    this.sortDir = sortDir;
    this.productService.query()
                        .subscribe(products => this.page.results = products);
  }

  async delete(id: number) {
    if (await this.modalService.showConfirm("Are you sure you want to delete the selected item?", 
                                            "Delete customer") == ModalResult.ok) {
      await this.productService.delete(id).toPromise();
      this.onPageChange({offset: 0, limit: this.page.pager.limit, sortCol: this.sortCol, sortDir: this.sortDir});
    }
  }
}
