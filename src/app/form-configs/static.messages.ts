//#region Messages names
enum ValidationMessageName {
	Required = "required",
	EmptyField = "emptyField"
}
//#endregion

//#region Messages context
enum ValidationMessageContext {
	Required = "This field is required"
}
//#endregion

export {
	ValidationMessageName, ValidationMessageContext
};
