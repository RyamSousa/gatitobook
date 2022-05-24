# Gatitobook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.


## Command lines
    ng generate module <module-name> --routing -d
    OR 
    ng g m <module-name> --routing -d
    
- --routing: create the routing file of this module
- -d: run the command in 'dryRun' mode, this not modify your files, is only to verify if the command will run normally.

## Identification fields
For identificate field, we can creat an "id" for it, and use this "id" to get your values.

        <input
            ...
            [(ngModel)]="senha"
            #campoSenha="ngModel" <-- 'campoSenha' get the 'ngModel' directive
            required
            />
        <app-mensagem
            *ngIf="campoSenha.invalid && campoSenha.touched" <-- using this "id"
            ...
        ></app-mensagem>

