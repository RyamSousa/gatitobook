import { Component, Input } from "@angular/core";

const API = "http://localhost:3000";

@Component({
	selector: "app-animal",
	templateUrl: "./animal.component.html",
	styleUrls: ["./animal.component.scss"],
})
export class AnimalComponent {
	private urlOriginal: string = "";

	@Input()
	descricao: string = "";

	@Input()
	set url(url: string) {
		if (url.startsWith("data")) {
			this.urlOriginal = url;
		} else {
			this.urlOriginal = `${API}/imgs/${url}`;
		}
	}

	get url(): string {
		return this.urlOriginal;
	}
}