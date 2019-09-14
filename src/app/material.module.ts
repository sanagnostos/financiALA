import { NgModule } from '@angular/core';

import { MatToolbarModule, MatButtonModule, MatDividerModule, MatListModule, MatTableModule } from '@angular/material';
@NgModule({
        imports: [
            MatToolbarModule,
            MatButtonModule,
            MatDividerModule,
            MatListModule,
            MatTableModule
        ],
        exports: [
            MatToolbarModule,
            MatButtonModule,
            MatDividerModule,
            MatListModule,
            MatTableModule

        ]
})
export class MaterialModule{}