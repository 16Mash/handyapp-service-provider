import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-provider-activate',
  templateUrl: './provider-activate.page.html',
  styleUrls: ['./provider-activate.page.scss'],
})
export class ProviderActivatePage implements OnInit {
  ref: any;
  user: any;
  providerForm: FormGroup;
  constructor(private _builder: FormBuilder, private Datbase: DatabaseService, private _router :Router) {
    this.providerForm = this._builder.group({
      category: ['', Validators.required],
      about: ['', Validators.required],
      month: ['', Validators.required],
      daily: ['', Validators.required],
      weekly: ['', Validators.required],
      type: ['provider'],
    });
  }

  ngOnInit() {
    this.ref = localStorage.getItem('userid');
  }

  chnage() {
    if (this.providerForm.valid) {
      console.log(this.providerForm.value);
      this.Datbase.updateData('Users', this.providerForm.value, this.ref).then(
        () => {
          this._router.navigateByUrl('/dashboard')
        }
      );
    } else {
      this.providerForm.markAllAsTouched();
    }
  }
}
