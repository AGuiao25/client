import { Component, EventEmitter, Input, OnInit, Output, enableProdMode } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model:any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next: () => {
  
        this.cancel();
      },
      error: error => {
   
       this.toastr.error(error.error)
      },
      complete: () => this.toastr.success('You have successfully created your account!')
      
      
    })

  }

  cancel() {
    this.cancelRegister.emit(false); //this
  }

}
