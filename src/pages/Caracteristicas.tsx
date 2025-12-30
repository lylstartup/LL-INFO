import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import FeatureCard from "@/components/ui/FeatureCard";
import { Brain, Target, GraduationCap, BarChart3, Layers, Users } from "lucide-react";

const Caracteristicas = () => {
  const features = [
    {
      icon: <Brain size={28} />,
      title: "IA aplicada a portafolios personalizados",
      description: "Algoritmos de inteligencia artificial que analizan tu perfil de riesgo, objetivos financieros y horizonte temporal para construir y ajustar un portafolio de inversión único para vos. La IA no reemplaza tu criterio, lo potencia con datos y análisis que serían imposibles de procesar manualmente."
    },
    {
      icon: <Target size={28} />,
      title: "Adaptación dinámica según perfil y objetivos",
      description: "Tu situación financiera no es estática: cambia con el tiempo, los ingresos, las metas y las circunstancias de vida. El ecosistema se adapta continuamente, rebalanceando estrategias, sugiriendo ajustes y alertándote cuando tus objetivos necesitan recalibrarse."
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Educación financiera integrada al uso",
      description: "No creemos en la educación financiera abstracta. Cada decisión que tomes dentro del ecosistema viene acompañada de contexto educativo: por qué es relevante, qué implica, y cómo se conecta con conceptos más amplios. Aprendés mientras gestionás tu dinero."
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Seguimiento, métricas y feedback automático",
      description: "Dashboards claros que muestran el progreso hacia tus metas, rendimientos históricos, distribución de activos y proyecciones. El sistema te da feedback proactivo: celebra logros, alerta sobre desviaciones y sugiere correcciones antes de que los problemas escalen."
    },
    {
      icon: <Layers size={28} />,
      title: "Integración de múltiples clases de activos",
      description: "Acciones, bonos, fondos indexados, criptomonedas, commodities, real estate tokenizado. El ecosistema no te limita a una sola clase de activo: te permite diversificar de forma inteligente según tu perfil, con acceso simplificado a mercados que tradicionalmente requerían intermediarios costosos."
    },
    {
      icon: <Users size={28} />,
      title: "Componentes sociales y comparativos",
      description: "Comparar tu progreso con usuarios de perfiles similares (de forma anónima), participar en comunidades de inversión temáticas, y acceder a estrategias compartidas por inversores experimentados. Lo social potencia la educación y la motivación sin caer en la presión de 'seguir a la manada'."
    }
  ];

  return (
    <Layout>
      <Section>
        <PageHeader
          badge="Características"
          title="¿Qué hace único a este ecosistema?"
          subtitle="Cada característica está diseñada para resolver problemas reales que enfrentan las personas al gestionar sus finanzas. No se trata de agregar funciones por agregarlas, sino de construir herramientas que generen valor tangible."
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

        {/* Additional Context */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 border border-primary/10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Filosofía de diseño
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Simplicidad sobre complejidad.</strong> Las finanzas personales no deberían requerir un MBA para entenderse. Cada característica está diseñada para ser intuitiva, incluso cuando los procesos subyacentes son sofisticados.
              </p>
              <p>
                <strong className="text-foreground">Educación contextual.</strong> En lugar de cursos separados, la educación está tejida en cada interacción. Cuando tomás una decisión, entendés por qué es relevante.
              </p>
              <p>
                <strong className="text-foreground">Autonomía progresiva.</strong> El ecosistema no busca crear dependencia. A medida que aprendés más, ganás más control sobre tus decisiones financieras.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Caracteristicas;
