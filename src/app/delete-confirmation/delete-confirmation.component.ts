import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
  @Input() items: string | null | undefined;
  @Output() onDelete = new EventEmitter;
  @Output() onCancel = new EventEmitter;

  constructor() {

  }

  ngOnInit(): void {
  }

  delete() {
    this.onDelete.emit(this.items)
    alert("deleting")
  }

  cancel() {
    this.onCancel.emit()

  }

}
