module.exports = function () {
  var data = {
    destinos: [
      {
        id: 1,
        despDestino: "Colombia es un país muy turístico, acudiendo millones de viajeros foráneos todos los años atraídos por sus playas, el abundante patrimonio artístico y cultural del país y la variedad de ofertas gastronómicas, además de ser una de las naciones más ricas en patrimonio cultural de América.",
        nameDestino: "Colombia",
        fechaDestino: "12 de marzo "
      },
      {
        id: 2,
        despDestino: "EE. UU. está compuesto por 50 estados y tiene una superficie total de 9.629,101 kilómetros cuadrados, lo que lo convierte en el tercer estado más grande del mundo. Al este del continente americano se encuentra el océano Atlántico y al oeste el océano Pacífico",
        
        nameDestino: "Estados Unidos",
        fechaDestino: "28 de abril ",
      },
      {
        id: 3,
        despDestino: "Rusia es el país más grande del mundo con un territorio de más de 17millones de kilómetros cuadrados. Está sitiuada en el este de Europa y en el norte de Asia, tiene fronteras con 16 estados y su línea fronteriza es la más larga del mundo con 60 mil kilómetros de extensión.",
        nameDestino: "Rusia",
        fechaDestino: "21 de junio",
      },
      {
        id: 4,
        despDestino: "Es un país soberano ubicado en Europa occidental y miembro de la Unión Europea. Tiene una superficie total, entre islas y territorio continental, de 675.417 km2 y su capital es París, una de las ciudades más turísticas del mundo, que está atravesada por el río Sena.",
        nameDestino: "Francia",
        fechaDestino: "14 de julio",

      },
      {
        id: 5,
        despDestino: "Es un país turístico con una desarrollada infraestructura en el sector servicios, situándose entre los tres más visitados del mundo, al que acuden anualmente millones de viajeros atraídos por sus playas y agradable clima, el abundante patrimonio artístico del país y la riqueza gastronómica, además de ser una de las naciones más ricas en patrimonio cultural del planeta debido al gran número de civilizaciones que dejaron su impronta y legado en la península ibérica.",
        nameDestino: "España",
        fechaDestino: "20 de julio",

      },
      {
        id: 6,
        despDestino: "Es un país insular que se extiende a lo largo de la costa Pacífica del nordeste de Asia. La isla principal es Honshu, y las otras tres más grandes son Hokkaido, en el norte del país, y Shikoku y Kyushu en el sur. Más de 4.000 pequeñas islas rodean a estas cuatro principales.",
        nameDestino: "Japon",
        fechaDestino: "5 de agosto",

      },
      {
        id: 7,
        despDestino: "Posee una extensión geográfica de 8 millones de kilómetros cuadrados. Es el sexto país más grande del mundo y la isla poblada de mayor tamaño. Junto con Nueva Zelanda, Nueva Guinea y varios archipiélagos, Australia conforma el continente insular de Oceanía.",
        nameDestino: "Australia",
        fechaDestino: "13 de agosto",

      },
      {
        id: 8,
        despDestino: "Ubicado en Europa mediterránea, Italia es uno de los países europeos de gran importancia turística tanto por su gran cantidad de historia como por su peculiar tradición y gastronomía, convirtiéndolo en uno de los lugares más populares para hacer turismo.",
        nameDestino: "Italia",
        fechaDestino: "20 de agosto",

      },
      {
        id: 9,
        despDestino: "Es el país más grande de América del Norte y el segundo más grande del mundo, tiene “solo” 35 millones de habitantes. Por lo tanto, es un país muy poco poblado, pero próspero. Canadá es también un destino turístico muy popular, tanto para los viajeros de negocios como para los turistas.",
        nameDestino: "Canada",
        fechaDestino: "15 de octubre",

      },
      {
        id: 10,
        despDestino: "Con una gastronomía exquisita, cultura riquísima, algunas de las playas más lindas del mundo, cascadas deslumbrantes y aventuras para todos los gustos. Uno puede elegir el tipo de turismo que le encanta y sorprenderse con las maravillas de Brasil.",
        nameDestino: "Brazil",
        fechaDestino: "20 de octubre",

      },
      
    ],
    presupuesto: [
      {
        id: 1,
        despDestino: "Luis",
        cantidadPago: "350$",
        destino: {
          id: 1,
          nameDestino: "Colombia"
        }

      }


    ],
    viajero: [
      {
        id: 0,
        nombre: "Luis",
        apellido: "ajn",
        contrasenia: "123",
        correo: "lc@wmali.com",
        contactos: 0,
        tipoViajero: "turista",
        recomendado: true,
      },
      {
        id: 0,
        nombre: "Luis",
        apellido: "ajn",
        contrasenia: "123",
        correo: "lc@wmali.com",
        contactos: 0,
        tipoViajero: "turista",
        recomendado: true,
      },
      {
        id: 0,
        nombre: "Luis",
        apellido: "ajn",
        contrasenia: "123",
        correo: "lc@wmali.com",
        contactos: 0,
        tipoViajero: "turista",
        recomendado: true,
      },
      {
        id: 0,
        nombre: "Luis",
        apellido: "ajn",
        contrasenia: "123",
        correo: "lc@wmali.com",
        contactos: 0,
        tipoViajero: "turista",
        recomendado: true,
      },
      {
        id: 0,
        nombre: "Luis",
        apellido: "ajn",
        contrasenia: "123",
        correo: "lc@wmali.com",
        contactos: 0,
        tipoViajero: "turista",
        recomendado: true,
      },
      {
        id: 0,
        nombre: "Luis",
        apellido: "ajn",
        contrasenia: "123",
        correo: "lc@wmali.com",
        contactos: 0,
        tipoViajero: "turista",
        recomendado: true,
      },

    ],
    servicio: [
      {
        id: 1,
        tipoServicio: "test",
        oferta:  "50%",
        descripcion: "hospedaje 1 ",
      },
      {
        id: 2,
        tipoServicio: "arizona",
        oferta:  "50%",
        descripcion: "hospedaje 2",
      },
      {
        id: 3,
        tipoServicio: "killer",
        oferta:  "50%",
        descripcion: "hospedaje 3",
      },
      {
        id: 4,
        tipoServicio: "zero",
        oferta:  "50%",
        descripcion: "hospedaje 4 ",
      },
      {
        id: 5,
        tipoServicio: "warli",
        oferta:  "50%",
        descripcion: "hospedaje 5",
      },
      {
        id: 6,
        tipoServicio: "parkour",
        oferta:  "50%",
        descripcion: "hospedaje 6 ",
      },
    ],
    grupo: [
      {
        id:0,
        nombreGrupo:"Akatsuki",
        numIntegrantes:7,
        descripcion:"Grupo creado el 18 de enero de 2021, con el objetivo de planear viajes y consejos",
        lider:"Itachi",
      },
      {
        id:1,
        nombreGrupo:"sharkteam",
        numIntegrantes:7,
        descripcion:"Grupo de aventura, sobre todo marítima",
        lider:"Jaime",
      },
      {
        id:2,
        nombreGrupo:"Beastcoast",
        numIntegrantes:7,
        descripcion:"Equipo de personas apasionadas por el deporte",
        lider:"Hector",
      },
      {
        id:3,
        nombreGrupo:"Thunder",
        numIntegrantes:7,
        descripcion:"Grupo creado el 18 de enero de 2021, con el objetivo de planear viajes y consejos",
        lider:"Gotito",
      },
      {
        id:4,
        nombreGrupo:"Hokori",
        numIntegrantes:7,
        descripcion:"Grupo creado el 18 de enero de 2021, con el objetivo de planear viajes y consejos",
        lider:"Vitality",
      },
      {
        id:5,
        nombreGrupo:"PSG",
        numIntegrantes:7,
        descripcion:"Grupo creado el 18 de enero de 2021, con el objetivo de planear viajes y consejos",
        lider:"AME",
      },

    ],

    contactos: [
      {
        idContacto: 0,
        nameContacto: "jorge",
        numCel: "9999999",
       
      },
      {
        idContacto: 0,
        nameContacto: "Angel",
        numCel: "9999999",
      },
      {
        idContacto: 0,
        nameContacto: "Sofia",
        numCel: "9999999",
      },
      {
        idContacto: 0,
        nameContacto: "Maria",
        numCel: "9999999",
      },
      {
        idContacto: 0,
        nameContacto: "Carlos",
        numCel: "9999999",
      },
      {
        idContacto: 0,
        nameContacto: "Kelly",
        numCel: "999999",
      },

    ],


  }

  return data
}
