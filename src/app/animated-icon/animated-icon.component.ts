import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-icon',
  templateUrl: './animated-icon.component.html',
  styleUrls: ['./animated-icon.component.scss']
})



export class AnimatedIconComponent implements OnInit {

  // The default icon we select is the first of the array
  @Input() icon: number = 0
  
  // The icons property is an array of classes
  @Input() icons: string[] = [
    'fa fa-battery-0',
    'fa fa-battery-1',
    'fa fa-battery-2',
    'fa fa-battery-3',
    'fa fa-battery-4',
  ]
  
  // This getter is used in the template to get the selected icon
  get currentIcon() {
    return this.icons[this.icon]
  }
  
  // This is where the animation is started
  ngOnInit() {
    // this.startAnimation()
  }

  // This boolean determines if the icon is animating or not
  _animate: boolean = true

  // This is the getter for the animate property
  get animate() {
    return this._animate
  }

  // This setter toggles the animation and reset the icon 
  @Input() set animate(animate) {
    this._animate = animate
    if (!this._animate) {
      this.icon = 0
    }
  }

  // Update the icon if animation is enabled 
  // updateIcon() {
  //   if (this.animate) {
      // Increase the icon if we are still within the limit of the set
      // if (this.icon < (this.icons.length - 1)) {
      //   return this.icon++
      // }
      // Set the icon to zero if we reached the limit 
  //     return this.icon = 0
  //   }
  // }

  // The default interval for updates is set to 1 second
  @Input() delay: number = 1000
  
  // This startAnimation method runs updateIcon on each delay
//   startAnimation() {
//     setInterval(() => this.updateIcon(), this.delay)
//   }

// }
}