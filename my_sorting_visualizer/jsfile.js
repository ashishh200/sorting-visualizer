const sort = document.querySelector('.sort');
const random = document.querySelector('.new_array');
const bar_container = document.querySelector('.bar_container');
const input = document.querySelector('input');
const algo=document.querySelector('.algo')
const min = 1;
const max = 20;
const noOfBar = 20;
const array = new Array(noOfBar);

let speedy=input.value;
document.addEventListener('DOMContentLoaded', () => {
  randomArray();
  // console.log(array);
  renderBar(array);
});


document.querySelector('input').addEventListener('change', () => {
  // Get the input element
  

  // Parse the input value to an integer
  const inputValue = parseInt(input.value);

  // Calculate speedy value based on the input value
  speedy = 600 - inputValue;

  console.log(speedy);
});


function randomdigit() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomArray() {
  for (let i = 0; i < noOfBar; i++) {
    array[i] = randomdigit() * 10;
  }
}

random.addEventListener('click', () => {
  bar_container.innerHTML = "";
  randomArray();
  console.log(array);
  
  renderBar(array);
});

function renderBar(arrays) {
  arrays.forEach((element) => {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = element + "px";
    bar_container.appendChild(bar);
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubblesort(array) {
  console.log(speedy)
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j + 1] < array[j]) {
        for (let k = 0; k < bars.length; k++) {
          if (k !== j && k !== j + 1) {
            bars[k].style.backgroundColor = "bisque";
          }
        }
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        bars[j].style.height = array[j] + "px";
        bars[j].style.backgroundColor = "lightgreen";
        // bars[j].innerHTML = array[j];
        bars[j + 1].style.height = array[j + 1] + "px";
        bars[j + 1].style.backgroundColor = "lightgreen";
        // bars[j + 1].innerHTML = array[j + 1];
        await sleep(speedy);
      }
    }
    await sleep(speedy);
  }
  for (let k = 0; k < bars.length; k++) {
    
      bars[k].style.backgroundColor = "bisque";
    
  }
  return array;
}

 async function selectionSort(array){
  const bars = document.getElementsByClassName("bar");

  for(let i=0;i<array.length-1;i++){
    let min=i;
    for(let j=i+1;j<array.length;j++){
      if(array[min]>array[j]){
        min=j;
      }
    }
    
    let temp=array[min];
    array[min]=array[i]
    array[i]=temp;

    for (let k = 0; k < bars.length; k++) {
      if (k !== i && k !== min) {
        bars[k].style.backgroundColor = "bisque";
      }
    }

    bars[i].style.height = array[i] + "px";
    bars[i].style.backgroundColor = "lightgreen";
    // bars[i].innerHTML = array[i];
    bars[min].style.height = array[min] + "px";
    bars[min].style.backgroundColor = "lightgreen";
    // bars[min].innerHTML = array[min];
    await sleep(speedy)
  }
  await sleep(speedy)
  for (let k = 0; k < bars.length; k++) {
    
    bars[k].style.backgroundColor = "bisque";
  
}
   return array
}

async function insertionSort(array){
  const bars=document.querySelectorAll(".bar")

     for(let i=0;i<array.length;i++){
       for(let j=i;j>0;j--){
        
          if(array[j]<array[j-1]){
            let temp=array[j];
            array[j]=array[j-1];
            array[j-1]=temp;
            for (let k = 0; k < bars.length; k++) {
              if (k !== j && k !== j - 1) {
                bars[k].style.backgroundColor = "bisque";
              }
            }
            bars[j].style.height=array[j]+"px"
            bars[j].style.backgroundColor="lightgreen"
            bars[j-1].style.height=array[j-1]+"px"
            bars[j-1].style.backgroundColor="lightgreen"
            await sleep(speedy);

        }
       }
       await sleep(speedy);

     }
     return array;
}

sort.addEventListener("click", async () => {
  const algoToUse=algo.value;
  console.log(algoToUse)
  if(algoToUse==="bubblesort"){
    let sortedarray = await bubblesort(array);

  }
  else if(algoToUse==="selectionSort"){
      const sorted=await selectionSort(array)

  }
  else if(algoToUse==="insertionSort"){
      const sorted=await insertionSort(array)

  }
  // console.log(algo)
  // const sorted=selectionSort(array)
  // console.log(sorted);
});


