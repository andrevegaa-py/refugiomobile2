/* ==========================================================
   Refugio Mobile — datos semilla del prototipo
   TB2 Lean Management · Design Sprint · UPC
   Todo el contenido es ficticio, creado para la demostración.
   ========================================================== */

const PSICOLOGOS = [
  {
    id: "p1",
    nombre: "Lucía Ramírez",
    rol: "Psicóloga educativa",
    inicial: "L",
    color: "#5B4AE8",
    estado: "en linea",
    horario: "Lun a Vie · 8:00 – 15:00",
    responde: "Suele responder en pocos minutos",
    bio: "Acompaño a estudiantes de secundaria. Puedes escribirme de lo que sea, sin apuro.",
    citas: ["Lun 10:00", "Mar 11:30", "Mié 9:00", "Jue 14:00"]
  },
  {
    id: "p2",
    nombre: "Diego Salas",
    rol: "Psicólogo clínico",
    inicial: "D",
    color: "#00A896",
    estado: "ocupado",
    horario: "Lun, Mié y Vie · 9:00 – 13:00",
    responde: "Suele responder el mismo día",
    bio: "Trabajo temas de ansiedad, presión académica y relaciones con la familia.",
    citas: ["Lun 9:30", "Mié 11:00", "Vie 10:00"]
  },
  {
    id: "p3",
    nombre: "Marta Quispe",
    rol: "Tutora de bienestar",
    inicial: "M",
    color: "#E8814A",
    estado: "desconectado",
    horario: "Mar y Jue · 10:00 – 16:00",
    responde: "Te responde cuando se conecte",
    bio: "Si no sabes por dónde empezar, escríbeme y vemos juntos qué necesitas.",
    citas: ["Mar 14:00", "Jue 10:30"]
  }
];

const CANALES = [
  { id: "todos", nombre: "Todo", emoji: "✨" },
  { id: "desahogo", nombre: "Desahogo", emoji: "💭" },
  { id: "gustos", nombre: "Gustos", emoji: "🎧" },
  { id: "colegio", nombre: "Colegio", emoji: "📚" },
  { id: "testimonios", nombre: "Testimonios", emoji: "🗣️" },
  { id: "logros", nombre: "Logros", emoji: "🌱" }
];

/* Avatares: se guardan con su emoji como clave y se muestran como imagen 3D.
   Imágenes: Fluent Emoji 3D (Microsoft), licencia MIT — ver img/AVATARES_LICENCIA.txt */
const AVATARES = ["🦊", "🐨", "🐼", "🦉", "🐙", "🦖", "🐸", "🦄", "🐝", "🐧"];

const AVATAR_IMG = {
  "🦊": "img/avatars/fox.png",
  "🐨": "img/avatars/koala.png",
  "🐼": "img/avatars/panda.png",
  "🦉": "img/avatars/owl.png",
  "🐙": "img/avatars/octopus.png",
  "🦖": "img/avatars/trex.png",
  "🐸": "img/avatars/frog.png",
  "🦄": "img/avatars/unicorn.png",
  "🐝": "img/avatars/honeybee.png",
  "🐧": "img/avatars/penguin.png"
};

const INTERESES = [
  "Música", "Anime", "Videojuegos", "Dibujo", "Fútbol", "Leer",
  "K-pop", "Skate", "Cocinar", "Series", "Fotografía", "Bailar",
  "Escribir", "Básquet", "Astronomía", "Volei"
];

/* Fotos: se cargan por internet desde picsum.photos (fotos reales).
   Si alguna no carga, la app muestra un fondo de color en su lugar.
   Para cambiar una foto, reemplaza el número del id en la URL. */
const foto = (id) => `https://picsum.photos/id/${id}/800/1000`;

