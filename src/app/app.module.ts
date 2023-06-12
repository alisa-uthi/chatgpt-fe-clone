import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { LayoutComponent } from './shared/layout/layout.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { DefaultConversationComponent } from './components/default-conversation/default-conversation.component';
import { UsageCardComponent } from './components/default-conversation/usage-card/usage-card.component';

export function addSvgIconSet(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
  return () => {
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/symbol-defs.svg')
    );
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ConversationComponent,
    DefaultConversationComponent,
    UsageCardComponent
  ],
  imports: [
		SharedModule,
    CommonModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: addSvgIconSet, deps: [MatIconRegistry, DomSanitizer], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
