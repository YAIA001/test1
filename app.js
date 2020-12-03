/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/* acknowledging variables: myDocument, mySections and uList */


//creates a Documentfragment to help preformance, 
// used instead of creating a useless <nav> 
const myDocument = document.createDocumentFragment()

//selects all <section> in HTML using the querySelector 
const mySections = document.querySelectorAll('section')

//selects every the nav bar list (every element with 'navbar__list' id)
const uList = document.getElementById('navbar__list')

//loops around all sections to create a link, list, eventListener 
//and other functions listed inside
mySections.forEach( section => {
    const  myList = document.createElement('li')
    myList.addEventListener('click', function () {
        section.scrollIntoView({'behavior':'smooth'})
        })

    const  myLink = document.createElement('a')

    //recalls the value of data-nav(each section name)
    //to be added as a text content in the list
    const sectionName =section.getAttribute('data-nav');
    const textNode = document.createTextNode(sectionName)

    // attaches text inside the link,
    // link inside the list,
    // list in the document fragment,
    myLink.appendChild(textNode)
    myList.appendChild(myLink)
    myDocument.appendChild(myList)    
})

//appends the document fragment to the <ul> to be implemented on nav bar
uList.appendChild(myDocument)

//selects all links in the nav bar
myLinks = document.querySelectorAll('nav a')

// making sure that there is no active class
mySections.forEach(section => {section.classList.remove('your-active-class')})
  
// applies active class to section 1 as default
mySections[0].classList.add('your-active-class')

// to make active section and link clear
window.onscroll = function() {mySections.forEach(section =>
    { const myBorders = section.getBoundingClientRect()

// will be recognized an active section when both top and bttm borders are in  window        
    if (myBorders.top >= 0 && myBorders.top <= 150)
    {section.classList.add('your-active-class')}

    else {section.classList.remove('your-active-class')}

//finds the active section to create an active link on navbar    
    if ( section.classList.contains('your-active-class')) 
    {
      console.log(section)   //for test use only
      myLinks.forEach (link => {

         if(link.textContent == section.getAttribute('data-nav'))
         {  link.classList.add('your-active-class')}
         
         else{ link.classList.remove('your-active-class')}})}})}

    