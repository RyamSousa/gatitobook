import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, switchMap, tap } from "rxjs";
import { Comentarios } from "./comentario";
import { ComentariosService } from "./comentarios.service";

@Component({
	selector: "app-comentarios",
	templateUrl: "./comentarios.component.html",
	styleUrls: ["./comentarios.component.scss"],
})
export class ComentariosComponent implements OnInit {
	@Input() id!: number;
	comentarios$!: Observable<Comentarios>;
	comentarioForm!: FormGroup;

	constructor(private comentatiosService: ComentariosService) {}

	ngOnInit(): void {
		this.comentarios$ = this.comentatiosService.buscaComentario(this.id);

		this.comentarioForm = new FormGroup({
			comentario: new FormControl("", [Validators.maxLength(300)]),
		});
	}

	gravar(): void {
		const comentario = this.comentarioForm.get("comentario")?.value ?? "";
		this.comentarios$ = this.comentatiosService.inclueComentario(this.id, comentario).pipe(
			switchMap(() => this.comentatiosService.buscaComentario(this.id)),
			tap(() => {
				this.comentarioForm.reset();
				alert("Salvo comentário");
			})
		);
		console.log(this.comentarios$);
	}
}
