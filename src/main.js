// MENÚ DE NAVEGACIÓN
const inicial = document.getElementById('pagina-inicio');
const per = document.getElementById('pagina-peru');
const mex = document.getElementById('pagina-mexico');
const chl = document.getElementById('pagina-chile');
const brsl = document.getElementById('pagina-brasil');

const inicialb = document.getElementById('inicio');
const perub = document.getElementById('peru-menu');
const mexb = document.getElementById('mexico-menu');
const chlb = document.getElementById('chile-menu');
const brslb = document.getElementById('brasil-menu');

// PANTALLA INICIO
inicialb.addEventListener('click', () => {
  inicial.style.display = 'block';
  per.style.display = 'none';
  mex.style.display = 'none';
  chl. style.display = 'none';
  brsl.style.display = 'none';
});
// PANTALLA PERÚ
perub.addEventListener('click', () => {
  inicial.style.display = 'none';
  per.style.display = 'block';
  mex.style.display = 'none';
  chl. style.display = 'none';
  brsl.style.display = 'none';
});
// PANTALLA MÉXICO
mexb.addEventListener('click', () => {
  inicial.style.display = 'none';
  per.style.display = 'none';
  mex.style.display = 'block';
  chl. style.display = 'none';
  brsl.style.display = 'none';
});
// PANTALLA CHILE
chlb.addEventListener('click', () => {
  inicial.style.display = 'none';
  per.style.display = 'none';
  mex.style.display = 'none';
  chl. style.display = 'block';
  brsl.style.display = 'none';
});
// PANTALLA BRASIL
brslb.addEventListener('click', () => {
  inicial.style.display = 'none';
  per.style.display = 'none';
  mex.style.display = 'none';
  chl. style.display = 'none';
  brsl.style.display = 'block';
});

// se da click en el boton de la pantalla inicio para cuando empiece el proyecto
inicialb.click();

// ------------------------- PERÚ ----------------------------------- //

// BOTONES PERÚ

const btnPopulation = document.getElementById('boton-population');
const btnViolence = document.getElementById('boton-violence');
const btnEducation = document.getElementById('boton-education');
const btnUnemployment = document.getElementById('boton-unemployment');
const btnAlfabet = document.getElementById('boton-alfabetizacion');

// divs PERÚ
const peruPop = document.getElementById('table-peruPop');
const peruVio = document.getElementById('table-peruVio');
const peruEdu = document.getElementById('table-peruEdu');
const peruUnem = document.getElementById('table-peruUnem');
const peruAlf = document.getElementById('table-peruAlf');

// MOSTRAR DATA FILTRADA EN LOS DIVS DEL HTML

btnPopulation.addEventListener('click', () => {
  peruPop.innerHTML = '';
  for (indicador of filterPopPer) {
    peruPop.innerHTML += indicador.indicatorName + '<br>';
    peruVio.style.display = 'none';
    peruEdu.style.display = 'none';
    peruUnem.style.display = 'none';
    peruAlf.style.display = 'none';
    peruPop.style.display = 'block';
  }

});

btnViolence.addEventListener('click', () => {
  peruVio.innerHTML = '';
  for (indicador of filterViolencePer) {
    peruVio.innerHTML += indicador.indicatorName + '<br>';
    peruPop.style.display = 'none';
    peruEdu.style.display = 'none';
    peruUnem.style.display = 'none';
    peruAlf.style.display = 'none';
    peruVio.style.display = 'block';
  }
});

btnEducation.addEventListener('click', () => {
  peruEdu.innerHTML = '';
  for (indicador of filterEduPer) {
    peruEdu.innerHTML += indicador.indicatorName + '<br>';
    peruVio.style.display = 'none';
    peruPop.style.display = 'none';
    peruUnem.style.display = 'none';
    peruAlf.style.display = 'none';
    peruEdu.style.display = 'block';
  }
});

btnUnemployment.addEventListener('click', () => {
  peruUnem.innerHTML = '';
  for (indicador of filterUnemploymentPer) {
    peruUnem.innerHTML += indicador.indicatorName + '<br>';
    peruVio.style.display = 'none';
    peruEdu.style.display = 'none';
    peruPop.style.display = 'none';
    peruAlf.style.display = 'none';
    peruUnem.style.display = 'block';
  }
});

