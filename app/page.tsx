import Image from 'next/image'
import Calculator from '../components/Calculator'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-grow  items-center p-24 text-center">
        <h1 className="text-4xl mb-2">calculator</h1>
        <p className="text-xs mb-2">
          Disclaimer: This is not financial advice. Leverage can be disasterous. This is just a calculator.
        </p>
        <Calculator />
      </main>
      <footer className="text-center p-4">
        <Link href="https://omakasemoney.com">omakase money</Link>
      </footer>
    </div>
  )
}
