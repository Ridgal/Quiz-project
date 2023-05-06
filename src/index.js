import './index.html';
import './index.scss';
import "@babel/polyfill";

const steps = document.querySelectorAll('.step_one_radio');

steps.forEach(item => {
  item.addEventListener('click', function () {
    steps.forEach(elem => elem.classList.remove('active'));
    this.classList.add('active');
  });
});

// const select = document.querySelector('.select');
// const optionAll = document.querySelectorAll('option');
// const selectMark = document.querySelector('.select__mark');

// const selectCutsom = document.querySelector('.select_custom');
// const optionCutsomAll = document.querySelectorAll('.select_custom__option');
// const selectCutsomChoice = document.querySelector('.select_custom__choice');

// select.addEventListener('click', ()=> {
//   selectCutsom.classList.toggle('select_custom-active')
//   selectCutsom.classList.toggle('select_custom-none_active')
//   selectMark.classList.toggle('select__mark-none_active')
//   selectMark.classList.toggle('select__mark-active')
// })


// optionAll.forEach((item, index)=> {
//   console.log('before', index)
//   if (index < optionCutsomAll.length && index >= 0) {

//     optionCutsomAll[index].addEventListener('click', ()=> {
//       OptionBlock()
//       selectCutsom.classList.remove('select_custom-active')
//       selectCutsom.classList.add('select_custom-none_active')
//       optionCutsomAll[index].style.display = 'none'
//       optionAll[index].selected = true
//       selectCutsomChoice.textContent = optionAll[index].textContent
//     })

//   }
// })

// function OptionBlock() {
//   optionCutsomAll.forEach((item, index)=> {
//     optionCutsomAll[index].style.display = 'flex'
//   })
// }