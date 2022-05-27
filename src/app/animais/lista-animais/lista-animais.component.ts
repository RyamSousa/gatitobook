import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { UsuarioService } from "src/app/autenticacao/usuario/usuario.service";
import { AnimaisService } from "../animais.service";
import { Animais } from "../animal";

@Component({
	selector: "app-lista-animais",
	templateUrl: "./lista-animais.component.html",
	styleUrls: ["./lista-animais.component.scss"],
})
export class ListaAnimaisComponent {
	animais!: Animais;

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((param) => {
			this.animais = this.activatedRoute.snapshot.data["animais"];
		});
	}
}
