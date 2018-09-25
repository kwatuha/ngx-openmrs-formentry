/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Option } from '../question-models/select-option';
import { BehaviorSubject, of } from 'rxjs';
export class DummyDataSource {
    constructor() {
        this.returnErrorOnNext = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    resolveSelectedValue(value) {
        let /** @type {?} */ selectOptions = this.sampleData();
        selectOptions = selectOptions.map(function (obj) {
            const /** @type {?} */ option = new Option({
                label: obj.label,
                value: obj.concept
            });
            return option;
        });
        selectOptions = selectOptions.filter(option => option.value === value);
        const /** @type {?} */ test = new BehaviorSubject([]);
        if (!this.returnErrorOnNext) {
            test.next(selectOptions[0]);
        }
        else {
            test.error(new Error('Error loading Options'));
        }
        return test.asObservable();
    }
    /**
     * @param {?} url
     * @return {?}
     */
    fileUpload(url) {
        return of({ image: '' });
    }
    /**
     * @param {?} url
     * @return {?}
     */
    fetchFile(url) {
        return of({ image: '' });
    }
    /**
     * @param {?} searchText
     * @return {?}
     */
    searchOptions(searchText) {
        let /** @type {?} */ selectOptions = this.sampleData();
        selectOptions = selectOptions.map(function (obj) {
            const /** @type {?} */ option = new Option({
                label: obj.label,
                value: obj.concept
            });
            return option;
        });
        selectOptions = selectOptions.filter(option => option.label.indexOf(searchText) !== -1);
        const /** @type {?} */ test = new BehaviorSubject([]);
        if (!this.returnErrorOnNext) {
            test.next(selectOptions);
        }
        else {
            test.error(new Error('Error loading Options'));
        }
        return test.asObservable();
    }
    /**
     * @return {?}
     */
    sampleData() {
        return [
            {
                concept: 'a899e0ac-1350-11df-a1f1-0026b9348838',
                label: 'None'
            },
            {
                concept: 'a8ad1276-1350-11df-a1f1-0026b9348838',
                label: 'Breathlessness'
            },
            {
                concept: 'a892e4b4-1350-11df-a1f1-0026b9348838',
                label: 'Chest pain'
            },
            {
                concept: 'a8afc8b8-1350-11df-a1f1-0026b9348838',
                label: 'Cough = 2 weeks'
            },
            {
                concept: 'd7adae14-c386-49cc-8f7c-765d8ceec566',
                label: 'Fever for = 2 weeks'
            },
            {
                concept: '3f57aafc-7162-41da-a51b-6a804cb6f5e8',
                label: 'New exposure to household contact with TB'
            },
            {
                concept: 'a89807f0-1350-11df-a1f1-0026b9348838',
                label: 'Noticeable Weight loss'
            },
            {
                concept: 'e1862fef-68ed-4df4-90dd-a00152f719aa',
                label: 'Night sweats = 2 weeks'
            },
            {
                concept: 'a8ad462e-1350-11df-a1f1-0026b9348838',
                label: 'Abdomen'
            },
            {
                concept: 'f218c60e-4b54-475a-a4fa-facab9216da8',
                label: 'Groin'
            },
            {
                concept: 'a8a774b0-1350-11df-a1f1-0026b9348838',
                label: 'Joints'
            },
            {
                concept: '4639388c-ee31-4dcf-abb4-ad71253493bb',
                label: 'Neck Kw'
            }
        ];
    }
}
function DummyDataSource_tsickle_Closure_declarations() {
    /** @type {?} */
    DummyDataSource.prototype.options;
    /** @type {?} */
    DummyDataSource.prototype.option;
    /** @type {?} */
    DummyDataSource.prototype.returnErrorOnNext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXktZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3Blbm1ycy1mb3JtZW50cnkvIiwic291cmNlcyI6WyJmb3JtLWVudHJ5L2RhdGEtc291cmNlcy9kdW1teS1kYXRhLXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTFELE9BQU8sRUFBYyxlQUFlLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3ZELE1BQU07SUFLSjtpQ0FGb0IsS0FBSztLQUVSOzs7OztJQUVqQixvQkFBb0IsQ0FBQyxLQUFLO1FBQ3hCLHFCQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFdEMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHO1lBQzdDLHVCQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDeEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO2dCQUNoQixLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU87YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNmLENBQUMsQ0FBQztRQUdILGFBQWEsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUNsQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUNqQyxDQUFDO1FBRUYsdUJBQU0sSUFBSSxHQUF5QixJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUNoRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzVCOzs7OztJQUNELFVBQVUsQ0FBQyxHQUFHO1FBQ1osTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQzFCOzs7OztJQUNELFNBQVMsQ0FBQyxHQUFHO1FBQ1gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQzFCOzs7OztJQUNELGFBQWEsQ0FBQyxVQUFVO1FBQ3RCLHFCQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFdEMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHO1lBQzdDLHVCQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDeEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO2dCQUNoQixLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU87YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNmLENBQUMsQ0FBQztRQUdILGFBQWEsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUNsQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNsRCxDQUFDO1FBRUYsdUJBQU0sSUFBSSxHQUF5QixJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUNoRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMxQjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzVCOzs7O0lBRUQsVUFBVTtRQUNSLE1BQU0sQ0FBQztZQUNMO2dCQUNFLE9BQU8sRUFBRSxzQ0FBc0M7Z0JBQy9DLEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRDtnQkFDRSxPQUFPLEVBQUUsc0NBQXNDO2dCQUMvQyxLQUFLLEVBQUUsZ0JBQWdCO2FBQ3hCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHNDQUFzQztnQkFDL0MsS0FBSyxFQUFFLFlBQVk7YUFDcEI7WUFDRDtnQkFDRSxPQUFPLEVBQUUsc0NBQXNDO2dCQUMvQyxLQUFLLEVBQUUsaUJBQWlCO2FBQ3pCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHNDQUFzQztnQkFDL0MsS0FBSyxFQUFFLHFCQUFxQjthQUM3QjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxzQ0FBc0M7Z0JBQy9DLEtBQUssRUFBRSwyQ0FBMkM7YUFDbkQ7WUFDRDtnQkFDRSxPQUFPLEVBQUUsc0NBQXNDO2dCQUMvQyxLQUFLLEVBQUUsd0JBQXdCO2FBQ2hDO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHNDQUFzQztnQkFDL0MsS0FBSyxFQUFFLHdCQUF3QjthQUNoQztZQUNEO2dCQUNFLE9BQU8sRUFBRSxzQ0FBc0M7Z0JBQy9DLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHNDQUFzQztnQkFDL0MsS0FBSyxFQUFFLE9BQU87YUFDZjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxzQ0FBc0M7Z0JBQy9DLEtBQUssRUFBRSxRQUFRO2FBQ2hCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHNDQUFzQztnQkFDL0MsS0FBSyxFQUFFLFNBQVM7YUFDakI7U0FFRixDQUFDO0tBQ0g7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL3F1ZXN0aW9uLW1vZGVscy9zZWxlY3Qtb3B0aW9uJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uL3F1ZXN0aW9uLW1vZGVscy9pbnRlcmZhY2VzL2RhdGEtc291cmNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBvZiB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEdW1teURhdGFTb3VyY2UgaW1wbGVtZW50cyBEYXRhU291cmNlIHtcclxuICBvcHRpb25zOiBPYnNlcnZhYmxlPE9wdGlvbltdPjtcclxuICBvcHRpb246IE9ic2VydmFibGU8T3B0aW9uPjtcclxuICByZXR1cm5FcnJvck9uTmV4dCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICByZXNvbHZlU2VsZWN0ZWRWYWx1ZSh2YWx1ZSk6IE9ic2VydmFibGU8T3B0aW9uPiB7XHJcbiAgICBsZXQgc2VsZWN0T3B0aW9ucyA9IHRoaXMuc2FtcGxlRGF0YSgpO1xyXG5cclxuICAgIHNlbGVjdE9wdGlvbnMgPSBzZWxlY3RPcHRpb25zLm1hcChmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IG5ldyBPcHRpb24oe1xyXG4gICAgICAgIGxhYmVsOiBvYmoubGFiZWwsXHJcbiAgICAgICAgdmFsdWU6IG9iai5jb25jZXB0XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHNlbGVjdE9wdGlvbnMgPSBzZWxlY3RPcHRpb25zLmZpbHRlcihcclxuICAgICAgb3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdmFsdWVcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdGVzdDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oW10pO1xyXG4gICAgaWYgKCF0aGlzLnJldHVybkVycm9yT25OZXh0KSB7XHJcbiAgICAgIHRlc3QubmV4dChzZWxlY3RPcHRpb25zWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlc3QuZXJyb3IobmV3IEVycm9yKCdFcnJvciBsb2FkaW5nIE9wdGlvbnMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRlc3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG4gIGZpbGVVcGxvYWQodXJsKSB7XHJcbiAgICByZXR1cm4gb2YoeyBpbWFnZTogJycgfSk7XHJcbiAgfVxyXG4gIGZldGNoRmlsZSh1cmwpIHtcclxuICAgIHJldHVybiBvZih7IGltYWdlOiAnJyB9KTtcclxuICB9XHJcbiAgc2VhcmNoT3B0aW9ucyhzZWFyY2hUZXh0KTogT2JzZXJ2YWJsZTxPcHRpb25bXT4ge1xyXG4gICAgbGV0IHNlbGVjdE9wdGlvbnMgPSB0aGlzLnNhbXBsZURhdGEoKTtcclxuXHJcbiAgICBzZWxlY3RPcHRpb25zID0gc2VsZWN0T3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBuZXcgT3B0aW9uKHtcclxuICAgICAgICBsYWJlbDogb2JqLmxhYmVsLFxyXG4gICAgICAgIHZhbHVlOiBvYmouY29uY2VwdFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBzZWxlY3RPcHRpb25zID0gc2VsZWN0T3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgIG9wdGlvbiA9PiBvcHRpb24ubGFiZWwuaW5kZXhPZihzZWFyY2hUZXh0KSAhPT0gLTFcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdGVzdDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oW10pO1xyXG4gICAgaWYgKCF0aGlzLnJldHVybkVycm9yT25OZXh0KSB7XHJcbiAgICAgIHRlc3QubmV4dChzZWxlY3RPcHRpb25zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlc3QuZXJyb3IobmV3IEVycm9yKCdFcnJvciBsb2FkaW5nIE9wdGlvbnMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRlc3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzYW1wbGVEYXRhKCk6IGFueSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29uY2VwdDogJ2E4OTllMGFjLTEzNTAtMTFkZi1hMWYxLTAwMjZiOTM0ODgzOCcsXHJcbiAgICAgICAgbGFiZWw6ICdOb25lJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29uY2VwdDogJ2E4YWQxMjc2LTEzNTAtMTFkZi1hMWYxLTAwMjZiOTM0ODgzOCcsXHJcbiAgICAgICAgbGFiZWw6ICdCcmVhdGhsZXNzbmVzcydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbmNlcHQ6ICdhODkyZTRiNC0xMzUwLTExZGYtYTFmMS0wMDI2YjkzNDg4MzgnLFxyXG4gICAgICAgIGxhYmVsOiAnQ2hlc3QgcGFpbidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbmNlcHQ6ICdhOGFmYzhiOC0xMzUwLTExZGYtYTFmMS0wMDI2YjkzNDg4MzgnLFxyXG4gICAgICAgIGxhYmVsOiAnQ291Z2ggPSAyIHdlZWtzJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29uY2VwdDogJ2Q3YWRhZTE0LWMzODYtNDljYy04ZjdjLTc2NWQ4Y2VlYzU2NicsXHJcbiAgICAgICAgbGFiZWw6ICdGZXZlciBmb3IgPSAyIHdlZWtzJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29uY2VwdDogJzNmNTdhYWZjLTcxNjItNDFkYS1hNTFiLTZhODA0Y2I2ZjVlOCcsXHJcbiAgICAgICAgbGFiZWw6ICdOZXcgZXhwb3N1cmUgdG8gaG91c2Vob2xkIGNvbnRhY3Qgd2l0aCBUQidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbmNlcHQ6ICdhODk4MDdmMC0xMzUwLTExZGYtYTFmMS0wMDI2YjkzNDg4MzgnLFxyXG4gICAgICAgIGxhYmVsOiAnTm90aWNlYWJsZSBXZWlnaHQgbG9zcydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbmNlcHQ6ICdlMTg2MmZlZi02OGVkLTRkZjQtOTBkZC1hMDAxNTJmNzE5YWEnLFxyXG4gICAgICAgIGxhYmVsOiAnTmlnaHQgc3dlYXRzID0gMiB3ZWVrcydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbmNlcHQ6ICdhOGFkNDYyZS0xMzUwLTExZGYtYTFmMS0wMDI2YjkzNDg4MzgnLFxyXG4gICAgICAgIGxhYmVsOiAnQWJkb21lbidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbmNlcHQ6ICdmMjE4YzYwZS00YjU0LTQ3NWEtYTRmYS1mYWNhYjkyMTZkYTgnLFxyXG4gICAgICAgIGxhYmVsOiAnR3JvaW4nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb25jZXB0OiAnYThhNzc0YjAtMTM1MC0xMWRmLWExZjEtMDAyNmI5MzQ4ODM4JyxcclxuICAgICAgICBsYWJlbDogJ0pvaW50cydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbmNlcHQ6ICc0NjM5Mzg4Yy1lZTMxLTRkY2YtYWJiNC1hZDcxMjUzNDkzYmInLFxyXG4gICAgICAgIGxhYmVsOiAnTmVjayBLdydcclxuICAgICAgfVxyXG5cclxuICAgIF07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=