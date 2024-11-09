import { Component, Input } from '@angular/core';
import { ParentUser } from '../parent-user';
import { Output, EventEmitter } from '@angular/core';
import { ChildUser } from '../child-user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() parentUsers: ParentUser[] = [];
  @Output() childUsersEvent = new EventEmitter<ChildUser[]>();

  childUsers: ChildUser[] = [
    { Id: 1, Firstname: 'Charlie', Lastname: 'Davis', DateOfBirth: '1993-03-23', PhoneNumber: '123456789', Email: 'charlie@example.com' }
  ];

  sendChildUsers() {
    this.childUsersEvent.emit(this.childUsers);
  }
}

