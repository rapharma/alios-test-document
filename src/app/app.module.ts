import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentContainerComponent } from './components/document-container/document-container.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { cpfReducer } from './core/document/reducers/reducer';
import { CpfEffects } from './core/document/effects/effect';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConsultDocumentComponent } from './components/consult-document/consult-document.component';
import { CardsComponent } from './components/cards/cards.component';
import { InfoCardsComponent } from './components/cards/info-cards/info-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentContainerComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ConsultDocumentComponent,
    CardsComponent,
    InfoCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ person: cpfReducer }),
    EffectsModule.forRoot([CpfEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
