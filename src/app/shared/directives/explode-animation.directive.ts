import { Directive, Renderer2, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition, AnimationBuilder, AnimationPlayer } from '@angular/animations';

@Directive({
  selector: '[appExplodeAnimation]'
})
export class ExplodeAnimationDirective {
  @Input() destination: string;

  @Input() offsetX = 0;

  @Input() offsetY = 0;

  @Input() aspectHeight = 100;

  @Input() duration = 375;

  @Input() curve = 'cubic-bezier(0.4, 0, 0.2, 1)';

  @Input() target: any;

  @HostListener('click', ['$event']) onClick($event) {
    this.animateRouteChange($event);
  }

  constructor(private router: Router,
              private renderer: Renderer2,
              private animationBuilder: AnimationBuilder) { }

  animateRouteChange($event): void {
    // console.log($event);
    const target = $event.currentTarget;
    const props = target.getBoundingClientRect();
    // create & insert placeholder
    const parentNode = this.renderer.parentNode(target);
    const placeholder = this.renderer.createElement(target.tagName);
    const targetStyle = `width: ${props.width}; height: ${props.height}; ${target.getAttribute('style')}`;
    this.renderer.setAttribute(placeholder, 'style', targetStyle);
    this.renderer.setAttribute(placeholder, 'class', target.className);
    this.renderer.insertBefore(parentNode, placeholder, target);
    // fix position of target
    const style = {
      position: 'fixed',
      zIndex: 1,
      top: `${props.top + this.offsetY}px`,
      left: `${props.left - this.offsetX}px`
    };
    for (const property in style) {
      if (style[property]) {
        this.renderer.setStyle(target, property, style[property]);
      }
    }
    // build animation & play it
    const animation = this.buildAnimation(target, props);
    animation.play();
    // once it's done, route to the destination
    animation.onDone(() => this.router.navigateByUrl(this.destination));
  }

  buildAnimation(target, props): AnimationPlayer {
    const animation = this.animationBuilder.build([
      style({
        transform: `translate3d(0,0,0)`,
        width: `${props.width}px`,
        height: `${props.height}px`
      }),
      animate(`${this.duration}ms ${this.curve}`, style({
        transform: `translate3d(-${props.left}px, -${props.top}px,0)`,
        width: `100%`,
        height: `${this.aspectHeight}vw`
      }))
    ]);
    return animation.create(target);
  }
}