btnAlfabet.addEventListener('click', () => {
  peruAlf.innerHTML = '';
  for (indicador of filterLiteracyPer) {
    peruAlf.innerHTML += indicador.indicatorName + '<br>';
    peruVio.style.display = 'none';
    peruEdu.style.display = 'none';
    peruUnem.style.display = 'none';
    peruPop.style.display = 'none';
    peruAlf.style.display = 'block';
  }
});

// ------------------------- MEXICO ----------------------------------- //


// BOTONES MÉXICO
const btnPopMex = document.getElementById('boton-populationMex');
const btnVioMex = document.getElementById('boton-violenceMex');
const btnEduMex = document.getElementById('boton-educationMex');
const btnUneMex = document.getElementById('boton-unemploymentMex');
const btnAlfMex = document.getElementById('boton-alfabetizacionMex');

// divs MEXICO
const mexPop = document.getElementById('table-mexPop');
const mexVio = document.getElementById('table-mexVio');
const mexEdu = document.getElementById('table-mexEdu');
const mexUnem = document.getElementById('table-mexUnem');
const mexAlf = document.getElementById('table-mexAlf');


// MOSTRAR DATA FILTRADA EN LOS DIVS DEL HTML

btnPopMex.addEventListener('click', () => {
  mexPop.innerHTML = '';
  for (indicador of filterPopMex) {
    mexPop.innerHTML += indicador.indicatorName + '<br>';
    mexVio.style.display = 'none';
    mexEdu.style.display = 'none';
    mexUnem.style.display = 'none';
    mexAlf.style.display = 'none';
    mexPop.style.display = 'block';
  }
});

btnVioMex.addEventListener('click', () => {
  mexVio.innerHTML = '';
  for (indicador of filterViolenceMex) {
    mexVio.innerHTML += indicador.indicatorName + '<br>';
    mexEdu.style.display = 'none';
    mexUnem.style.display = 'none';
    mexAlf.style.display = 'none';
    mexPop.style.display = 'none';
    mexVio.style.display = 'block';
  }
});

btnEduMex.addEventListener('click', () => {
  mexEdu.innerHTML = '';
  for (indicador of filterEduMex) {
    mexEdu.innerHTML += indicador.indicatorName + '<br>';
    mexUnem.style.display = 'none';
    mexAlf.style.display = 'none';
    mexPop.style.display = 'none';
    mexVio.style.display = 'none';
    mexEdu.style.display = 'block';
  }
});

btnUneMex.addEventListener('click', () => {
  mexUnem.innerHTML = '';
  for (indicador of filterUnemploymentMex) {
    mexUnem.innerHTML += indicador.indicatorName + '<br>';
    mexEdu.style.display = 'none';
    mexVio.style.display = 'none';
    mexAlf.style.display = 'none';
    mexPop.style.display = 'none';
    mexUnem.style.display = 'block';
  }
});

btnAlfMex.addEventListener('click', () => {
  mexAlf.innerHTML = '';
  for (indicador of filterLiteracyMex) {
    mexAlf.innerHTML += indicador.indicatorName + '<br>';
    mexEdu.style.display = 'none';
    mexUnem.style.display = 'none';
    mexVio.style.display = 'none';
    mexPop.style.display = 'none';
    mexAlf.style.display = 'block';
  }
});


// ------------------------- CHILE ----------------------------------- //

// botones CHILE

const btnPopCh = document.getElementById('boton-populationChil');
const btnVioCh = document.getElementById('boton-violenceChil');
const btnEduCh = document.getElementById('boton-educationChil');
const btnUnemCh = document.getElementById('boton-unemploymentChil');
const btnAlfCh = document.getElementById('boton-alfabetizacionChil');

// divs CHILE
const popCh = document.getElementById('table-popCh');
const eduCh = document.getElementById('table-eduCh');
const vioCh = document.getElementById('table-vioCh');
const unemCh = document.getElementById('table-unemCh');
const alfCh = document.getElementById('table-alfCh');


// MOSTRAR DATA FILTRADA EN LOS DIVS DEL HTML


btnPopCh.addEventListener('click', () => {
  popCh.innerHTML = '';
  for (indicador of filterPopChl) {
    popCh.innerHTML += indicador.indicatorName + '<br>';
    eduCh.style.display = 'none';
    vioCh.style.display = 'none';
    unemCh.style.display = 'none';
    alfCh.style.display = 'none';
    popCh.style.display = 'block';
  }
});

