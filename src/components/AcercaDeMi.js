import React from 'react';
import Typography from '@mui/material/Typography';

const AcercaDeMi = () => {
  return (
    <div id='AcercaDeMi' className="acerca-de-mi" style={{ marginBottom: '100px', marginLeft:'10%' , marginRight: '10%' }}>
      <Typography variant="h5">¿Por qué entrenar con Elias Figueroa?</Typography>
      <Typography variant="body2" style={{ marginTop: '20px' }}>
        Entrenando conmigo, podrás alcanzar la mejor versión de ti mismo, brindándote las herramientas necesarias para que puedas lograr tus objetivos, ya sea bajar el porcentaje de grasa, aumentar la masa muscular, mantenerte en forma o mejorar tu salud. Con mi ayuda, podrás sentirte cómodo con tu cuerpo y mejorar tu calidad de vida.
      </Typography>

      <Typography variant="h5" style={{ marginTop: '70px' }}>¿Quién es Elias Figueroa?</Typography>
      <Typography variant="body2" style={{ marginTop: '20px' }}>
        Su lema es: “Sin esfuerzo no hay recompensa”.
        <br />
        Me llamo Elias Figueroa y soy de Pilar, Buenos Aires, Argentina. Empecé en el mundo del deporte en 2014, a los 14 años, en un gimnasio cerca de mi casa. Allí adquirí experiencia y conocimientos sobre entrenamientos, alimentación, suplementación, entre otros aspectos relacionados al gimnasio. Poco a poco fui progresando física e intelectualmente.
        <br />
        En 2016, a los 16 años, tuve mi debut amateur en fisicoculturismo. En mi categoría de cadete no había rivales para enfrentar, así que me pasaron directamente a la categoría junior, donde competí contra personas mayores de 24 años. En esa competencia obtuve el tercer puesto. Al año siguiente, ya compitiendo en mi categoría, logré salir Campeón Argentino de fisicoculturismo cadete con 17 años.
        <br />
        Actualmente me dedico a la asesoría online con el fin de ayudar a lograr los objetivos personales de mis alumnos, transmitiendo todo mi conocimiento adquirido en la IFBB Academy, luego de recibirme como Personal Trainer Internacional IFBB.
      </Typography>
    </div>
  );
};

export default AcercaDeMi;
