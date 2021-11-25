import { Injectable } from "@angular/core";
import { api } from "src/helpers/api";

type User = {
    nombre: string,
    correo: string,
    contraseña: string,
}

@Injectable({
    providedIn: 'root'
})
export class UserRepository {
    async signUp(data: User) {
        try {
            await api.post('',data)
        } catch (error) {
            console.error(error);
        }
        
    }
}
