import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { minusculoValidator } from "./minusculo.validator";
import { NovoUsuario } from "./novo-usuario";
import { NovoUsuarioService } from "./novo-usuario.service";
import { UsuarioExisteService } from "./usuario-existe.service";
import { usuarioSenhaIguaisValidator } from "./usuario-senha-iguais.validator";

@Component({
	selector: "app-novo-usuario",
	templateUrl: "./novo-usuario.component.html",
	styleUrls: ["./novo-usuario.component.scss"],
})
export class NovoUsuarioComponent implements OnInit {
	novoUsuarioForm!: FormGroup;

	constructor(
		private usuarioExistenteService: UsuarioExisteService,
		private novousuarioSerice: NovoUsuarioService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.novoUsuarioForm = new FormGroup(
			{
				email: new FormControl("", [Validators.required, Validators.email]),
				fullName: new FormControl("", [Validators.required, Validators.minLength(4)]),
				username: new FormControl(
					"",
					[minusculoValidator],
					[this.usuarioExistenteService.usuarioJaexiste()]
				),
				password: new FormControl(""),
			},
			{
				validators: usuarioSenhaIguaisValidator,
			}
		);
	}

	cadastrar() {
		if (this.novoUsuarioForm.valid) {
			const novousuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
			this.novousuarioSerice.cadastranovoUsuario(novousuario).subscribe({
				next: () => this.router.navigate([""]),
				error: (error) => console.error(error),
			});
		} else {
			console.error("invalid");
		}
	}
}
