// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...

// Callbacks in sequence
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`
  getInstruction('mashedPotatoes', 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction('mashedPotatoes', 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction('mashedPotatoes', 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction('mashedPotatoes', 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.getElementById('mashedPotatoesImg').removeAttribute('hidden');

          // console.log("You arrived at your destination!");

        }, (err) => console.log(err))
      }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));
}, (err) => console.log(err));


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })

  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })

  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 3);
  })

  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 4);
  })

  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 5);
  })

  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 6);
  })

  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction('steak', 7);
  })

  .then((step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
    document.getElementById('steakImg').removeAttribute('hidden');
  })

  .catch((err) => console.log("Error: ", err));

// Iteration 3 using async/await
// ...

async function makeBrusselsSprouts() {
  try {
    let step0 = await obtainInstruction("brusselsSprouts", 0);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`;
    let step1 = await obtainInstruction("brusselsSprouts", 1);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;
    let step2 = await obtainInstruction("brusselsSprouts", 2);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;
    let step3 = await obtainInstruction("brusselsSprouts", 3);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;
    let step4 = await obtainInstruction("brusselsSprouts", 4);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;
    let step5 = await obtainInstruction("brusselsSprouts", 5);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`;
    let step6 = await obtainInstruction("brusselsSprouts", 6);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`;
    let step7 = await obtainInstruction("brusselsSprouts", 7);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Broccoli are ready!</li>`
  }
  catch (error) {
    console.log("Error");
  }

  document.getElementById('brusselsSproutsImg').removeAttribute('hidden');
}

makeBrusselsSprouts();

async function makeBroccoli() {
  let step0 = obtainInstruction('broccoli', 0);
  let step1 = obtainInstruction('broccoli', 1);
  let step2 = obtainInstruction('broccoli', 2);
  let step3 = obtainInstruction('broccoli', 3);
  let step4 = obtainInstruction('broccoli', 4);
  let step5 = obtainInstruction('broccoli', 5);
  let step6 = obtainInstruction('broccoli', 6);
  let results = await Promise.all([step0, step1, step2, step3, step4, step5, step6]);
  document.querySelector("#broccoli").innerHTML += `
  <li>${results[0]}</li>
  <li>${results[1]}</li>
  <li>${results[2]}</li>
  <li>${results[3]}</li>
  <li>${results[4]}</li>
  <li>${results[5]}</li>
  <li>${results[6]}</li>
  <li>Brussels Sprouts are ready!</li>
  `;

  console.log("results", results);

  document.getElementById('broccoliImg').removeAttribute('hidden');
}

makeBroccoli();