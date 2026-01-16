import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import FeatureCard from "@/components/ui/FeatureCard";
import { Brain, Target, GraduationCap, BarChart3, Layers, Users } from "lucide-react";

const Caracteristicas = () => {
  const features = [
    {
      icon: <BarChart3 size={28} />,
      title: "Zona de Inversiones",
      description: "Es el centro de todo el ecosistema, y le da acceso al usuario a todos los activos financieros que existen en el mundo (mercado tradicional, mercado crypto, renta fija, renta variable, mercado extrabursátil, entre otros.) mediante una serie de portafolios prearmados que serán recomendados en base a las respuestas de un test interactivo. El usuario tendrá también la opción de crear su propio portafolio."
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Zona Educativa",
      description: "Es el segundo segmento del ecosistema, y se enfoca en ofrecer cursos (gratuitos y de pago) y videos educativos sobre finanzas, negocios y emprendimientos productivos, a fin de obtener conocimiento de valor sobre los temas relativos al sitio. Asimismo, contará con un sistema de lecciones que avivan el aprendizaje, que tendrá una racha diaria acumulativa, que servirá para acceder a comunidades exclusivas del sector cuatro."
    },
    {
      icon: <Target size={28} />,
      title: "Billetera Virtual",
      description: "Siendo la tercera zona de la plataforma, sirve para almacenar tu dinero y usarlo en todas las transacciones dentro del ecosistema, permitiéndote depositar dinero en ella desde otras fuentes, asegurando beneficios exclusivos dentro del sitio tales como ofertas en pagos y bonificaciones de la zona 2."
    },
    {
      icon: <Users size={28} />,
      title: "Zona Social",
      description: "Como cuarta zona de la plataforma, sin costo alguno, contentendrá distintos grupos de comunidad creados por los usuarios mismos para compartir temas relacionados con las finanzas. También incluirá la posibilidad de crear 'canales de difusión' creadores de Flashes en la quinta zona. El objetivo es tener la posibilidad de compartir información importante con gente valiosa dentro del ecosistema."
    },
    {
      icon: <Layers size={28} />,
      title: "Zona de  Videos Flash",
      description: "Esta quinta sección contendrá videos cortos (llamados 'Flashes') hechos por los usuarios mismos de la plataforma, a fin de publicar contenido vinculado a las inversiones, finanzas, a las ciencias contables, así como sus puntos de vista de ellas, entre otras cosas."
    },
    {
      icon: <Brain size={28} />,
      title: "Asistencia virtual y personalización por IA",
      description: "La plataforma contará con una inteligencia artificial que le recomendará al usuario un portafolio de inversión prearmado de la primera zona en base a la personalidad financiera del mismo. Además, se contará con un asistente virtual que ayudará al operador a navegar por el sitio con mayor facilidad y familiarizarse con él."
    }
  ];

  return (
    <Layout>
      <Section>
        <PageHeader
          badge="Características"
          title="¿Qué hace único a este ecosistema?"
          subtitle="Esta startup es un ecosistema ya que cuenta con distinguidos sectores que, juntos, se encargan de abarcar todas las áreas de las inversiones. Se denomina 'fintech' debido a la implementación de diversas tecnologías para el manejo de las finanzas personales."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

      </Section>
    </Layout>
  );
};

export default Caracteristicas;
