import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AutenticacaoService } from "src/app/autenticacao/autenticacao.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
	usuario: string = "";
	senha: string = "";

	constructor(private authService: AutenticacaoService, private router: Router) {}

	login() {
		this.authService.autenticar(this.usuario, this.senha).subscribe(
			() => {
				this.router.navigate(["animais"]);
			},
			(error) => {
				alert("Usuário ou senha inválido");
				console.error(error);
			}
		);
	}
}
