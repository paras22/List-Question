import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
	recipes: string[] = [
		"Pizza",
		"Pasta",
		"Burger",
		"Pancakes",
		"Omelette",
		"Half fry",
		"French toast"
  ];



}
