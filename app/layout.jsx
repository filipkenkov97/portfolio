import './globals.css'
export const metadata = {
  title: 'Filip | Frontend Developer',
  description: 'Filip Kenkov portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
