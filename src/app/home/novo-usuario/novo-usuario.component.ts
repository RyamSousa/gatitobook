import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { minusculoValidator } from "./minusculo.validator";
import { NovoUsuario } from "./novo-usuario";
import { UsuarioExisteService } from "./usuario-existe.service";
import { usuarioSenhaIguaisValidator } from "./usuario-senha-iguais.validator";

@Component({
	selector: "app-novo-usuario",
	templateUrl: "./novo-usuario.component.html",
	styleUrls: ["./novo-usuario.component.scss"],
})
export class NovoUsuarioComponent implements OnInit {
	novoUsuarioForm!: FormGroup;

	constructor(private usuarioExistenteService: UsuarioExisteService) {}

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
				password: new FormControl([""]),
			},
			{
				validators: usuarioSenhaIguaisValidator,
			}
		);
	}

	cadastrar() {
		const novouser = this.novoUsuarioForm.getRawValue() as NovoUsuario;
		console.log(novouser);
	}
}
