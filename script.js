const personImage = document.getElementById("person-img");
const personJob = document.getElementById("job");
const personReview = document.getElementById("person-review");
const personName = document.getElementById("name");

const nextBtn = document.getElementById("next-button");
const prevBtn = document.getElementById("prev-button");
const randomBtn = document.getElementById("random-button");

const people = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: 'Anna Johnson',
        job: 'Web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
      },
      {
        id: 3,
        name: 'Peter Jones',
        job: 'Intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
      },
      {
        id: 4,
        name: 'Bill Anderson',
        job: 'CEO',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
      }
]

const showPerson = (item) =>{
    const person = people[item];
    personImage.src = person.img;
    personName.textContent = person.name;
    personJob.textContent = person.job;
    personReview.textContent = person.text;
}

let current = 0;

window.addEventListener("DOMContentLoaded",showPerson(0));


nextBtn.addEventListener("click", ()=>{
    current++;
    if(current > people.length - 1){
        current = 0;
    }
    showPerson(current);
});


prevBtn.addEventListener("click",()=>{
    current--;
    if(current < 0){
        current = people.length - 1;

    }
    showPerson(current);
})

randomBtn.addEventListener("click", ()=>{
    current = Math.floor(Math.random()*4);
    console.log(current)
    showPerson(current);
})