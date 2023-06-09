import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { MainComponent } from "./main.component";
import { MainRoutingModule } from "./main.routing.module";

@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
        MainRoutingModule
    ]
})
export class MainModule{ }