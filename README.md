# Learn-ReactJS
Learn-ReactJS
Learn-ReactJS *true && true && 2; // will output 2 *true && false && 2; // will output false *true && 'some string'; // will output 'some string' *opened && ; // will output SomeElement if opened is true, will output false otherwise (and false will be ignored by react during rendering) // be careful with 'falsy' values eg *const someValue = []; *someValue.length && // will output 0, which will be rednered by react // it'll be better to: *someValue.length > 0 && // will render nothing as we cast the value to boolean

_useEffect

Update DOM Call API Listen DOM events Clean up Case: 1.useEffect(callback) _Gọi callback mỗi khi component re-render _Gọi callback sau khi component thêm element vào DOM 2.useEffect(callback,[]) _Chỉ gọi callback 1 lần sau khi component mounted 3.useEffect(callback,[deps]) _callback sẽ được gọi lại mỗi khi deps thay đổi Callback luôn được gọi sau khi component mounted Cleanup function luôn được gọi trước khi component unmount Cleanup function luôn được gọi trước khi callback được gọi trừ lần mounted
