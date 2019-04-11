import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable} from 'rxjs/internal/observable';
import { map } from 'rxjs/operators';
import { ProductosInterface} from '../models/productos';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  formData: { id: string; producto: string; precio: number; imagen_url: string; };

  constructor(private afs: AngularFirestore) {
    this.productsCollection=
    afs.collection<ProductosInterface>('productos');
    this.productos=
    this.productsCollection.valueChanges()
   }

   private productsCollection:
   AngularFirestoreCollection<ProductosInterface>
   private productos: Observable<ProductosInterface[]>

   getProductos(){
    return this.productos=
    this.productsCollection.snapshotChanges().pipe(map(
      changes=>{
        return changes.map(action=>{
          const data = action.payload.doc.data() as
          ProductosInterface;
          data.id = action.payload.doc.id;
          return data;
        })
      }
    ))
   }
}
