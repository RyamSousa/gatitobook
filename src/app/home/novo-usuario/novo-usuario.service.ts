import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { NovoUsuario } from "./novo-usuario";

const API = environment.apiURL;
@Injectable({
	providedIn: "root",
})
export class NovoUsuarioService {
	constructor(private httpClient: HttpClient) {}

	cadastranovoUsuario(novoUsuario: NovoUsuario): Observable<NovoUsuario> {
		return this.httpClient.post<NovoUsuario>(`${API}/user/signup`, novoUsuario);
	}

	verificaUsuarioExistente(nomeUsuario: string): Observable<NovoUsuario> {
		return this.httpClient.get<NovoUsuario>(`${API}/user/exists/${nomeUsuario}`);
	}
}
