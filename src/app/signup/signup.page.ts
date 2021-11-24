import { Component, OnInit } from '@angular/core';
import { UserRepository } from './repository/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  constructor(private readonly userRepository: UserRepository) { }

  ngOnInit() {
    this.getUsers()
  }

  async getUsers() {
    await this.userRepository.signUp({
      contraseña: '1234',
      correo: 'diego.garcia@mail.com',
      nombre: 'Diego'
    });
  }

}
