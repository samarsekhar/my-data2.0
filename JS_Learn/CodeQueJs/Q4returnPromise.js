// Write a program return resovle if value is less than 5 using Promise

function func(a) {
  let myPromise = new Promise((myResolve, myReject) => {
    let x = 0;
    // The producing code(this may take some time)
    if (a < 7) {
      myResolve(`number is given ${a}`);
    } else {
      myReject("Error");
    }
  });

  myPromise.then((result) => {
    console.log(result);
  });
}
func(5);
// number is given 5
