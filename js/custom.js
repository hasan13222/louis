// function show() {
//   document.querySelector(".products__inner__single:nth-of-type(1) .products__inner__single__slider").style.visibility =
//     "visible";
// }
// function hide() {
//   document.querySelector(".products__inner__single:nth-of-type(1) .products__inner__single__slider").style.visibility =
//     "hidden";
// }

let counter = 0;
// slide or r1c1

let slides11 = document.querySelectorAll(
    `.products__inner__single[data-code="r1c1"] .active .products__inner__single__img`
);

slides11.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slide11Next = () => {
  if (counter == slides11.length-1) {
    counter = counter;
  } else {
    counter++;
    slide11Image();
  }
};
const slide11Prev = () => {
  if (counter == 0) {
    counter = counter;
  } else {
    counter--;
    slide11Image();
  }
};

const slide11Image = () => {
  slides11.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};


//changeing product of r1c1
let clkBtn = document.getElementById('r1c1');

clkBtn.addEventListener('click', function (e) {
    let trgt = e.target.getAttribute('data-code');
    let allBtn = document.querySelectorAll('#r1c1 i');

    allBtn.forEach(btn => {
        if(btn.classList.contains('active')) btn.classList.remove('active');
    });
    document.querySelector(`.buttons i[data-code="${trgt}"]`).classList.add('active');

    let allBags = document.querySelectorAll('.products__inner__single[data-code="r1c1"] .bags');
    allBags.forEach(bag => {
        if(bag.classList.contains('active')) bag.classList.remove('active');
    });
    document.querySelector(`.products__inner__single[data-code="r1c1"] .bags[data-code="${trgt}"]`).classList.add('active');

    index11 = 0;
    counter = 0;
    slides11 = document.querySelectorAll(
        `.products__inner__single[data-code="r1c1"] .active .products__inner__single__img`
      );    

    slides11.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
      });
});


// slide or r1c2

let slides12 = document.querySelectorAll(
    `.products__inner__single[data-code="r1c2"] .active .products__inner__single__img`
);

slides12.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

  const slide12Next = () => {
    if (counter == slides12.length-1) {
      counter = counter;
    } else {
      counter++;
      slide12Image();
    }
  };
  const slide12Prev = () => {
    if (counter == 0) {
      counter = counter;
    } else {
      counter--;
      slide12Image();
    }
  };
  
  const slide12Image = () => {
    slides12.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };
  
//changeing product of r1c2
let clkBtn2 = document.getElementById('r1c2');

clkBtn2.addEventListener('click', function (e) {
    let trgt = e.target.getAttribute('data-code');
    let allBtn = document.querySelectorAll('#r1c2 i');

    allBtn.forEach(btn => {
        if(btn.classList.contains('active')) btn.classList.remove('active');
    });
    document.querySelector(`.buttons i[data-code="${trgt}"]`).classList.add('active');

    let allBags = document.querySelectorAll('.products__inner__single[data-code="r1c2"] .bags');
    allBags.forEach(bag => {
        if(bag.classList.contains('active')) bag.classList.remove('active');
    });
    document.querySelector(`.products__inner__single[data-code="r1c2"] .bags[data-code="${trgt}"]`).classList.add('active');

    counter = 0;
    slides12 = document.querySelectorAll(
        `.products__inner__single[data-code="r1c2"] .active .products__inner__single__img`
      );    

    slides12.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
      });
});

