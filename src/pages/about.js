import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import { Paragraph } from '../components/TextComponents';

const AboutPage = () => {
  return(
    <div className="flex flex-col md:flex-row overflow-scroll h-full w-full justify-center pt-24 px-8 lg:px-24 scroll-py-32 md:scroll-p-0">
      <div className="md:flex-1 flex flex-col items-end">
        <Paragraph customStyle="text-right pr-4 pb-4">
          Aagnes<br/>
          Guadalajara, México<br/>
        </Paragraph>
        <Paragraph customStyle="text-right pr-4 pb-2">
        Aagnes es una oficina de diseño, mobiliario e interiores con base en Guadalajara, México. Su trabajo como estudio remite a un oficio, ese que consiste en conocer con sensibilidad la luminosidad, los materiales, el silencio y la conciencia del espacio que se va a habitar. La vocación estética de Aagnes es una invitación al goce; un goce que es introspectivo y que provoca pausas para reflexionar. Reflexiones necesarias
para apreciar su estilo como un diálogo constante: entre lo tradicional y lo contemporáneo, lo local y las tendencias globales, lo histórico y lo atemporal.
        </Paragraph>
      </div>
      <div className="md:flex-1 flex items-start">
        <StaticImage
          src="../images/about_aagnes.jpeg"
          className="flex-1"
          layout="fullWidth"
          imgStyle={{
            objectFit:"contain"
          }}
        />
      </div>
    </div>
  )
}

AboutPage.Layout = Layout
export default AboutPage;