// function show() {
//   document.querySelector(".products__inner__single:nth-of-type(1) .products__inner__single__slider").style.visibility =
//     "visible";
// }
// function hide() {
//   document.querySelector(".products__inner__single:nth-of-type(1) .products__inner__single__slider").style.visibility =
//     "hidden";
// }

// slide or r1c1
let counter11 = 0;

let slides11 = document.querySelectorAll(
    `.products__inner__single[data-code="r1c1"] .active .products__inner__single__img`
);

slides11.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slide11Next = () => {
  if (counter11 == slides11.length-1) {
    counter11 = counter11;
  } else {
    counter11++;
    slide11Image();
  }
};
const slide11Prev = () => {
  if (counter11 == 0) {
    counter11 = counter11;
  } else {
    counter11--;
    slide11Image();
  }
};

const slide11Image = () => {
  slides11.forEach((slide) => {
    slide.style.transform = `translateX(-${counter11 * 100}%)`;
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


    counter11 = 0;
    slides11 = document.querySelectorAll(
        `.products__inner__single[data-code="r1c1"] .active .products__inner__single__img`
      );    

    slides11.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
      });
});



// slide or r1c2
let counter12 = 0;

let slides12 = document.querySelectorAll(
    `.products__inner__single[data-code="r1c2"] .active .products__inner__single__img`
);

slides12.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

  const slide12Next = () => {
    if (counter12 == slides12.length-1) {
      counter12 = counter12;
    } else {
      counter12++;
      slide12Image();
    }
  };
  const slide12Prev = () => {
    if (counter12 == 0) {
      counter12 = counter12;
    } else {
      counter12--;
      slide12Image();
    }
  };
  
  const slide12Image = () => {
    slides12.forEach((slide) => {
      slide.style.transform = `translateX(-${counter12 * 100}%)`;
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

    counter12 = 0;
    slides12 = document.querySelectorAll(
        `.products__inner__single[data-code="r1c2"] .active .products__inner__single__img`
      );    

    slides12.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
      });
});



// slide or r1c3
let counter13 = 0;

let slides13 = document.querySelectorAll(
  `.products__inner__single[data-code="r1c3"] .active .products__inner__single__img`
);

slides13.forEach((slide, index) => {
slide.style.left = `${index * 100}%`;
});

const slide13Next = () => {
  if (counter13 == slides13.length-1) {
    counter13 = counter13;
  } else {
    counter13++;
    slide13Image();
  }
};
const slide13Prev = () => {
  if (counter13 == 0) {
    counter13 = counter13;
  } else {
    counter13--;
    slide13Image();
  }
};

const slide13Image = () => {
  slides13.forEach((slide) => {
    slide.style.transform = `translateX(-${counter13 * 100}%)`;
  });
};

//changeing product of r1c3
let clkBtn3 = document.getElementById('r1c3');

clkBtn3.addEventListener('click', function (e) {
  let trgt = e.target.getAttribute('data-code');
  let allBtn = document.querySelectorAll('#r1c3 i');

  allBtn.forEach(btn => {
      if(btn.classList.contains('active')) btn.classList.remove('active');
  });
  document.querySelector(`.buttons i[data-code="${trgt}"]`).classList.add('active');

  let allBags = document.querySelectorAll('.products__inner__single[data-code="r1c3"] .bags');
  allBags.forEach(bag => {
      if(bag.classList.contains('active')) bag.classList.remove('active');
  });
  document.querySelector(`.products__inner__single[data-code="r1c3"] .bags[data-code="${trgt}"]`).classList.add('active');

  counter13 = 0;
  slides13 = document.querySelectorAll(
      `.products__inner__single[data-code="r1c3"] .active .products__inner__single__img`
    );    

  slides13.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });
});


// r1c4
let counter14 = 0;

let slides14 = document.querySelectorAll(
  `.products__inner__single[data-code="r1c4"] .active .products__inner__single__img`
);

slides14.forEach((slide, index) => {
slide.style.left = `${index * 100}%`;
});

const slide14Next = () => {
  if (counter14 == slides14.length-1) {
    counter14 = counter14;
  } else {
    counter14++;
    slide14Image();
  }
};
const slide14Prev = () => {
  if (counter14 == 0) {
    counter14 = counter14;
  } else {
    counter14--;
    slide14Image();
  }
};

const slide14Image = () => {
  slides14.forEach((slide) => {
    slide.style.transform = `translateX(-${counter14 * 100}%)`;
  });
};

//changeing product of r1c4
let clkBtn4 = document.getElementById('r1c4');

