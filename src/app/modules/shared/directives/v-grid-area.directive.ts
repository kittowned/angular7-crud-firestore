
// Potential css-grid directive

import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: "[v-grid-area]"
})

export class GridAreaDirective {
    @HostBinding("style.grid-area")
    @Input("v-grid-area") area: string;
}


// Template example
// 
// <div v-grid columns="1fr 100px" rows="1fr 1fr" areas="'area1 area2' 'area1 area2'">
//   <div v-grid-area="area1" style="background-color: red">
//     <div> hello</div>
//      <!-- <div style="height: 1000px"></div> -->
//   </div>
//   <div v-grid-area="area2" style="background-color: yellow">
//   hi</div>
// </div>