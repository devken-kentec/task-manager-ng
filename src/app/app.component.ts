import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  packageJson  from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'TaskManager';
  public appVersion!: string;

  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.router.navigate(["/menu"]);
    this.appVersion = packageJson.version;
  }

}
