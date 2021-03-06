import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccessGuardSharedModule } from 'app/shared';
import {
    AgreementComponent,
    AgreementDetailComponent,
    AgreementUpdateComponent,
    AgreementDeletePopupComponent,
    AgreementDeleteDialogComponent,
    agreementRoute,
    agreementPopupRoute
} from './';

const ENTITY_STATES = [...agreementRoute, ...agreementPopupRoute];

@NgModule({
    imports: [AccessGuardSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        AgreementComponent,
        AgreementDetailComponent,
        AgreementUpdateComponent,
        AgreementDeleteDialogComponent,
        AgreementDeletePopupComponent
    ],
    entryComponents: [AgreementComponent, AgreementUpdateComponent, AgreementDeleteDialogComponent, AgreementDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccessGuardAgreementModule {}
