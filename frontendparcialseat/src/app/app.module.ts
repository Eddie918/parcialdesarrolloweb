import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef } from '@angular/core'; // import the ApplicationRef class

@NgModule({
    declarations: [
        // remove AppComponent from here
        // otros componentes
    ],
    imports: [
        BrowserModule,
        HttpClientModule, // añade esta línea
        // add AppComponent to the imports array
        AppComponent
        // otros módulos
    ],
    providers: [],
})
export class AppModule {
    constructor(private appRef: ApplicationRef) {}

    ngDoBootstrap() {
        this.appRef.bootstrap(AppComponent);
    }
}
