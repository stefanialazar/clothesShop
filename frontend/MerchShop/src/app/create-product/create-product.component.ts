import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../core/request.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit{
  
  pageTitle = 'Product Detail';
  errorMessage = '';
  product : any;
  id : any;

  constructor(private route: ActivatedRoute, private reqS: RequestService) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      var id = params.get('id');

      this.reqS.get('https://localhost:44341/api/images/' + id).subscribe((res: any) => {
      this.product = res;
    })
    });
  }

  showTshirt() {
    var tshirt = document.getElementById('tshirt');
    var hoodie = document.getElementById('hoodie');
    var notebook  = document.getElementById('notebook');
    if (tshirt != null && hoodie != null && notebook != null) {
      tshirt.style.display = 'block';
      hoodie.style.display = 'none';
      notebook.style.display = 'none';
    }
  }
  showHoodie() {
    var tshirt = document.getElementById('tshirt');
    var hoodie = document.getElementById('hoodie');
    var notebook  = document.getElementById('notebook');
    if (tshirt != null && hoodie != null && notebook != null) {
      tshirt.style.display = 'none';
      hoodie.style.display = 'block';
      notebook.style.display = 'none';
    }
  }
  showNotebook() {
    var tshirt = document.getElementById('tshirt');
    var hoodie = document.getElementById('hoodie');
    var notebook  = document.getElementById('notebook');
    if (tshirt != null && hoodie != null && notebook != null) {
      tshirt.style.display = 'none';
      hoodie.style.display = 'none';
      notebook.style.display = 'block';
    }
  }


}
