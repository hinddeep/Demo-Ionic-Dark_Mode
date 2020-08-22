import { Component } from "@angular/core";
import { Plugins } from "@capacitor/core";
// const { ScreenOrientation } = Plugins;
const { DarkMode } = Plugins;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  isDarkModeOn: boolean;
  darkmodeevent: boolean;

  constructor() {
    this.isDarkModeOn = false;
    this.darkmodeevent = false;
    DarkMode.addListener("darkModeStateChanged", (state: any) => {
      if (state.isDarkModeOn) {
        // Dark mode is on. Apply dark theme to your app
        this.darkmodeevent = true;
        console.log("Dark mode is on");
      } else {
        // Dark mode is off. Apply light theme to your app
      }
      if (state.supported == false) {
        // Dark mode is not supported by the platform
        this.darkmodeevent = false;
        console.log("Dark mode is off");
      }
    });
  }

  async checkDarkMode() {
    let darkmode = await DarkMode.isDarkModeOn();
    this.isDarkModeOn = darkmode.isDarkModeOn;
    console.log(darkmode.isDarkModeOn);
  }
}
