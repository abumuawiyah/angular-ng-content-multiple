import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloWorldComponent } from "./components/hello-world/hello-world.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloWorldComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
