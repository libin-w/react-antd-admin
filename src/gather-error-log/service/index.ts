/*
 * @Author: WangLibin
 * @Date: 2021-02-07 10:48:45
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-07 15:43:20
 * @Description:
 */
import DB from './ErrorLogDatabase';
export function add() {
  DB.transaction('rw', DB.ajaxLog, async () => {
    // Make sure we have something in DB:
    // if ((await DB.ajaxLog.where({ name: 'Josephine' }).count()) !== 0) {
    //   const id = await DB.ajaxLog.add({ name: 'Josephine', age: 221 });
    //   //   alert(`Addded friend with id ${id}`);
    // }
    const id1 = await DB.ajaxLog.add({ name: 'Josephine', age: 221 });

    // Query:
    // const youngFriends = await DB.friends.where('age').below(25).toArray();

    // Show result:
    // alert('My young friends: ' + JSON.stringify(youngFriends));
  }).catch((e) => {
    console.log(e.stack || e);
  });
  DB.transaction('rw', DB.lazyComponentLog, async () => {
    const id = await DB.lazyComponentLog.add({ name: new Date(), age: 221 });
  }).catch((e) => {
    console.log(e.stack || e);
  });
}
export function deleteData() {
  //   DB.transaction('rw', DB.friends, async () => {
  //     // Make sure we have something in DB:
  //     if ((await DB.friends.where({ name: 'Josephine' }).count()) === 0) {
  //       const id = await DB.friends.add({ name: 'Josephine', age: 21 });
  //       alert(`Addded friend with id ${id}`);
  //     }
  //     // Query:
  //     const youngFriends = await DB.friends.where('age').below(25).toArray();
  //     // Show result:
  //     alert('My young friends: ' + JSON.stringify(youngFriends));
  //   }).catch((e) => {
  //     alert(e.stack || e);
  //   });
}
