import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AnimaisService } from "../animais.service";
import { Animal } from "../animal";

@Component({
	selector: "app-detalhe-animal",
	templateUrl: "./detalhe-animal.component.html",
	styleUrls: ["./detalhe-animal.component.scss"],
})
export class DetalheAnimalComponent implements OnInit {
	animalID!: number;
	animal$!: Observable<Animal>;

	constructor(
		private animaisService: AnimaisService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() {
		this.animalID = this.activatedRoute.snapshot.params["animalId"];
		this.animal$ = this.animaisService.buscaPorId(this.animalID);
	}

	curtir() {
		this.animaisService.curtir(this.animalID).subscribe({
			next: (curtida) => {
				if (curtida) {
					this.animal$ = this.animaisService.buscaPorId(this.animalID);
				}
			},
			error: (error) => console.error(error),
		});
	}

	excluir() {
		this.animaisService.excluiAnimal(this.animalID).subscribe({
			next: () => this.router.navigate(["/animais/"]),
			error: (error) => console.error(error),
		});
	}
}
