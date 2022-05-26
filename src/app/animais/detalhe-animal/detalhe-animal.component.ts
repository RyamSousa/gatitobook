import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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

	constructor(private animaisService: AnimaisService, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.animalID = this.activatedRoute.snapshot.params["animalId"];
		this.animal$ = this.animaisService.buscaPorId(this.animalID);
	}
}
