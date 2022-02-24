import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
                  <h2>{{pageheader ? pageheader : "No Header"}}</h2>
                  <img src="https://angular.io/{{ImagePath}}">
                  <my-employee></my-employee>
                  <h3>{{getFullName()}}</h3>
                  <button disabled="{{isDisabled}}">Click</button>
                  <span [innerHtml]="pageheader"></span>
             </div>
             <div [innerHtml]="badHtml"></div>
             <button class="colorClass" [class]="classToApply">Class Button</button>
             <br><br>
             <button class="colorClass" [class.italicsClass]="applyItalicClass">Inline class Button</button>
              <br><br>
              <button style="color:red" [style.fontWeight]="isbold ? 'bold':'normal'">Style Button</button>
              <br><br>
              <button style="color:red" [style.font-size.px]="fontsize">Inline Style Button</button>
              <br><br>
              <button style="color:red" [ngStyle]="addStyles()">Multiple Inline Style Button</button>
              <br><br>
              <button on-click="onClick()">Click Me</button>
              <br><br>
              Name:<input [(ngModel)]='name'>
              <br>
              You entered :{{name}}
              <br>
              <list-employee></list-employee>
              <br>
              Your Text:<input type='text' [(ngModel)]='usertext'/>
              <simple [simpleInput]='usertext'></simple>
              <list-employee></list-employee>
`,
  
})
export class AppComponent {
  pageheader: string = 'Employee Details';
  ImagePath: string = 'assets/images/logos/angular/logo-nav@2x.png';
  firstname: string = 'Nirav';
  lastname: string = 'Chauhan';
  isDisabled: boolean = false;
  badHtml: string = "Hello <script>alert('Hacked');</script> World";
  getFullName(): string {
    return this.firstname + ' ' + this.lastname;
  }
  classToApply: string = 'italicsClass boldClass';
  applyItalicClass: boolean = true;
  boldClass: boolean = true;
  isbold: boolean = true;
  fontsize: number = 15;
  isItalic: boolean = true;
  addStyles() {
    let styles = {
      'font-size.px': this.fontsize,
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isbold ? 'bold' : 'normal'
    };
    return styles;
  }
  onClick(): void {
    console.log("Button Clicked");
  }
  name: string = 'Nirav';
  usertext: string = 'Nirav';
}
