document.getElementById('y')&&(document.getElementById('y').textContent=new Date().getFullYear());
document.addEventListener('click',function(e){var t=e.target;if(t&&t.tagName==='A'&&t.getAttribute('href')==='#'){e.preventDefault()}});
