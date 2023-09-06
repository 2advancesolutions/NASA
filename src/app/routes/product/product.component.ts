import { CommonModule } from '@angular/common';
import { Component, OnInit, computed } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Citations } from 'src/app/interfaces/citations.model';
import { ProductService } from 'src/app/services/product.service';

@Component({  
  standalone: true,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [CommonModule]
})
export class ProductComponent implements OnInit {

  constructor(private titleService: Title,
    private productService: ProductService,
    private router: Router) { }
 
  // Angular Signals
  products = this.productService.products;
  
  // local state
  isActive: boolean = false;
  sortDirection: 'asc' | 'desc' = 'asc';

  ngOnInit(): void {
    this.titleService.setTitle('Product');
  }
  toggleActive() {
    this.isActive = !this.isActive;
  }

  toggleSort(): void {
    if (this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
    } else {
      this.sortDirection = 'asc';
    }
    this.sortId();
  }

  sortId(key?: string): void {
    const products = this.productService.products() as Array<Citations>;
    computed(() => {
      return products.sort((a, b) => {
        if (this.sortDirection === 'asc') {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
    });
  }
  
  goProductDetails(id: number): void {
    this.productService.getProductDetails$(id)
      .subscribe(data => {
        this.router.navigate(['/details', id]);
      });
  }

}
