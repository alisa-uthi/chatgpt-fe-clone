import { NgModule } from "@angular/core";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ChatHistoryTitlesComponent } from "./components/sidenav/chat-history-titles/chat-history-titles.component";
import { DividerComponent } from "./components/divider/divider.component";

@NgModule({
    declarations: [
        SidenavComponent,
        ChatHistoryTitlesComponent,
        DividerComponent
    ],
    imports: [
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        MaterialModule,
        SidenavComponent,
        DividerComponent
    ],
    providers: [],
  })
  export class SharedModule { }
  