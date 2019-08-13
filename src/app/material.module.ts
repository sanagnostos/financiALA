import { NgModule } from '@angular/core';

import { MatToolbarModule, MatButtonModule, MatDividerModule, MatListModule } from '@angular/material';
@NgModule({
        imports: [
            MatToolbarModule,
            MatButtonModule,
            MatDividerModule,
            MatListModule
        ],
        exports: [
            MatToolbarModule,
            MatButtonModule,
            MatDividerModule,
            MatListModule

        ]
})
export class MaterialModule{}