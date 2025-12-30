import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { HelpCircle, ArrowRight, Mail, Globe, Shield } from "lucide-react";

const Mas = () => {
  return (
    <Layout>
      <Section>
        <PageHeader
          badge="Más Información"
          title="Todo lo demás que deberías saber"
          subtitle="Respuestas a preguntas frecuentes, información adicional sobre el proyecto, y contexto que no encaja en las otras secciones."
        />

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <HelpCircle size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "¿Cuándo estará disponible el producto?",
                answer: "Estamos trabajando con un enfoque iterativo. Los primeros MVPs estarán disponibles en fases, comenzando con herramientas de educación financiera. La fecha objetivo para el ecosistema completo es enero de 2028, pero esto puede ajustarse según los aprendizajes del camino."
              },
              {
                question: "¿Esto es una inversión?",
                answer: "No. Este sitio presenta un proyecto de desarrollo de producto, no una oportunidad de inversión. No estamos solicitando capital ni ofreciendo retornos. Es información sobre una startup en construcción."
              },
              {
                question: "¿Quién está detrás del proyecto?",
                answer: "Un equipo con experiencia en fintech, desarrollo de producto y educación financiera. No publicamos nombres ni perfiles por ahora porque preferimos que el foco esté en el proyecto y las ideas, no en las personas."
              },
              {
                question: "¿Cómo puedo involucrarme?",
                answer: "Por ahora, la mejor manera es seguir los avances. Próximamente habilitaremos formas de participar: beta testing, comunidad, feedback temprano. La sección 'Sumate' estará activa cuando estemos listos."
              },
              {
                question: "¿En qué países estará disponible?",
                answer: "Comenzaremos con mercados de América Latina hispanohablante, con foco inicial en Argentina. La expansión geográfica dependerá de los aprendizajes y regulaciones locales."
              },
              {
                question: "¿Es seguro?",
                answer: "La seguridad es una prioridad de diseño, no un agregado. Estamos construyendo con mejores prácticas de seguridad desde el inicio: encriptación, autenticación robusta, auditorías. Antes de manejar dinero real, pasaremos por las certificaciones necesarias."
              },
              {
                question: "¿Cuál es el modelo de negocio?",
                answer: "El modelo definitivo se definirá con base en aprendizajes. La filosofía es: acceso amplio a herramientas básicas, con modelos premium para funcionalidades avanzadas. Evitaremos modelos que generen conflictos de interés con el bienestar financiero del usuario."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <ArrowRight size={16} className="text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Context */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Globe size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Contexto adicional
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8 border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Por qué ahora
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                La convergencia de varias tendencias hace que este sea el momento indicado: 
                avances en IA accesible, APIs financieras abiertas, cambios regulatorios favorables, 
                y una generación nativa digital que demanda mejores herramientas financieras.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Diferenciación
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No somos solo otra app de presupuesto ni otro broker. La diferencia está en 
                la integración: educación que conecta con acción, personalización que usa IA 
                de forma transparente, y un enfoque en autonomía progresiva del usuario.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Transparencia
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Este sitio existe porque creemos en construir en público. 
                Preferimos comunicar nuestra visión y plan, recibir feedback temprano, 
                y ajustar basados en input real. No prometemos: mostramos intención.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Largo plazo
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Este no es un proyecto para vender rápido ni para buscar hype. 
                Estamos construyendo para el largo plazo: un ecosistema que genere valor 
                real y sostenible para millones de personas durante décadas.
              </p>
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Nuestros compromisos
            </h2>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="space-y-6">
              {[
                {
                  commitment: "Usuario primero",
                  description: "Las decisiones de producto priorizarán el bienestar financiero del usuario sobre métricas de engagement o revenue a corto plazo."
                },
                {
                  commitment: "Transparencia radical",
                  description: "Las recomendaciones de la IA vendrán con explicaciones claras. Nunca seremos una caja negra."
                },
                {
                  commitment: "Sin conflictos de interés",
                  description: "No ganaremos más cuando el usuario tome malas decisiones. Nuestros incentivos estarán alineados con el éxito del usuario."
                },
                {
                  commitment: "Accesibilidad",
                  description: "Las herramientas básicas serán accesibles sin barreras de capital mínimo. El patrimonio no debería determinar el acceso a educación financiera."
                },
                {
                  commitment: "Privacidad",
                  description: "Los datos del usuario son del usuario. No los venderemos ni usaremos para fines que no beneficien directamente al usuario."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 pb-6 border-b border-border/50 last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <ArrowRight size={14} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">{item.commitment}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Contacto
            </h2>
          </div>

          <div className="glass rounded-2xl p-8 border border-border text-center">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Si tenés preguntas, sugerencias o simplemente querés saber más, 
              estamos abiertos a conversar. Próximamente habilitaremos canales 
              de comunicación directa.
            </p>
            <div className="inline-block px-6 py-3 rounded-xl bg-secondary border border-border text-muted-foreground">
              Canal de contacto disponible próximamente
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Mas;
