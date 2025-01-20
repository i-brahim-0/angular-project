import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    this.initMailFunction();
  }

  // ممكن يتعمل بالفورم كنترول
  initMailFunction(): void {
    const submitButton = document.getElementById('submit');
    if (submitButton) {
      submitButton.addEventListener('click', () => {
        const fname = (
          document.getElementById('first_name') as HTMLInputElement
        ).value;
        const lname = (document.getElementById('last_name') as HTMLInputElement)
          .value;
        const phone = (document.getElementById('phone') as HTMLInputElement)
          .value;
        const email = (document.getElementById('email') as HTMLInputElement)
          .value;
        const message = (
          document.getElementById('additionnal_message') as HTMLInputElement
        ).value;

        const letters = /^[A-Za-z]+$/;
        const number = /^[0-9]+$/;
        const mailLetters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const errorElement = document.getElementById('error');

        if (fname && lname && phone && email && message) {
          if (letters.test(fname) && letters.test(lname)) {
            if (number.test(phone) && phone.length <= 10) {
              if (mailLetters.test(email)) {
                // Call the backend API
                fetch('ajax_mail.php', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    first_name: fname,
                    last_name: lname,
                    phone_number: phone,
                    email: email,
                    message: message,
                  }),
                })
                  .then((response) => response.text())
                  .then((resp) => {
                    if (resp === '1') {
                      errorElement!.style.color = 'green';
                      errorElement!.textContent = 'Mail Sent Successfully';
                    } else {
                      errorElement!.style.color = 'red';
                      errorElement!.textContent = 'Mail Not Sent';
                    }
                  });
              } else {
                errorElement!.style.color = 'red';
                errorElement!.textContent = 'Please Fill The Correct Mail Id';
              }
            } else {
              errorElement!.style.color = 'red';
              errorElement!.textContent = 'Please Fill The Correct Number';
            }
          } else {
            errorElement!.style.color = 'red';
            errorElement!.textContent = 'Please Fill The Correct Name';
          }
        } else {
          errorElement!.style.color = 'red';
          errorElement!.textContent = 'Please Fill All Details';
        }
      });
    }
  }
}