clkBtn4.addEventListener('click', function (e) {
  let trgt = e.target.getAttribute('data-code');
  let allBtn = document.querySelectorAll('#r1c4 i');

  allBtn.forEach(btn => {
      if(btn.classList.contains('active')) btn.classList.remove('active');
  });
  document.querySelector(`.buttons i[data-code="${trgt}"]`).classList.add('active');

  let allBags = document.querySelectorAll('.products__inner__single[data-code="r1c4"] .bags');
  allBags.forEach(bag => {
      if(bag.classList.contains('active')) bag.classList.remove('active');
  });
  document.querySelector(`.products__inner__single[data-code="r1c4"] .bags[data-code="${trgt}"]`).classList.add('active');

  counter14 = 0;
  slides14 = document.querySelectorAll(
      `.products__inner__single[data-code="r1c4"] .active .products__inner__single__img`
    );    

  slides14.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });
});



// r2c1
let counter21 = 0;

let slides21 = document.querySelectorAll(
  `.products__inner__single[data-code="r2c1"] .active .products__inner__single__img`
);

slides21.forEach((slide, index) => {
slide.style.left = `${index * 100}%`;
});

const slide21Next = () => {
  if (counter21 == slides21.length-1) {
    counter21 = counter21;
  } else {
    counter21++;
    slide21Image();
  }
};
const slide21Prev = () => {
  if (counter21 == 0) {
    counter21 = counter21;
  } else {
    counter21--;
    slide21Image();
  }
};

const slide21Image = () => {
  slides21.forEach((slide) => {
    slide.style.transform = `translateX(-${counter21 * 100}%)`;
  });
};

// r2c2
let counter22 = 0;

let slides22 = document.querySelectorAll(
  `.products__inner__single[data-code="r2c2"] .active .products__inner__single__img`
);

slides22.forEach((slide, index) => {
slide.style.left = `${index * 100}%`;
});

const slide22Next = () => {
  if (counter22 == slides22.length-1) {
    counter22 = counter22;
  } else {
    counter22++;
    slide22Image();
  }
};
const slide22Prev = () => {
  if (counter22 == 0) {
    counter22 = counter22;
  } else {
    counter22--;
    slide22Image();
  }
};

const slide22Image = () => {
  slides22.forEach((slide) => {
    slide.style.transform = `translateX(-${counter22 * 100}%)`;
  });
};




// r2c3
let counter23 = 0;

let slides23 = document.querySelectorAll(
  `.products__inner__single[data-code="r2c3"] .active .products__inner__single__img`
);

slides23.forEach((slide, index) => {
slide.style.left = `${index * 100}%`;
});

const slide23Next = () => {
  if (counter23 == slides23.length-1) {
    counter23 = counter23;
  } else {
    counter23++;
    slide23Image();
  }
};
const slide23Prev = () => {
  if (counter23 == 0) {
    counter23 = counter23;
  } else {
    counter23--;
    slide23Image();
  }
};

const slide23Image = () => {
  slides23.forEach((slide) => {
    slide.style.transform = `translateX(-${counter23 * 100}%)`;
  });
};



r3c1
let counter31 = 0;

let slides31 = document.querySelectorAll(
  `.products__inner__single[data-code="r3c1"] .active .products__inner__single__img`
);

slides31.forEach((slide, index) => {
slide.style.left = `${index * 100}%`;
});

const slide31Next = () => {
  if (counter31 == slides31.length-1) {
    counter31 = counter31;
  } else {
    counter31++;
    slide31Image();
  }
};
const slide31Prev = () => {
  if (counter31 == 0) {
    counter31 = counter31;
  } else {
    counter31--;
    slide31Image();
  }
};

const slide31Image = () => {
  slides31.forEach((slide) => {
    slide.style.transform = `translateX(-${counter31 * 100}%)`;
  });
};




// r3c2
let counter32 = 0;

let slides32 = document.querySelectorAll(
  `.products__inner__single[data-code="r3c2"] .active .products__inner__single__img`
);

slides32.forEach((slide, index) => {
slide.style.left = `${index * 100}%`;
});

const slide32Next = () => {
  if (counter32 == slides32.length-1) {
    counter32 = counter32;
  } else {
    counter32++;
    slide32Image();
  }
};
const slide32Prev = () => {
  if (counter32 == 0) {
    counter32 = counter32;
  } else {
    counter32--;
    slide32Image();
  }
};

const slide32Image = () => {
  slides32.forEach((slide) => {
    slide.style.transform = `translateX(-${counter32 * 100}%)`;
  });
};





// r3c3
let counter33 = 0;

