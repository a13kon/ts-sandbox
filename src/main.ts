import { range, timer, iif, of, defer, generate, filter, from, take, first, single, skip, ignoreElements, debounce, distinctUntilChanged, interval, sampleTime, debounceTime, skipWhile, combineLatest, forkJoin, pluck, reduce, scan, last, exhaustMap, switchMap } from "rxjs";
import { map } from "rxjs";
import { b } from "./t";
import { ajax } from  "rxjs/ajax";


// const observable = range (0, 11)
//     .pipe(
//         map( x => x ** 2)
//     ).subscribe(console.log);

// const observable2 = timer (0, 2000);
// observable2.subscribe(console.log);
// let person = {
//     name: 'John',
//     age: 23
// }


// const iifCheck = iif(
//     () => b,
//     of(person.name),
//     of(person.age)
// );


// iifCheck.subscribe(console.log);

// const defertest = defer (() => {
//     return false? '1': '2'; 
// }).subscribe(console.log)


// const gen = generate(0, x => x < 20, x => x + 2);
// gen.subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('Complete!')
// })


// const x = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9, 10, 10, 10]

// const observable = of(...x) //or from(x)
//     .pipe(
//         //map(x => x ** 2),
//         //filter(x => x > 10),
//         //take(3)
//         //skip(4),
//         //first(x => x > 10),
//         //single(),
//         //ignoreElements()
//         //distinctUntilChanged()
//     )
//     .subscribe({
//         next: value => console.log(value),
//         complete: () => console.log('complete!')
//     });


// const source = interval(500);
// const example = source.pipe(
//     skipWhile(x => x < 10)
// )
//     .subscribe(console.log);

// const timerOne = timer (1000, 4000).pipe(take(3));
// const timerTwo = timer (2000, 4000).pipe(take(3));
// const timerThree = timer (3000, 4000).pipe(take(3));

// const o = combineLatest(timerOne, timerTwo, timerThree);

// o.subscribe(console.log);

//const stream$ = ajax.getJSON('https://api.github.com/search/users?q=a13kon').subscribe(console.log)

// const o = of({
//     name: 'Alex',
//     age: 23,
//     gender: 'Male'
// }).pipe(
//     pluck('name')
// ).subscribe(console.log)

// const o = of (1,2,3,4,5,6,7)
//     .pipe(
//         scan(function (acc, cur) { return acc + cur }),
//     ).subscribe(console.log);

// const o = of (0, 10, 20, 30, 40)
//     .pipe(
//         switchMap(
//             x => of(x+0, x+1, x+2, x+3, x+4, x+5, x+6, x+7, x+8, x+9)
//         ),
//         skip(1),
//         filter(x => x % 10 != 0)
//     );

// o.subscribe(console.log)

