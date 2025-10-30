import { redirect } from 'next/navigation'

export default function HomePage() {
  // Immediately redirect visitors to the admin panel
  redirect('/admin')
}
