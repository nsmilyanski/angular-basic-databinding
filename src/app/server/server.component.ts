import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit{
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverOnline: string = Math.random() > 0.5 ? 'green' : 'red';


  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverOnline;
  }

  ngOnInit(): void {
  }
}
