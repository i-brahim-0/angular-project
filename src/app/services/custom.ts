import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaintService implements OnInit {
  private initialised = false;
  private version = 1.0;

  constructor() {}

  ngOnInit() {
    this.init();
  }

  init(): void {
    if (!this.initialised) {
      this.initialised = true;

      // استدعاء جميع الوظائف المطلوبة
      this.mapFunction();
      this.mailFunction();
      this.gallery();
      this.wowAnimation();
      this.responsiveMenu();
    }
  }

  private mapFunction(): void {
    const mapElements = document.querySelectorAll('.ed_map');
    if (mapElements.length > 0) {
      mapElements.forEach((mapElement) => {
        const element = mapElement as HTMLElement;
        const id = element.id;
        const address = element.getAttribute('data-address');
        // هنا يجب استبدال مكتبة Google Map لتتوافق مع Angular
        console.log(`Map initialized for ID: ${id}, Address: ${address}`);
      });
    }
  }

  private mailFunction(): void {
    const submitButton = document.getElementById('submit');
    if (submitButton) {
      submitButton.addEventListener('click', () => {
        const fname = (
          document.getElementById('first_name') as HTMLInputElement
        )?.value;
        const lname = (document.getElementById('last_name') as HTMLInputElement)
          ?.value;
        const phone = (document.getElementById('phone') as HTMLInputElement)
          ?.value;
        const email = (document.getElementById('email') as HTMLInputElement)
          ?.value;
        const message = (
          document.getElementById('additionnal_message') as HTMLInputElement
        )?.value;

        const letters = /^[A-Za-z]+$/;
        const number = /^[0-9]+$/;
        const mailLetters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const errorElement = document.getElementById('error');

        if (fname && lname && phone && email && message) {
          if (fname.match(letters) && lname.match(letters)) {
            if (phone.match(number) && phone.length <= 10) {
              if (email.match(mailLetters)) {
                // استبدال AJAX بـ Angular HttpClient
                console.log('Mail sent successfully');
                if (errorElement) {
                  errorElement.style.color = 'green';
                  errorElement.textContent = 'Mail Send Successfully';
                }
              } else {
                this.showError('Please Fill The Correct Mail Id', errorElement);
              }
            } else {
              this.showError('Please Fill The Correct Number', errorElement);
            }
          } else {
            this.showError('Please Fill The Correct Name', errorElement);
          }
        } else {
          this.showError('Please Fill All Details', errorElement);
        }
      });
    }
  }

  private gallery(): void {
    // هنا يمكن استخدام مكتبة Angular لعرض الصور بدلاً من مكتبة jQuery
    console.log('Gallery initialized');
  }

  private wowAnimation(): void {
    console.log('WOW Animation initialized');
    // استبدال مكتبة WOW.js بمكتبة Angular animations إذا لزم الأمر
  }

  private responsiveMenu(): void {
    const menuItems = document.querySelectorAll('.temp_menu_wrapper ul li');
    menuItems.forEach((item) => {
      if (item.querySelector('ul')) {
        item.classList.add('has_submenu');
        const anchor = item.querySelector('a');
        if (anchor) {
          anchor.addEventListener('click', (event) => {
            const w = window.innerWidth;
            if (w <= 991) {
              event.preventDefault();
              const submenu = item.querySelector('ul.submenu');
              if (submenu) {
                submenu.classList.toggle('open');
              }
            }
          });
        }
      }
    });
  }

  private showError(message: string, errorElement: HTMLElement | null): void {
    if (errorElement) {
      errorElement.style.color = 'red';
      errorElement.textContent = message;
    }
  }
}
