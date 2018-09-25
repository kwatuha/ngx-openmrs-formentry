/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, forwardRef, ViewChild, Output, EventEmitter, Renderer2 } from '@angular/core';
import { SelectComponent } from '../../components/select/select.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _ from 'lodash';
export class RemoteSelectComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        // @Input() dataSource: DataSource;
        this.placeholder = 'Search...';
        this.items = [];
        this.value = [];
        this.loading = false;
        this.searchText = '';
        this.notFoundMsg = 'match no found';
        this.done = new EventEmitter();
        this.characters = [];
        this.propagateChange = (change) => { };
    }
    /**
     * @return {?}
     */
    get dataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set dataSource(v) {
        this._dataSource = v;
        if (this._dataSource && this._dataSource.dataFromSourceChanged) {
            this.subscribeToDataSourceDataChanges();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    subscribeToDataSourceDataChanges() {
        this._dataSource.dataFromSourceChanged.subscribe((results) => {
            if (results.length > 0) {
                this.items = results;
                this.notFoundMsg = '';
                // console.log('updating items', results, this.selectC.value);
                this.restoreSelectedValue(this.selectC.value, results);
            }
            else {
                this.notFoundMsg = 'Not found';
                this.items = [];
            }
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    typed(value) {
        this.search(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    search(value) {
        if (this.dataSource) {
            this.searchText = value;
            this.notFoundMsg = 'Loading.........';
            this.dataSource.searchOptions(value)
                .subscribe((result) => {
                if (result.length > 0) {
                    const /** @type {?} */ existing = _.map(this.value, _.clone);
                    const /** @type {?} */ concat = existing.concat(result);
                    this.items = _.uniqBy(concat, 'value');
                }
                this.notFoundMsg = '';
            }, (error) => {
                this.notFoundMsg = 'Errored';
            });
        }
    }
    /**
     * @param {?} value
     * @param {?} results
     * @return {?}
     */
    restoreSelectedValue(value, results) {
        let /** @type {?} */ found = false;
        _.each(results, (item) => {
            if (item.value === value) {
                setTimeout(() => {
                    this.selectC.select(value);
                    this.selectC.value = value;
                });
                found = true;
            }
        });
        if (!found) {
            // console.log('not found after loading items', value, results);
            setTimeout(() => {
                this.selectC.select('');
                this.selectC.value = '';
            });
        }
    }
    /**
     * @param {?} searchText
     * @return {?}
     */
    canSearch(searchText) {
        return (searchText.length - this.searchText.length >= 2 ||
            (searchText.length - this.searchText.length <= 2 && searchText !== '')) && this.loading === false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value && value !== '') {
            if (this.dataSource) {
                this.loading = true;
                this.dataSource.resolveSelectedValue(value).subscribe((result) => {
                    this.items = [result];
                    setTimeout(() => {
                        this.selectC.select(result.value);
                        this.selectC.value = result.value;
                    });
                    this.loading = false;
                }, (error) => {
                    this.loading = false;
                });
            }
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.propagateChange(event.id);
        // .....
        // update the form
        // this.propagateChange(this.data);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    removed(event) {
        console.log('Removed');
        this.propagateChange('');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selected(event) {
        this.propagateChange(event.value);
    }
}
RemoteSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'remote-select',
                template: `<div>
    <ng-select [id]="componentID" [noFilter]="0" (selected)="selected($event)" (deselected)="removed($event)" [options]="items" [allowClear]="true"
        [placeholder]="placeholder" [notFoundMsg]="notFoundMsg" (typed)="typed($event)" tabindex="0">
    </ng-select>
    <div *ngIf="loading">
        resolving....
    </div>
</div>
`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RemoteSelectComponent),
                        multi: true,
                    }
                ]
            },] },
];
/** @nocollapse */
RemoteSelectComponent.ctorParameters = () => [
    { type: Renderer2, },
];
RemoteSelectComponent.propDecorators = {
    "placeholder": [{ type: Input },],
    "componentID": [{ type: Input },],
    "done": [{ type: Output },],
    "selectC": [{ type: ViewChild, args: [SelectComponent,] },],
    "dataSource": [{ type: Input },],
};
function RemoteSelectComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    RemoteSelectComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    RemoteSelectComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    RemoteSelectComponent.propDecorators;
    /** @type {?} */
    RemoteSelectComponent.prototype.placeholder;
    /** @type {?} */
    RemoteSelectComponent.prototype.componentID;
    /** @type {?} */
    RemoteSelectComponent.prototype.items;
    /** @type {?} */
    RemoteSelectComponent.prototype.value;
    /** @type {?} */
    RemoteSelectComponent.prototype.loading;
    /** @type {?} */
    RemoteSelectComponent.prototype.searchText;
    /** @type {?} */
    RemoteSelectComponent.prototype.notFoundMsg;
    /** @type {?} */
    RemoteSelectComponent.prototype.done;
    /** @type {?} */
    RemoteSelectComponent.prototype.characters;
    /** @type {?} */
    RemoteSelectComponent.prototype.selectC;
    /** @type {?} */
    RemoteSelectComponent.prototype._dataSource;
    /** @type {?} */
    RemoteSelectComponent.prototype.propagateChange;
    /** @type {?} */
    RemoteSelectComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3RlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3Blbm1ycy1mb3JtZW50cnkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3JlbW90ZS1zZWxlY3QvcmVtb3RlLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFFSCxpQkFBaUIsRUFDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQW1CNUIsTUFBTTs7OztJQTRCRixZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXOzsyQkExQmhCLFdBQVc7cUJBRTFCLEVBQUU7cUJBQ0YsRUFBRTt1QkFDQSxLQUFLOzBCQUNGLEVBQUU7MkJBQ0QsZ0JBQWdCO29CQUNNLElBQUksWUFBWSxFQUFPOzBCQUU5QyxFQUFFOytCQStIVyxDQUFDLE1BQVcsRUFBRSxFQUFFLElBQUk7S0E5R0Y7Ozs7UUFYakMsVUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7Ozs7O1FBRWpCLFVBQVUsQ0FBQyxDQUFhO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLENBQUM7U0FDM0M7Ozs7O0lBTUwsUUFBUTtLQUVQOzs7O0lBRUQsZ0NBQWdDO1FBQzVCLElBQUksQ0FBQyxXQUFX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LENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDNUI7Ozs7O0lBQ0QsUUFBUSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQzs7O1lBdkpKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7OztDQVFiO2dCQUNHLFNBQVMsRUFBRTtvQkFDUDt3QkFDSSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3dCQUNwRCxLQUFLLEVBQUUsSUFBSTtxQkFDZDtpQkFBQzthQUNUOzs7O1lBekIrRSxTQUFTOzs7NEJBNEJwRixLQUFLOzRCQUNMLEtBQUs7cUJBTUwsTUFBTTt3QkFHTixTQUFTLFNBQUMsZUFBZTsyQkFJekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgZm9yd2FyZFJlZiwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1xyXG4gICAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXHJcbiAgICBOR19WQUxVRV9BQ0NFU1NPUlxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2Zvcm0tZW50cnkvcXVlc3Rpb24tbW9kZWxzL2ludGVyZmFjZXMvZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyZW1vdGUtc2VsZWN0JyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdj5cclxuICAgIDxuZy1zZWxlY3QgW2lkXT1cImNvbXBvbmVudElEXCIgW25vRmlsdGVyXT1cIjBcIiAoc2VsZWN0ZWQpPVwic2VsZWN0ZWQoJGV2ZW50KVwiIChkZXNlbGVjdGVkKT1cInJlbW92ZWQoJGV2ZW50KVwiIFtvcHRpb25zXT1cIml0ZW1zXCIgW2FsbG93Q2xlYXJdPVwidHJ1ZVwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW25vdEZvdW5kTXNnXT1cIm5vdEZvdW5kTXNnXCIgKHR5cGVkKT1cInR5cGVkKCRldmVudClcIiB0YWJpbmRleD1cIjBcIj5cclxuICAgIDwvbmctc2VsZWN0PlxyXG4gICAgPGRpdiAqbmdJZj1cImxvYWRpbmdcIj5cclxuICAgICAgICByZXNvbHZpbmcuLi4uXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSZW1vdGVTZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVtb3RlU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgICAvLyBASW5wdXQoKSBkYXRhU291cmNlOiBEYXRhU291cmNlO1xyXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnU2VhcmNoLi4uJztcclxuICAgIEBJbnB1dCgpIGNvbXBvbmVudElEOiBzdHJpbmc7XHJcbiAgICBpdGVtcyA9IFtdO1xyXG4gICAgdmFsdWUgPSBbXTtcclxuICAgIGxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNlYXJjaFRleHQgPSAnJztcclxuICAgIG5vdEZvdW5kTXNnID0gJ21hdGNoIG5vIGZvdW5kJztcclxuICAgIEBPdXRwdXQoKSBkb25lOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIGNoYXJhY3RlcnMgPSBbXTtcclxuICAgIEBWaWV3Q2hpbGQoU2VsZWN0Q29tcG9uZW50KSBwcml2YXRlIHNlbGVjdEM6IFNlbGVjdENvbXBvbmVudDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBfZGF0YVNvdXJjZTogRGF0YVNvdXJjZTtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2UoKTogRGF0YVNvdXJjZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGRhdGFTb3VyY2UodjogRGF0YVNvdXJjZSkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFTb3VyY2UgPSB2O1xyXG4gICAgICAgIGlmICh0aGlzLl9kYXRhU291cmNlICYmIHRoaXMuX2RhdGFTb3VyY2UuZGF0YUZyb21Tb3VyY2VDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlVG9EYXRhU291cmNlRGF0YUNoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVRvRGF0YVNvdXJjZURhdGFDaGFuZ2VzKCkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFTb3VyY2UuZGF0YUZyb21Tb3VyY2VDaGFuZ2VkLnN1YnNjcmliZSgocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gcmVzdWx0cztcclxuICAgICAgICAgICAgICAgIHRoaXMubm90Rm91bmRNc2cgPSAnJztcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGluZyBpdGVtcycsIHJlc3VsdHMsIHRoaXMuc2VsZWN0Qy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmVTZWxlY3RlZFZhbHVlKHRoaXMuc2VsZWN0Qy52YWx1ZSwgcmVzdWx0cyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdEZvdW5kTXNnID0gJ05vdCBmb3VuZCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHlwZWQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHNlYXJjaCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub3RGb3VuZE1zZyA9ICdMb2FkaW5nLi4uLi4uLi4uJztcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlYXJjaE9wdGlvbnModmFsdWUpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBfLm1hcCh0aGlzLnZhbHVlLCBfLmNsb25lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uY2F0ID0gZXhpc3RpbmcuY29uY2F0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBfLnVuaXFCeShjb25jYXQsICd2YWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdEZvdW5kTXNnID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdEZvdW5kTXNnID0gJ0Vycm9yZWQnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVTZWxlY3RlZFZhbHVlKHZhbHVlLCByZXN1bHRzKSB7XHJcbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgXy5lYWNoKHJlc3VsdHMsIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RDLnNlbGVjdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RDLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghZm91bmQpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ25vdCBmb3VuZCBhZnRlciBsb2FkaW5nIGl0ZW1zJywgdmFsdWUsIHJlc3VsdHMpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qy5zZWxlY3QoJycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RDLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYW5TZWFyY2goc2VhcmNoVGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIChzZWFyY2hUZXh0Lmxlbmd0aCAtIHRoaXMuc2VhcmNoVGV4dC5sZW5ndGggPj0gMiB8fFxyXG4gICAgICAgICAgICAoc2VhcmNoVGV4dC5sZW5ndGggLSB0aGlzLnNlYXJjaFRleHQubGVuZ3RoIDw9IDIgJiYgc2VhcmNoVGV4dCAhPT0gJycpKSAmJiB0aGlzLmxvYWRpbmcgPT09IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMgaXMgdGhlIGluaXRpYWwgdmFsdWUgc2V0IHRvIHRoZSBjb21wb25lbnRcclxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzb2x2ZVNlbGVjdGVkVmFsdWUodmFsdWUpLnN1YnNjcmliZSgocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gW3Jlc3VsdF07XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qy5zZWxlY3QocmVzdWx0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RDLnZhbHVlID0gcmVzdWx0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHJlZ2lzdGVycyAnZm4nIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGNoYW5nZXMgYXJlIG1hZGVcclxuICAgIC8vIHRoaXMgaXMgaG93IHdlIGVtaXQgdGhlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybVxyXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbm90IHVzZWQsIHVzZWQgZm9yIHRvdWNoIGlucHV0XHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoKSB7IH1cclxuICAgIC8vIGNoYW5nZSBldmVudHMgZnJvbSB0aGUgdGV4dGFyZWFcclxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UoZXZlbnQuaWQpO1xyXG4gICAgICAgIC8vIC4uLi4uXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBmb3JtXHJcbiAgICAgICAgLy8gdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5kYXRhKTtcclxuICAgIH1cclxuICAgIHJlbW92ZWQoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZlZCcpO1xyXG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKCcnKTtcclxuICAgIH1cclxuICAgIHNlbGVjdGVkKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UoZXZlbnQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoZSBtZXRob2Qgc2V0IGluIHJlZ2lzdGVyT25DaGFuZ2UsIGl0IGlzIGp1c3RcclxuICAgIC8vIGEgcGxhY2Vob2xkZXIgZm9yIGEgbWV0aG9kIHRoYXQgdGFrZXMgb25lIHBhcmFtZXRlcixcclxuICAgIC8vIHdlIHVzZSBpdCB0byBlbWl0IGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybVxyXG4gICAgcHJpdmF0ZSBwcm9wYWdhdGVDaGFuZ2UgPSAoY2hhbmdlOiBhbnkpID0+IHsgfTtcclxufVxyXG4iXX0=