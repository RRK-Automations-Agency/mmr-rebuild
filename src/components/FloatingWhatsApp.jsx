import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919014045934"
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp btn-whatsapp btn"
      style={{ borderRadius: '50%', width: '60px', height: '60px', padding: 0 }}
    >
      <MessageCircle style={{ width: '30px', height: '30px' }} />
    </a>
  );
}
