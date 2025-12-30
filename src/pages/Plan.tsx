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
              cada componente se valida incrementalmente con usuarios reales.
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
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">MVP de Educación Financiera</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Primera versión enfocada exclusivamente en contenido educativo contextual. 
                    Sin inversión real aún, pero simulaciones y contenido adaptativo. 
                    Objetivo: validar que la educación integrada genera engagement y mejora la comprensión financiera.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Contenido adaptativo</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Simulaciones</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Tracking de progreso</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">MVP de Planificación Financiera</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Agregar herramientas de presupuesto, tracking de gastos y definición de metas. 
                    Integrar con el módulo educativo para que el contenido sea relevante a la situación real del usuario.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Presupuesto inteligente</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Metas financieras</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Análisis de gastos</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">MVP de Inversión Básica</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Introducir inversión real con portafolios simples y diversificados. 
                    Comenzar con pocos productos, alto control de calidad. 
                    Medir si los usuarios que pasaron por educación toman mejores decisiones.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Portafolios modelo</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Inversión fraccionada</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Rebalanceo guiado</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">4</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">MVP de IA Personalizada</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Con suficientes datos de usuarios, implementar modelos de IA que personalicen recomendaciones. 
                    Testear si las sugerencias personalizadas mejoran outcomes vs. recomendaciones genéricas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Recomendaciones personalizadas</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Detección de patrones</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Alertas inteligentes</span>
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
                    Integración total de todos los módulos: automatización avanzada, más clases de activos, 
                    componentes sociales, APIs abiertas para terceros. El ecosistema maduro que permite 
                    gestión financiera integral.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Automatización completa</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">Multi-asset</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">APIs abiertas</span>
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
              pivotamos antes de invertir más recursos. Ejemplos de hipótesis críticas:
            </p>

            <div className="space-y-4">
              {[
                "Los usuarios están dispuestos a dedicar tiempo a educación financiera si está integrada a acciones concretas",
                "La personalización basada en datos mejora significativamente los outcomes financieros vs. consejos genéricos",
                "La automatización reduce abandono de hábitos financieros positivos",
                "Los usuarios confían en IA para decisiones financieras si entienden su lógica",
                "El componente social genera motivación positiva sin comportamiento de 'manada'"
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
              <h4 className="font-display font-semibold text-foreground mb-3">Ciclos cortos</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sprints de 2-4 semanas con releases incrementales. 
                Capacidad de respuesta rápida a insights.
              </p>
            </div>
            <div className="glass rounded-xl p-6 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-3">Pivotes calculados</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Si los datos contradicen las hipótesis, pivotamos sin aferrarnos a ideas. 
                El objetivo es crear valor, no validar egos.
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
                <span className="text-foreground">Validación de problema y solución inicial (educación)</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border-l-4 border-primary/60">
                <span className="font-display font-bold text-primary/60">Fase 2</span>
                <span className="text-foreground">Product-market fit con planificación financiera</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border-l-4 border-primary/40">
                <span className="font-display font-bold text-primary/40">Fase 3</span>
                <span className="text-foreground">Expansión a inversión y validación de modelo de negocio</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border-l-4 border-primary/20">
                <span className="font-display font-bold text-primary/20">Fase 4</span>
                <span className="text-foreground">Escalado con IA y automatización avanzada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Scaling */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Scale size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Visión de escalado técnico y de producto
            </h2>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Escalado técnico</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-primary mt-1 shrink-0" />
                    Arquitectura cloud-native preparada para crecimiento
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-primary mt-1 shrink-0" />
                    Microservicios que escalan independientemente
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-primary mt-1 shrink-0" />
                    Infraestructura de ML preparada para modelos complejos
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-primary mt-1 shrink-0" />
                    Seguridad y compliance desde el diseño
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Escalado de producto</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-primary mt-1 shrink-0" />
                    Expansión geográfica con localización
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-primary mt-1 shrink-0" />
                    APIs para integraciones con terceros
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-primary mt-1 shrink-0" />
                    Marketplace de estrategias y contenido
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-primary mt-1 shrink-0" />
                    Productos B2B para empresas y empleadores
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Plan;
