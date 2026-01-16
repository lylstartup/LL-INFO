import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { Target, Users, TrendingUp, Lightbulb, Globe, Heart } from "lucide-react";

const Objetivos = () => {
  const objectives = [
    {
      icon: <Users size={32} />,
      title: "Democratizar el acceso a herramientas financieras",
      description: "Las mejores herramientas de gestión financiera no deberían estar reservadas para quienes tienen alto patrimonio. Nuestro objetivo es que cualquier persona, sin importar su punto de partida económico, tenga acceso a tecnología que antes solo estaba disponible para clientes de banca privada.",
      details: [
        "Eliminar complejidades técnicas a la hora de invertir",
        "Ofrecer educación financiera sin costo de entrada",
        "Construir herramientas que escalen sin perder personalización"
      ]
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Mejorar la toma de decisiones financieras",
      description: "La mayoría de las malas decisiones financieras no vienen de la irresponsabilidad, sino de la falta de información, contexto y herramientas. Queremos que cada usuario tome mejores decisiones, no porque le digamos qué hacer, sino porque entiende las implicaciones de cada opción.",
      details: [
        "Educación integrada en la plataforma",
        "Simulaciones que muestran consecuencias a largo plazo",
        "Programa de personalización que explica su lógica."
      ]
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Construir un ecosistema escalable",
      description: "No queremos ser una app más que resuelve un problema puntual. El objetivo es un ecosistema completo que acompañe al usuario durante toda su vida financiera, desde su primera cuenta bancaria hasta su planificación de retiro.",
      details: [
        "Arquitectura modular que crece con el usuario",
        "Integración entre todos los aspectos de las inversiones",
        "Infraestructura preparada para millones de usuarios"
      ]
    },
    {
      icon: <Heart size={32} />,
      title: "Crear valor real a largo plazo",
      description: "El éxito no se mide en métricas de engagement artificiales ni en retención por adicción. Se mide en resultados concretos: usuarios que mejoran su situación financiera, que alcanzan sus metas, que ganan autonomía sobre su dinero.",
      details: [
        "Métricas de éxito alineadas con bienestar del usuario",
        "Modelo de negocio que tiene el principal foco en el crecimiento del usuario",
        "Construcción para décadas, no para una venta rápida"
      ]
    },
    {
      icon: <Globe size={32} />,
      title: "Expandir el impacto geográficamente",
      description: "Comenzamos en un mercado local, pero la visión es global. La problemática de acceso a herramientas financieras no es exclusiva de un país: es un desafío mundial que afecta a miles de millones de personas.",
      details: [
        "Diseño con localización desde el inicio",
        "Adaptación a regulaciones y contextos locales",
        "Expansión basada en aprendizajes validados"
      ]
    },
    {
      icon: <Target size={32} />,
      title: "Establecer nuevos estándares de la industria",
      description: "Queremos que la forma en que construimos este ecosistema se convierta en el estándar de la industria fintech. Que otros copien estos principios nos parece un éxito.",
      details: [
        "Publicar aprendizajes y metodologías",
        "Impulsar regulaciones que protejan al usuario",
        "Demostrar que se puede ser rentable siendo ético"
      ]
    }
  ];

  return (
    <Layout>
      <Section>
        <PageHeader
          badge="Objetivos"
          title="¿Hacia dónde vamos?"
          subtitle="Estos son los objetivos estratégicos que guían cada decisión del proyecto. No son metas arbitrarias, son decisiones cuidadosamente planificadas."
        />

        <div className="space-y-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 md:p-10 border border-border hover:border-primary/20 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {objective.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
                    {objective.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {objective.description}
                  </p>

                  {/* Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {objective.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-start gap-2 p-3 rounded-lg bg-secondary/30"
                      >
                        <Target size={14} className="text-primary mt-1 shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 border border-primary/20 text-center gradient-border">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              El objetivo final
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Que millones de personas tengan control real sobre sus inversiones. 
              Que la pregunta "¿cómo empiezo a invertir?" tenga una respuesta 
              accesible, inteligente y obvia.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Objetivos;
