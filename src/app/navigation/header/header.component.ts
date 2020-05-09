import { Component, OnInit,EventEmitter,Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
@Output() sidenavToggle=new EventEmitter<void>();
isAuth=false;
authsubscriotion:Subscription
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.authsubscriotion=this.authservice.authchange.subscribe(authstaus=>{
      this.isAuth=authstaus;
    })
  }
  onToggleSidenav(){
    this.sidenavToggle.emit();
  }
  ngOnDestroy(){
    this.authsubscriotion.unsubscribe();
  }

}
