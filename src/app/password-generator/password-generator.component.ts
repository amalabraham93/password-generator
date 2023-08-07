import { Component, ElementRef,ViewChild } from '@angular/core';
import { PasswordService } from './password.service';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {

  passwordLength = 12;
  includeUppercase = true;
  includeNumbers = true;
  includeSpecialChars = true;
  generatedPassword = '';
  @ViewChild('passwordResult', { static: false }) passwordResult!: ElementRef;
  constructor(private passwordService: PasswordService) { }

  generatePassword() {
    this.generatedPassword = this.passwordService.generatePassword(
      this.passwordLength,
      this.includeUppercase,
      this.includeNumbers,
      this.includeSpecialChars
    );
  }

  copyToClipboard() {
    const passwordResultElement = this.passwordResult.nativeElement as HTMLDivElement;
    const range = document.createRange();
    range.selectNode(passwordResultElement);
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      selection.removeAllRanges();
    }
  }


  getPasswordStrength(password: string): string {
    const lengthScore = Math.min(password.length / 16, 1);
    const uppercaseScore = password.match(/[A-Z]/) ? 0.5 : 0;
    const numberScore = password.match(/[0-9]/) ? 0.5 : 0;
    const specialCharScore = password.match(/[!@#$%^&*]/) ? 0.5 : 0;

    const totalScore = lengthScore + uppercaseScore + numberScore + specialCharScore;

    if (totalScore < 0.5) {
      return 'weak';
    } else if (totalScore < 1.5) {
      return 'good';
    } else {
      return 'strong';
    }
  }
  
}
