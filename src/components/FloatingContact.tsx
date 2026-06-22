import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <Link
      to="/contact"
      aria-label="Contact me"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-accent text-white shadow-glow transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/50"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}
