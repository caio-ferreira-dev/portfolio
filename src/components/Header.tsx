import '../styles/Header.css'

export default function Header() {
    
    return (
        <header className='pageHeader'>
            <section className='titleSection'>
                <h1>Caio Ferreira</h1>
                <h2>Desenvolvedor de Software</h2>
                <p>Transformo ideias em realidade, utilizando ferramentas modernas e robustas.</p>
            </section>
            { /*<Nav></Nav>*/ }
            <section className='socialSection'>
                <a href='https://github.com/caio-ferreira-dev' target="_blank" rel="noopener noreferrer">
                    <img src="/images/github_icon_94a3b8_64px.png" alt="linkedin icon" width={24} height={24}/>
                </a>
                <a href='https://www.linkedin.com/in/caio-ferreira-2002' target="_blank" rel="noopener noreferrer">
                    <img src="/images/linkedin_icon_94a3b8_64px.png" alt="linkedin icon" width={24} height={24}/>
                </a>
            </section>
        </header>
    )
}
