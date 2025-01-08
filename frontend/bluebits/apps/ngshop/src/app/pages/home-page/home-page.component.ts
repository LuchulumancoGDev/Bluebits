import { Component } from '@angular/core';
import { CategoriesBannerComponent, FeaturedProductsComponent } from '@bluebits/products';
import { BannerComponent } from '@bluebits/ui';
import { AccordionModule } from 'primeng/accordion';
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [AccordionModule, BannerComponent, CategoriesBannerComponent, FeaturedProductsComponent]
})
export class HomePageComponent {

}
