const Footer = () => {
    return (
        <footer className="py-8 px-4 md:px-8 border-t border-slate-700 text-sm text-slate-500">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          
          </div>
        </div>
      </footer>
    );
}
export default Footer