import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-stack-trace-button',
  standalone: true,
  imports: [],
  templateUrl: './toggle-stack-trace-button.component.html',
  styleUrl: './toggle-stack-trace-button.component.scss'
})
export class ToggleStackTraceButtonComponent {
  private _isStackTrace: boolean = false;

  @Output() isDisplay = new EventEmitter<boolean>();

  public toggleStackTraces(): void {
  this._isStackTrace = !this._isStackTrace;
  this.isDisplay.emit(this._isStackTrace);
  }

  public showHideInfo(): string {
    return this._isStackTrace ? "Hide" : "Show";
  }
}
