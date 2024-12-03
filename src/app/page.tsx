import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/doneaza'); // Efectuează redirecționarea directă la ruta dorită.
  return null; // Componenta nu va fi afișată, pentru că pagina se redirecționează.
}
