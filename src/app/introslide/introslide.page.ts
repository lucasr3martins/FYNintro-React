import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Router } from '@angular/router';

@Component({
  selector: 'app-introslide',
  templateUrl: './introslide.page.html',
  styleUrls: ['./introslide.page.scss'],
})
export class IntroslidePage {

  constructor(private storage: Storage, private router: Router) { }
  async finish() {
    await this.storage.set('introcomplete', true)
    this.router.navigateByUrl('/')
  }

}
