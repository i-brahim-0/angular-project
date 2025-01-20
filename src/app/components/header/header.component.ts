import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY; // الحصول على قيمة التمرير الرأسي
      const header = document.querySelector('.temp_header') as HTMLElement;

      if (header) {
        if (scrollPosition > 90) {
          header.classList.add('header_fixed');
        } else {
          header.classList.remove('header_fixed');
        }
      }
    });
  }
}