const POSTS_SEMILLA = [
  {
    id: "post1",
    autor: "Zorrito_04",
    avatar: "🦊",
    canal: "desahogo",
    tiempo: "hace 2 h",
    titulo: "Nadie se dio cuenta de que la estaba pasando mal",
    texto: "Estuve como tres semanas raro y nadie preguntó nada. Al final le conté a mi mejor amigo y me dijo que él andaba igual. Me pareció bien loco que estábamos los dos así y ninguno decía nada.",
    foto: foto(1036),
    votos: 47,
    voto: 0,
    guardado: false,
    comentarios: [
      { id: "c1", autor: "Búho_nocturno", avatar: "🦉", texto: "Me pasó igual el año pasado. A veces uno cree que es el único.", votos: 12, voto: 0, tiempo: "hace 1 h" },
      { id: "c2", autor: "Panda_gris", avatar: "🐼", texto: "Qué bueno que se lo dijiste. Yo todavía no me animo.", votos: 8, voto: 0, tiempo: "hace 45 min" }
    ]
  },
  {
    id: "post7",
    autor: "Rana_saltarina",
    avatar: "🐸",
    canal: "testimonios",
    tiempo: "hace 3 h",
    titulo: "Fui a mi primera sesión y nadie se enteró",
    texto: "Pedí mi cita desde acá y fui en mi hora de tutoría. Entré, conversé veinte minutos y salí. Nadie preguntó nada. Pensé que me iba a sentir raro y fue al revés: salí con la cabeza más liviana.",
    foto: foto(1011),
    votos: 92,
    voto: 0,
    guardado: false,
    comentarios: [
      { id: "c15", autor: "Koala_azul", avatar: "🐨", texto: "Yo todavía lo estoy pensando, pero leer esto me ayuda.", votos: 18, voto: 0, tiempo: "hace 2 h" },
      { id: "c16", autor: "Unicornio_22", avatar: "🦄", texto: "Qué bacán que lo hayas hecho. A mí me da roche pero me dieron ganas.", votos: 14, voto: 0, tiempo: "hace 1 h" }
    ]
  },
  {
    id: "post2",
    autor: "Pulpo_azul",
    avatar: "🐙",
    canal: "gustos",
    tiempo: "hace 5 h",
    titulo: "Mi playlist para cuando no puedo dormir",
    texto: "Armé una playlist con puros temas lentos para cuando me quedo pensando de noche. Si alguien quiere que se la pase, le escribo. ¿Alguien más le pasa que en la noche piensa de más?",
    foto: foto(1043),
    votos: 63,
    voto: 0,
    guardado: false,
    comentarios: [
      { id: "c3", autor: "Dino_verde", avatar: "🦖", texto: "A mí me pasa todas las noches jaja. Pásamela porfa.", votos: 21, voto: 0, tiempo: "hace 3 h" },
      { id: "c4", autor: "Abeja_07", avatar: "🐝", texto: "Yo pongo lluvia de fondo, ayuda un montón.", votos: 15, voto: 0, tiempo: "hace 2 h" },
      { id: "c5", autor: "Koala_azul", avatar: "🐨", texto: "Justo ayer estuve hasta las 2am dándole vueltas a una cosa.", votos: 9, voto: 0, tiempo: "hace 1 h" }
    ]
  },
  {
    id: "post3",
    autor: "Unicornio_22",
    avatar: "🦄",
    canal: "colegio",
    tiempo: "hace 8 h",
    titulo: "¿Cómo hacen para concentrarse en clase?",
    texto: "Me desconecto en media clase y después no entiendo nada. Después me preocupo pero tampoco hago nada al respecto y se me acumula. Alguien con tips reales, no el típico 'presta atención'.",
    foto: foto(180),
    votos: 89,
    voto: 0,
    guardado: false,
    comentarios: [
      { id: "c6", autor: "Pingüino_1", avatar: "🐧", texto: "Yo anoto palabras sueltas en vez de frases completas, me ayuda a seguir el hilo.", votos: 34, voto: 0, tiempo: "hace 6 h" },
      { id: "c7", autor: "Rana_saltarina", avatar: "🐸", texto: "Hablé de esto con Lucía y me dio unos ejercicios. Me sirvió.", votos: 28, voto: 0, tiempo: "hace 4 h" }
    ]
  },
  {
    id: "post8",
    autor: "Búho_nocturno",
    avatar: "🦉",
    canal: "testimonios",
    tiempo: "hace 6 h",
    titulo: "Pedir ayuda no me hace “el problema”",
    texto: "Me daba miedo que me vieran como “el problema”. Con el tiempo me di cuenta de que pedir ayuda es como ir al médico cuando te duele algo: no hay nada de qué avergonzarse.",
    foto: foto(1025),
    votos: 118,
    voto: 0,
    guardado: false,
    comentarios: [
      { id: "c17", autor: "Panda_gris", avatar: "🐼", texto: "Eso de ir al médico cuando te duele algo me quedó.", votos: 31, voto: 0, tiempo: "hace 5 h" },
      { id: "c18", autor: "Zorrito_04", avatar: "🦊", texto: "Gracias por contarlo, de verdad.", votos: 22, voto: 0, tiempo: "hace 4 h" }
    ]
  },
  {
    id: "post4",
    autor: "Panda_gris",
    avatar: "🐼",
    canal: "testimonios",
    tiempo: "hace 1 día",
    titulo: "Hoy por fin hablé con alguien",
    texto: "Llevaba meses diciendo que iba a escribir y hoy lo hice. No fue tan terrible como pensaba. Si alguien lo está dudando: no pasa nada malo, nadie se entera.",
    foto: foto(1018),
    votos: 156,
    voto: 0,
    guardado: false,
    comentarios: [
      { id: "c8", autor: "Zorrito_04", avatar: "🦊", texto: "Grande. Eso cuesta un montón.", votos: 42, voto: 0, tiempo: "hace 20 h" },
      { id: "c9", autor: "Búho_nocturno", avatar: "🦉", texto: "Necesitaba leer esto justo hoy, gracias.", votos: 38, voto: 0, tiempo: "hace 18 h" },
      { id: "c10", autor: "Unicornio_22", avatar: "🦄", texto: "¿Y cómo empezaste la conversación? Me da roche no saber qué decir.", votos: 19, voto: 0, tiempo: "hace 12 h" }
    ]
  },
  {
    id: "post5",
    autor: "Dino_verde",
    avatar: "🦖",
    canal: "gustos",
    tiempo: "hace 1 día",
    titulo: "Empecé a dibujar otra vez",
    texto: "Dejé de dibujar como dos años porque sentía que no me salía bien. Volví hace poco y me di cuenta de que me relaja aunque salga feo. Comparto uno por acá.",
    foto: foto(20),
    votos: 74,
    voto: 0,
    guardado: false,
    comentarios: [
      { id: "c11", autor: "Abeja_07", avatar: "🐝", texto: "El punto no es que salga bonito, es que te desconecte un rato.", votos: 25, voto: 0, tiempo: "hace 22 h" }
    ]
  },
  {
    id: "post9",
    autor: "Pingüino_1",
    avatar: "🐧",
    canal: "testimonios",
    externo: true,
    tiempo: "hace 1 día",
    titulo: "Desde otro colegio: yo también voy",
    texto: "En mi cole también se burlaban al principio, pero cuando varios empezamos a ir dejó de ser tema. Si lo estás pensando, no estás solo.",
    foto: foto(10),
    votos: 134,
    voto: 0,
    guardado: false,
    comentarios: [
      { id: "c19", autor: "Rana_saltarina", avatar: "🐸", texto: "Qué bueno saber que en otros colegios también pasa.", votos: 27, voto: 0, tiempo: "hace 20 h" },
      { id: "c20", autor: "Dino_verde", avatar: "🦖", texto: "Eso de que dejó de ser tema cuando fuimos varios tiene sentido.", votos: 19, voto: 0, tiempo: "hace 16 h" }
    ]
  },
  {
    id: "post6",
    autor: "Koala_azul",
    avatar: "🐨",
    canal: "desahogo",
    tiempo: "hace 2 días",
    titulo: "Me da roche que me vean entrando a psicología",
    texto: "En mi salón se burlan del que va. Yo quiero ir pero pienso en las caras que van a poner y ya no. Sé que suena tonto pero es real.",
    foto: foto(1039),
    votos: 203,
    voto: 0,
    guardado: false,
    comentarios: [
      { id: "c12", autor: "Rana_saltarina", avatar: "🐸", texto: "No suena tonto para nada, a mí me pasa igual.", votos: 67, voto: 0, tiempo: "hace 2 días" },
      { id: "c13", autor: "Pulpo_azul", avatar: "🐙", texto: "Por eso uso esto, acá nadie sabe quién soy.", votos: 54, voto: 0, tiempo: "hace 1 día" },
      { id: "c14", autor: "Panda_gris", avatar: "🐼", texto: "Se burlan porque no entienden. Igual tu salud va primero.", votos: 41, voto: 0, tiempo: "hace 1 día" }
    ]
  }
];

const RESPUESTAS_PSICOLOGO = [
  "Gracias por escribirme. Cuéntame un poco más, ¿desde cuándo te sientes así?",
  "Entiendo. No tienes que tener todo claro para hablarlo, así está bien.",
  "Eso suena pesado para llevarlo solo. ¿Se lo has contado a alguien más?",
  "Tómate tu tiempo. Lo que me escribas acá queda entre nosotros dos.",
  "Me gustaría que conversemos con más calma. ¿Te acomoda algún horario esta semana?",
  "Lo que describes es más común de lo que crees, y sí se puede trabajar."
];

/* Conteo ficticio que ve el equipo de psicología (solo números, nunca nombres) */
const CONTEO_BASE = { amarillo: 11, rojo: 5 };

/* Alumnos que "ya buscaron apoyo esta semana" (indicador de la Comunidad) */
const BUSCARON_APOYO_BASE = 24;
