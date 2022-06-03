import { HttpEvent, HttpEventType } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { finalize } from "rxjs";
import { AnimaisService } from "../animais.service";

@Component({
	selector: "app-novo-animal",
	templateUrl: "./novo-animal.component.html",
	styleUrls: ["./novo-animal.component.scss"],
})
export class NovoAnimalComponent implements OnInit {
	FormularioAnimal!: FormGroup;
	file!: File;
	preview!: string;
	percentualConcuido: number = 0;

	constructor(private animaisService: AnimaisService, private router: Router) {}

	ngOnInit(): void {
		this.FormularioAnimal = new FormGroup({
			file: new FormControl("", Validators.required),
			description: new FormControl("", Validators.maxLength(300)),
			allowComments: new FormControl(true),
		});
	}

	upload() {
		const allowComments = this.FormularioAnimal.get("allowComments")?.value ?? false;
		const description = this.FormularioAnimal.get("description")?.value ?? "";

		this.animaisService
			.upload(description, allowComments, this.file)
			.pipe(finalize(() => this.router.navigate(["animais"])))
			.subscribe({
				next: (event: HttpEvent<any>) => {
					if (event.type === HttpEventType.UploadProgress) {
						const total = event.total ?? 1;
						this.percentualConcuido = Math.round(100 * (event.loaded / total));
					}
				},
				error: (error) => console.error(error),
			});
	}

	gravaArquivo(arquivo: any): void {
		const [file] = arquivo?.files;
		this.file = file;
		const reader = new FileReader();
		reader.onload = (event: any) => (this.preview = event.target.result);
		reader.readAsDataURL(file);
	}
}