btnVioCh.addEventListener('click', () => {
  vioCh.innerHTML = '';
  for (indicador of filterViolenceChl) {
    vioCh.innerHTML += indicador.indicatorName + '<br>';
    eduCh.style.display = 'none';
    popCh.style.display = 'none';
    unemCh.style.display = 'none';
    alfCh.style.display = 'none';
    vioCh.style.display = 'block';
  }
});

btnEduCh.addEventListener('click', () => {
  eduCh.innerHTML = '';
  for (indicador of filterEduChl) {
    eduCh.innerHTML += indicador.indicatorName + '<br>';
    popCh.style.display = 'none';
    vioCh.style.display = 'none';
    unemCh.style.display = 'none';
    alfCh.style.display = 'none';
    eduCh.style.display = 'block';
  }
});

btnUnemCh.addEventListener('click', () => {
  unemCh.innerHTML = '';
  for (indicador of filterUnemploymentChl) {
    unemCh.innerHTML += indicador.indicatorName + '<br>';
    eduCh.style.display = 'none';
    vioCh.style.display = 'none';
    popCh.style.display = 'none';
    alfCh.style.display = 'none';
    unemCh.style.display = 'block';
  }
});

btnAlfCh.addEventListener('click', () => {
  alfCh.innerHTML = '';
  for (indicador of filterLiteracyChl) {
    alfCh.innerHTML += indicador.indicatorName + '<br>';
    eduCh.style.display = 'none';
    vioCh.style.display = 'none';
    unemCh.style.display = 'none';
    popCh.style.display = 'none';
    alfCh.style.display = 'block';
  }
});


// ------------------------- BRASIL ----------------------------------- //

// botones BRASIL

const btnPopBra = document.getElementById('boton-populationBra');
const btnVioBra = document.getElementById('boton-violenceBra');
const btnEduBra = document.getElementById('boton-educationBra');
const btnUnemBra = document.getElementById('boton-unemploymentBra');
const btnAlfBra = document.getElementById('boton-alfabetizacionBra');

// divs CHILE

const braPop = document.getElementById('table-braPop');
const braEdu = document.getElementById('table-braEdu');
const braVio = document.getElementById('table-braVio');
const braUnem = document.getElementById('table-braUnem');
const braAlf = document.getElementById('table-braAlf');


// MOSTRAR DATA FILTRADA EN LOS DIVS DEL HTML


btnPopBra.addEventListener('click', () => {
  braPop.innerHTML = '';
  for (indicador of filterPopBrs) {
    braPop.innerHTML += indicador.indicatorName + '<br>' ;
    braEdu.style.display = 'none';
    braVio.style.display = 'none';
    braUnem.style.display = 'none';
    braAlf.style.display = 'none';
    braPop.style.display = 'block';
  }
});

btnVioBra.addEventListener('click', () => {
  braVio.innerHTML = '';
  for (indicador of filterViolenceBrs) {
    braVio.innerHTML += indicador.indicatorName + '<br>';
    braEdu.style.display = 'none';
    braPop.style.display = 'none';
    braUnem.style.display = 'none';
    braAlf.style.display = 'none';
    braVio.style.display = 'block';
  }
});

btnEduBra.addEventListener('click', () => {
  braEdu.innerHTML = '';
  for (indicador of filterEduBrs) {
    braEdu.innerHTML += indicador.indicatorName + '<br>';
    braPop.style.display = 'none';
    braVio.style.display = 'none';
    braUnem.style.display = 'none';
    braAlf.style.display = 'none';
    braEdu.style.display = 'block';
  }
});

btnUnemBra.addEventListener('click', () => {
  braUnem.innerHTML = '';
  for (indicador of filterUnemploymentBrs) {
    braUnem.innerHTML += indicador.indicatorName + '<br>';
    braEdu.style.display = 'none';
    braVio.style.display = 'none';
    braPop.style.display = 'none';
    braAlf.style.display = 'none';
    braUnem.style.display = 'block';
  }
});


btnAlfBra.addEventListener('click', () => {
  braAlf.innerHTML = '';
  for (indicador of filterLiteracyBrs) {
    braAlf.innerHTML += indicador.indicatorName + '<br>';
    braEdu.style.display = 'none';
    braVio.style.display = 'none';
    braUnem.style.display = 'none';
    braPop.style.display = 'none';
    braAlf.style.display = 'block';
  }
});

// MENÚ
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});
