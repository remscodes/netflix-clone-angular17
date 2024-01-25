import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyListComponent {

}
