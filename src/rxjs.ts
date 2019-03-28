// ReactiveX = iterator + observer
// const sequence$: Observable<string | number> = of(...[1, 2, 3, 4]);

// sequence$
//     .subscribe((value: string | number) => {
//         // tslint:disable-next-line:no-console
//         console.log(value);
//     }, () => { }, () => {
//         // tslint:disable-next-line:no-console
//         console.log('complete');
//     });
// let count: number = 0;


// const sequence$: Observable<number> = new Observable((observer: Observer<number>) => {
//     setInterval(() => {
//         count++;
//         observer.next(count);
//     }, 1000);
// });


// sequence$
//     .subscribe((value: string | number) => {
//         // tslint:disable-next-line:no-console
//         console.log(`Sub 1  ---> ${value}`);
//     }, () => { }, () => {
//         // tslint:disable-next-line:no-console
//         console.log('complete');
//     });

// setTimeout(() => {
//     sequence$
//         .subscribe((value: string | number) => {
//             // tslint:disable-next-line:no-console
//             console.log(`Sub 2  ---> ${value}`);
//         }, () => { }, () => {
//             // tslint:disable-next-line:no-console
//             console.log('complete');
//         });
// }, 5000);

// const sequence$: Observable<MouseEvent> = fromEvent(document, 'click') as Observable<MouseEvent>;

// sequence$
//     .subscribe((value: MouseEvent) => {
//         // tslint:disable-next-line:no-console
//         console.log(`Sub 1  ---> ${value.clientX}`);
//     }, () => { }, () => {
//         // tslint:disable-next-line:no-console
//         console.log('complete');
//     });

// setTimeout(() => {
//     sequence$
//         .subscribe((value: MouseEvent) => {
//             // tslint:disable-next-line:no-console
//             console.log(`Sub 2  ---> ${value.clientX}`);
//         }, () => { }, () => {
//             // tslint:disable-next-line:no-console
//             console.log('complete');
//         });
// }, 5000);

// sequence$.next(21231);


// const sequence1$: Observable<number> = interval(1000);

/*
sequence1$:  ---0---1---2---3---4--
                 map((x)=>x*2)
sequence2$:  ---0---2---4---6---8--
*/

// const sequence2$: Observable<number> = sequence1$
//     .pipe(
//         map((x: number) => x * 2),
//     );

// sequence2$.subscribe((value: number) => {
//     // tslint:disable-next-line:no-console
//     console.log(value);
// });


// const sequence1$: Observable<number> = interval(1000);

// /*
// sequence1$:  ---0---1---2---3---4--
//                  tap((x)=>{console.log(x); return x*2})
//              ---0---1---2---3---4--
//                  map((x)=>x*2)
// sequence2$:  ---0---2---4---6---8--
// */
// const sequence2$: Observable<number> = sequence1$
//     .pipe(
//         tap((x: number) => {
//             // tslint:disable-next-line:no-console
//             console.log('From console', x);
//             return x * 2;
//         }),
//         map((x: number) =>  x * 2),
//     );

// sequence2$.subscribe((value: number) => {
//     // tslint:disable-next-line:no-console
//     console.log(value);
// });

// const sequence1$: Observable<number> = interval(1000);

// /*
// sequence1$:  ---0---1---2---3---4--
//                  take(3)
//              ---0---1---2|
//                  skip(2)
// sequence2$:  -----------2
// */
// const sequence2$: Observable<number> = sequence1$
//     .pipe(
//         take(3),
//         skip(2)
//     );

// sequence2$.subscribe((value: number) => {
//     // tslint:disable-next-line:no-console
//     console.log(value);
// }, () => { }, () => {
//     // tslint:disable-next-line:no-console
//     console.log('complete');
// });


// const sequence1$: Observable<number> = interval(1000).pipe(take(4));
// const sequence2$: Observable<number> = interval(1000).pipe(skip(6), take(4));
// /*
// sequence1$:  ---0---1---2---3|
// sequence1$:  ----------------------------6---7---8--9|
//                  concat
// sequence2$:  ---0---1---2---3-------------------------6---7---8--9|
// */
// concat(sequence1$, sequence2$)
//     .subscribe((value: number) => {
//         // tslint:disable-next-line:no-console
//         console.log(value);
//     }, () => { }, () => {
//         // tslint:disable-next-line:no-console
//         console.log('complete');
//     });


// const sequence1$: Observable<number> = interval(500).pipe(take(4));
// const sequence2$: Observable<number> = interval(300).pipe(take(5));
/*
sequence1$:  ----0----1----2----3|
sequence1$:  --0--1--2--3--4|
                 combineLatest()
sequence2$:  ----[0,0][0,1]--[0,2]-[1,2]-[1,3]--[2,3][2,4]----[3,4]|
*/
// combineLatest(sequence1$, sequence2$)
//     .subscribe((value: number[]) => {
//         // tslint:disable-next-line:no-console
//         console.log(value);
//     }, () => { }, () => {
//         // tslint:disable-next-line:no-console
//         console.log('complete');
//     });

