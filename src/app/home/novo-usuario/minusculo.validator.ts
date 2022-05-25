import { AbstractControl } from "@angular/forms";

export function minusculoValidator(control: AbstractControl) {
	const valor = control.value as string;
	return valor !== valor.toLocaleLowerCase() ? { minusculo: true } : null;
}
