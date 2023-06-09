import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ChatHistoryTitlesComponent } from "./components/chat-history-titles/chat-history-titles.component";
import { DividerComponent } from "./components/divider/divider.component";

@NgModule({
    declarations: [
        ChatHistoryTitlesComponent,
        DividerComponent,
    ],
    imports: [
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        MaterialModule,
        ChatHistoryTitlesComponent,
        DividerComponent,
    ],
    providers: [],
  })
  export class SharedModule { }
  