import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { Rocket, FlaskConical, RefreshCw, Map, Scale, ArrowRight } from "lucide-react";

const Plan = () => {
  return (
    <Layout>
      <Section>
        <PageHeader
          badge="Plan Estratégico"
          title="Cómo vamos a construir esto"
          subtitle="El plan no es un cronograma rígido, sino un framework metodológico para navegar incertidumbre mientras construimos valor real. Cada decisión está informada por datos, no por suposiciones."
        />

        {/* Lean Startup */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Rocket size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Metodología Lean Startup
            </h2>
          </div>

          <div className="glass rounded-2xl p-8 border border-primary/10 mb-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              El ecosistema se construye siguiendo los principios de Lean Startup: construir-medir-aprender. 
              En lugar de desarrollar el producto completo en aislamiento y lanzar esperando que funcione, 
              cada componente se valida incrementalmente con los movimientos de usuarios reales.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <h4 className="font-display font-semibold text-foreground mb-2">Construir</h4>
                <p className="text-muted-foreground text-sm">
                  Desarrollar la versión más simple que permita testear una hipótesis específica.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <h4 className="font-display font-semibold text-foreground mb-2">Medir</h4>
                <p className="text-muted-foreground text-sm">
                  Recolectar datos cuantitativos y cualitativos sobre cómo los usuarios interactúan con esa versión.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <h4 className="font-display font-semibold text-foreground mb-2">Aprender</h4>
                <p className="text-muted-foreground text-sm">
                  Analizar resultados para confirmar, refinar o descartar hipótesis. Pivotar si es necesario.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Construction by Stages */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FlaskConical size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Construcción por etapas y MVPs
            </h2>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">MVP de Planificación Estratégica</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Este sitio es una herramienta para atraer personas valiosas interesadas en nuestra visión. 
                    Queremos incorporar 'early adopters' que aporten feedback a fin de validar la planificación del proyecto.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Informativo</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Objetivo final</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Early Adopters</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">MVP sobre el Problema</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Una serie de hipótesis sobre problemas existentes actualmente, como las complicaciones al empezar a invertir, o la tediosa obligación de necesesitar tantas aplicaciones para invertir en diferentes activos financieros. 
                    Sin inversión real aún, pero es un simple proyecto que nos confirme la existencia de estas complicaciones. 
                    Objetivo: validar la existencia de estos problemas, de la gente interesada en una posible resolución, y su emoción o prisa por esta misma.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Intensidad</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Necesidad</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Existencia</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">MVP de Solución</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Se buscaría validar el enfoque que está tomando el proyecto para solucionar la problemática existente actualmente.
                    Esto se realizaría una vez se obtengan los datos del problema validados en el MVP anterior.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Resolución</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Practicidad</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Valor</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">4</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">MVP Prototipo</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Con la suficiente validación y datos de usuarios, se incorporarán las funciones básicas del ecosistema, permitiéndole a los operadores invertir por medio de un exchange tercerizado.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Modelo</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Inversión real</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Evaluación</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">5</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">Ecosistema Completo</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Integración total de todos los módulos: asistente virtual avanzado, más clases de activos en los que invertir, 
                    componentes sociales, educación financiera. El ecosistema maduro que permite 
                    gestión financiera integral.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Revolucionario</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Multi-asset</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Unión de sistemas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hypothesis Validation */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Scale size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Validación de hipótesis clave
            </h2>
          </div>

          <div className="glass rounded-2xl p-8 border border-primary/10">
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cada MVP tiene hipótesis específicas que debe validar. Si una hipótesis se refuta, 
              pivotamos antes de invertir más recursos. Algunas de nuestras hipótesis críticas son:
            </p>

            <div className="space-y-4">
              {[
                "Existen inversores que buscan extender su portafolio por múltiples tipos de activos financieros.",
                "Al inversor promedio le resulta molesto requerir de varias aplicaciones para acceder a distintas ramas de inversiones.",
                "Los inversores generales necesitan una plataforma que les permita aprender sobre finanzas a la vez que invierten.",
                "Es necesario para el cliente objetivo un sistema de incentivos, tanto para inciarse en el mundo de las inversiones como para mantener el hábito.",
                "Los usuarios querrían compartir tiempo con personas que se encuentren en su misma situación respecto a las inversiones."
              ].map((hypothesis, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30">
                  <ArrowRight size={16} className="text-primary mt-1 shrink-0" />
                  <p className="text-foreground text-sm">{hypothesis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Iterations */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <RefreshCw size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Iteraciones basadas en feedback
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-3">Feedback cuantitativo</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Métricas de uso, retención, conversión, NPS. A/B tests para decisiones de producto. 
                Análisis de cohortes para entender evolución de usuarios.
              </p>
            </div>
            <div className="glass rounded-xl p-6 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-3">Feedback cualitativo</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Entrevistas con usuarios, análisis de soporte, observación de uso. 
                Entender el "por qué" detrás de los números.
              </p>
            </div>
            <div className="glass rounded-xl p-6 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-3">Análisis de comportamiento</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Enfocamos nuestras métricas y atención en el uso y comportamiento de los usuarios al interactuar con el sistema.
              </p>
            </div>
            <div className="glass rounded-xl p-6 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-3">Pivotes calculados</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Si los datos contradicen las hipótesis, pivotamos sin aferrarnos a ideas, pero sin cambiar la visión general. 
                El objetivo es crear valor.
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Map size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Roadmap conceptual
            </h2>
          </div>

          <div className="glass rounded-2xl p-8 border border-primary/10">
            <p className="text-muted-foreground leading-relaxed mb-8">
              Este roadmap no tiene fechas rígidas porque preferimos adaptarnos a los aprendizajes. 
              Las fases se completan cuando los indicadores de éxito se cumplen, no cuando un calendario lo dice.
              
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border-l-4 border-primary">
                <span className="font-display font-bold text-primary">Fase 1</span>
                <span className="text-foreground">Serie de MVPs validadores, a fin de corroborar todas las hipótesis. Estimamos Enero de 2028 como el cierre de esta etapa.</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border-l-4 border-primary/60">
                <span className="font-display font-bold text-primary/60">Fase 2</span>
                <span className="text-foreground">Lanzamiento de la última beta del ecosistema completo, donde habría movimiento financiero e interactividad real con los usuarios.</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border-l-4 border-primary/40">
                <span className="font-display font-bold text-primary/40">Fase 3</span>
                <span className="text-foreground">Salida de la versión final e inicio del desarrollo de procesos para maximizar la escalabilidad. Esperamos iniciar esta fase a mediados del 2029.</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border-l-4 border-primary/20">
                <span className="font-display font-bold text-primary/20">Fase 4</span>
                <span className="text-foreground">Búsqueda de otros mercados y expansión global, junto al desarrollo de una inteligencia artificial propia incorporada al ecosistema.</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Plan;
