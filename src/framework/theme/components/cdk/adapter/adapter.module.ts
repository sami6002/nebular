import { ModuleWithProviders, NgModule } from '@angular/core';
import { OverlayContainer, ScrollDispatcher } from '@angular/cdk/overlay';

import { NbOverlayContainerAdapter } from './overlay-container-adapter';
import { NbScrollDispatcherAdapter } from './scroll-dispatcher-adapter';
import { NbViewportRulerAdapter } from './viewport-ruler-adapter';
import { NbBlockScrollStrategyAdapter } from './block-scroll-strategy-adapter';


@NgModule({})
export class NbCdkAdapterModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NbCdkAdapterModule,
      providers: [
        NbViewportRulerAdapter,
        NbOverlayContainerAdapter,
        NbBlockScrollStrategyAdapter,
        { provide: OverlayContainer, useExisting: NbOverlayContainerAdapter },
        { provide: ScrollDispatcher, useClass: NbScrollDispatcherAdapter },
      ],
    };
  }
}
