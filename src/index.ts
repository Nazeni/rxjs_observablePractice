import { merge, Observable, of } from "rxjs";
import { map } from "rxjs/operators";


// //1.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const obs = of(...arr);

// const observer = {

//     next: (x:number) => {
//       const id =  setInterval( ()=> {
//             console.log("number", x)
        
//         }, 1000);

//         return ()=> {
//             clearInterval(id);
//         }
//    }
// };

// const subscription = obs.subscribe(observer);
// //subscription.unsubscribe();


// //2.
// let fullName;
// const obs = of({ id: 1, firstName: "Mike", lastName: "Levis"}).pipe(

//     map((x) =>  ({id:x.id, fullName: x.firstName + "" + x.lastName})

//     ));

// const observer = {
//     next:(v: object)=>{
//         console.log("object", v);
        
//     }
// }
// const subscription = obs.subscribe(observer);
// //subscription.unsubscribe;

// 3.
// const obs1 = new Observable((subscriber)=>
//     subscriber.next(42)
// );

// const sub1 = obs1.subscribe((v)=> console.log("obs1", v));

// const obs2 =  new Observable((subscriber)=>
//     subscriber.next("Hello world")
// );

// const sub2 = obs2.subscribe((v)=> console.log("obs2", v));


// const obs3 =  new Observable((subscriber)=>
//     subscriber.next( { name: 'test', age: 20 })
// );

// const sub3 = obs3.subscribe((v)=> console.log("obs3", v));
// const obs4 = merge(obs1, obs2, obs3);

// const sub4 = obs4.subscribe((...v)=> console.log("obs4", v));
// //sub1.unsubscribe
// //sub2.unsubscribe
// //sub3.unsubscribe
// //sub4.unsubscribe

//4.
const obs = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(9);
      }, 3000);
    });

const subscription = obs.subscribe((v)=> console.log(v));
//subscription.unsubscribe();


