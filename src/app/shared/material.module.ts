import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatExpansionModule,
        MatSelectModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatSlideToggleModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        MatSidenavModule,
        MatGridListModule,
        MatListModule,
        MatDatepickerModule,
        ReactiveFormsModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatExpansionModule,
        MatSelectModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatSlideToggleModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        MatSidenavModule,
        MatGridListModule,
        MatListModule,
        MatDatepickerModule,
        ReactiveFormsModule
    ]
})
export class MaterialModule { }