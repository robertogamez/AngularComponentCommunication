import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    AfterViewInit,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'pm-criteria',
    templateUrl: './criteria.component.html',
    styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit, AfterViewInit, OnChanges {

    listFilter: string = 'cart';
    @ViewChild('filterElement') filterElementRef: ElementRef;
    @Input() displayDetail: boolean;
    @Input() hitCount: number;

    hitMessage: string;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['hitCount'] && !changes['hitCount'].currentValue) {
            this.hitMessage = 'No matches found';
        } else {
            this.hitMessage = 'Hits: ' + this.hitCount;
        }
    }

    ngAfterViewInit(): void {
        this.filterElementRef.nativeElement.focus();
    }

}
