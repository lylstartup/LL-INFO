import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { AlertTriangle, Lightbulb, Target, Zap } from "lucide-react";

const Propuesta = () => {
  return (
    <Layout>
      <Section>
        <PageHeader
          badge="Propuesta de Valor"
          title="Por qué existe este proyecto"
          subtitle="Este ecosistema nace de la observación de problemas estructurales en cómo las personas gestionan sus finanzas. No es una solución en busca de un problema: es una respuesta fundamentada a desafíos reales."
        />

        {/* Problem Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
              <AlertTriangle size={24} className="text-destructive" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Problemas estructurales del sistema actual
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Fragmentación de herramientas",
                content: "Una persona promedio necesita múltiples apps y plataformas para: hacer seguimiento de gastos, invertir, aprender sobre finanzas, planificar metas, y gestionar deudas. Esta fragmentación genera fricción, inconsistencia de datos y abandono."
              },
              {
                title: "Educación financiera abstracta",
                content: "La mayoría de los recursos educativos están desconectados de la acción. Leer sobre diversificación es muy diferente a implementarla cuando tenés $500 para invertir. La brecha entre teoría y práctica es enorme."
              },
              {
                title: "Barreras de acceso a inversión",
                content: "Invertir tradicionalmente requiere capital mínimo alto, conocimiento técnico, y acceso a intermediarios. Esto excluye a la mayoría de la población de herramientas de creación de riqueza a largo plazo."
              },
              {
                title: "Asesoramiento financiero costoso",
                content: "Los asesores financieros de calidad están disponibles solo para personas con alto patrimonio. El resto queda expuesto a consejos genéricos, productos financieros con conflictos de interés, o la desinformación de internet."
              },
              {
                title: "Complejidad percibida",
                content: "Las finanzas personales parecen más complicadas de lo que son. Esta percepción genera ansiedad, procrastinación y decisiones subóptimas por evitar el tema."
              },
              {
                title: "Falta de personalización real",
                content: "Los productos financieros son genéricos. 'Perfiles de riesgo' de 3 opciones no capturan la complejidad de situaciones individuales: deudas, metas múltiples, horizontes variables, circunstancias familiares."
              }
            ].map((problem, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 border border-destructive/10 hover:border-destructive/20 transition-colors"
              >
                <h3 className="font-display font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hypothesis Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Lightbulb size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Hipótesis de comportamiento del usuario
            </h2>
          </div>

          <div className="glass rounded-2xl p-8 border border-primary/10 space-y-6">
            {[
              {
                hypothesis: "Las personas quieren mejorar sus finanzas pero no saben por dónde empezar",
                implication: "Un sistema que ofrezca un punto de entrada claro y progresión guiada reducirá la parálisis por análisis."
              },
              {
                hypothesis: "La educación financiera es más efectiva cuando está integrada a la acción",
                implication: "Aprender 'haciendo' genera retención y aplicación real, no solo conocimiento teórico."
              },
              {
                hypothesis: "La automatización reduce el abandono",
                implication: "Si el sistema maneja la ejecución rutinaria, los usuarios pueden mantener hábitos financieros sin esfuerzo activo constante."
              },
              {
                hypothesis: "La personalización genuina genera confianza",
                implication: "Cuando las recomendaciones reflejan la situación real del usuario, no plantillas genéricas, la adopción aumenta."
              },
              {
                hypothesis: "El componente social motiva pero puede distorsionar",
                implication: "Comparaciones anónimas con perfiles similares son útiles; seguir estrategias de 'influencers financieros' sin contexto es peligroso."
              }
            ].map((item, index) => (
              <div key={index} className="pb-6 border-b border-border/50 last:border-0 last:pb-0">
                <p className="text-foreground font-medium mb-2">"{item.hypothesis}"</p>
                <p className="text-muted-foreground text-sm">
                  <span className="text-primary font-medium">Implicación:</span> {item.implication}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Current Solutions Fail */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
              <Target size={24} className="text-muted-foreground" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Por qué las soluciones actuales no resuelven estos problemas
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                solution: "Apps de presupuesto (YNAB, Mint, etc.)",
                limitation: "Excelentes para tracking de gastos, pero no integran inversión, educación contextual ni automatización de largo plazo. Son herramientas puntuales, no ecosistemas."
              },
              {
                solution: "Brokers online (Robinhood, eToro, etc.)",
                limitation: "Democratizaron el acceso a inversión, pero gamificaron el trading de forma que incentiva comportamientos especulativos. Poca educación, cero personalización real."
              },
              {
                solution: "Robo-advisors (Betterment, Wealthfront)",
                limitation: "Automatizan la inversión, pero son cajas negras. El usuario no aprende, no tiene control granular, y la personalización es superficial."
              },
              {
                solution: "Cursos de educación financiera",
                limitation: "Contenido valioso pero desconectado de la práctica. Requieren tiempo dedicado que la mayoría no tiene. Alto abandono."
              },
              {
                solution: "Asesores financieros tradicionales",
                limitation: "Personalizados pero inaccesibles económicamente para la mayoría. Conflictos de interés inherentes al modelo de comisiones."
              }
            ].map((item, index) => (
              <div key={index} className="glass rounded-xl p-6 border border-border hover:border-muted-foreground/20 transition-colors">
                <h3 className="font-display font-semibold text-foreground mb-2">{item.solution}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.limitation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Solution */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Zap size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Cómo el ecosistema propone solucionarlos
            </h2>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 border border-primary/20 gradient-border">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Integración, no fragmentación
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un solo ecosistema que conecta tracking de gastos, inversión, educación, metas y automatización. Los datos fluyen entre módulos: tu presupuesto informa tu capacidad de inversión, tus inversiones se conectan con tus metas, tu progreso genera contenido educativo relevante.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Educación en contexto
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No hay sección separada de "cursos". La educación aparece cuando es relevante: al tomar una decisión de inversión, al analizar un gasto recurrente, al proyectar una meta. Micro-lecciones integradas que no requieren tiempo extra.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  IA como amplificador, no reemplazo
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  La inteligencia artificial analiza, sugiere y automatiza, pero el usuario mantiene control y visibilidad. No es una caja negra: cada recomendación viene con explicación de su lógica. El objetivo es que el usuario se vuelva más capaz, no más dependiente.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Personalización genuina
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Más allá de "conservador/moderado/agresivo". El sistema considera: deudas actuales, estructura de ingresos, metas múltiples con diferentes horizontes, tolerancia al riesgo situacional, y circunstancias de vida únicas. Cada usuario tiene un camino único.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Accesibilidad económica
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Modelo de negocio que no excluye por patrimonio. Acceso a herramientas sofisticadas sin requisitos de capital mínimo alto. El valor se genera para todos, no solo para clientes premium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Propuesta;
