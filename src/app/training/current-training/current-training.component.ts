import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() triningexit =new EventEmitter();
  progress=0;
  timer:number;
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  this.StartOrResumeTimer();
  }
  StartOrResumeTimer(){
    this.timer= setInterval(()=>{
      this.progress=this.progress+5;
      if(this.progress>=100){
        clearInterval(this.timer)
      }
    },1000);
  }
  stop(){
    clearInterval(this.timer);
   const dialogRef= this.dialog.open(StopTrainingComponent,{
      data:{
        progress:this.progress
      }
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.triningexit.emit();
      }else{
        if(this.progress<100){
        this.StartOrResumeTimer();}
      }
    })
  }

}
