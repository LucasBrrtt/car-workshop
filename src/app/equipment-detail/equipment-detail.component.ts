import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Part } from '../inventory/parts/part.model';
import { PartService } from '../inventory/parts/part.service';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.css']
})
export class EquipmentDetailComponent implements OnInit {

  inventory: Part | undefined;

  constructor(private partService: PartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.partService.itemById(this.route.snapshot.params['id']).subscribe((res) => {
      this.inventory = res;
      console.log(this.inventory);
      
    });
  }

}
