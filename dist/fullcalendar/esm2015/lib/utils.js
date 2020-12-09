const hasOwnProperty = Object.prototype.hasOwnProperty;
/*
Really simple clone utility. Only copies plain arrays, objects, and Dates. Transfers everything else as-is.
Wanted to use a third-party lib, but none did exactly this.
*/
export function deepCopy(input) {
    if (Array.isArray(input)) {
        return input.map(deepCopy);
    }
    else if (input instanceof Date) {
        return new Date(input.valueOf());
    }
    else if (typeof input === 'object' && input) { // non-null object
        return mapHash(input, deepCopy);
    }
    else { // everything else (null, function, etc)
        return input;
    }
}
export function shallowCopy(val) {
    if (typeof val === 'object') {
        if (Array.isArray(val)) {
            val = Array.prototype.slice.call(val);
        }
        else if (val) { // non-null
            val = Object.assign({}, val);
        }
    }
    return val;
}
export function mapHash(input, func) {
    const output = {};
    for (const key in input) {
        if (hasOwnProperty.call(input, key)) {
            output[key] = func(input[key], key);
        }
    }
    return output;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZnVsbGNhbGVuZGFyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztBQUV2RDs7O0VBR0U7QUFDRixNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQUs7SUFFNUIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUU1QjtTQUFNLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTtRQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBRWxDO1NBQU0sSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxFQUFFLEVBQUUsa0JBQWtCO1FBQ2pFLE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztLQUVqQztTQUFNLEVBQUUsd0NBQXdDO1FBQy9DLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDO0FBR0QsTUFBTSxVQUFVLFdBQVcsQ0FBQyxHQUFHO0lBQzdCLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1FBQzNCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QixHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU0sSUFBSSxHQUFHLEVBQUUsRUFBRSxXQUFXO1lBQzNCLEdBQUcscUJBQVEsR0FBRyxDQUFFLENBQUM7U0FDbEI7S0FDRjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUdELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUk7SUFDakMsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBRWxCLEtBQUssTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQ3ZCLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckM7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xyXG5cclxuLypcclxuUmVhbGx5IHNpbXBsZSBjbG9uZSB1dGlsaXR5LiBPbmx5IGNvcGllcyBwbGFpbiBhcnJheXMsIG9iamVjdHMsIGFuZCBEYXRlcy4gVHJhbnNmZXJzIGV2ZXJ5dGhpbmcgZWxzZSBhcy1pcy5cclxuV2FudGVkIHRvIHVzZSBhIHRoaXJkLXBhcnR5IGxpYiwgYnV0IG5vbmUgZGlkIGV4YWN0bHkgdGhpcy5cclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5KGlucHV0KSB7XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xyXG4gICAgcmV0dXJuIGlucHV0Lm1hcChkZWVwQ29weSk7XHJcblxyXG4gIH0gZWxzZSBpZiAoaW5wdXQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoaW5wdXQudmFsdWVPZigpKTtcclxuXHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnICYmIGlucHV0KSB7IC8vIG5vbi1udWxsIG9iamVjdFxyXG4gICAgcmV0dXJuIG1hcEhhc2goaW5wdXQsIGRlZXBDb3B5KTtcclxuXHJcbiAgfSBlbHNlIHsgLy8gZXZlcnl0aGluZyBlbHNlIChudWxsLCBmdW5jdGlvbiwgZXRjKVxyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaGFsbG93Q29weSh2YWwpIHtcclxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcclxuICAgICAgdmFsID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodmFsKTtcclxuICAgIH0gZWxzZSBpZiAodmFsKSB7IC8vIG5vbi1udWxsXHJcbiAgICAgIHZhbCA9IHsgLi4udmFsIH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB2YWw7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwSGFzaChpbnB1dCwgZnVuYykge1xyXG4gIGNvbnN0IG91dHB1dCA9IHt9O1xyXG5cclxuICBmb3IgKGNvbnN0IGtleSBpbiBpbnB1dCkge1xyXG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoaW5wdXQsIGtleSkpIHtcclxuICAgICAgb3V0cHV0W2tleV0gPSBmdW5jKGlucHV0W2tleV0sIGtleSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb3V0cHV0O1xyXG59XHJcbiJdfQ==