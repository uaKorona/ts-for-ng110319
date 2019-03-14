// Object.defineProperty(window, 'MySweetApp', { value: 'v1.0.0', writable: true });

// function deliveryMethod(): string {
//     // TODO
//     return 'overnight';
// }

// function shipWeight(): number {
//     const el: HTMLElement | null = document.getElementById('weight');
//     if (!el) {
//         return 0;
//     }
//     return parseInt(el.innerHTML);
// }

// /**
// * @param {(string | string[])} emailAddr - An email address of array of email addresses
// */
// function sendUpdates(emailAddr: string | string[]): void {
//     function sendEmail(addr: string): void {
//         // Default to standard delivery if empty
//         // tslint:disable-next-line:no-console
//         console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`);

//         if (shipWeight() > 100) {
//             // tslint:disable-next-line:no-console
//             console.log('WARNING: Oversize package');
//         }
//     }
//     // If it's an array, loop over it
//     if (Array.isArray(emailAddr)) {
//         emailAddr.forEach(( val: string) => {
//             sendEmail(val.trim());
//         });
//     } else {
//         sendEmail(emailAddr.trim());
//     }
// }
// sendUpdates('asdasd');


// interface IAccount {
//   firstName: string;
//   age: number;
// }

// let user = IAccount;


// let account = {
//     firstName: 'Igor',
//     age: 33,
// };

// let user: account;

// class Account {

// }

// let p1 = Account;
// let p2: Account;

// string/number/boolean/null/undefined/symbol/bigint
// let a: number = 1;
// any, void, unknown

// let b: void = undefined;

// function c(): void {

// }

// interface IAccount {
//     firstName: string;
//     age: number;
// }


// let accounts: IAccount[];

// accounts = [{
//     firstName: 'Igor',
//     age: 33,
// }];


// let fn: new () => number;

// fn = function () {
//     return 1;
// };

// let b = new fn();

// let a: (null | IAccount)[];
// let b: [number, string] = [1, 'asd'];


// function average(...args: number[]): string {

//     const result: number = (a + b + c) / 3;
//     return `Average is ${result}`;
// }

// average();
// average('23', 1, 2);
// average(1, 2);
// average(1, 2, 3);
// average(2, 43, 4, 5);

// let avg: number = average(1, 2, 3);


// function handler(event: KeyboardEvent) {
//     const element = event.target as HTMLInputElement;
// }

// TODO double assertion as number as string

interface IX {
    readonly x: number;
}

const xObj: IX = {
    x: 10,
};

xObj.x = 2;

interface IY {
    y: number;
    sum(): number;
}

abstract class SuperPoint {
    public y: number = 10;
    public abstract sum(): number;

    private chartName(): string {
        return 'My Chart';
    }
}


class Point extends SuperPoint {

    public sum(): number {
        return this.y * 10;
    }

}

class CustomPoint extends SuperPoint {

    public sum(): number {
        return this.y * 2;
    }

}

let point = new Point(1, 2, 3);

// class CustomPoint extends Point {
//     public constructor() {
//         super();
//     }
// }

// class Singleton {
//     private static _instance: Singleton;
//     private constructor() {

//     }

//     public static getInstance(): Singleton {
//         if (!Singleton._instance) {
//             Singleton._instance = new Singleton();
//         }
//         return Singleton._instance;
//     }

// }

// let instance = Singleton.getInstance();

// type, class;

function a<T>(_a: T): void {

}

interface IAccount<ID, Info> {
    id: ID;
    info: Info[];
}

let user: IAccount<number, { age: number }>;
let user1: IAccount<string, { email: string }>;