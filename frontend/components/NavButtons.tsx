import styles from '@/styles/components/nav.module.css'

interface NavButtonsProps {
    buttonsAmount: number
    selectedPage: number
}

export default function NavButtons(props: NavButtonsProps) {

    
    function renderButtons(renderAmount: number, selectedPage: number) {
        const buttonsArray = []

        for(let i = 0; i < renderAmount; i++) {
            const selected: boolean = selectedPage == i + 1
            buttonsArray[i] = <button key={`Botão para a página ${i + 1}`} style={{backgroundColor: selected ? '#D9D9D9' :  '#999999'}}></button>
        }

        return buttonsArray
    }

    return (
        <div className={styles.NavContainer}>
            {renderButtons(props.buttonsAmount, props.selectedPage)}
        </div>
    )
}