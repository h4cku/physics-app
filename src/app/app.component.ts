import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [BrowserAnimationsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('drawer') drawer: any;
  roadmap: any = [
    {
      name: 'Mechanics',
      list: [
        { name: 'Vectors', path: 'vectors' },
        { name: 'Kinematics', path: 'kinematics' },
        { name: "Newton's Law", path: 'newton' },
      ],
    },

    {
      name: 'Thermodynamics and Waves',
      list: [],
    },

    {
      name: 'Electromagnetism',
      list: [],
    },

    {
      name: 'Optics and Modern Physics',
      list: [],
    },

    {
      name: 'General Relativity',
      list: [],
    },

    {
      name: 'Quantum Mechanics',
      list: [],
    },
  ];

  constructor(private router: Router) {}
  openLink(path: string) {
    this.router.navigate([path]);
    console.log(path);
    this.drawer.toggle();
  }
}
