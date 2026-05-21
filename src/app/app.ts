import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  activeSection = signal<string>('intro');

  scrollTo(id: string) {
    this.activeSection.set(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

