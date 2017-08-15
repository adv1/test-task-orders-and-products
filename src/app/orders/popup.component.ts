import { Component, Input } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <p class="modal-title" style="text-align: center; font-weight: 600">Вы уверены, что хотите удалить этот приход?</p>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div style="display: flex; justify-content: space-around">
        <div>
          <h1 style="text-align: start">.</h1>
        </div>
        <div>
          <img src="./assets/images/monitor.jpg"/>
        </div>
        <div style="display: flex; flex-direction: column">
          <div id="current-title">Длинное название прихода</div>
          <div id="current-serial-number" style="color: lightslategray">1234</div>
        </div>

      </div>
    </div>
    <div class="modal-footer" style="background-color: #8BC34A; text-decoration-color: white">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Отменить</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Удалить</button>
    </div>
  `
})
export class NgbdModalContentComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'ngbd-modal-component',
  template: `
    <md-icon (click)="open()" style="color: gray; align-self: center">delete</md-icon>
  `,
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    modalRef.componentInstance.name = 'World';
  }
}
