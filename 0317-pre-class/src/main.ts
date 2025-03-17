import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ClickCounterComponent } from './app/click-counter-component/click-counter-component-component';
import { TaskListComponent } from './task-list/task-list.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

bootstrapApplication(ClickCounterComponent).catch((err) => console.error(err));

bootstrapApplication(TaskListComponent).catch((err) => console.error(err));
