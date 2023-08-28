var tour = new Tour({
    storage: false
});

tour.addsteps([
        {
           element: "#liveclass" ,
           title : "Live class",
           content: "welcome to live class"
        }
        ,{
            element:"#flexiable",
            title:"flexiable",
            content:"There many flexiable time"
        },{
            element:"#support",
            title:"support team",
            content:"24 * 7 support"
        }
])


document.querySelector("#tour").addEventListener("click",()=>{
    tour.init();
    tour.start();
    
})




