import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { ValidationMessageName, emptyFieldValidator, ValidationMessageContext, emptyFieldMessage } from "./form-configs";


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		FormlyModule.forRoot({
			extras: { lazyRender: true },
			validators: [
				{
					name: ValidationMessageName.EmptyField, validation: emptyFieldValidator
				}
			],
			validationMessages: [
				{ name: ValidationMessageName.Required, message: ValidationMessageContext.Required },
				{ name: ValidationMessageName.EmptyField, message: emptyFieldMessage }
			]
		}),
		FormlyMaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
