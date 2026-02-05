 import { FileText, Search, UserCheck, Signature, Banknote } from "lucide-react";
 
 const HowItWorks = () => {
   const steps = [
     {
       icon: Search,
       title: "Simulação",
       description: "Faça uma simulação gratuita e encontre a oferta ideal para você.",
     },
     {
       icon: FileText,
       title: "Documentos",
       description: "Envie tudo digitalmente, sem sair do conforto de casa.",
     },
     {
       icon: UserCheck,
       title: "Análise",
       description: "Nossa equipe avalia seu perfil de forma rápida e segura.",
     },
     {
       icon: Signature,
       title: "Assinatura",
       description: "Assine o contrato pelo celular. Simples assim.",
     },
     {
       icon: Banknote,
       title: "Dinheiro na Conta",
       description: "O valor é depositado via Pix na sua conta.",
     },
   ];
 
   return (
     <section id="como-funciona" className="py-16 md:py-24 bg-muted/50">
       <div className="container mx-auto px-4">
         <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
             Como Funciona
           </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Dinheiro na conta em 5 passos simples. Esqueça a burocracia dos bancos tradicionais.
           </p>
         </div>
 
         <div className="grid md:grid-cols-5 gap-6">
           {steps.map((step, index) => (
             <div
               key={index}
               className="relative flex flex-col items-center text-center group"
             >
               <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <step.icon className="w-7 h-7 text-primary-foreground" />
               </div>
               
               <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                 {index + 1}
               </div>
               
               <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
               <p className="text-sm text-muted-foreground">{step.description}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default HowItWorks;