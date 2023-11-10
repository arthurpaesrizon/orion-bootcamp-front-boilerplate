import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ModalComponent } from './modal/modal.component';
import { SelectComponent } from './select/select.component';
import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    ModalComponent,
    SelectComponent,
    CharacterCardComponent,
  ],
  imports: [CommonModule, MatIconModule, FormsModule],
  exports: [
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    ModalComponent,
    SelectComponent,
    CharacterCardComponent,
  ],
})
export class ComponentsModule {}
