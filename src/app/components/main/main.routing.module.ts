import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main.component";
import { ConversationComponent } from "../conversation/conversation.component";
import { DefaultConversationComponent } from "../default-conversation/default-conversation.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'new',
        pathMatch: 'full'
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'new',
                component: DefaultConversationComponent
            },
            {
                path: 'c/:id',
                component: ConversationComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'new',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }