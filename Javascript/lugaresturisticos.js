// var buttonUp = document.getElementById("button-up");
window.onscroll = () => {
    var buttonUp = document.getElementById("button-up");
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll>200) {
        buttonUp.style.cssText = "transform: scale(1);";
        // transform = "scale(1)"
    }else{
        buttonUp.style.cssText = "transform: scale(0);";
    }
}
function scrollup(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll>0){
        window.requestAnimationFrame(scrollup);
        window.scrollTo (0,currentScroll - (currentScroll/20));
    }
}
function abreModal(parametroLugar) {
    document.getElementById('modal').style.display='block';
    let contenidoTituloApi;
    let contenidoApi;
    switch (parametroLugar) {
        case "caminito":
            contenidoTituloApi = "<h3><u><b> Caminito </b></u></h3>";
            contenidoApi ="<p>Es un famoso museo a cielo abierto con una longitud de 130 metros aproximadamente, de gran valor cultural, en el Distrito de La Boca, el cual fue habitado a fines del 1800 por inmigrantes de origen Genovés. La calle se distingue por sus coloridos conventillos de madera, reconstruidos en la década de 1950 por un proyecto del pintor Benito Quinquela Martin. Dio origen al célebre tango Caminito.</p>"+
            `<p><u><b>Lugares gastronómicos recomendados:</b></u> <a href="https://www.google.com/maps/place/Estaci%C3%B3n+Caminito/@-34.6393245,-58.3632279,19z/data=!4m13!1m7!3m6!1s0x95a334b0f8639693:0x9ee9f7e4b5eeaf14!2sCaminito,+Buenos+Aires!3b1!8m2!3d-34.6393256!4d-58.3626807!3m4!1s0x0:0x2d7267ae900de1bf!8m2!3d-34.6392171!4d-58.3638408" target="_blank">Estacion Caminito</a>,
            <a href="https://www.google.com/maps/place/Gran+Paraiso/@-34.6393245,-58.3632279,19z/data=!4m13!1m7!3m6!1s0x95a334b0f8639693:0x9ee9f7e4b5eeaf14!2sCaminito,+Buenos+Aires!3b1!8m2!3d-34.6393256!4d-58.3626807!3m4!1s0x0:0xbbffdaf3f290d4ae!8m2!3d-34.6394616!4d-58.3634244" target="_blank"> Gran Paraiso</a>,<a href="https://www.google.com/maps/place/El+conventillo+rosa+Parrilla/@-34.6395311,-58.3622155,17.5z/data=!4m13!1m7!3m6!1s0x95a334b0f8639693:0x9ee9f7e4b5eeaf14!2sCaminito,+Buenos+Aires!3b1!8m2!3d-34.6393256!4d-58.3626807!3m4!1s0x0:0xffffed0acf351fa3!8m2!3d-34.6402923!4d-58.3629992" target="_blank"> conventillo rosa Parrilla</a></p><img src="../imagenes/Caminito.jpg" alt="caminito" class="imagenes">`
        
            contenidoModal(contenidoTituloApi,contenidoApi)
            break;
        case "LaBombonera":
            contenidoTituloApi = "<h3><u><b> La Bombonera </b></u></h3>";
            contenidoApi = "<p>En 1905 se fundó el Club Boca Juniors y desde el año 1923 se ubica en el terreno actual, barrio de La Boca. Comenzó a funcionar con tribunas de madera. En el año 1940 el arquitecto Esloveno Víctor Sulcic lo realizó en cemento y hoy en día lleva el nombre de unos de sus ex presidentes “Alberto J. Armado”</p>"+
            `<p><u><b>Lugares gastronómicos recomendados:</b></u> <a href="https://www.google.com/maps/place/La+Bombonera/@-34.6366195,-58.3648207,17z/data=!4m12!1m6!3m5!1s0x0:0x1ca5b2748858b40d!2sEstadio+Alberto+J.+Armando!8m2!3d-34.6356109!4d-58.3647563!3m4!1s0x0:0xc65dcf6eec397043!8m2!3d-34.6380361!4d-58.3663094" target="_blank">La Bombonera</a>, <a href="https://www.google.com/maps/place/Moscato+Pizza+%26+Faina/@-34.6342686,-58.3641235,17.75z/data=!4m5!3m4!1s0x95a3353e4dee2979:0x3e7e43fddb9e47!8m2!3d-34.6339497!4d-58.3635301" target="_blank">Moscato Pizza & Faina</a> , <a href="https://www.google.com/maps/place/La+Glorieta+de+Quique./@-34.633664,-58.3645585,17z/data=!4m5!3m4!1s0x0:0x120babbca55ceb26!8m2!3d-34.6368232!4d-58.3648814" target="_blank">La Glorieta de Quique.</a></p><img src="../imagenes/labombonera.jpg" alt="labombonera" class="imagenes">`
        
            contenidoModal(contenidoTituloApi,contenidoApi)
            break;
            case "PlazaDeMayo":
                contenidoTituloApi = "<h3><u><b> Plaza De Mayo </b></u></h3>";
                contenidoApi ="<p>Sitio fundacional de la Ciudad de Buenos Aires por Juan de Garay en el año 1580 con el nombre de la Santísima Trinidad y Puerto de Santa María del Buen Ayre, también su nombre es homenaje a la Revolución de Mayo de 1810.</p>"+`<p><u><b>Lugares gastronómicos recomendados:</b></u> <a href="https://www.google.com/maps/place/Pertutti+Suc.+Plaza+de+Mayo/@-34.6081416,-58.3731227,18.25z/data=!3m1!5s0x95bccad369122167:0x20ba5b7e5f101225!4m12!1m6!3m5!1s0x95bccadb57fd1e5f:0xcc737c4eb0a8614b!2sPlaza+de+Mayo!8m2!3d-34.6083667!4d-58.3722832!3m4!1s0x95bccb68fb30e23b:0xb584a8a55cdf420f!8m2!3d-34.609234!4d-58.373336" target="_blank">Pertutti Suc. Plaza de Mayo</a> , <a href="https://www.google.com/maps/place/Bar+Cabildo+de+Buenos+Aires/@-34.60813,-58.3734684,18z/data=!4m12!1m6!3m5!1s0x95bccadb57fd1e5f:0xcc737c4eb0a8614b!2sPlaza+de+Mayo!8m2!3d-34.6083667!4d-58.3722832!3m4!1s0x0:0x5855f7c456379122!8m2!3d-34.6090992!4d-58.3747547" target="_blank">Bar Cabildo de Buenos Aires</a>, <a href="https://www.google.com/maps/place/La+Junta+de+1810/@-34.60843,-58.375578,15z/data=!4m5!3m4!1s0x0:0x6b5bf36c6dd3490f!8m2!3d-34.6084907!4d-58.3755726" target="_blank">La Junta de 1810</a></p><img src="../imagenes/plazademayo.jpg" alt="plazademayo" class="imagenes">`
            
                contenidoModal(contenidoTituloApi,contenidoApi)
                break;
            case "PirámidedeMayo":
                contenidoTituloApi = "<h3><u><b>Pirámide de Mayo</b></u><h3>";
                contenidoApi ="<p>Fue el primer monumento que tuvo Buenos Aires en conmemoración al Primer Gobierno Patrio, a mediados del Siglo XIX se transformó la pirámide dejando la primitiva en su interior y colocando la estatua de la república sobre la misma.</p>"+`<p><u><b>Lugares gastronómicos recomendados:</b></u> <a href="https://www.google.com/maps/place/Pertutti+Suc.+Plaza+de+Mayo/@-34.6081416,-58.3731227,18.25z/data=!3m1!5s0x95bccad369122167:0x20ba5b7e5f101225!4m12!1m6!3m5!1s0x95bccadb57fd1e5f:0xcc737c4eb0a8614b!2sPlaza+de+Mayo!8m2!3d-34.6083667!4d-58.3722832!3m4!1s0x95bccb68fb30e23b:0xb584a8a55cdf420f!8m2!3d-34.609234!4d-58.373336" target="_blank">Pertutti Suc. Plaza de Mayo</a> , <a href="https://www.google.com/maps/place/Bar+Cabildo+de+Buenos+Aires/@-34.60813,-58.3734684,18z/data=!4m12!1m6!3m5!1s0x95bccadb57fd1e5f:0xcc737c4eb0a8614b!2sPlaza+de+Mayo!8m2!3d-34.6083667!4d-58.3722832!3m4!1s0x0:0x5855f7c456379122!8m2!3d-34.6090992!4d-58.3747547" target="_blank">Bar Cabildo de Buenos Aires</a>, <a href="https://www.google.com/maps/place/La+Junta+de+1810/@-34.60843,-58.375578,15z/data=!4m5!3m4!1s0x0:0x6b5bf36c6dd3490f!8m2!3d-34.6084907!4d-58.3755726" target="_blank">La Junta de 1810</a></p><img src="../imagenes/piramidedemayo.jpg" alt="piramidedemayo" class="imagenes">`
            
                contenidoModal(contenidoTituloApi,contenidoApi)
                break; 
            case "CabildodeBuenosAires":
                contenidoTituloApi = "<h3><u><b>Cabildo de Buenos Aires</b></u></h3>";
                contenidoApi ="<p>La función del Cabildo era ser sede de la administración colonial y fue el epicentro de los hechos sucedidos en la semana de Mayo de 1810. El edificio original fue diseñado y construido por arquitectos Jesuitas a mediados del Siglo XVIII, sufriendo grandes modificaciones durante el Siglo XIX.</p>"+`<p><u><b>Lugares gastronómicos recomendados:</b></u> <a href="https://www.google.com/maps/place/Pertutti+Suc.+Plaza+de+Mayo/@-34.6081416,-58.3731227,18.25z/data=!3m1!5s0x95bccad369122167:0x20ba5b7e5f101225!4m12!1m6!3m5!1s0x95bccadb57fd1e5f:0xcc737c4eb0a8614b!2sPlaza+de+Mayo!8m2!3d-34.6083667!4d-58.3722832!3m4!1s0x95bccb68fb30e23b:0xb584a8a55cdf420f!8m2!3d-34.609234!4d-58.373336" target="_blank">Pertutti Suc. Plaza de Mayo</a> , <a href="https://www.google.com/maps/place/Bar+Cabildo+de+Buenos+Aires/@-34.60813,-58.3734684,18z/data=!4m12!1m6!3m5!1s0x95bccadb57fd1e5f:0xcc737c4eb0a8614b!2sPlaza+de+Mayo!8m2!3d-34.6083667!4d-58.3722832!3m4!1s0x0:0x5855f7c456379122!8m2!3d-34.6090992!4d-58.3747547" target="_blank">Bar Cabildo de Buenos Aires</a>, <a href="https://www.google.com/maps/place/La+Junta+de+1810/@-34.60843,-58.375578,15z/data=!4m5!3m4!1s0x0:0x6b5bf36c6dd3490f!8m2!3d-34.6084907!4d-58.3755726" target="_blank">La Junta de 1810</a></p><img src="../imagenes/Cabildo de Buenos Aires.jpg" alt="cabildodebsas" class="imagenes">`
                
                contenidoModal(contenidoTituloApi,contenidoApi)
                break;       
            case "CasaRosada":
                contenidoTituloApi = "<h3><u><b>Casa Rosada</b></u></h3>";
                contenidoApi ="<p>Es un edificio de color rosado donde funcionó en 1580 el Fuerte de Buenos Aires, fue la residencia de virreyes españoles y luego albergó a las autoridades de los sucesivos gobiernos nacionales. Actualmente funciona como sede Presidencial.</p>"+`<p><u><b>Lugares gastronómicos recomendados:</b></u> <a href="https://www.google.com/maps/place/Pertutti+Suc.+Plaza+de+Mayo/@-34.6081416,-58.3731227,18.25z/data=!3m1!5s0x95bccad369122167:0x20ba5b7e5f101225!4m12!1m6!3m5!1s0x95bccadb57fd1e5f:0xcc737c4eb0a8614b!2sPlaza+de+Mayo!8m2!3d-34.6083667!4d-58.3722832!3m4!1s0x95bccb68fb30e23b:0xb584a8a55cdf420f!8m2!3d-34.609234!4d-58.373336" target="_blank">Pertutti Suc. Plaza de Mayo</a> , <a href="https://www.google.com/maps/place/Bar+Cabildo+de+Buenos+Aires/@-34.60813,-58.3734684,18z/data=!4m12!1m6!3m5!1s0x95bccadb57fd1e5f:0xcc737c4eb0a8614b!2sPlaza+de+Mayo!8m2!3d-34.6083667!4d-58.3722832!3m4!1s0x0:0x5855f7c456379122!8m2!3d-34.6090992!4d-58.3747547" target="_blank">Bar Cabildo de Buenos Aires</a>, <a href="https://www.google.com/maps/place/La+Junta+de+1810/@-34.60843,-58.375578,15z/data=!4m5!3m4!1s0x0:0x6b5bf36c6dd3490f!8m2!3d-34.6084907!4d-58.3755726" target="_blank">La Junta de 1810</a></p><img src="../imagenes/Casa Rosada.jpg" alt="casarosada" class="imagenes">`
                
                contenidoModal(contenidoTituloApi,contenidoApi)
                break;
            case "CatedralMetropolitana":
                contenidoTituloApi = "<h3><u><b>Catedral Metropolitana</b></u></h3>";
                contenidoApi ="<p>Dedicada a la Santísima Trinidad. Es el principal templo Católico de la Argentina ubicado en el barrio de San Nicolás frente a la Plaza de Mayo. Data del año 1580. Fue derrumbada varias veces y reconstruida por última vez en el año 1999. En ella yacen los restos mortales del General Don José San Martin.</p>"+`<p><u><b>Lugares gastronómicos recomendados:</b></u> <a href="https://www.google.com/maps/place/Pertutti+Suc.+Plaza+de+Mayo/@-34.6081416,-58.3731227,18.25z/data=!3m1!5s0x95bccad369122167:0x20ba5b7e5f101225!4m12!1m6!3m5!1s0x95bccadb57fd1e5f:0xcc737c4eb0a8614b!2sPlaza+de+Mayo!8m2!3d-34.6083667!4d-58.3722832!3m4!1s0x95bccb68fb30e23b:0xb584a8a55cdf420f!8m2!3d-34.609234!4d-58.373336" target="_blank">Pertutti Suc. Plaza de Mayo</a> , <a href="https://www.google.com/maps/place/Bar+Cabildo+de+Buenos+Aires/@-34.60813,-58.3734684,18z/data=!4m12!1m6!3m5!1s0x95bccadb57fd1e5f:0xcc737c4eb0a8614b!2sPlaza+de+Mayo!8m2!3d-34.6083667!4d-58.3722832!3m4!1s0x0:0x5855f7c456379122!8m2!3d-34.6090992!4d-58.3747547" target="_blank">Bar Cabildo de Buenos Aires</a>, <a href="https://www.google.com/maps/place/La+Junta+de+1810/@-34.60843,-58.375578,15z/data=!4m5!3m4!1s0x0:0x6b5bf36c6dd3490f!8m2!3d-34.6084907!4d-58.3755726" target="_blank">La Junta de 1810</a></p><img src="../imagenes/Catedral Metropolitana.jpg" alt="CatedralMetropolitana" class="imagenes">`
                
                contenidoModal(contenidoTituloApi,contenidoApi)
                break;
            case "CafeTortoni":
                contenidoTituloApi = "<h3><u><b>Cafe Tortoni</b></u></h3>";
                contenidoApi ="<p>Histórico café de estilo francés inaugurado en 1858, que fuera frecuentado por la élite de la cultura del tango. Se ubica en Av. de Mayo 825. Recibe su nombre en homenaje a un café parisino ubicado en el Boulevard de los Italianos. El primitivo Tortoni de Buenos Aires abrió sus puertas en la intersección de la Avenida Rivadavia y Esmeralda.</p>"+`<img src="../imagenes/Café Tortoni.jpg" alt="cafetortoni" class="imagenes">`
                
                contenidoModal(contenidoTituloApi,contenidoApi)
                break;
            case "Obelisco":
                contenidoTituloApi = "<h3><u><b>Obelisco</b></u></h3>";
                contenidoApi ="<p>Es un monumento histórico considerado un ícono de la Ciudad de Buenos Aires, ubicado en la Plaza de la República en el barrio de San Nicolás. Fue construido para celebrar el cuarto centenario de la fundación de la Ciudad. Tiene una altura de 67,5 metros. Su forma es geométrica, data del año 1936 y es autoría del arquitecto argentino Alberto Prebisch.</p>"+`<p><u><b>Lugares gastronómicos recomendados:</b></u> <a href="https://www.google.com/maps/place/Revire+Brasas+Bravas/@-34.6037002,-58.3824878,19.5z/data=!4m12!1m6!3m5!1s0x4aa9f0a6da5edb:0x11bead4e234e558b!2sObelisco!8m2!3d-34.6037389!4d-58.3815704!3m4!1s0x95bccb34600ba379:0xcb686d36fe1c8ceb!8m2!3d-34.6039088!4d-58.382617" target="_blank">Revire Brasas Bravas</a> , <a href="https://www.google.com/maps/place/Kentucky/@-34.6036409,-58.3817879,19.5z/data=!4m12!1m6!3m5!1s0x4aa9f0a6da5edb:0x11bead4e234e558b!2sObelisco!8m2!3d-34.6037389!4d-58.3815704!3m4!1s0x95bccbc0b7f4ad8f:0x18b8da46d3bb0335!8m2!3d-34.6034931!4d-58.3804454" target="_blank"> Kentucky</a>, <a href="https://www.google.com/maps/place/Pizzer%C3%ADa+Guerr%C3%ADn/@-34.6024696,-58.3840034,17.25z/data=!4m12!1m6!3m5!1s0x4aa9f0a6da5edb:0x11bead4e234e558b!2sObelisco!8m2!3d-34.6037389!4d-58.3815704!3m4!1s0x95bccac42dabce9b:0xbaa2d156dbe4138d!8m2!3d-34.6040944!4d-58.3859894" target="_blank">Pizzería Guerrín</a><img src="../imagenes/Obelisco.jpg" alt="Obelisco" class="imagenes">`
                
                contenidoModal(contenidoTituloApi,contenidoApi)
                break;
            case "TeatroColon":
                contenidoTituloApi = "<h3><u><b>Teatro Colón</b></u></h3>";
                contenidoApi ="<p>Es uno de los teatros más importantes en el mundo de la lírica y está a la altura de La Scala de Milán, el Royal Opera House de Londres y la Ópera Garnier de París. Se fundó el 25 de Mayo de 1908 presentando la ópera Aída de Giuseppe Verdi. Su construcción duró casi 20 años e involucró a más de 1500 personas. Es obra de los arquitectos Francesco Tamburini, Víctor Meano y Jules Dormal. Posee una capacidad para 2500 espectadores.</p>"+`<p><u><b>Lugares gastronómicos recomendados:</b></u> <a href="https://www.google.com/maps/place/El+Cuartito/@-34.600034,-58.3869519,17z/data=!4m5!3m4!1s0x95bccab86411c829:0x284457706ae745bf!8m2!3d-34.5978129!4d-58.385482" target="_blank">El Cuartito</a>, <a href="https://www.google.com/maps/place/La+Americana/@-34.6043778,-58.3886404,18z/data=!4m12!1m6!3m5!1s0x95bccac42dabce9b:0xbaa2d156dbe4138d!2zUGl6emVyw61hIEd1ZXJyw61u!8m2!3d-34.6040944!4d-58.3859894!3m4!1s0x95bccac42a3db187:0xbf4296a78b78e6bc!8m2!3d-34.6037923!4d-58.3863066" target="_blank">La Americana</a><a href="https://www.google.com/maps/place/Pizzer%C3%ADa+Banchero/@-34.6038326,-58.3866914,17z/data=!4m9!1m2!2m1!1sbanchero+pizzeria!3m5!1s0x95bccbcb034946a7:0x4f669a33f27c8c6c!8m2!3d-34.604129!4d-58.3849439!15sChFiYW5jaGVybyBwaXp6ZXJpYVoTIhFiYW5jaGVybyBwaXp6ZXJpYZIBEHBpenphX3Jlc3RhdXJhbnTgAQA" target="_blank">Pizzería Banchero</a>,<a href="https://www.google.com/search?rlz=1C1GCEA_enAR1021AR1021&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=ALiCzsbDsbqacndkqAQ5uzHoqRy7p7MpOg:1666113233683&q=pizzerias+avenida+corrientes&rflfq=1&num=10&sa=X&ved=2ahUKEwiLzMu7o-r6AhVyrpUCHWPND5oQjGp6BAgXEAE&biw=1920&bih=937&dpr=1#rlfi=hd:;si:9458007075236811819,l,ChxwaXp6ZXJpYXMgYXZlbmlkYSBjb3JyaWVudGVzSKKlq5eIgICACFosEAAYABgBGAIiHHBpenplcmlhcyBhdmVuaWRhIGNvcnJpZW50ZXMqBAgDEACSARBwaXp6YV9yZXN0YXVyYW50mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5MY0U1TGFITlJSUkFCqgEbCggvbS8wNjYzdhABKg0iCXBpenplcmlhcygO,y,W-oxvIn8VqU;mv:[[-34.59649129026852,-58.371397301093786],[-34.61030287085894,-58.4035838092725],null,[-34.603397367698825,-58.38749055518314],16]" target="_blank">Las Cuartetas</a>,<a href="https://www.google.com/maps/place/El+Palacio+de+la+Pizza/data=!4m2!3m1!1s0x0:0xf0ccb76a4575b22e" target="_blank">El Palacio de la Pizza </a></p><img src="../imagenes/Teatro Colón.jpg" alt="teatrocolon" class="imagenes">`
                
                contenidoModal(contenidoTituloApi,contenidoApi)
                break;
            case "CongresoNacional":
                contenidoTituloApi = "<h3><u><b>Congreso Nacional</b></u></h3>";
                contenidoApi ="<p>Se ubica en el barrio de Monserrat y es la sede del poder legislativo. Tiene más de 12000 metros cuadrados que lo convierten en uno de los más grandes del mundo. La obra fue iniciada en el año 1896 por el arquitecto Vittorio Meano y luego finalizada por el arquitecto Julio Dormal en el año 1946. También, podemos encontrar el Palacio Barolo, diseñado por el arquitecto Mario Palanti gran estudioso de la Divina Comedia y que llenó el palacio con referencias a ella. Se construyó a solicitud del poderoso productor agropecuario Luis Barolo de nacionalidad italiana y admirador de Dante. En la actualidad es un edificio de oficinas.</p>"+`<p><u><b>Lugares gastronómicos recomendados:</b></u> <a href="https://www.google.com/maps/place/RESTAURANTE+Y+DELIVERY+La+Gran+Taberna/@-34.609781,-58.3938187,17.5z/data=!4m5!3m4!1s0x95bccac2b7294acd:0xc77210f67822f154!8m2!3d-34.6102189!4d-58.3934256" target="_blank">RESTAURANTE Y DELIVERY La Gran Taberna</a>, <a href="https://www.google.com/maps/place/Casa+Blanca/@-34.6091183,-58.3944566,18z/data=!3m1!4b1!4m5!3m4!1s0x95bccac293f76be5:0x6c597c0b76123307!8m2!3d-34.6091264!4d-58.3935363" target="_blank">Casa Blannca</a>,<a href="https://www.google.com/maps/place/ULTIMO+BODEGON/@-34.6092497,-58.391423,20z/data=!4m5!3m4!1s0x0:0x187f2e184c37338c!8m2!3d-34.6090543!4d-58.3915954"target="_blank"> ULTIMO BODEGON </a></p><img src="../imagenes/Congreso Nacional.jpg" alt="congresonacional" class="imagenes">`+`<img src="../imagenes/palacio barolo.jpg" alt="palaciobarolo" id="palaciobarolo">`
                
                contenidoModal(contenidoTituloApi,contenidoApi)
                break;
            case "FloralisGenérica":
                contenidoTituloApi = "<h3><u><b>Floralis Genérica</b></u></h3>";
                contenidoApi ="<p>Se ubica en la Plaza de las Naciones Unidas, en el barrio de Recoleta. Es una escultura metálica moderna obsequiada a la ciudad por el arquitecto argentino Eduardo Catalano. Fue inaugurado el 13 de Abril del 2002. Tiene una altura de 23 metros. Cuenta con un sistema eléctrico que abre y cierra automáticamente sus pétalos, de noche emite un resplandor rojo.</p>"+`<p><u><b>Lugares gastronómicos recomendados:</b></u> <a href="https://www.google.com/maps/place/La+Ferneter%C3%ADa/@-34.5836155,-58.3940234,17z/data=!4m12!1m6!3m5!1s0x95bccb06d18d5225:0x3652591aa77e712f!2sFloralis+Gen%C3%A9rica!8m2!3d-34.5816767!4d-58.3939805!3m4!1s0x95bccb49d3bf1467:0x9a4e916e4ea26d44!8m2!3d-34.5835549!4d-58.392594" target="_blank">La Fernetería</a>, <a href="https://www.google.com/maps/place/Ache/@-34.5836155,-58.3940234,17z/data=!4m12!1m6!3m5!1s0x95bccb06d18d5225:0x3652591aa77e712f!2sFloralis+Gen%C3%A9rica!8m2!3d-34.5816767!4d-58.3939805!3m4!1s0x0:0x673eb555ede479fb!8m2!3d-34.5830456!4d-58.3904357" target="_blank">Ache</a></p><img src="../imagenes/Floralis Genérica.jpg" alt="" class="imagenes">`
                
                contenidoModal(contenidoTituloApi,contenidoApi)
                break;
            case "Museo":
                contenidoTituloApi = "<h3><u><b>Museo Nacional de Bellas Artes</b></u></h3>";
                contenidoApi ="<p>Ubicado en el barrio de Recoleta. Abrió sus puertas el 25 de Diciembre de 1896 bajo la dirección del pintor y crítico de arte Eduardo Schiaffino. Es uno de los museos más importantes de arte del país y de América Latina. Funcionó en un primer momento en el edificio donde hoy se encuentran las Galerías Pacifico. Cuenta con más de 9000 piezas de arte.</p>"+`<p><u><b>Lugares gastronómicos recomendados:</b></u> <a href="https://www.google.com/maps/place/La+Rambla/@-34.5871228,-58.3889939,18z/data=!4m12!1m6!3m5!1s0x0:0x49e543b8331abe7d!2sMuseo+Nacional+de+Bellas+Artes!8m2!3d-34.5840421!4d-58.3930025!3m4!1s0x95bccaa47c32684f:0x3492bae0f8ebd12e!8m2!3d-34.5868149!4d-58.3885222" target="_blank">La Rambla</a>, <a href="https://www.google.com/maps/place/Fervor/@-34.5871228,-58.3889939,18z/data=!4m12!1m6!3m5!1s0x0:0x49e543b8331abe7d!2sMuseo+Nacional+de+Bellas+Artes!8m2!3d-34.5840421!4d-58.3930025!3m4!1s0x95bccaa4ed22e001:0xc0f1d7b3cb5e087f!8m2!3d-34.5872643!4d-58.3873105"target="_blank">Fervor</a></p><img src="../imagenes/Museo Nacional de Bellas Artes.jpg" alt="museonacionaldebellasartes" class="imagenes">`
                
                contenidoModal(contenidoTituloApi,contenidoApi)
                break;
            case "PuertoMadero":
                contenidoTituloApi = "<h3><u><b>Puerto Madero</b></u></h3>";
                contenidoApi ="<p>Es el barrio más joven de la Ciudad de Buenos Aires. Es un área renovada ganada al Río de la Plata. Alberga elegantes rascacielos que corresponden a corporaciones multinacionales, departamentos de lujo, hoteles de alto nivel y finos restaurantes. Otras de sus características es que todas sus calles llevan nombre de mujeres notables de la historia argentina. El puente de la mujer es una elegante obra colgante y giratoria que cruza el muelle, fue diseñado por el arquitecto español Santiago Calatrava. Cercano a Puerto Madero se encuentran la Costanera Sur y la Reserva Ecológica.</p>"+`<p><u><b>Lugares gastronómicos recomendados:</b></u> <a href="https://www.google.com/maps/place/OSTEN+restaurante+%26+bar/@-34.6196119,-58.3621998,16.5z/data=!4m5!3m4!1s0x95a3352b457877fd:0x862d55f863c6e15e!8m2!3d-34.6207135!4d-58.3612418" target="_blank">OSTEN restaurante & bar</a>, <a href="https://www.google.com/maps/place/Pizzeria+.El+Correntino/@-34.619237,-58.3595201,17z/data=!4m5!3m4!1s0x95a33516b54885f5:0x60bf6dfc0247c116!8m2!3d-34.6169428!4d-58.3513468" target="_blank">Pizzeria .El Correntino</a> , <a href="https://www.google.com/maps/place/R%C3%ABd+resto+%26+lounge/@-34.6191095,-58.3604633,17.25z/data=!4m5!3m4!1s0x0:0xff4187ad6aa2376!8m2!3d-34.6172623!4d-58.3620765" target="_blank">Rëd resto & lounge</a></p><img src="../imagenes/Puerto Madero.jpg" alt="puertomadero" class="imagenes">`
                
                contenidoModal(contenidoTituloApi,contenidoApi)
                break;    
                
        default:
            alert ("'Lo lamentamos, por el momento no disponemos de este caso");
            break;
    }
}
function cerrarModal() {
    document.getElementById('modal').style.display='none'
}
function contenidoModal(contenidoTituloApi,contenidoApi) {
    let tituloModal=document.getElementById("tituloModal");
    let contenidoModal=document.getElementById("contenidoModal1");
    tituloModal.innerHTML =contenidoTituloApi ;
    contenidoModal.innerHTML= contenidoApi;
}   