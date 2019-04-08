import { Directive, HostBinding, Input, ElementRef, Renderer2 } from '@angular/core';


@Directive({
    selector: "[v-grid]"
})

export class GridDirective {
    @HostBinding("style.grid-template-columns")
    @Input() columns: string;
    @HostBinding("style.grid-template-rows")
    @Input() rows: string;
    @HostBinding("style.grid-template-areas")
    @Input() areas: string;

    constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) {
        this.renderer.setStyle(this.el.nativeElement, "display", "grid");
        this.renderer.setStyle(this.el.nativeElement, "height", "100%");
    }
}

