 const Footer = () => {
   return (
     <footer className="py-8 border-t border-border bg-muted/30">
       <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A.S.</span>
             </div>
            <span className="font-semibold text-foreground">A. SCHROEDER CONTABILIDADE LTDA</span>
           </div>
           
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              A. SCHROEDER CONTABILIDADE LTDA
            </p>
            <p className="text-sm text-muted-foreground">
              CNPJ: 48.823.430/0001-30
            </p>
          </div>
           
          <p className="text-sm text-muted-foreground">
            © 2025 Todos os direitos reservados.
          </p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;