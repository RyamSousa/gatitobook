import { Component } from "@angular/core";
import { AutenticacaoService } from "src/app/autenticacao/autenticacao.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
	usuario: string = "";
	senha: string = "";

	constructor(private authService: AutenticacaoService) {}

	login() {
		this.authService.autenticar(this.usuario, this.senha).subscribe(
			() => {
				console.log("autenticado com sucesso");
			},
			(error) => {
				alert("Usuário ou senha inválido");
				console.error(error);
			}
		);
	}
}
