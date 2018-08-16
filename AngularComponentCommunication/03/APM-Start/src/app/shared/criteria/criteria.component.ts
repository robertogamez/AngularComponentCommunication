import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    AfterViewInit,
    Input,
    Output,
    OnChanges,
    SimpleChanges,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'pm-criteria',
    templateUrl: './criteria.component.html',
    styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit, AfterViewInit, OnChanges {

    //listFilter: string = 'cart';
    @ViewChild('filterElement') filterElementRef: ElementRef;
    @Input() displayDetail: boolean;
    @Input() hitCount: number;
    @Output() valueChange: EventEmitter<string>
    = new EventEmitter<string>();

    private _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.valueChange.emit(value);
    }

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
