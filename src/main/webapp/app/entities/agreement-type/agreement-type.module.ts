import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccessGuardSharedModule } from 'app/shared';
import {
    AgreementTypeComponent,
    AgreementTypeDetailComponent,
    AgreementTypeUpdateComponent,
    AgreementTypeDeletePopupComponent,
    AgreementTypeDeleteDialogComponent,
    agreementTypeRoute,
    agreementTypePopupRoute
} from './';

const ENTITY_STATES = [...agreementTypeRoute, ...agreementTypePopupRoute];

@NgModule({
    imports: [AccessGuardSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        AgreementTypeComponent,
        AgreementTypeDetailComponent,
        AgreementTypeUpdateComponent,
        AgreementTypeDeleteDialogComponent,
        AgreementTypeDeletePopupComponent
    ],
    entryComponents: [
        AgreementTypeComponent,
        AgreementTypeUpdateComponent,
        AgreementTypeDeleteDialogComponent,
        AgreementTypeDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccessGuardAgreementTypeModule {}
