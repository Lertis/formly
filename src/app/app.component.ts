import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

import { ValidationMessageName } from "./form-configs";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	form = new FormGroup({});

	model = { email: 'email@gmail.com' };

	fields: FormlyFieldConfig[] = [
		{
			key: 'email',
			type: 'input',
			templateOptions: {
				label: 'Email address',
				placeholder: 'Enter email'
			},
			validators: {
				validation: [ValidationMessageName.EmptyField],
			}
		}
	];

	onSubmit(): void {
		console.log(this.model);
	}
}
