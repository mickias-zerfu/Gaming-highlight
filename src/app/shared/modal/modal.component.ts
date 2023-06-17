import { Component, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor( public modalService:ModalService , public elementetRef:ElementRef ) {

   }

  ngOnInit(): void {
    document.body.appendChild(this.elementetRef.nativeElement)
  }
  closeModal(){
    this.modalService.toggleModal();
  }
}
