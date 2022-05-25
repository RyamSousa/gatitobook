import { AbstractControl } from "@angular/forms";

export function usuarioSenhaIguaisValidator(formGroup: AbstractControl) {
	const username = formGroup.get("username")?.value[0] ?? "";
	const password = formGroup.get("password")?.value[0] ?? "";

	if (username.trim() + password.trim()) {
		return username !== password ? null : { senhaIgualUsuario: true };
	}

	return null;
}