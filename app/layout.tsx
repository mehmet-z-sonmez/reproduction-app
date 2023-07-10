import ItemListComponent from '../components/itemListComponent'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        {/* @ts-expect-error Server Component */}
        <ItemListComponent />
        <div>{children}</div>
      </body>
    </html>
  )
}
