export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-[#09090b]">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-4">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="font-bold text-lg tracking-tight text-foreground">Logeshwaran V</span>
          <span className="text-sm text-muted-foreground">B.Tech IT student</span>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/Logeshwaranv19" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">LinkedIn</a>
          <a href="mailto:logeshwaranv19@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Email</a>
        </div>
      </div>
    </footer>
  );
}
