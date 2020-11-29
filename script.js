const ul = document.querySelector('.kurssi');	
const kurssinappi = document.querySelector('.kurssinappi');	
const nimisisalto = document. queryselector('#nimi' );	
const asiaSisalto = document.querySelector('#tieto');	
const virhe = document. querySelector('.virheilmoitus ');	
const viesti = document.querySelector ( '#tiedot');

kurssinappi.addEventListener( 'click', e =>{	
e.preventDefault ();	
if (nimisisalto. value === '' || asiaSisalto.value === ''){	
virhe.classList. add('virhe');	
virhe.innerHTML = 'Taytä kaikki kentät';	
kurssinappi.style. background 'red	
kurssinappi.value= 'Virhe! En lisännyt tietoa. ';	
setTimeout (() => virhe.classList. remove( 'virhe'), 3000);	
setTimeout (() => virhe.innerHTML= ", 3000);	
setTimeout (() => kurssinapppi. style.background = 'rgb (51, 44, 44)	
setTimeout (() => kurssinappi.value = 'Lisää tieto', 3000) ;	
}else	{
const 1i = document.createElemernt('li')	
li.appendchild (document.createTextNode( ${nimisisalto. value): $	
{asiasisalto. value}' ));	
viesti.appendChild (1i);	
nimiSisalto. value ='';	
asiaSisalto.value ="";	
}
});

const merkitseValmiit = document.queryselector( '.merkinta' );


merkitseValmiit. addEventlistener('click', e => {	
.e-preventDefault();

if(document.querySelector('#tehta').checked){	
ul.children [0]. innerHTML = '<input type= "checkbox" id="tehta" ch tunnit pidetty';	
}else{
	ul.children[0].innerHTML ='<input type= "checkbox" id="tehta" >HT
}
if(document.querySelector('#tehtb') .checked){	
ul.children[1].innerHTML = '<input type="checkbox" id="tehtb" ch	tunnit pidetty ';	

}else{	
ul.children[1]. innerHTML = '<input type="checkbox" id="tehtb" >CS
}	
if(document.querySelector( '#tehtc ').checked){	
ul.children[2]. innerHTML = ' <input type="checkbox" id="tehtc"	checked>JavaScript tunnit pidetty';
}else{
ul.children [2]. innerHTML = '<input type="checkbox" id="tehtc"> Ja	
}
if(document.querySelector ( '#tehtd').checked) {	
ul.children[3].innerHTML = '<input type="checkbox" id="tehtd"	checked>Cl/CD tunnit pidetty';	
}else{	
ul.children [3].innerHTML = '<input type="checkbox" id="tehtd" >CI	
}
}):