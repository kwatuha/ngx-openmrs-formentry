/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as _ from 'lodash';
var JsExpressionHelper = /** @class */ (function () {
    function JsExpressionHelper() {
    }
    /**
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    JsExpressionHelper.prototype.calcBMI = /**
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    function (height, weight) {
        var /** @type {?} */ r;
        if (height && weight) {
            r = (weight / (height / 100 * height / 100)).toFixed(1);
        }
        return height && weight ? parseFloat(r) : null;
    };
    /**
     * @param {?} bmiForAgeRef
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    JsExpressionHelper.prototype.calcBMIForAgeZscore = /**
     * @param {?} bmiForAgeRef
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    function (bmiForAgeRef, height, weight) {
        var /** @type {?} */ bmi;
        var /** @type {?} */ maxAgeInDays = 1856;
        if (height && weight) {
            bmi = (weight / (height / 100 * height / 100)).toFixed(1);
        }
        var /** @type {?} */ refSectionObject = _.first(bmiForAgeRef);
        var /** @type {?} */ formattedSDValue;
        if (refSectionObject) {
            var /** @type {?} */ refObjectValues = Object.keys(refSectionObject).map(function (key) { return refSectionObject[key]; }).map(function (x) { return x; });
            var /** @type {?} */ refObjectKeys = Object.keys(refSectionObject);
            var /** @type {?} */ minimumValue = refObjectValues[1];
            var /** @type {?} */ minReferencePoint_1 = [];
            if (bmi < minimumValue) {
                minReferencePoint_1.push(minimumValue);
            }
            else {
                _.forEach(refObjectValues, function (value) {
                    if (value <= bmi) {
                        minReferencePoint_1.push(value);
                    }
                });
            }
            var /** @type {?} */ lastReferenceValue_1 = _.last(minReferencePoint_1);
            var /** @type {?} */ lastValueIndex = _.findIndex(refObjectValues, function (o) {
                return o === lastReferenceValue_1;
            });
            var /** @type {?} */ SDValue = refObjectKeys[lastValueIndex];
            formattedSDValue = SDValue.replace('SD', '');
            if (formattedSDValue.includes('neg')) {
                formattedSDValue = formattedSDValue.substring(1, 0);
                formattedSDValue = '-' + formattedSDValue;
            }
            if (formattedSDValue === 'S' || formattedSDValue === 'L' || formattedSDValue === 'M' || formattedSDValue === '-5') {
                formattedSDValue = '-4';
            }
        }
        return bmi && refSectionObject ? formattedSDValue : null;
    };
    /**
     * @param {?} weightForHeightRef
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    JsExpressionHelper.prototype.calcWeightForHeightZscore = /**
     * @param {?} weightForHeightRef
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    function (weightForHeightRef, height, weight) {
        var /** @type {?} */ refSection;
        var /** @type {?} */ formattedSDValue;
        if (height && weight) {
            height = parseFloat(height).toFixed(1);
        }
        var /** @type {?} */ standardHeightMin = 45;
        var /** @type {?} */ standardMaxHeight = 110;
        if (height < standardHeightMin || height > standardMaxHeight) {
            formattedSDValue = -4;
        }
        else {
            refSection = _.filter(weightForHeightRef, function (refObject) {
                return parseFloat(refObject['Length']).toFixed(1) === height;
            });
        }
        var /** @type {?} */ refSectionObject = _.first(refSection);
        if (refSectionObject) {
            var /** @type {?} */ refObjectValues = Object.keys(refSectionObject).map(function (key) { return refSectionObject[key]; }).map(function (x) { return x; });
            var /** @type {?} */ refObjectKeys = Object.keys(refSectionObject);
            var /** @type {?} */ minimumValue = refObjectValues[1];
            var /** @type {?} */ minReferencePoint_2 = [];
            if (weight < minimumValue) {
                minReferencePoint_2.push(minimumValue);
            }
            else {
                _.forEach(refObjectValues, function (value) {
                    if (value <= weight) {
                        minReferencePoint_2.push(value);
                    }
                });
            }
            var /** @type {?} */ lastReferenceValue_2 = _.last(minReferencePoint_2);
            var /** @type {?} */ lastValueIndex = _.findIndex(refObjectValues, function (o) {
                return o === lastReferenceValue_2;
            });
            var /** @type {?} */ SDValue = refObjectKeys[lastValueIndex];
            formattedSDValue = SDValue.replace('SD', '');
            if (formattedSDValue.includes('neg')) {
                formattedSDValue = formattedSDValue.substring(1, 0);
                formattedSDValue = '-' + formattedSDValue;
            }
            if (formattedSDValue === 'S' || formattedSDValue === 'L' || formattedSDValue === 'M' || formattedSDValue === '-5') {
                formattedSDValue = '-4';
            }
        }
        return height && weight ? formattedSDValue : null;
    };
    /**
     * @param {?} heightForAgeRef
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    JsExpressionHelper.prototype.calcHeightForAgeZscore = /**
     * @param {?} heightForAgeRef
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    function (heightForAgeRef, height, weight) {
        var /** @type {?} */ refSectionObject = _.first(heightForAgeRef);
        var /** @type {?} */ formattedSDValue;
        if (refSectionObject) {
            var /** @type {?} */ refObjectValues = Object.keys(refSectionObject).map(function (key) { return refSectionObject[key]; }).map(function (x) { return x; });
            var /** @type {?} */ refObjectKeys = Object.keys(refSectionObject);
            var /** @type {?} */ minimumValue = refObjectValues[1];
            var /** @type {?} */ minReferencePoint_3 = [];
            if (height < minimumValue) {
                minReferencePoint_3.push(minimumValue);
            }
            else {
                _.forEach(refObjectValues, function (value) {
                    if (value <= height) {
                        minReferencePoint_3.push(value);
                    }
                });
            }
            var /** @type {?} */ lastReferenceValue_3 = _.last(minReferencePoint_3);
            var /** @type {?} */ lastValueIndex = _.findIndex(refObjectValues, function (o) {
                return o === lastReferenceValue_3;
            });
            var /** @type {?} */ SDValue = refObjectKeys[lastValueIndex];
            formattedSDValue = SDValue.replace('SD', '');
            if (formattedSDValue.includes('neg')) {
                formattedSDValue = formattedSDValue.substring(1, 0);
                formattedSDValue = '-' + formattedSDValue;
            }
            if (formattedSDValue === 'S' || formattedSDValue === 'L' || formattedSDValue === 'M' || formattedSDValue === '-5') {
                formattedSDValue = '-4';
            }
        }
        return height && weight && refSectionObject ? formattedSDValue : null;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    JsExpressionHelper.prototype.isEmpty = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val === undefined || val === null || val === '' || val === 'null' || val === 'undefined') {
            return true;
        }
        if (Array.isArray(val) && val.length === 0) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} array
     * @param {?} members
     * @return {?}
     */
    JsExpressionHelper.prototype.arrayContains = /**
     * @param {?} array
     * @param {?} members
     * @return {?}
     */
    function (array, members) {
        if (Array.isArray(members)) {
            if (members.length === 0) {
                return true;
            }
            var /** @type {?} */ contains = true;
            for (var /** @type {?} */ i = 0; i < members.length; i++) {
                var /** @type {?} */ val = members[i];
                if (array.indexOf(val) === -1) {
                    contains = false;
                }
            }
            return contains;
        }
        else {
            return array.indexOf(members) !== -1;
        }
    };
    /**
     * @param {?} key
     * @param {?} array
     * @return {?}
     */
    JsExpressionHelper.prototype.extractRepeatingGroupValues = /**
     * @param {?} key
     * @param {?} array
     * @return {?}
     */
    function (key, array) {
        var /** @type {?} */ values = array.map(function (item) {
            return item[key];
        });
        return values;
    };
    /**
     * @param {?} value
     * @param {?} format
     * @param {?} offset
     * @return {?}
     */
    JsExpressionHelper.prototype.formatDate = /**
     * @param {?} value
     * @param {?} format
     * @param {?} offset
     * @return {?}
     */
    function (value, format, offset) {
        format = format || 'yyyy-MM-dd';
        offset = offset || '+0300';
        if (!(value instanceof Date)) {
            value = new Date(value);
            if (value === null || value === undefined) {
                throw new Error('DateFormatException: value passed ' +
                    'is not a valid date');
            }
        }
        return value; // TODO implement this
        // return $filter('date')(value, format, offset);
    };
    /**
     * @param {?} array
     * @param {?} members
     * @return {?}
     */
    JsExpressionHelper.prototype.arrayContainsAny = /**
     * @param {?} array
     * @param {?} members
     * @return {?}
     */
    function (array, members) {
        if (Array.isArray(members)) {
            if (members.length === 0) {
                return true;
            }
            var /** @type {?} */ contains = false;
            for (var /** @type {?} */ i = 0; i < members.length; i++) {
                var /** @type {?} */ val = members[i];
                if (array.indexOf(val) !== -1) {
                    contains = true;
                }
            }
            return contains;
        }
        else {
            return array.indexOf(members) !== -1;
        }
    };
    Object.defineProperty(JsExpressionHelper.prototype, "helperFunctions", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ helper = this;
            return {
                arrayContainsAny: helper.arrayContainsAny,
                calcBMI: helper.calcBMI,
                calcBMIForAgeZscore: helper.calcBMIForAgeZscore,
                calcWeightForHeightZscore: helper.calcWeightForHeightZscore,
                calcHeightForAgeZscore: helper.calcHeightForAgeZscore,
                isEmpty: helper.isEmpty,
                arrayContains: helper.arrayContains,
                extractRepeatingGroupValues: helper.extractRepeatingGroupValues
            };
        },
        enumerable: true,
        configurable: true
    });
    return JsExpressionHelper;
}());
export { JsExpressionHelper };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMtZXhwcmVzc2lvbi1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3Blbm1ycy1mb3JtZW50cnkvIiwic291cmNlcyI6WyJmb3JtLWVudHJ5L2hlbHBlcnMvanMtZXhwcmVzc2lvbi1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLElBQUE7Ozs7Ozs7O0lBRUUsb0NBQU87Ozs7O0lBQVAsVUFBUSxNQUFNLEVBQUUsTUFBTTtRQUVwQixxQkFBSSxDQUFDLENBQUM7UUFDTixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUNoRDs7Ozs7OztJQUVELGdEQUFtQjs7Ozs7O0lBQW5CLFVBQW9CLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTTtRQUMvQyxxQkFBSSxHQUFHLENBQUM7UUFDUixxQkFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QscUJBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxxQkFB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QUFJLENBQUM7WUFDcEIsTUFBTSxDQUFDO2dCQUNMLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxnQkFBZ0I7Z0JBQ3pDLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztnQkFDdkIsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLG1CQUFtQjtnQkFDL0MseUJBQXlCLEVBQUUsTUFBTSxDQUFDLHlCQUF5QjtnQkFDM0Qsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLHNCQUFzQjtnQkFDckQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO2dCQUN2QixhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQWE7Z0JBQ25DLDJCQUEyQixFQUFFLE1BQU0sQ0FBQywyQkFBMkI7YUFDaEUsQ0FBQztTQUNIOzs7T0FBQTs2QkE3T0g7SUE4T0MsQ0FBQTtBQTVPRCw4QkE0T0MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5leHBvcnQgY2xhc3MgSnNFeHByZXNzaW9uSGVscGVyIHtcclxuXHJcbiAgY2FsY0JNSShoZWlnaHQsIHdlaWdodCkge1xyXG5cclxuICAgIGxldCByO1xyXG4gICAgaWYgKGhlaWdodCAmJiB3ZWlnaHQpIHtcclxuICAgICAgciA9ICh3ZWlnaHQgLyAoaGVpZ2h0IC8gMTAwICogaGVpZ2h0IC8gMTAwKSkudG9GaXhlZCgxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBoZWlnaHQgJiYgd2VpZ2h0ID8gcGFyc2VGbG9hdChyKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBjYWxjQk1JRm9yQWdlWnNjb3JlKGJtaUZvckFnZVJlZiwgaGVpZ2h0LCB3ZWlnaHQpIHtcclxuICAgbGV0IGJtaTtcclxuICAgY29uc3QgbWF4QWdlSW5EYXlzID0gMTg1NjtcclxuICAgIGlmIChoZWlnaHQgJiYgd2VpZ2h0KSB7XHJcbiAgICAgIGJtaSA9ICh3ZWlnaHQgLyAoaGVpZ2h0IC8gMTAwICogaGVpZ2h0IC8gMTAwKSkudG9GaXhlZCgxKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlZlNlY3Rpb25PYmplY3QgPSBfLmZpcnN0KGJtaUZvckFnZVJlZik7XHJcbiAgICBsZXQgZm9ybWF0dGVkU0RWYWx1ZTtcclxuICAgIGlmIChyZWZTZWN0aW9uT2JqZWN0KSB7XHJcbiAgICAgIGNvbnN0IHJlZk9iamVjdFZhbHVlcyA9IE9iamVjdC5rZXlzKHJlZlNlY3Rpb25PYmplY3QpLm1hcChcclxuICAgICAgICAoa2V5KSA9PiByZWZTZWN0aW9uT2JqZWN0W2tleV0pLm1hcCggKHgpID0+IHgpO1xyXG4gICAgICAgIGNvbnN0IHJlZk9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhyZWZTZWN0aW9uT2JqZWN0KTtcclxuICAgICAgICBjb25zdCBtaW5pbXVtVmFsdWUgPSByZWZPYmplY3RWYWx1ZXNbMV07XHJcbiAgICAgICAgY29uc3QgbWluUmVmZXJlbmNlUG9pbnQgPSBbXTtcclxuICAgICAgICBpZiAoYm1pIDwgbWluaW11bVZhbHVlKSB7XHJcbiAgICAgICAgICBtaW5SZWZlcmVuY2VQb2ludC5wdXNoKG1pbmltdW1WYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIF8uZm9yRWFjaChyZWZPYmplY3RWYWx1ZXMsICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHZhbHVlIDw9IGJtaSkge1xyXG4gICAgICAgICAgbWluUmVmZXJlbmNlUG9pbnQucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGFzdFJlZmVyZW5jZVZhbHVlID0gXy5sYXN0KG1pblJlZmVyZW5jZVBvaW50KTtcclxuICAgICAgICBjb25zdCBsYXN0VmFsdWVJbmRleCA9IF8uZmluZEluZGV4KHJlZk9iamVjdFZhbHVlcywgKG8pID0+IHtcclxuICAgICAgICByZXR1cm4gbyA9PT0gbGFzdFJlZmVyZW5jZVZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IFNEVmFsdWUgPSByZWZPYmplY3RLZXlzW2xhc3RWYWx1ZUluZGV4XTtcclxuICAgICAgICBmb3JtYXR0ZWRTRFZhbHVlID0gU0RWYWx1ZS5yZXBsYWNlKCdTRCcsICcnKTtcclxuICAgICAgICBpZiAoZm9ybWF0dGVkU0RWYWx1ZS5pbmNsdWRlcygnbmVnJykpIHtcclxuICAgICAgICAgIGZvcm1hdHRlZFNEVmFsdWUgPSBmb3JtYXR0ZWRTRFZhbHVlLnN1YnN0cmluZygxLCAwKTtcclxuICAgICAgICAgIGZvcm1hdHRlZFNEVmFsdWUgPSAnLScgKyBmb3JtYXR0ZWRTRFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBmb3JtYXR0ZWRTRFZhbHVlID09PSAnUycgfHwgZm9ybWF0dGVkU0RWYWx1ZSA9PT0gJ0wnIHx8IGZvcm1hdHRlZFNEVmFsdWUgPT09ICdNJyB8fCBmb3JtYXR0ZWRTRFZhbHVlID09PSAnLTUnKSB7XHJcbiAgICAgICAgICBmb3JtYXR0ZWRTRFZhbHVlID0gJy00JztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAgYm1pICYmIHJlZlNlY3Rpb25PYmplY3QgPyAgZm9ybWF0dGVkU0RWYWx1ZSA6IG51bGw7XHJcbiAgfVxyXG4gIGNhbGNXZWlnaHRGb3JIZWlnaHRac2NvcmUod2VpZ2h0Rm9ySGVpZ2h0UmVmLCBoZWlnaHQsIHdlaWdodCkge1xyXG4gICAgbGV0IHJlZlNlY3Rpb24gO1xyXG4gICAgbGV0IGZvcm1hdHRlZFNEVmFsdWU7XHJcbiAgICBpZiAoaGVpZ2h0ICYmIHdlaWdodCkge1xyXG4gICAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KGhlaWdodCkudG9GaXhlZCgxKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0YW5kYXJkSGVpZ2h0TWluID0gNDU7XHJcbiAgICBjb25zdCBzdGFuZGFyZE1heEhlaWdodCA9IDExMDtcclxuICAgIGlmICggaGVpZ2h0IDwgc3RhbmRhcmRIZWlnaHRNaW4gfHwgaGVpZ2h0ID4gc3RhbmRhcmRNYXhIZWlnaHQpIHtcclxuICAgICAgZm9ybWF0dGVkU0RWYWx1ZSA9IC00O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZWZTZWN0aW9uID0gXy5maWx0ZXIod2VpZ2h0Rm9ySGVpZ2h0UmVmLCAocmVmT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocmVmT2JqZWN0WydMZW5ndGgnXSkudG9GaXhlZCgxKSA9PT0gaGVpZ2h0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWZTZWN0aW9uT2JqZWN0ID0gXy5maXJzdChyZWZTZWN0aW9uKTtcclxuICAgIGlmIChyZWZTZWN0aW9uT2JqZWN0KSB7XHJcbiAgICAgIGNvbnN0IHJlZk9iamVjdFZhbHVlcyA9IE9iamVjdC5rZXlzKHJlZlNlY3Rpb25PYmplY3QpLm1hcChcclxuICAgICAgICAoa2V5KSA9PiByZWZTZWN0aW9uT2JqZWN0W2tleV0pLm1hcCggKHgpID0+IHgpO1xyXG4gICAgICAgIGNvbnN0IHJlZk9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhyZWZTZWN0aW9uT2JqZWN0KTtcclxuICAgICAgICBjb25zdCBtaW5pbXVtVmFsdWUgPSByZWZPYmplY3RWYWx1ZXNbMV07XHJcbiAgICAgICAgY29uc3QgbWluUmVmZXJlbmNlUG9pbnQgPSBbXTtcclxuICAgICAgICBpZiAod2VpZ2h0IDwgbWluaW11bVZhbHVlKSB7XHJcbiAgICAgICAgICBtaW5SZWZlcmVuY2VQb2ludC5wdXNoKG1pbmltdW1WYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIF8uZm9yRWFjaChyZWZPYmplY3RWYWx1ZXMsICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHZhbHVlIDw9IHdlaWdodCkge1xyXG4gICAgICAgICAgbWluUmVmZXJlbmNlUG9pbnQucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxhc3RSZWZlcmVuY2VWYWx1ZSA9IF8ubGFzdChtaW5SZWZlcmVuY2VQb2ludCk7XHJcbiAgICAgICAgY29uc3QgbGFzdFZhbHVlSW5kZXggPSBfLmZpbmRJbmRleChyZWZPYmplY3RWYWx1ZXMsIChvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG8gPT09IGxhc3RSZWZlcmVuY2VWYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBTRFZhbHVlID0gcmVmT2JqZWN0S2V5c1tsYXN0VmFsdWVJbmRleF07XHJcbiAgICAgICAgZm9ybWF0dGVkU0RWYWx1ZSA9IFNEVmFsdWUucmVwbGFjZSgnU0QnLCAnJyk7XHJcbiAgICAgICAgaWYgKGZvcm1hdHRlZFNEVmFsdWUuaW5jbHVkZXMoJ25lZycpKSB7XHJcbiAgICAgICAgICBmb3JtYXR0ZWRTRFZhbHVlID0gZm9ybWF0dGVkU0RWYWx1ZS5zdWJzdHJpbmcoMSwgMCk7XHJcbiAgICAgICAgICBmb3JtYXR0ZWRTRFZhbHVlID0gJy0nICsgZm9ybWF0dGVkU0RWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCBmb3JtYXR0ZWRTRFZhbHVlID09PSAnUycgfHwgZm9ybWF0dGVkU0RWYWx1ZSA9PT0gJ0wnIHx8IGZvcm1hdHRlZFNEVmFsdWUgPT09ICdNJyAgfHwgZm9ybWF0dGVkU0RWYWx1ZSA9PT0gJy01Jykge1xyXG4gICAgICAgICAgZm9ybWF0dGVkU0RWYWx1ZSA9ICctNCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gIGhlaWdodCAmJiB3ZWlnaHQgID8gIGZvcm1hdHRlZFNEVmFsdWUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY2FsY0hlaWdodEZvckFnZVpzY29yZShoZWlnaHRGb3JBZ2VSZWYsIGhlaWdodCwgd2VpZ2h0KSB7XHJcblxyXG4gICAgY29uc3QgcmVmU2VjdGlvbk9iamVjdCA9IF8uZmlyc3QoaGVpZ2h0Rm9yQWdlUmVmKTtcclxuICAgIGxldCBmb3JtYXR0ZWRTRFZhbHVlO1xyXG4gICAgaWYgKHJlZlNlY3Rpb25PYmplY3QpIHtcclxuICAgICAgY29uc3QgcmVmT2JqZWN0VmFsdWVzID0gT2JqZWN0LmtleXMocmVmU2VjdGlvbk9iamVjdCkubWFwKFxyXG4gICAgICAgIChrZXkpID0+IHJlZlNlY3Rpb25PYmplY3Rba2V5XSkubWFwKCAoeCkgPT4geCk7XHJcbiAgICAgICAgY29uc3QgcmVmT2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKHJlZlNlY3Rpb25PYmplY3QpO1xyXG4gICAgICAgIGNvbnN0IG1pbmltdW1WYWx1ZSA9IHJlZk9iamVjdFZhbHVlc1sxXTtcclxuICAgICAgICBjb25zdCBtaW5SZWZlcmVuY2VQb2ludCA9IFtdO1xyXG4gICAgICAgIGlmIChoZWlnaHQgPCBtaW5pbXVtVmFsdWUpIHtcclxuICAgICAgICAgIG1pblJlZmVyZW5jZVBvaW50LnB1c2gobWluaW11bVZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgXy5mb3JFYWNoKHJlZk9iamVjdFZhbHVlcywgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBpZiAodmFsdWUgPD0gaGVpZ2h0KSB7XHJcbiAgICAgICAgICBtaW5SZWZlcmVuY2VQb2ludC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsYXN0UmVmZXJlbmNlVmFsdWUgPSBfLmxhc3QobWluUmVmZXJlbmNlUG9pbnQpO1xyXG4gICAgICAgIGNvbnN0IGxhc3RWYWx1ZUluZGV4ID0gXy5maW5kSW5kZXgocmVmT2JqZWN0VmFsdWVzLCAobykgPT4ge1xyXG4gICAgICAgIHJldHVybiBvID09PSBsYXN0UmVmZXJlbmNlVmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgU0RWYWx1ZSA9IHJlZk9iamVjdEtleXNbbGFzdFZhbHVlSW5kZXhdO1xyXG4gICAgICAgIGZvcm1hdHRlZFNEVmFsdWUgPSBTRFZhbHVlLnJlcGxhY2UoJ1NEJywgJycpO1xyXG4gICAgICAgIGlmIChmb3JtYXR0ZWRTRFZhbHVlLmluY2x1ZGVzKCduZWcnKSkge1xyXG4gICAgICAgICAgZm9ybWF0dGVkU0RWYWx1ZSA9IGZvcm1hdHRlZFNEVmFsdWUuc3Vic3RyaW5nKDEsIDApO1xyXG4gICAgICAgICAgZm9ybWF0dGVkU0RWYWx1ZSA9ICctJyArIGZvcm1hdHRlZFNEVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGZvcm1hdHRlZFNEVmFsdWUgPT09ICdTJyB8fCBmb3JtYXR0ZWRTRFZhbHVlID09PSAnTCcgfHwgZm9ybWF0dGVkU0RWYWx1ZSA9PT0gJ00nICB8fCBmb3JtYXR0ZWRTRFZhbHVlID09PSAnLTUnKSB7XHJcbiAgICAgICAgICBmb3JtYXR0ZWRTRFZhbHVlID0gJy00JztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAgaGVpZ2h0ICYmIHdlaWdodCAmJiByZWZTZWN0aW9uT2JqZWN0ID8gIGZvcm1hdHRlZFNEVmFsdWUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaXNFbXB0eSh2YWwpIHtcclxuXHJcbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBudWxsIHx8IHZhbCA9PT0gJycgfHwgdmFsID09PSAnbnVsbCcgfHwgdmFsID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhcnJheUNvbnRhaW5zKGFycmF5LCBtZW1iZXJzKSB7XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWVtYmVycykpIHtcclxuXHJcbiAgICAgIGlmIChtZW1iZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY29udGFpbnMgPSB0cnVlO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW1iZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gbWVtYmVyc1tpXTtcclxuICAgICAgICBpZiAoYXJyYXkuaW5kZXhPZih2YWwpID09PSAtMSkge1xyXG4gICAgICAgICAgY29udGFpbnMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb250YWlucztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKG1lbWJlcnMpICE9PSAtMTtcclxuICAgIH1cclxuICB9XHJcbiAgZXh0cmFjdFJlcGVhdGluZ0dyb3VwVmFsdWVzKGtleSwgYXJyYXkpIHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IGFycmF5Lm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICByZXR1cm4gaXRlbVtrZXldO1xyXG4gICAgfSk7XHJcbiAgcmV0dXJuIHZhbHVlcztcclxuICB9XHJcbiAgZm9ybWF0RGF0ZSh2YWx1ZSwgZm9ybWF0LCBvZmZzZXQpIHtcclxuXHJcbiAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJ3l5eXktTU0tZGQnO1xyXG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8ICcrMDMwMCc7XHJcblxyXG4gICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSkge1xyXG5cclxuICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRlRm9ybWF0RXhjZXB0aW9uOiB2YWx1ZSBwYXNzZWQgJyArXHJcbiAgICAgICAgICAnaXMgbm90IGEgdmFsaWQgZGF0ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlOyAvLyBUT0RPIGltcGxlbWVudCB0aGlzXHJcbiAgICAvLyByZXR1cm4gJGZpbHRlcignZGF0ZScpKHZhbHVlLCBmb3JtYXQsIG9mZnNldCk7XHJcbiAgfVxyXG5cclxuICBhcnJheUNvbnRhaW5zQW55KGFycmF5LCBtZW1iZXJzKSB7XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWVtYmVycykpIHtcclxuICAgICAgaWYgKG1lbWJlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGNvbnRhaW5zID0gZmFsc2U7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbWJlcnMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsID0gbWVtYmVyc1tpXTtcclxuICAgICAgICBpZiAoYXJyYXkuaW5kZXhPZih2YWwpICE9PSAtMSkge1xyXG4gICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29udGFpbnM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZihtZW1iZXJzKSAhPT0gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaGVscGVyRnVuY3Rpb25zKCkge1xyXG4gICAgY29uc3QgaGVscGVyID0gdGhpcztcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFycmF5Q29udGFpbnNBbnk6IGhlbHBlci5hcnJheUNvbnRhaW5zQW55LFxyXG4gICAgICBjYWxjQk1JOiBoZWxwZXIuY2FsY0JNSSxcclxuICAgICAgY2FsY0JNSUZvckFnZVpzY29yZTogaGVscGVyLmNhbGNCTUlGb3JBZ2Vac2NvcmUsXHJcbiAgICAgIGNhbGNXZWlnaHRGb3JIZWlnaHRac2NvcmU6IGhlbHBlci5jYWxjV2VpZ2h0Rm9ySGVpZ2h0WnNjb3JlLFxyXG4gICAgICBjYWxjSGVpZ2h0Rm9yQWdlWnNjb3JlOiBoZWxwZXIuY2FsY0hlaWdodEZvckFnZVpzY29yZSxcclxuICAgICAgaXNFbXB0eTogaGVscGVyLmlzRW1wdHksXHJcbiAgICAgIGFycmF5Q29udGFpbnM6IGhlbHBlci5hcnJheUNvbnRhaW5zLFxyXG4gICAgICBleHRyYWN0UmVwZWF0aW5nR3JvdXBWYWx1ZXM6IGhlbHBlci5leHRyYWN0UmVwZWF0aW5nR3JvdXBWYWx1ZXNcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==