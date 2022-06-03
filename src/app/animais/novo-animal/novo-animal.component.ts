import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "app-novo-animal",
	templateUrl: "./novo-animal.component.html",
	styleUrls: ["./novo-animal.component.scss"],
})
export class NovoAnimalComponent {
	FormularioAnimal!: FormGroup;
	file!: File;
	preview!: string;
	percentualConcuido: number = 0;

	upload() {}
	gravaArquivo(arquivo: any) {}
}
