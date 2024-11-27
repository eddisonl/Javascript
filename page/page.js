const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

// localStorage.getItem('link', 'link')|| {
//     tab2:setAttribute("hidden", true),
//     tab1 :setAttribute("hidden",true),
//     tab3:setAttribute("hidden", true),
//     tab4:setAttribute("hidden", true)
//   };

// let link = JSON.parse(localStorage.getItem('link'))|| {
//     tab2:setAttribute("hidden", true),
//     tab1 :setAttribute("hidden",true),
//     tab3:setAttribute("hidden", true),
//     tab4:setAttribute("hidden", true)
// };

tab2.setAttribute("hidden", true);
tab1.setAttribute("hidden",true);
tab3.setAttribute("hidden", true);
tab4.setAttribute("hidden", true);

link1.addEventListener("click", () => {
  tab2.setAttribute("hidden", true);
  tab3.setAttribute("hidden", true);
  tab4.setAttribute("hidden", true);
  tab1.removeAttribute("hidden");
});

link2.addEventListener("click", () => {
  tab1.setAttribute("hidden", true);
  tab3.setAttribute("hidden", true);
  tab4.setAttribute("hidden", true);
  tab2.removeAttribute("hidden");
});

link3.addEventListener("click", () => {
  tab1.setAttribute("hidden", true);
  tab2.setAttribute("hidden", true);
  tab4.setAttribute("hidden", true);
  tab3.removeAttribute("hidden");
});

link4.addEventListener("click", () => {
    tab1.setAttribute("hidden", true);
    tab2.setAttribute("hidden", true);
    tab3.setAttribute("hidden", true);
    tab4.removeAttribute("hidden");
});

localStorage.setItem('score' , JSON.stringify(link));

