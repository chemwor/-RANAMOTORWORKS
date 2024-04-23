'use client'
import "../styles/index.scss";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
    <head>
      <meta name="keywords" content="Ceramic Coating Solutions, Automotive Excellence, Expert Car Care"/>
      <meta name="description" content="RanaMotorWorks, we elevate your driving experience with premium detailing and state-of-the-art ceramic coating services"/>
      {/*<meta property="og:site_name" content="Homy"/>*/}
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="RanaMotorWorks | Premium Ceramic Coating Solutions"/>

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
    </head>
    <body suppressHydrationWarning={true}>
    <div className="main-page-wrapper">
      <Provider store={store}>
        {children}
      </Provider>
    </div>
    </body>
    </html>
  )
}
