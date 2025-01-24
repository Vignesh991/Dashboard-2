// dark mode//
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


 // counter //
 var a = 0;
 $(window).scroll(function () {
 var oTop = $('#counter').offset().top - window.innerHeight;
 if (a == 0 && $(window).scrollTop() > oTop) {
     $('.counter').each(function () {
     var $this = $(this);
     jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
         duration: 4000,
         easing: 'swing',
         step: function () {
         $this.text(Math.ceil(this.Counter));
         }
     });
     });
     a = 1;
 }
 });

 //charts//
 const ctx = document.getElementById('myChart');
 new Chart(ctx, {
   type: 'polarArea',
   data: {
     labels: ['Order', 'Page Visit', 'Revenue'],
     datasets: [{
       label: 'This Month Lists',
       data: [2020, 2834, 2543],
       backgroundColor :[
       'rgba(245, 209, 39, 0.8)',
       'rgba(245, 39, 187, 0.8)',
       'rgba(245, 39, 50, 0.8)'
       ]
     }]
   },
   options: {
    responsive : true,
   }
 });

 const earning = document.getElementById('earning');
 new Chart(earning, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June'],
      datasets: [{
        label: 'Six Month Of Sales',
        data: [5000,1200 , 3000,2200,3220,4000 ],
        backgroundColor :[
            'rgba(165, 243, 132, 1)',
            'rgba(245, 209, 39, 1)',
            'rgba(245, 39, 50, 0.8)',
            'rgba(255, 138, 9, 1)',
            'rgba(13, 72, 176, 0.66)',
            'rgba(10, 1, 1, 1)'
            ],
        borderWidth: 1
      }]
    },
    options: {
        responsive : true,
       }
  });