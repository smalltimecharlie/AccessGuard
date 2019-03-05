import { NgModule } from '@angular/core';

import { AccessGuardSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AccessGuardSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AccessGuardSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AccessGuardSharedCommonModule {}
