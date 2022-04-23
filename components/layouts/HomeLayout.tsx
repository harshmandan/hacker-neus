import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../../assets/logo.svg'
import Link from 'next/link'

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <main className="w-full h-screen">
      <Head>
        <title>Hacker Neus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="py-4 top-0 bg-orange-700 fixed w-full">
        <a
          href="/"
          className="max-w-3xl px-4 lg:px-0 text-xl lg:text-3xl flex space-x-2 items-center mx-auto">
          <div className="w-6 h-6 lg:w-8 lg:h-8">
            <Image className="h-full w-full" alt="Hacker Neus" src={logo} />
          </div>
          <span>Hacker Neus</span>
        </a>
      </header>
      <div className="max-w-3xl px-4 lg:px-0 mt-20 lg:mt-24 mx-auto container h-full">
        {children}
      </div>
    </main>
  )
}

export default Layout
