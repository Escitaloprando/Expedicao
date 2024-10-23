import { NavLinks } from '@/app/ui/nav-links'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body> 
        <main>{children}</main>
      </body>
    </html>
  )
}