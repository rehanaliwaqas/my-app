import Link from "next/link";
export default function Home(){
  return(
    <main className ="flex justify-center items-center flex-col p-2">
      <h1 className="text-[36px] mb-6">Params</h1>
      <ul>
        <li><Link href="/rehan">Rehan</Link></li>
        <li><Link href="/leiza">Leiza</Link></li>
        <li><Link href="/mowahed">Mowahed</Link></li>
        <li><Link href="/haniye">Hanieya</Link></li>
        <li><Link href="/mowahed">Mowahed</Link></li>
        <li><Link href="/yumna">Yumna</Link></li>
      </ul>
    </main>
  )
}