import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit, Signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CitationsDetails } from 'src/app/interfaces/citations.details';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  imports: [CommonModule]
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private titleService: Title,
    private productService: ProductService) { }

    productDetails: Signal<CitationsDetails | undefined> = this.productService.productDetails; 
 
    ngOnInit(): void {
     this.titleService.setTitle('Product Details');
  }

}
