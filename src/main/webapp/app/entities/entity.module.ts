import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'agreement-type',
                loadChildren: './agreement-type/agreement-type.module#AccessGuardAgreementTypeModule'
            },
            {
                path: 'agreement',
                loadChildren: './agreement/agreement.module#AccessGuardAgreementModule'
            },
            {
                path: 'nightingale-user',
                loadChildren: './nightingale-user/nightingale-user.module#AccessGuardNightingaleUserModule'
            },
            {
                path: 'agreement-organisation',
                loadChildren: './agreement-organisation/agreement-organisation.module#AccessGuardAgreementOrganisationModule'
            },
            {
                path: 'organisation-endpoint',
                loadChildren: './organisation-endpoint/organisation-endpoint.module#AccessGuardOrganisationEndpointModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#AccessGuardProductsModule'
            },
            {
                path: 'products-users',
                loadChildren: './products-users/products-users.module#AccessGuardProductsUsersModule'
            },
            {
                path: 'location-type',
                loadChildren: './location-type/location-type.module#AccessGuardLocationTypeModule'
            },
            {
                path: 'endpoint-type',
                loadChildren: './endpoint-type/endpoint-type.module#AccessGuardEndpointTypeModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccessGuardEntityModule {}
