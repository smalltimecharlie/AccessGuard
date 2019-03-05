import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccessGuardSharedModule } from 'app/shared';
import {
    OrganisationEndpointComponent,
    OrganisationEndpointDetailComponent,
    OrganisationEndpointUpdateComponent,
    OrganisationEndpointDeletePopupComponent,
    OrganisationEndpointDeleteDialogComponent,
    organisationEndpointRoute,
    organisationEndpointPopupRoute
} from './';

const ENTITY_STATES = [...organisationEndpointRoute, ...organisationEndpointPopupRoute];

@NgModule({
    imports: [AccessGuardSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        OrganisationEndpointComponent,
        OrganisationEndpointDetailComponent,
        OrganisationEndpointUpdateComponent,
        OrganisationEndpointDeleteDialogComponent,
        OrganisationEndpointDeletePopupComponent
    ],
    entryComponents: [
        OrganisationEndpointComponent,
        OrganisationEndpointUpdateComponent,
        OrganisationEndpointDeleteDialogComponent,
        OrganisationEndpointDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccessGuardOrganisationEndpointModule {}
