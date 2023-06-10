import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ChatTitlesComponent } from "./components/chat-titles/chat-titles.component";
import { DividerComponent } from "./components/divider/divider.component";
import { SendMessageInputComponent } from "./components/send-message-input/send-message-input.component";
import { ChatTileComponent } from "./components/chat-titles/chat-tile/chat-tile.component";

@NgModule({
    declarations: [
        ChatTitlesComponent,
        ChatTileComponent,
        DividerComponent,
        SendMessageInputComponent,
    ],
    imports: [
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        MaterialModule,
        ChatTitlesComponent,
        DividerComponent,
        SendMessageInputComponent
    ],
    providers: [],
})
export class SharedModule { }
  