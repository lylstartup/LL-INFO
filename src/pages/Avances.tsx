import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { Clock, ArrowRight } from "lucide-react";

const Avances = () => {
  return (
    <Layout>
      <Section className="min-h-[60vh] flex items-center">
        <div className="w-full">
          <PageHeader
            badge="Avances"
            title="Progreso del proyecto"
            subtitle="Esta sección mostrará los avances concretos del ecosistema a medida que se desarrollen."
          />

          <div className="max-w-2xl mx-auto">
            <div className="glass rounded-2xl p-12 border border-primary/10 text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Clock size={40} className="text-primary animate-pulse-slow" />
              </div>

              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Próximamente
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Los avances y MVPs serán agregados progresivamente a medida que completemos 
                cada etapa del desarrollo. Cada actualización incluirá:
              </p>

              <div className="space-y-3 text-left max-w-md mx-auto">
                {[
                  "Descripción del MVP o funcionalidad desarrollada",
                  "Hipótesis que se buscaba validar",
                  "Resultados y aprendizajes obtenidos",
                  "Próximos pasos definidos"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                    <ArrowRight size={14} className="text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border/50">
                <p className="text-muted-foreground/60 text-sm">
                  Esta página se actualizará cuando haya avances para mostrar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Avances;
