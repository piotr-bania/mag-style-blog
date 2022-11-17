import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
    <section>
        <header>
            <Link href="/"><Image className='logo' src="/svg/logo.svg" alt="logo" width={64} height={30}/></Link>
            <Link href="/"><Image className='menu' src="/svg/logo.svg" alt="menu" width={30} height={10}/></Link>
            <Link href="/subscribe">Subscribe</Link>
        </header>
    </section>
    )
    }
    
    export default Navbar