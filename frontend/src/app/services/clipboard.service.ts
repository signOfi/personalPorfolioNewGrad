import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor() { }

  copyToClipboard(text: string): boolean {
    try {
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = text;

      document.body.appendChild(tempTextArea);

      tempTextArea.select();

      document.execCommand('copy');

      document.body.removeChild(tempTextArea);

      console.log('Text copied to clipboard');
      return true;
    } catch (err) {
      console.error('Failed to copy text: ', err);
      return false;
    }
  }

  async readFromClipboard(): Promise<string> {
    try {
      const text = await navigator.clipboard.readText();
      return text;
    } catch (err) {
      console.error('Failed to read from clipboard: ', err);
      return '';
    }
  }
}
