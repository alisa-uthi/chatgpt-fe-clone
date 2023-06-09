import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ChatHistoryTitlesComponent } from "./components/chat-history-titles/chat-history-titles.component";
import { DividerComponent } from "./components/divider/divider.component";
import { SendMessageInputComponent } from "./components/send-message-input/send-message-input.component";

@NgModule({
    declarations: [
        ChatHistoryTitlesComponent,
        DividerComponent,
        SendMessageInputComponent
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
        SendMessageInputComponent
    ],
    providers: [],
})
export class SharedModule { }
  