// const touchStart$: Observable<number> = getX(fromEvent(document, 'touchstart') as Observable<TouchEvent>);
// const touchEnd$: Observable<number> = getX(fromEvent(document, 'touchend') as Observable<TouchEvent>);
// const swipe$: Observable<number> = swipe(zip(touchStart$, touchEnd$));
// swipe$.subscribe((direction: number) => {
//     if (direction > 0) {
//         // tslint:disable-next-line:no-console
//         console.log('Swipe left');
//         return;
//     }
//     // tslint:disable-next-line:no-console
//     console.log('Swipe right');
// });
//
// function getX(source$: Observable<TouchEvent>): Observable<number> {
//     return source$
//         .pipe(
//             map(({ changedTouches }: TouchEvent) => changedTouches[0].clientX)
//         );
// }
//
// function swipe(source$: Observable<[number, number]>): Observable<number> {
//     return source$.pipe(
//         map(([startX, endX]: [number, number]) => {
//             return startX - endX;
//         })
//     );
// }

// Subject => Observable + observer
// sequence2$.next()

// TODO custom operator example

// class SkipLimitSubscriber extends Subscriber<number> {
//
//     private _count: number = 1;
//     private _interval: number = 1;
//
//     public constructor(
//         subscriber: Subscriber<number>,
//         private _skip: number,
//         private _limit: number
//     ) {
//         super(subscriber);
//     }
//
//     protected _next(value: number): void {
//         const borderLow: number = this._interval * (this._skip + this._limit) - this._limit;
//         const borderHight: number = borderLow + this._limit;
//         if (borderLow < this._count && this._count <= borderHight) {
//             this.destination && this.destination.next && this.destination.next(value);
//             this._count++;
//             if (borderHight < this._count) {
//                 this._interval++;
//             }
//             return;
//         }
//         this._count++;
//     }
//
// }
//
// function skipLimit(skip: number, limit: number) {
//     return (source: Observable<number>): Observable<number> => {
//         return source.lift({
//             call(subscriber: Subscriber<number>): void {
//                 source.subscribe(new SkipLimitSubscriber(subscriber, skip, limit));
//             }
//         });
//     };
// }
//
// const sequence$: Observable<number> = interval(1000)
//     .pipe(skipLimit(3, 4));
//
//
// sequence$.subscribe((value: number) => {
//         console.log(value);
//     });


// const sequence$: Observable<number> = interval(1000)
//     .pipe(take(4));
//
// const hightOrderSequence$ = sequence$.pipe(
//     switchMap((_value: number) => of(1, 2)),
// );

// getTableData$
//     .pipe(switchMap(()=>{
//         return checkToken$.
//             pipe(switchMap(()=> post$))
//     })

// hightOrderSequence$.subscribe((value) => {
//     console.log(value);
// });

// const clickSequence$ = fromEvent(document, 'click');
// //
// // function performedRequst() {
// //     return fetch('https://jsonplaceholder.typicode.com/users/1')
// //         .then(res => res.json());
// // }
// //
// // clickSequence$
// //     .pipe(mergeMap(_click => performedRequst()))
// //     .subscribe(user => {
// //         console.log(user.email);
// //     });

// Subject = Observable + observer


// const sequence$$ = new ReplaySubject();
// sequence$$.next(1);
// sequence$$.next(2);
// sequence$$.next(3);
// sequence$$.next(4);
// sequence$$.next(5);
// sequence$$.next(6);
// sequence$$.next('Angular');
//
// setTimeout(() => {
//     sequence$$.next('Angular !!!!');
// }, 5000);
// setTimeout(() => {
//     sequence$$
//         .subscribe(value => console.log('Sub2', value));
// }, 7000);
import { interval, Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { zip } from 'rxjs/internal/observable/zip';
import { catchError, map, switchMap } from 'rxjs/operators';
import { empty } from 'rxjs/internal/observable/empty';

const sequence1$: Observable<number> = interval(500);
const sequence2$: Observable<number | string> = of('1', '2', '3', 4, '5', '6',
    '7'
);

zip(sequence1$, sequence2$)
    .pipe(
        switchMap(([_x, y]: [number, string | number]) => {
            return of(null)
                .pipe(
                    map(() => {
                        return (y as any).toUpperCase();
                    }),
                    // retryWhen(errObs => errObs.pipe(delay(3000)))
                    catchError((err, _obs) => {
                        console.log('Error 1', err);
                        return empty();
                    })
                );
        })
    )
    .subscribe(
        (value) => {
            console.log(value);
        },
        // null,
        (err) => {
            console.log('Error 2', err);
        },
        () => {
            console.log('complete');
        }
    );



// TODO AsyncSubject example