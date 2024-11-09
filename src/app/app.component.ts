import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentUser } from './parent-user';
import { ChildUser } from './child-user';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'New_exam';

  users = [
    { firstname: 'Jhon', lastname: 'doe', age: 25 },
    { firstname: 'Bob', lastname: 'Brown', age: 18 },
    { firstname: 'Jane', lastname: 'doe', age: 30 },
    { firstname: 'Diana', lastname: 'doe', age: 22 },
    { firstname: 'Edward', lastname: 'doe', age: 19 }
  ];

  parentUsers: ParentUser[] = [
    { Id: 1, Firstname: 'Jane', Lastname: 'doe', DateOfBirth: '1990-01-01', PhoneNumber: '123456789', Email: 'alice@example.com' },
    { Id: 2, Firstname: 'Bob', Lastname: 'Brown', DateOfBirth: '1995-05-12', PhoneNumber: '987654321', Email: 'bob@example.com' }
  ];

  childUsers: ChildUser[] = [];

  onReceiveChildUsers(users: ChildUser[]) {
    this.childUsers = users;

    userForm: FormGroup;

    constructor(private fb: FormBuilder) {
      this.userForm = this.fb.group({
        Id: ['', Validators.required],
        Firstname: ['', [Validators.required, Validators.minLength(3)]],
        Lastname: ['', [Validators.required, Validators.minLength(3)]],
        DateOfBirth: ['', Validators.required],
        PhoneNumber: ['', [Validators.required, Validators.minLength(9)]],
        Email: ['', [Validators.required, Validators.minLength(8)]]
      });
}
