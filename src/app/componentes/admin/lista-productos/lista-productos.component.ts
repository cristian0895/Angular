import { Component, OnInit } from '@angular/core';

import {AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.sass']
})
export class ListaProductosComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
