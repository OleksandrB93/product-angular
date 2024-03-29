import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponentComponent } from './components/product.component/product.component.component';
import { AppComponent } from './app.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FocusDirective } from './directives/focus.directive';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalErrorComponent,
    ProductComponentComponent,
    FilterProductPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
    ProductPageComponent,
    AboutPageComponent,
    NavigationComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
