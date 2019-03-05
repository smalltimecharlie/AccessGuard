import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccessGuardSharedModule } from 'app/shared';
import {
    EndpointTypeComponent,
    EndpointTypeDetailComponent,
    EndpointTypeUpdateComponent,
    EndpointTypeDeletePopupComponent,
    EndpointTypeDeleteDialogComponent,
    endpointTypeRoute,
    endpointTypePopupRoute
} from './';

const ENTITY_STATES = [...endpointTypeRoute, ...endpointTypePopupRoute];

@NgModule({
    imports: [AccessGuardSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EndpointTypeComponent,
        EndpointTypeDetailComponent,
        EndpointTypeUpdateComponent,
        EndpointTypeDeleteDialogComponent,
        EndpointTypeDeletePopupComponent
    ],
    entryComponents: [
        EndpointTypeComponent,
        EndpointTypeUpdateComponent,
        EndpointTypeDeleteDialogComponent,
        EndpointTypeDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccessGuardEndpointTypeModule {}
