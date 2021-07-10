import { FormControl, ValidationErrors } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

import { ValidationMessageName } from "./static.messages";

function emptyFieldValidator(control: FormControl): ValidationErrors {
	return (control.value as string).trim().length === 0 ? { [ValidationMessageName.EmptyField]: true } : null;
}

function emptyFieldMessage(_: boolean, field: FormlyFieldConfig) {
	return `${field.key} is empty!`;
}

export {
	emptyFieldValidator, emptyFieldMessage
};
