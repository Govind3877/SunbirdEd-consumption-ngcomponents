import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { defaultModalContent, deleteChildUserModal } from './confirmation-modal.data';

@Component({
  selector: 'sb-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() data = defaultModalContent;
  @Input() delete = deleteChildUserModal;
  @Output() action = new EventEmitter();



  constructor() { }

  ngOnInit() {
  }

  modalActionHandler(data?) {
    this.action.emit(data);
  }

}