let slides33 = document.querySelectorAll(
  `.products__inner__single[data-code="r3c3"] .active .products__inner__single__img`
);

slides33.forEach((slide, index) => {
slide.style.left = `${index * 100}%`;
});

const slide33Next = () => {
  if (counter33 == slides33.length-1) {
    counter33 = counter33;
  } else {
    counter33++;
    slide33Image();
  }
};
const slide33Prev = () => {
  if (counter33 == 0) {
    counter33 = counter33;
  } else {
    counter33--;
    slide33Image();
  }
};

const slide33Image = () => {
  slides33.forEach((slide) => {
    slide.style.transform = `translateX(-${counter33 * 100}%)`;
  });
};





// r3c4
let counter34 = 0;

let slides34 = document.querySelectorAll(
  `.products__inner__single[data-code="r3c4"] .active .products__inner__single__img`
);

slides34.forEach((slide, index) => {
slide.style.left = `${index * 100}%`;
});

const slide34Next = () => {
  if (counter34 == slides34.length-1) {
    counter34 = counter34;
  } else {
    counter34++;
    slide34Image();
  }
};
const slide34Prev = () => {
  if (counter34 == 0) {
    counter34 = counter34;
  } else {
    counter34--;
    slide34Image();
  }
};

const slide34Image = () => {
  slides34.forEach((slide) => {
    slide.style.transform = `translateX(-${counter34 * 100}%)`;
  });
};





// r4c1
let counter41 = 0;

let slides41 = document.querySelectorAll(
  `.products__inner__single[data-code="r4c1"] .active .products__inner__single__img`
);

slides41.forEach((slide, index) => {
slide.style.left = `${index * 100}%`;
});

const slide41Next = () => {
  if (counter41 == slides41.length-1) {
    counter41 = counter41;
  } else {
    counter41++;
    slide41Image();
  }
};
const slide41Prev = () => {
  if (counter41 == 0) {
    counter41 = counter41;
  } else {
    counter41--;
    slide41Image();
  }
};

const slide41Image = () => {
  slides41.forEach((slide) => {
    slide.style.transform = `translateX(-${counter41 * 100}%)`;
  });
};





// r4c2
let counter42 = 0;

let slides42 = document.querySelectorAll(
  `.products__inner__single[data-code="r4c2"] .active .products__inner__single__img`
);

slides42.forEach((slide, index) => {
slide.style.left = `${index * 100}%`;
});

const slide42Next = () => {
  if (counter42 == slides42.length-1) {
    counter42 = counter42;
  } else {
    counter42++;
    slide42Image();
  }
};
const slide42Prev = () => {
  if (counter42 == 0) {
    counter42 = counter42;
  } else {
    counter42--;
    slide42Image();
  }
};

const slide42Image = () => {
  slides42.forEach((slide) => {
    slide.style.transform = `translateX(-${counter42 * 100}%)`;
  });
};



// menu toggle

// main menu toggle

let menuBtn = document.querySelector('.header__inner__item__left ul li:first-child');
console.log(menuBtn);
let menuClose = document.querySelector('.menu .close');

menuBtn.addEventListener('click', function(){
  let menu = document.querySelector('.menu');
  menu.classList.add('active');
});
menuClose.addEventListener('click', function(){
  let menu = document.querySelector('.menu');
  menu.classList.remove('active');
});

// search box add
let searchBtn = document.querySelector('.header__inner__item__left ul li:last-child');
let searchClose = document.querySelector('.search_inner__top .close');

searchBtn.addEventListener('click', function(){
  let searchBox = document.querySelector('.search_page');
  searchBox.classList.add('active');
});

searchClose.addEventListener('click', function(){
  let searchBox = document.querySelector('.search_page');
  searchBox.classList.remove('active');
});

// lv box add
let lvBtn = document.querySelector('.header__inner__item__right ul li:last-child');
let lvClose = document.querySelector('.lv_inner .filter_menu__top__right');

lvBtn.addEventListener('click', function(){
  let searchBox = document.querySelector('.lv');
  searchBox.classList.add('active');
});

lvClose.addEventListener('click', function(){
  let searchBox = document.querySelector('.lv');
  searchBox.classList.remove('active');
});


// filter menu add
let filterBtn = document.querySelector('.filter');
let filterClose = document.querySelector('.filter_menu_inner .filter_menu__top__right');

filterBtn.addEventListener('click', function(){
  let searchBox = document.querySelector('.filter_menu');
  searchBox.classList.add('active');
});

filterClose.addEventListener('click', function(){
  let searchBox = document.querySelector('.filter_menu');
  searchBox.classList.remove('active');
});
