import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    AfterViewInit,
    Input
} from '@angular/core';

@Component({
    selector: 'pm-criteria',
    templateUrl: './criteria.component.html',
    styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit, AfterViewInit {

    listFilter: string;
    @ViewChild('filterElement') filterElementRef: ElementRef;
    @Input() displayDetail: boolean;
    @Input() hitCount: number;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this.filterElementRef.nativeElement.focus();
    }

}
