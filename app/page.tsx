import Image from 'next/image'
import Calculator from '../components/Calculator'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-grow  items-center p-24 text-center">
        <h1 className="text-4xl mb-2">calculator</h1>
        <Calculator />
      </main>
    </div>
  )
}
