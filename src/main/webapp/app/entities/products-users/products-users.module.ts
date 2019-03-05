import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccessGuardSharedModule } from 'app/shared';
import {
    ProductsUsersComponent,
    ProductsUsersDetailComponent,
    ProductsUsersUpdateComponent,
    ProductsUsersDeletePopupComponent,
    ProductsUsersDeleteDialogComponent,
    productsUsersRoute,
    productsUsersPopupRoute
} from './';

const ENTITY_STATES = [...productsUsersRoute, ...productsUsersPopupRoute];

@NgModule({
    imports: [AccessGuardSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ProductsUsersComponent,
        ProductsUsersDetailComponent,
        ProductsUsersUpdateComponent,
        ProductsUsersDeleteDialogComponent,
        ProductsUsersDeletePopupComponent
    ],
    entryComponents: [
        ProductsUsersComponent,
        ProductsUsersUpdateComponent,
        ProductsUsersDeleteDialogComponent,
        ProductsUsersDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccessGuardProductsUsersModule {}
