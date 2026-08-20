import './globals.css'

export const metadata = {
  title: 'Endeavour Rockets',
  description: 'The home of the Endeavour Rockets society.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
