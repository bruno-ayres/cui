import { NgModule } from '@angular/core';

import { CuiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [CuiSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [CuiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CuiSharedCommonModule {}
