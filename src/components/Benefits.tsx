 import { Shield, Clock, Percent, Users, CheckCircle, Headphones } from "lucide-react";
 import { Card, CardContent } from "./ui/card";
 
 const Benefits = () => {
   const benefits = [
     {
       icon: Percent,
       title: "Menores Taxas",
       description: "Taxas a partir de 1,85% ao mês, as mais competitivas do mercado.",
     },
     {
       icon: Clock,
       title: "Processo Rápido",
       description: "Aprovação em até 24 horas. Sem demora, sem enrolação.",
     },
     {
       icon: Shield,
       title: "Total Segurança",
       description: "Seus dados protegidos com a mais alta tecnologia de criptografia.",
     },
     {
       icon: Users,
       title: "Para Todos",
       description: "Aposentados, pensionistas e servidores públicos.",
     },
     {
       icon: CheckCircle,
       title: "Sem Consulta",
       description: "Não consultamos SPC/Serasa. Seu nome não é impedimento.",
     },
     {
       icon: Headphones,
       title: "Suporte Humano",
       description: "Atendimento personalizado por pessoas reais que entendem você.",
     },
   ];
 
   return (
     <section id="vantagens" className="py-16 md:py-24">
       <div className="container mx-auto px-4">
         <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a <span className="text-gradient">A. SCHROEDER</span>?
           </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Mais de 15.000 clientes satisfeitos confiam em nossos serviços.
           </p>
         </div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {benefits.map((benefit, index) => (
             <Card
               key={index}
               className="border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
             >
               <CardContent className="p-6">
                 <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                   <benefit.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                 </div>
                 <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                 <p className="text-muted-foreground">{benefit.description}</p>
               </CardContent>
             </Card>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Benefits;