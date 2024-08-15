import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/
  bootstrapApplication(AppComponent, {
    providers: [
      ...appConfig.providers, // Mantén los proveedores existentes en appConfig
      provideRouter(routes) // Agrega el enrutamiento
    ]
  }).catch((err) => console.error(err));


