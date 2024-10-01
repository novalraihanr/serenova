import '@styles/globals.css';

export const metadata = {
  title: "Serenova",
  description: 'Serenova'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
          <main>
            {children}
          </main>
        </body>
    </html>
  )
}

export default RootLayout;