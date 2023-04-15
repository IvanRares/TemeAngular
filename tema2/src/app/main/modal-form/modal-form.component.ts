import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Item } from 'src/app/_models/item';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent implements OnInit {
  @Input() isVisible = false;
  @Output() modalClosed = new EventEmitter<boolean>();
  itemForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.itemForm = this.fb.group({
      name: ['', [Validators.required, this.atLeastTwoWordsValidator()]],
      grade1: [
        '',
        [Validators.required, Validators.max(10), Validators.min(1)],
      ],
      grade2: [
        '',
        [Validators.required, Validators.max(10), Validators.min(1)],
      ],
      grade3: [
        '',
        [Validators.required, Validators.max(10), Validators.min(1)],
      ],
    });
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['isVisible'] &&
      !changes['isVisible'].firstChange &&
      !changes['isVisible'].currentValue
    ) {
      this.itemForm.reset();
      this.dataService.setItem(null);
    } else {
      if (this.dataService.getItem() !== null) {
        let itemToEdit = this.dataService.getItem();
        this.itemForm.setValue({
          name: itemToEdit?.name,
          grade1: itemToEdit?.grade1,
          grade2: itemToEdit?.grade2,
          grade3: itemToEdit?.grade3,
        });
      }
    }
  }

  handleCancel(): void {
    this.modalClosed.emit(false);
  }

  handleSubmit(): void {
    if (this.itemForm.valid) {
      const item: Item = this.itemForm.value;
      this.dataService.saveItem(item);
      this.modalClosed.emit(true);
    } else {
      for (const key in this.itemForm.controls) {
        if (this.itemForm.controls.hasOwnProperty(key)) {
          this.itemForm.controls[key].markAsDirty();
          this.itemForm.controls[key].updateValueAndValidity();
        }
      }
    }
  }

  atLeastTwoWordsValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value) {
        const words = control.value.trim().split(' ');
        if (words.length < 2) {
          return { lessThanTwoWords: true };
        }
      }
      return null;
    };
  }
}
